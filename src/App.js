import "./App.css";
import { useState } from "react";
import callAi from "./chatgpt/callApi";

function App() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState();


  function generate(){
    setLoading(true);
    callAi(text).then((url)=>{
      setLoading(false);
      setImage(url);
    })
  }
 
  function handleChange(event) {
    setText(event.target.value);
  }

  
  const mystyle = {
    width: "50%",
    height: "50%" 
  };

  return (
    <div className="App">
      <input type="text" name="name" onChange={handleChange} value={text} />

      <button onClick={generate}>Generate Image</button>
      <div>
        {loading? 
          <p>Loading...</p>
        :
        <img src={image} style={mystyle}></img>
        }
        
      </div>
    </div>
  );
}

export default App;
