import React, { useState } from 'react'

// State : The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders


export default function Form(props) {
    const [text, setText] = useState("");
    // text = "new text"  // Wrong way to change state
    // setText("new text") // Correct way to change state
   
    

    const handleOnclick = () => {
        let newText = text.toUpperCase();
        
        setText(newText);  
         

    }
    const clear = () => {
        document.getElementById('myBox').value = " "; 

    }
    const ChColor = () => {
       document.getElementById('color').style.color = "blue"

    }

    const handleOnchange = (event) => {
        setText(event.target.value);

    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  placeholder='Enter here' value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleOnclick}>Convert UpperCase </button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear </button>
            <button className="btn btn-primary mx-2" onClick={ChColor}>Change Color </button>
            <div className="container">
                <div>Total words {text.split(" ").length} and the total number of character {text.length}</div>
                <p>{0.0008*text.split(" ").length} minutes to read </p>
            </div>
            <h2>Preview</h2>
            <p id="color"> {text}</p>


        </div>

    )
}
