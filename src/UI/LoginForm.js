import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const[isInvalidUserName,setIsInvalidUserName]=useState(false);
    const[isInvalidPassword,setIsInvalidPassword]=useState(false);
    function submitForm(){
        if(userName.length>0&&userName.trim()!=""&&password.length>=6){
         alert("Success");
        }
    else{
        if(userName.length<=0||userName!==" "){
            setIsInvalidUserName(true);
         }
         if(password.length<6||password!==" "){
            setIsInvalidPassword(true);
         }
    }    
    }
    return (
            <Form style={{ marginLeft:"30%",border: "1px solid white", maxWidth: "40%", height: "25rem ",padding:"5%",paddingTop:"2%" }}>
                <h2>Login</h2>
                <br/>
                <Form.Group>
                    <Form.Label >UserName</Form.Label>
                    <Form.Control type="text" placeholder="UserName" onChange={(event)=>{setUserName(event.target.value);}} value={userName} isInvalid={isInvalidUserName}/>
                    {isInvalidUserName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password"  onChange={(event)=>{setPassword(event.target.value);}} value={password}   isInvalid={isInvalidPassword} />
                    {isInvalidPassword?<label style={{color:"red"}}>Password too small</label>:null}
                </Form.Group>
                <Button  size={'lg'} style={{ border:"none",marginTop: "5%",width:"100%",background:"#E15168" }}>Submit </Button>
            </Form>
        
    );

}
export default LoginForm;