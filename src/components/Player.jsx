import { useState } from "react";

export default function Player({name,symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(name);
    function nameChangeHandler(event){
        setPlayerName(event.target.value);
    }
    function changeHandler(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
        onChangeName(symbol,playerName);}
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName=<input required type="text" value={playerName} onChange={nameChangeHandler}/>
    }
    return (
        <li className={isActive ? 'active':undefined}>
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={changeHandler}>{isEditing ? 'Save':'Edit'}</button> 
        </li>
    );
}