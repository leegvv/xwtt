import React, {Component} from 'react';
import {Tabs, Row, Col, Carousel} from 'antd';
import styles from './index.module.less';
import PcNewsBlock from './PcNewsBlock';
import carousel_1 from '@/asserts/images/carousel_1.jpg';
import carousel_2 from '@/asserts/images/carousel_2.jpg';
import carousel_3 from '@/asserts/images/carousel_3.jpg';
import carousel_4 from '@/asserts/images/carousel_4.jpg';
import PcNewsImageBlock from './PcNewsImageBlock';

const TabPane = Tabs.TabPane;

class PcNewsContainer extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className={styles.container}>
                        <div className={styles.leftContainer}>
                            <div className={styles.carousel}>
                                <Carousel {...settings}>
                                    <div><img src={carousel_1}/></div>
                                    <div><img src={carousel_2}/></div>
                                    <div><img src={carousel_3}/></div>
                                    <div><img src={carousel_4}/></div>
                                </Carousel>
                            </div>
                            <PcNewsImageBlock count={6} type='guoji' width='400px' cardTitle='国际头条' imageWidth='112px' />
                        </div>
                        <Tabs className={styles.centerContainer}>
                            <TabPane tab='头条新闻' key='1'>
                                <PcNewsBlock count={22} type='top' width='100%' bordered='false' />
                            </TabPane>
                            <TabPane tab='国际' key='2'>
                                <PcNewsBlock count={22} type='guoji' width='100%' bordered='false' />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PcNewsImageBlock count={8} type='guonei' width='100%' cardTitle='国内新闻' imageWidth='132px' />
                            <PcNewsImageBlock count={16} type='yule' width='100%' cardTitle='娱乐新闻' imageWidth='132px' />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PcNewsContainer;