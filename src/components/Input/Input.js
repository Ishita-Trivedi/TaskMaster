import React,{useState} from 'react';
import './Input.css';
export default function Input(props) {
  const [input, setInput] = useState('');
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleClick() {
    props.handlerItemInput(input);
    console.log(input);
    setInput('');
  }
  return (
    <div className="input-group mb-3 w-50 p-3">
      <input
      //every input field should have a unique id
      id="inputField" 
      type="text" className="form-control" placeholder="Add an item" aria-label="Recipient's username" aria-describedby="button-addon2" fdprocessedid="4goqd" 
      // so that the input field is cleared after the item is added
      value={input} 
        onChange={e => handleInput(e)}
      />
       <button className="button" onClick={handleClick}>
                  Add
       <div className="hoverEffect"><div></div> </div>
      </button>
    </div>
  );
}
