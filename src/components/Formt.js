import React, { useState } from 'react'

export default function Formt(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Handle On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText('This is text 2');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3" >
                    <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" value={text} onChange={handleOnChange} id="form" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2 mb-2" onClick={handleLoClick}>Convert to Lower Case</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview here"}</p>
            </div>
        </>
    )
}

