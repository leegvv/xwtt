import React, {Component} from 'react';
import logo from '@/asserts/images/logo.png';
import styles from './index.module.less';
import {Form, Menu, Icon, Tabs, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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

    render() {

        return (
            <div className={styles.mobileHeader}>
                <header>
                    <img src={logo} alt='log'/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}

export default MobileHeader;