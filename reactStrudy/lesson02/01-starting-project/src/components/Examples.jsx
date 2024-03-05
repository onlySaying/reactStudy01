import TabButton from './TabButton.jsx';
import {EXAMPLES} from '../data.js';
import {useState} from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples()
{
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
        <Section title="Example" id = "examples" >
          {/* buttonsContainer = {Section} -> 동적할당 
              임의로 만들어진 함수를 전달시 괄호로 묶는다.  */}
          <Tabs
          buttons={
            <>
                <TabButton onClick={
                ()=>handleSelect('components')}
                isSelected={selectedTopic === 'components'}>
                  components</TabButton>
                <TabButton onClick={()=>handleSelect('jsx')}
                isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={()=>handleSelect('props')}
                isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={()=>handleSelect('state')}
                isSelected={selectedTopic === 'state'}>State</TabButton>
              </>
          }>
            {tabContent}
          </Tabs>
      
        </Section>
    )
   
}