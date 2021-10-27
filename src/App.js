import React from 'react';
import LateralMenu from "./components/LateralMenu";
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
      <LateralMenu/>
      <div id='slide1'>
        <Header />
      </div>
      <div id='slide2'>
        <Presentation /> 
      </div>
      <div id='slide3'>
        <Timeline /> 
      </div >
      <div id='slide4'>
        <Glossary />
      </div>
      <div id='slide5'>
        <VirusTransmissionExplanation />
      </div>
      <div id='slide6'>
        <PreventionExplanation />
      </div>
      <div id='slide7'>
        <Advocacy />
      </div>
    </main>
  );
}

export default App;
