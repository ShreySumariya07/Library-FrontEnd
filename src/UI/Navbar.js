import React from 'react';
import { Navbar, Button, NavDropdown,NavItem, Form, FormControl, Nav } from 'react-bootstrap';
import { useState } from 'react';
import {
    AiOutlinePlus,
  } from 'react-icons/all';
const Navbars = (props) => {
    return (
        <>
            <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:'#333645' }}>
                <Navbar.Brand style={{color:'#fefffb'}}>LibraryXYZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav style={{marginLeft:"80%"}}>
                {props.accountType==1?<label   onClick={props.openAddModal} style={{color:'#fefffb',marginTop:'12px' ,marginRight:'30px',cursor:'pointer'}} ><AiOutlinePlus /> Add new</label>:null}
                </Nav>
                    <Nav style={{background:'#fefffb',marginTop:'0.2%'}} >
                        <NavDropdown title="Hey User!!" color='#fefffb' style={{fontWeight:"bold",color:'#fefffb'}} id="basic-nav-dropdown" >
                            <NavDropdown.Item>Log Out!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>);
}
export default Navbars;