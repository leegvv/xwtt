import React, {Component} from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import fetch from 'fetch';
import styles from './index.module.less';

class PcNewsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: ''
        }
    }

    componentDidMount() {
        const myFetchOptions = {

        }
        fetch.get('http://')
    }

    render() {
        return (
            <div className='topNewsList'>
                <Card>
                    <ul>

                    </ul>
                </Card>
            </div>
        );
    }
}

export default PcNewsBlock;