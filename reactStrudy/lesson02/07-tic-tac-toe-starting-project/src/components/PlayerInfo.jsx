import { useState } from "react"

export default function Player({initname, symbol, isActive})
{
  const [name, setName] = useState(initname);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditClick()
  {
    //scheduleing으로 인하여 hook 실행 시점에 동시에 진행됌
    // 그렇기 때문에 함수형으로 하지 않을경우 데이터가 중복 사용될 때
    // 데이터 반환이 정상적으로 진행되지 않는 경우가 발생
    setIsEditing((editing) => !editing);
    
  }

  function handleChange(event)
  {
      setName(event.target.value);
  }
  let playerName = <span className="player-name">{name}</span>
  let btnCaption = "Edit";
  if(isEditing)
  {
      playerName = <input type="text" required Value ={name}
       onChange={handleChange}/>
      btnCaption = "Save";
  }
    return(
        <li className= {isActive ? 'active' : undefined}>
        <span className= 'player'>
          {playerName}
        <span className="player-symbol">{Symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
        {/* {isEditing ? 'Save' : 'Edit'} */}
      </li>
    )
    
}