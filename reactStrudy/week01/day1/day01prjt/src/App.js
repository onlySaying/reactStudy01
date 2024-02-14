import { useState } from "react";
import "./App.css";
function App()
{
    const [number, setNumber] = useState(0);
    const [fontStyle, setFontStyle] = useState({color:'black'});
    const [fontColor, setFontColor] = useState("redFont");
    const btnHandler = function()
    {
        let num = Math.floor(Math.random()*100);
        setNumber(num);
        if(num %2 !== 0)
        {
            //<noscript>setFontStyle({color:'red'});</noscript>
            setFontColor("redFont");
            return;
        }
         //<noscript>setFontStyle({color:'blue'});</noscript>
        setFontColor("blueFont");
    }
    return (
        <div>
              <div className="jumbotron"> 
                <h1>Hello World!</h1>
                <button className="btn btn-danger"
                onClick =  {btnHandler}>

                    click here!</button>
            </div>
            <div className ="container">
                <noscript>
                    <p>Number : <span 
                    style= {number%2===0?
                    {color:'red'}:{color:'blue'}} >
                    {number}</span></p>
                </noscript>
                <noscript>
                    <p>Number : <span style= {fontStyle}>
                    {number}</span></p>
                </noscript>

                <p>Number : <span className={fontColor} >
                    {number}</span></p>
                
            </div>
        </div>
    );
}

export default App;