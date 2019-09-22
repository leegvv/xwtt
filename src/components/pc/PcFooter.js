import React, {Component} from 'react';
import {Row, Col} from 'antd';
import styles from './index.module.less'

class PcFooter extends Component {
    render() {
        return (
            <footer className={styles.pcFooter}>
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

export default PcFooter;