import React, {Component} from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import fetch from 'fetch';
import styles from './index.module.less';

class PcNewsBlock extends Component {
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
            .then(({result={}}) => {
                this.setState({news: result && result.data || []});
            })
    }

    render() {
        const {news} = this.state;
        const newsList = news.length ? news.map((newsItem, index) => {
            return (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                        {newsItem.title}
                    </Link>
                </li>
            );
        }) : '没有加载到任何新闻';
        return (
            <div className={styles.topNewsList}>
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
}

export default PcNewsBlock;