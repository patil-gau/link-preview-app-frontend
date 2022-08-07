import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './input.css'


function Input({getMetaData}) {
  const [url, seturl] = useState("")

  const handleSubmit = (e)=>{
        e.preventDefault();
        getMetaData(url)
  }

 const handleChange = (e)=>{
      seturl(e.target.value);
 }

  return (
    <form className="form" method='POST' onSubmit={handleSubmit}>
    <Box
      className='textfield-box'
      style={{marginLeft:120}}
      noValidate
      autoComplete="off"
    >
      <TextField type="url" name="url" onChange={handleChange} style={{width:380}} required className="textfield"   id="outlined-basic" label="Enter Link" variant="outlined" />
    </Box>
    <Button variant="outlined" type="submit" style={{marginTop:200,marginLeft:30,backgroundColor:'#d6ccc2',color:'black',border:"none"}} className="submit-button">Preview</Button>
    </form>
  )
}

export default Input