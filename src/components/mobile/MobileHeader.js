import React, {Component} from 'react';
import logo from '@/asserts/images/logo.png';
import styles from './index.module.less';

class MobileHeader extends Component {
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