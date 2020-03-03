import React, {useState} from "react";


function CharacterCount (){
    const [count, setCount] = useState(0);
    return( <div>
       <h1> Charater Count {count} </h1>
        <textarea onChange={(e)=>{setCount(e.target.value.length)}}>

        </textarea>
    </div>)
}
export default CharacterCount;