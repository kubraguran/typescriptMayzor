import * as yup from 'yup';
  
const validationSignUp = yup.object({
    email: yup.string().required('required field').email(),
     password:yup.string().min(5).max(10).required('required field'),
    passwordConfirmation:yup.string().oneOf([yup.ref('password')], "Passwords Have To Be Same").required('required field'), 
  });
   
  export default validationSignUp;