import React, { useState } from 'react';
import './App.css';

import OutlinedInput from '@mui/material/OutlinedInput';

import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function App() {

  const[bmi,setBmi] = useState(0)
  const[weight,setWeight] = useState(0)
  const[height,setHeight] = useState(0)

  //to validate
  const[isWeight,setIsWeight] = useState(true)
  const[isHeight,setIsHeight] = useState(true)

const getvalidate = (e)=>{
 const {name,value} = e.target
//  console.log(name,value);
//  console.log(!!value.match(/^[0-9]+$/));

if (!!value.match(/^\d*\.?\d*$/)) {
  if (name==='weight') {
    setWeight(value)
  setIsWeight(true)
  }
  else {
     setHeight(value)
     setIsHeight(true)
  }
  
}
else{
  if (name==='weight') {
    setWeight(value)
  setIsWeight(false)
  }
  else  {
    setHeight(value)
    setIsHeight(false)
  }
  
}
 
}

const handleCalculate = (e)=>{
  e.preventDefault()
  if(!weight || !height){
    alert('please fill the form')
  }
  else{
    // alert('submitted')
    setBmi(Math.floor(weight/height**2))
    
  }
}

const handleReset =(e)=>{
  setBmi(0)
  setWeight(0)
  setHeight(0)
  setIsWeight(true)
  setIsHeight(true)
}
  return (
   <>
     <div style={{height:'100vh'}} className='w-100 d-flex align-items-center justify-content-center'>
      <div style={{width:'600px',backgroundColor:'rgb(132, 170, 246)',border:'2px solid black',borderRadius:'10px'}} className='content '>
        <div style={{width:'100%'}}>
          <img src='https://m.media-amazon.com/images/I/414OsDaKpnL.png' alt="" style={{height:'400px',width:'300px'}} />
        </div>
        <div className='col2 pt-4 d-flex flex-column align-items-center justify-content-center' style={{height:'400px'}}>
          
        <form onSubmit={handleCalculate}>
          <div className='text-center'>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined " >
              <OutlinedInput name='weight'  value={weight || ""} onChange={(e)=>getvalidate(e)}
                id="outlined-adornment-weight"
               
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">Weight (Kg)</FormHelperText>
            </FormControl>
            {!isWeight&&
              <div><p className='text-danger'>Invalid Input</p></div>}
          </div>
  
          <div className='text-center'>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput name='height' value={height || ""} onChange={(e)=>getvalidate(e)}
                id="outlined-adornment-weight "
              
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'height',
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">Height (m)</FormHelperText>
            </FormControl>
            {!isHeight&&
              <div><p className='text-danger'>Invalid Input</p></div>}
          </div>
  
        <div className='ps-2 mb-3'>   <Stack spacing={3} direction="row">
        
        <Button type='submit' onSubmit={handleCalculate} disabled={isWeight && isHeight?false:true} variant="contained">Calculate</Button>
        <Button onClick={handleReset} variant="contained">Reset</Button>
      </Stack></div>
          
         <div className='mx-auto text-center bg-light w-50 p-2 rounded ' style={{border:'1px solid black'}}>
             <h6>{bmi}Kg/m2</h6>
         </div>
        </form>
        </div>
      </div>
     </div>
   </>
  );
}

export default App;
