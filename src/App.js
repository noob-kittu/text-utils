import React, { useState } from "react";
import "./index.css"
function App() {
  const textUpCase = () => {
    let upCase = text.toUpperCase()
    settext(upCase)
  }

  const textLwCase = () => {
    let LwCase = text.toLowerCase()
    settext(LwCase)
  }
  const whiteSpace = () => {
    let WsCase = text.replace("  ", " ")
    settext(WsCase)
  }
  const copyText = () => {
    let Copy =  navigator.clipboard.writeText(text)
    settext(text)
  }

  const capitlizeText = () => {
    let CtCase = text.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    }
    )

    settext(CtCase)

  }
  const onChangehandle = (event) => {
    settext(event.target.value);
  }
  const [text, settext] = useState("Copy & Paste Your Text Here")

  return (
    <div className="main" style={{backgroundImage:"url(/Maskgroup.png)", }}>
      <div className="heading">
        <h1>Text Utilizer</h1>
        <h5>easy for work, easy for word</h5>
      </div>
      <div className="row">
        <div className="colum">
          <textarea className="textdata" value={text} onChange={onChangehandle} id="textId" rows="7"></textarea> 
         
        </div>

      </div>
      <div className="buttons">
            <button className="btn btn-primary m-2" onClick={textUpCase}>Capital</button>
            <button className="btn btn-primary m-2" onClick={textLwCase}>Small</button>
            <button className="btn btn-primary m-2" onClick={whiteSpace}>Trim Space</button>
            <button className="btn btn-primary m-2" onClick={capitlizeText}>Capitalize</button>
            <button className="btn btn-primary m-2" onClick={copyText}>Copy</button>
          </div>

    </div>
  );
}

export default App;
