import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from "./containers/Header";
import Advocacy from './containers/Advocacy';
import Glossary from './containers/Glossary';
import Presentation from './containers/Presentation';
import PreventionExplanation from './containers/PreventionExplanation';
import Timeline from './containers/Timeline';
import VirusTransmissionExplanation from './containers/VirusTransmissionExplanation';

function App() {
  return (
    <main className="App">
      <ReactFullpage
        scrollOverflow={true}
        css3={true}
        navigation={true}
        navigationPosition={'left'}
        keyboardScrolling={false}
        render={({ state }) => {
          return (
            <>
              <div>
                <div id='slide1' className="section">
                  <Header />
                </div>
                <div id='slide2' className="section">
                  <Presentation />
                </div>
                <div id='slide3' className="section">
                  <Timeline />
                </div >
                <div id='slide4' className="section">
                  <Glossary />
                </div>
                <div id='slide5' className="section">
                  <VirusTransmissionExplanation />
                </div>
                <div id='slide6' className="section">
                  <PreventionExplanation />
                </div>
                <div id='slide7' className="section">
                  <Advocacy />
                </div>
              </div>
            </>
          );
        }}
      />
    </main>
  );
}

export default App;
