import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Input from './components/Input/Input.jsx'
import Preview from './components/Preview/Preview.jsx'
import './App.css'
import axios from 'axios'

function App() {

  const [metaData, setmetaData] = useState({})
  const [showPreview, setshowPreview] = useState(false)

  const getMetaData = (url)=>{
    const data = {"url":url};
    console.log(data);
    axios.post("http://localhost:8000/meta-data",data).then((res)=>{
       if(res.data.result.status==1){
        setmetaData(res.data.result.data)
        setshowPreview(true);
       }
       else{
        setshowPreview(false)
       }
    }).catch((err)=>{
        console.log(err)
    })
  }

  return (
    console.log(metaData),
    <>
      <Navbar/>
      <div className='container'>
           <Input getMetaData={getMetaData}/>
      </div>
      <div className='container'>
      {showPreview && <Preview data={metaData}/> }
      </div>
      
    </>
  )
}

export default App