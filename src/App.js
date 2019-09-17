import React from 'react';
import PcIndex from './components/pc/PcIndex';
import MobileIndex from './components/mobile/MobileIndex';
import MediaQuery from 'react-responsive'

function App() {
    return (
        <div className="App">
            <MediaQuery query='(min-device-width: 1224px)'>
                <PcIndex/>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <MobileIndex/>
            </MediaQuery>
        </div>
    );
}

export default App;
