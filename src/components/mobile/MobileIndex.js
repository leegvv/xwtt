import React, {Component} from 'react';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import {Tabs, Carousel} from 'antd';
import MobileList from './MobileList';
import styles from './index.module.less';
import carousel_1 from '@/asserts/images/carousel_1.jpg';
import carousel_2 from '@/asserts/images/carousel_2.jpg';
import carousel_3 from '@/asserts/images/carousel_3.jpg';
import carousel_4 from '@/asserts/images/carousel_4.jpg';

const TabPane = Tabs.TabPane;

class MobileIndex extends Component {
    render() {
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <MobileHeader/>
                <Tabs className={styles.mobileContent}>
                    <TabPane tab='头条' key='1'>
                        <div className={styles.carousel}>
                            <Carousel {...setting}>
                                <div><img src={carousel_1}/></div>
                                <div><img src={carousel_2}/></div>
                                <div><img src={carousel_3}/></div>
                                <div><img src={carousel_4}/></div>
                            </Carousel>
                            <MobileList count={20} type='top' />
                        </div>
                    </TabPane>
                    <TabPane tab='社会' key='2'>
                        <MobileList count={20} type='shehui'/>
                    </TabPane>
                    <TabPane tab='国内' key='3'>
                        <MobileList count={20} type='guonei'/>
                    </TabPane>
                    <TabPane tab='国际' key='4'>
                        <MobileList count={20} type='guoji'/>
                    </TabPane>
                    <TabPane tab='娱乐' key='5'>
                        <MobileList count={20} type='yule'/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileIndex;