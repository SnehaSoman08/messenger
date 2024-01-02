import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div style={{fontFamily:"cursive"}}>
      <MDBNavbar style={{backgroundColor:" rgb(159, 101, 111)"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://media1.giphy.com/media/RJPvSu5cKfg9cZplHn/giphy.gif'
              height='30'
              alt=''
              loading='lazy'
            />
           <h4 style={{color:"white"}}>Messenger</h4>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header