import React, {Component} from 'react';
import PcHeader from './PcHeader';
import PcFooter from "./PcFooter";

class PcIndex extends Component {
    render() {
        return (
            <div>
                <PcHeader/>
                <PcFooter/>
            </div>
        );
    }
}

export default PcIndex;