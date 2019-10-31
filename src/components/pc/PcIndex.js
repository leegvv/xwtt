import React, {Component} from 'react';
import PcHeader from './PcHeader';
import PcFooter from "./PcFooter";
import PcNewsContainer from './PcNewsContainer';

class PcIndex extends Component {
    render() {
        return (
            <div>
                <PcHeader/>
                <PcNewsContainer/>
                <PcFooter/>
            </div>
        );
    }
}

export default PcIndex;