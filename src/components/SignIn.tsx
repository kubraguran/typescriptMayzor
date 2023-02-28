import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react';
import {useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, Navigate} from "react-router-dom";
import validationIn from "./validationIn"
import mayzor from "./profile/mayzor.png"
import { Input } from 'antd';
import { Radio } from 'antd';


interface Values {
  email: string;
}


const SingIn: React.FC<Values> = (props:Values) => {
  const [toNext, setToNext] = useState(false);
  const [email, setEmail] = useState('');


  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values: Values) => {
      setEmail(values.email);
      setToNext(true);
    },
    validationSchema: validationIn,
    
  });
  
  if (toNext) {
    return (
        <Navigate to="/userstable" state={{ email }} />
    );
  }

  return (
    <div className='signPage'>
      <Container>
        <Row  className = "justify-content-center">
        <Col md ={4}>
   
          <div className='signup_login'>
          <div className='brandSign'>
            <img id= "signBrand" src = {mayzor} alt = "mayzor"/>
          </div>
              <h1 className='signTitle'>Sign In</h1>
              <br />
              <br /> 
              <div className='userImage'>
                <form onSubmit={handleSubmit}>
                  <br />
                  <br />
                  <span className='emailInfo' id = "emailInfo">E mail Address</span>
                  <Input className = {`inputMailDanger :${errors.email && touched.email} ? inputMail`} name="email"  id = "inputMail"onChange={handleChange} type='email' placeholder='Valid e-mail' value={values.email} onBlur={handleBlur} />

                 <br/>
                 <br/>
                 <div><Radio className='radio' id = "radio">Remember me</Radio></div>
                <br/>
                <br/>
                  <button type='submit' id="submitEmail" className='submitEmail'>
                 Log In
                  </button>
                  <br />
                  <br />
                  <p  id= "mobileSign" className='password'>
                    <button className='passwordButton'>Forgot your Password?</button>
                  </p>
                  <p className='account'>
                   <button  id= "mobileSign" className='passwordButton'>
                   Don't have an account? <Link className='sign' to='/signup'>
                    <span>Sign Up</span>
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

export default SingIn;


