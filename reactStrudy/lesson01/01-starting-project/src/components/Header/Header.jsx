const reactDescriptions = ['Fundamental', 'cucial', 'Core'];
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

function genRandomInt(max)
{
  return Math.floor(Math.random() * (max));
}


export default function Header()
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