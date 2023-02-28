import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link, Navigate } from 'react-router-dom';
import validationUp from './validationUp';
import { Input, Radio } from 'antd';
import mayzor from "./profile/mayzor.png"


interface Values {
  email: string;
}
export default function SignUp() {
 const [toNext, setToNext] = useState(false);
 const [email, setEmail] = useState('');
 const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
  initialValues: {  
    email: '',
    password: '',
    passwordConfirmation: '',
  },
  onSubmit: (values: any) => {
    setToNext(true);
    setEmail(values.email);
    console.log(values);
  },
  validationSchema: validationUp,
});

if (toNext) {
    return (
        <Navigate to="/userstable" state={{ email }}  />
    );
  }

  return (
    <div className='signPage'>
      <Container fluid>
        <Row  className = "justify-content-center">
    
          <Col md={6} className= "container">
          <div className='signup_login'>
          <div className='brandSign'>
          <img id= "signBrand" src = {mayzor} alt = "mayzor"/>
          </div>
              <h1 className='signTitle'>Sign Up</h1>
              <br/>
              <div className='userImage'>
                <form onSubmit={handleSubmit}>
                
                  <span className='emailInfo'>E mail Address</span>
                  <Input className = {`inputMailDanger :${errors.email && touched.email} ? inputMail`} name="email"  onChange={handleChange} type='email' placeholder='Valid e-mail' value={values.email} onBlur={handleBlur} />
  <br/>
                 <Input name = "password" className = {`inputMailDanger : ${errors.password && touched.password} ? inputMail`} onChange = {handleChange} type='password' placeholder='More than 5 letter'  value= {values.password} onBlur={handleBlur} />
               <br/>
                 <Input name = "passwordConfirmation" className = {`inputMailDanger :  ${errors.passwordConfirmation  && touched.passwordConfirmation} ? inputMail`} onChange = {handleChange} type='password' placeholder='Password Confirm' value= {values.passwordConfirmation} onBlur={handleBlur}/>
              <br/>
                 <div><Radio className='radio'>Remember me</Radio></div>
             <br/>
                  <button type='submit' className='submitEmail'>
                 Log In
                  </button>
                 
                  <p className='password'>
                    <button className='passwordButton'>Forgot your Password?</button>
                  </p>
                  <p className='account'>
                   <button className='passwordButton'>
                   Do You Have a Account<Link className='sign' to='/'>
                    <span>Sign In</span>
                    </Link>
                   </button>
                  </p>
                  
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
