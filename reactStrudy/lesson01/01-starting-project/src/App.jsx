import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/Components.png'

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
function CoreConcept(props)
{
  return (
    <li>
      <img src = {props.image} alt = {props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
          <CoreConcept title = "Props" description ="" />
          <CoreConcept title = "Components" description ="" />
          <CoreConcept title = "Components" description ="" />

        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
   
  )
}

export default App;
