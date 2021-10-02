import React from 'react';

import Advocacy from './containers/Advocacy';
import Glossary from './containers/Glossary';
import Presentation from './containers/Presentation';
import PreventionExplanation from './containers/PreventionExplanation';
import Timeline from './containers/Timeline';
import VirusTransmissionExplanation from './containers/VirusTransmissionExplanation';

function App() {
  return (
    <main className="App">
      <Presentation />
      <Timeline />
      <Glossary />
      <VirusTransmissionExplanation />
      <PreventionExplanation />
      <Advocacy />
    </main>
  );
}

export default App;
