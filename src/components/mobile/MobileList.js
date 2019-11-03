import React, {Component} from 'react';
import fetch from 'fetch';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import styles from './index.module.less';

class MobileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const params = {
            type: this.props.type,
            count: this.props.count,
            key: 'cd7ef00c7b3bf2c5fc7265f9f8554f88'
        }
        fetch.get('/toutiao/index', params)
            .then(({result}) => {
                this.setState({news: result && result.data || []});
            })
    }

    render() {
        const {news} = this.state;
        const newsList = [];
        for (let i = 0; i < news.length && i < this.props.count; i++) {
            const newsItem = news[i];
            newsList.push(
                <section key={i}>
                    <Link to={`details/${newsItem.uniquekey}`}>
                        <div>
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                        </div>
                        <div>
                            <div>
                                <span>{newsItem.title}</span>
                            </div>
                            <div>
                                <div>
                                    <span>{newsItem.category}</span>
                                    <span>{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            )

        }
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList.length > 0 ? newsList : '没有加载到任何新闻'}
                    </Col>
                </Row>

            </div>
        );
    }
}

export default MobileList;