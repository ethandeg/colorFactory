import logo from './logo.svg';
import './App.css';
import RouteList from "./RouteList"
import {useState} from "react"
function App() {
  const [colors, setColors] = useState(["red", "green", "blue"])
  const addColor = formData => {
    setColors([...colors, formData])
  }
  return (
    <>
      <RouteList colors={colors} addColor={addColor}/>
    </>
  );

}

export default App;
