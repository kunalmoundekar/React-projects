import React from 'react';
import './table.css';
import Navbar from './Navbar';


const handleClick = () => {
  document.getElementById('numberInput').value=''
  document.getElementById('table-output').innerHTML = '';
}

const handleChange = () => {
  const inputValue = document.getElementById('numberInput').value;
  const outputDiv = document.getElementById('table-output'); 
  outputDiv.innerHTML = ''; 

  for (let i = 1; i <= 10; i++) {
    const line = document.createElement('p'); 
    line.textContent = `${inputValue} x ${i} =    ${inputValue * i}`;  
    outputDiv.appendChild(line); 
  }
}

function Table() {
  return (

    <div >
  
      <Navbar/>
    <div className="container">
      <div className="description">
        <p>
          Enter a number to instantly see its multiplication table—quick, easy, and perfect for learning or teaching!
        </p>
      </div>

      <div className="input-section">
        <input id="numberInput" type="number" placeholder="Enter a number"    onChange={handleChange} />
        <button  onClick={handleClick} >Clear</button>
      </div>

      <div className="table-output" id='table-output'>
      </div>
    </div>
    </div>
  );
}

export default Table;
