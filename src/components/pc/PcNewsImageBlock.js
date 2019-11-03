import React, {Component} from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import fetch from 'fetch';
import styles from './index.module.less';

class PcNewsImageBlock extends Component {
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
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };

        const newsList = [];
        for (let i = 0; i < news.length && i < this.props.count; i++) {
            const newsItem = news[i];
            newsList.push(
                <div key={i} className={styles.imageBlock}>
                    <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                        <div className='custom-image'>
                            <img alt='' src={newsItem.thumbnail_pic_s} style={styleImage}/>
                        </div>
                        <div className={styles.customCard}>
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p style={styleH3}>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            );
        }
        return (
            <div className={styles.newsImageBlock}>
                <Card title={this.props.cardTitle} bordered={true}
                      style={{
                          width: this.props.width
                      }}
                >
                    <ul>
                        {newsList.length > 0 ? newsList : '没有加载到任何新闻'}
                    </ul>
                </Card>
            </div>
        );
    }
}

export default PcNewsImageBlock;