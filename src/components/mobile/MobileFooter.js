import React, {Component} from 'react';
import styles from './index.module.less';
import {Col, Row} from 'antd';

class MobileFooter extends Component {
    render() {
        return (
            <footer className={styles.mobileFooter}>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className={styles.content}>
                        &copy;&nbsp;2019 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}/>
                </Row>
            </footer>
        );
    }
}

export default MobileFooter;