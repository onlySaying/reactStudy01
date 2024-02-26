
import componentsImg from './assets/Components.png'
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx' 
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';
import {EXAMPLES} from './data.js';

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
    <div>
      <Header/>
      <main>
        <section id = "core-concepts">
        <h2>Core Concept</h2>
        <ul>
          <CoreConcept title = "Components" 
          description ="The core ui building block."
          image = {componentsImg}/>
          <CoreConcept title = 
          {CORE_CONCEPTS[1].title} 
          description = {CORE_CONCEPTS[1].description} 
          image = {CORE_CONCEPTS[1].image}/>
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />

        </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={
              ()=>handleSelect('components')}
              isSelected={selectedTopic === 'components'}>components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}
            isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}
            isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}
            isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>

            {tabContent}
            {/*
            {!selectedTopic ? <p>Please Select a topic.</p> : null}
            {selectedTopic &&  (
            <div id = "tab=content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
              </div> ) 
              : null

            }*/}  
         
        </section>
      </main>
    </div>
   
  )
}

export default App;
