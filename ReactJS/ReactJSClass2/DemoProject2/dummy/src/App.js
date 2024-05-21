import React, { useEffect , useState } from "react";
import './App.css';

function App() {
  const[text,setText]=useState('');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  //variation 1 -> Run on Every Rendering
  /* useEffect( () => {
    console.log("UI Handling done")
  }); */

  //variation 2 -> First Rendering
  /* useEffect( () => {
    console.log("UI Handling done")
  },[]); */

  //variation 3 -> First Rendering +when dependency change
  /* useEffect( () => {
    console.log("UI Handling done")
  },[text]); */

  //variation 4 -> First Rendering +when dependency change
  /* useEffect( () => {
    //Add Event Listener
    console.log("Listener Added")

    return() => {
      console.log("Listener Removed");
    }
  },[text]); */

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize(); // Set initial size

    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  
  function handleChange(event){
    console.log(text);
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}></input>
      <p>Size of Window is {windowSize.width} & {windowSize.height}</p>
    </div>
  );
}

export default App;
