import { useState } from "react";



function App() {
  const [elements] = useState(['Yes','Probably Not']);
  const [value,setValue] = useState('');
  const [ishover,setHover] = useState(false);

  const handleMouseEnter = () =>{
    setHover(true);
  }
  
  const handleOnclick = (e) => {
    setValue(e.target.textContent);
    setHover(false);
  }
  
  return (
    <div className = "dropdown">
      <h1>Should you use a dropdown?</h1>
      <h3>{value}</h3>
      
      <button className = "select-btn" onMouseEnter = {handleMouseEnter} >Select</button>
      <div className = "options" style = { { display: `${ ishover ? 'block' : 'none' }` } }>
        
        {  elements.map((elem,index) => {
              return(
                       <a href = "#"  onClick = {handleOnclick} key = {index} >{elem}</a>
                    );
              })
        }
      </div>
    </div>
  );
}

export default App;


 
  
 