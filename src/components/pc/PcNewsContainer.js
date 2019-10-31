import React, {Component} from 'react';
import {Tabs, Row, Col, Carousel} from 'antd';
import styles from './index.module.less';
import carousel_1 from '@/asserts/images/carousel_1.jpg';
import carousel_2 from '@/asserts/images/carousel_2.jpg';
import carousel_3 from '@/asserts/images/carousel_3.jpg';
import carousel_4 from '@/asserts/images/carousel_4.jpg';

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
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PcNewsContainer;