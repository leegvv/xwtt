import React, {Component} from 'react';
import {Form, Row, Col, Menu, Icon, Button, Modal, Tabs, Input, message} from 'antd';
import {Link} from 'react-router-dom';
import fetch from 'fetch';
import logo from '@/asserts/images/logo.png';
import styles from './index.module.less';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PcHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: ''
        }
    }

    setModalVisible = (value) => {
        this.setState({modalVisible: value});
    }

    handleClick = (e) => {
        this.setState({current: e.key});
        if (e.key === 'register') {
            this.setModalVisible(true);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch.post('/api/register', formData).then((data) => {
            console.log(data);
            this.setState({userNickName: data.userNickName, userId: data.userId});
        })
        message.success('请求成功！');
        this.setModalVisible(false);
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {userNickName} = this.props;
        const {hasLogined, modalVisible} = this.state;
        const userShow = hasLogined ?
            <Menu.Item key='logout' className='logout'>
                <Button type='primary'>{userNickName}</Button>
                &nbsp;&nbsp;
                <Link target='_blank'>
                    <Button type='dashed'>个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type='ghost'>退出</Button>
            </Menu.Item>
            : <Menu.Item key='register' className={styles.register}>
                <Icon type='appstore'/>注册/登录
            </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className={styles.logo}>
                            <img src={logo} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode='horizontal'
                            selectedKeys={[this.state.current]}
                            onClick={this.handleClick}
                        >
                            <Menu.Item key='top'>
                                <Icon type='appstore'/>头条
                            </Menu.Item>
                            <Menu.Item key='shehui'>
                                <Icon type='appstore'/>社会
                            </Menu.Item>
                            <Menu.Item key='guonei'>
                                <Icon type='appstore'/>国内
                            </Menu.Item>
                            <Menu.Item key='guoji'>
                                <Icon type='appstore'/>国际
                            </Menu.Item>
                            <Menu.Item key='yule'>
                                <Icon type='appstore'/>娱乐
                            </Menu.Item>
                            <Menu.Item key='tiyu'>
                                <Icon type='appstore'/>体育
                            </Menu.Item>
                            <Menu.Item key='keji'>
                                <Icon type='appstore'/>科技
                            </Menu.Item>
                            <Menu.Item key='shishang'>
                                <Icon type='appstore'/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Modal
                    title='用户中心'
                    wrapClassName='vertical-center-modal'
                    visible={modalVisible}
                    onCancel={() => this.setModalVisible(false)}
                    onOk={() => this.setModalVisible(false)}
                    okText='关闭'
                    cancelText='取消'
                >
                    <Tabs type='card'>
                        <TabPane tab='注册' key='2'>
                            <Form layout='horizontal' onSubmit={this.handleSubmit}>
                                <FormItem label='账号'>
                                    {getFieldDecorator('r_userName')(<Input placeholder='请输入您的账号' />)}
                                </FormItem>
                                <FormItem label='密码'>
                                    {getFieldDecorator('r_password')(<Input type='password' placeholder='请输入您的密码' />)}
                                </FormItem>
                                <FormItem label='确认密码'>
                                    {getFieldDecorator('r_confirmPassword')(<Input type='password' placeholder='请再次输入您的密码' />)}
                                </FormItem>
                                <Button type='primary' htmlType='submit'>注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </header>
        );
    }
}

export default Form.create({})(PcHeader);