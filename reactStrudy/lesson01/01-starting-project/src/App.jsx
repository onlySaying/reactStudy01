import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/Components.png'
import {CORE_CONCEPTS} from './data.js';

const reactDescriptions = ['Fundamental', 'cucial', 'Core'];

function genRandomInt(max)
{
  return Math.floor(Math.random() * (max));
}

function Header()
{
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)] 
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description}
          React concepts you will need for almost any app you are
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
function CoreConcept({image, title, description})
{
  return (
    <li>
      <img src = {image} alt = {title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
   
  )
}

export default App;
