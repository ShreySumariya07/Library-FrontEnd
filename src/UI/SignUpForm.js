import React, { useState } from 'react';
import { Button, Form,Row } from 'react-bootstrap';

const SignUpForm = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [middleName,setMiddleName]=useState("");
    const[email,setEmail]=useState("");
    const [accountType,setAccountType]=useState(-1);
    const[isInvalidUserName,setIsInvalidUserName]=useState(false);
    const[isInvalidFirstName,setIsInvalidFirstName]=useState(false);
    const[isInvalidLastName,setIsInvalidLastName]=useState(false);
    const[isInvalidMiddleName,setIsInvalidMiddleName]=useState(false);
    const[isInvalidPassword,setIsInvalidPassword]=useState(false);
    const[isInvalidEmail,setIsInvalidEmail]=useState(false);
    const[isInvalidAccount,setIsInvalidAccount]=useState(false);
    function submitForm(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(userName.length>0&&userName.trim()!=""&&firstName.length>0&&firstName.trim()!=""&&lastName.length>0&&lastName.trim()!=""&&middleName.length>0&&middleName.trim()!=""&&password.length>=6&&mailformat.test(email) == true){
         alert("Success");
        }
    else{
        if(firstName.length<=0||firstName==" "){
            setIsInvalidFirstName(true);
         }
         if(lastName.length<=0||lastName==" "){
            setIsInvalidLastName(true);
         }
         if(middleName.length<=0||middleName==" "){
            setIsInvalidMiddleName(true);
         }
         if(userName.length<=0||userName==" "){
            setIsInvalidUserName(true);
         }
         if(password.length<6||password==" "){
            setIsInvalidPassword(true);
         }
         if(mailformat.test(email) == false){
            setIsInvalidEmail(true);
         }
         if(accountType==-1){
             setIsInvalidAccount(true);
         }
    }    
    }
    function validateWhileFocus(event){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       switch(event.target.name){
           case "userName":
               if(event.target.value.length>0&&event.target.value!=" "){
                  setIsInvalidUserName(false);
               }
               else{
                setIsInvalidUserName(true);
                
               }
               break;
             case "password":
                if(event.target.value.length>=6&&event.target.value!=" "){
                  setIsInvalidPassword(false);
                }
                else{
                   setIsInvalidPassword(true);
                }
               break;
               case "firstName":
                if(event.target.value.length>0&&event.target.value!=" "){
                 setIsInvalidFirstName(false);
                }
                else{
                    setIsInvalidFirstName(true);
                }
               break;
               case "lastName":
                if(event.target.value.length>0&&event.target.value!=" "){
                    setIsInvalidLastName(false);
                }
                else{
                    setIsInvalidLastName(true);
                }
               break;
               case "middleName":
                if(event.target.value.length>0&&event.target.value!=" "){
                    setIsInvalidMiddleName(false);
                }
                else{
                    setIsInvalidMiddleName(true);
                }
               break;
               case "email":
                if (mailformat.test(event.target.value) == true) {
                  setIsInvalidEmail(false);
                }
                else {
                  setIsInvalidEmail(true);
                }
                break;}
       }
    return (
            <Form style={{ marginLeft:"30%",border: "1px solid white", maxWidth: "40%",padding:"5%",paddingTop:"2%" }}>
                <h2>Login</h2>
                <br/>
                <Form.Group>
                    <Form.Label >UserName</Form.Label>
                    <Form.Control name="userName" type="text" placeholder="UserName" onChange={(event)=>{setUserName(event.target.value); validateWhileFocus(event)}} value={userName} isInvalid={isInvalidUserName}/>
                    {isInvalidUserName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                <Form.Group>
                    <Form.Label >First Name</Form.Label>
                    <Form.Control  name="firstName" type="text" placeholder="First Name" onChange={(event)=>{setFirstName(event.target.value); validateWhileFocus(event)}} value={firstName} isInvalid={isInvalidFirstName}/>
                    {isInvalidFirstName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                <Form.Group>
                    <Form.Label >Middle Name</Form.Label>
                    <Form.Control name="middleName" type="text" placeholder="Middle Name" onChange={(event)=>{setMiddleName(event.target.value); validateWhileFocus(event)}} value={middleName} isInvalid={isInvalidMiddleName}/>
                    {isInvalidMiddleName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                <Form.Group>
                    <Form.Label >Last Name</Form.Label>
                    <Form.Control  name="lastName" type="text" placeholder="Last Name" onChange={(event)=>{setLastName(event.target.value); validateWhileFocus(event)}} value={lastName} isInvalid={isInvalidLastName}/>
                    {isInvalidLastName?<label style={{color:"red"}}>Cannot leave this field empty</label>:null}
                </Form.Group>
                <Form.Group>
                    <Form.Label >Email</Form.Label>
                    <Form.Control  name="email" type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value);validateWhileFocus(event)}} value={email} isInvalid={isInvalidEmail} />
                   
                    {isInvalidEmail?<label style={{color:"red"}}>Invalid Email</label>:null}
                 </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name="password" type="text" placeholder="Password"  onChange={(event)=>{setPassword(event.target.value); validateWhileFocus(event)}} value={password} isInvalid={isInvalidPassword} />
                    {isInvalidPassword?<label style={{color:"red"}}>Password too small</label>:null}
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Check type="radio" id="1" name="account" label="Teacher" style={{marginRight:"2%"}} onClick={()=>{setAccountType(1);}}/>
                    <Form.Check type="radio" id="2" name="account" label="Student "onClick={()=>{setAccountType(2);}}/>
                    {isInvalidAccount?<label style={{color:"red"}}>Select one of them</label>:null}
                </Form.Group>
                <Button pnClick={submitForm} size={'lg'} style={{ border:"none",marginTop: "5%",width:"100%",background:"#E15168" }} onClick={submitForm}>Submit </Button>
            </Form>
        
    );

}
export default SignUpForm;