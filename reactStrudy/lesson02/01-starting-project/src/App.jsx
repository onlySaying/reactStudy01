
import componentsImg from './assets/Components.png'
import Header from './components/Header/Header.jsx' ;
import TabButton from './components/TabButton.jsx';
import {Fragment, useState} from 'react';
import {EXAMPLES} from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  // hook 은 최상위 펑션에만 존재 가능하다.
  const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a topic.</p>;

  if(selectedTopic)
  {
    tabContent = (
      <div id = "tab=content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
        </div> ) 
  }
  return(
    <Fragment>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
   
  )
}

export default App;
