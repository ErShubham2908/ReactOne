import { useState } from "react";
import ClassCompo from "./Compo/ClassCompo";
import FunctionCompo from "./Compo/FunctionCompo";
function App() {
  const [functClick, setFuncClick] = useState(true); // useState Hooks
  const [classClick, setClassClick] = useState(true); // useState Hooks
  //     Name of The variable, function of this variable = useState(initial value of yur variable)
 
  // const handleClick = () => {
  //   setFuncClick(!functClick);
  // }

  return (
    <>
     <h1>Styling Using Function and Class Components</h1>
      {/* <button onClick={handleClick}  >To see styling in functional Components</button> */}
      <button onClick={()=> setFuncClick(!functClick)}  >To see styling in functional Components</button>
      <button onClick={()=> setClassClick(!classClick)}  >To see styling in Class Components</button>
      
      {functClick && <FunctionCompo />} 
      {classClick && < ClassCompo />}
    </>
  );
}

export default App;

//Diff b/w Plane Variable and State Variable

// let , var, const b = "", 12, [] , {};
// state - classbased compo
// useState()
// this.state = {
//   funcClick = false;
// }