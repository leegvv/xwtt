import React, {Component} from 'react';
import logo from '@/asserts/images/logo.png';
import styles from './index.module.less';
import {Form, Menu, Icon, Tabs, Input, Button, Checkbox, Modal, message} from 'antd';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends Component {
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

    login = () => {
        this.setModalVisible(true);
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {userNickName} = this.props;
        const {hasLogined, modalVisible} = this.state;
        const userShow = hasLogined ?
            <Link><Icon type='inbox'/></Link>
            :
            <Icon type='setting' onClick={this.login}/>;
        return (
            <div className={styles.mobileHeader}>
                <header>
                    <img src={logo} alt='log'/>
                    <span>ReactNews</span>
                    {userShow}
                </header>

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
            </div>
        );
    }
}

export default Form.create({})(MobileHeader);