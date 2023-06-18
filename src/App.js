import { useState } from "react";

function App() {
  //useState hooks used in functional component to update the state
  const [elements] = useState(['Yes','Probably Not']);
  const [value,setValue] = useState('');
  const [ishover,setHover] = useState(false);
 //when mouse is hover over the select button this function will trigger
  const handleMouseEnter = () =>{
    setHover(true);
  }
  //when clicking on an option display updated value
  const handleOnclick = (e) => {
    setValue(e.target.textContent);
    setHover(false);
  }
  //inside return we use jsx format
  return (
    <div className = "dropdown">
      <h1>Should you use a dropdown?</h1>
      <h3>{value}</h3>
      
      <button className = "select-btn" onMouseEnter = {handleMouseEnter} >Select
      
      </button>
      <div className = "options" style = { { display: `${ ishover ? 'block' : 'none' }` } }>
       {/* map function to iterate the elements list  */}
        {  elements.map((elem,index) => {
              return(
                       <a href = "#"  onClick = {handleOnclick} key = {index} >
                         {elem}
                        </a>
                    );
              })
        }
      </div>
    </div>
  );
}

export default App;


 
  
 