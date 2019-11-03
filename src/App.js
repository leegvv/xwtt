import React from 'react';
import PcIndex from './components/pc/PcIndex';
import MobileIndex from './components/mobile/MobileIndex';
import MediaQuery from 'react-responsive'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PcIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </Router>
        </div>
    );
}

export default App;
