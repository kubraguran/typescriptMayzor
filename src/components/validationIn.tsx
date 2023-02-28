import React from "react";
import * as yup from 'yup';
  
const validation = yup.object({
    email: yup.string().required('required field').email(),
  });
   
  export default validation;
  