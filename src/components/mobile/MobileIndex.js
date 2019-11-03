import React, {Component} from 'react';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import {Tabs, Carousel} from 'antd';
import MobileList from './MobileList';
import styles from './index.module.less';

const TabPane = Tabs.TabPane;

class MobileIndex extends Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <Tabs className={styles.mobileContent}>
                    <TabPane tab='社会' key='2'>
                        <MobileList count={20} type='shehui'/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileIndex;