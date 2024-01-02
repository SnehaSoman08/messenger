import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Main() {
  
  const[str,setStr]=useState("");

  function show(){
    setStr("Happy Newyear!")

  }

  function hide(){
    setStr("")
  }


  return (
    <div>
      <img src="https://i.pinimg.com/originals/e6/b9/63/e6b9635abacfb592e2ae5126575c6e11.gif" alt="img" style={{marginLeft:"650px", marginTop:"50px",height:"250px"}} />
      <h1 style={{fontFamily:"fantasy",fontSize:"20px",textAlign:"center"}}>You have got a new message!</h1><br /><br />
      <div>
      <h4 style={{textAlign:"center",fontFamily:"cursive"}}>{str}</h4>
      <div style={{marginLeft:"680px",marginTop:"60px"}}>
        <MDBBtn style={{backgroundColor:"rgb(81, 144, 144"}} onClick={show} className='me-1'>
        Show
      </MDBBtn>
      <MDBBtn style={{backgroundColor:"rgb(56, 98, 98)"}} onClick={hide} className='me-1'>
        Hide
      </MDBBtn>
      </div>
      </div>
    </div>
  )
}

export default Main