import React, {Component} from 'react';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
class MobileIndex extends Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileIndex;