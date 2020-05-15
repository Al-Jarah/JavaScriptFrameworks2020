import React, {useState} from "react";


let CharacterCount = () => {
    const [count, setCount] = useState(0);
    return( <div>
       <h1> Character Count {count} </h1>
        <textarea onChange={(e)=>{setCount(e.target.value.length)}}>
        </textarea>
    </div>)

}
export default CharacterCount;