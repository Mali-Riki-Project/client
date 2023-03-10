//https://freefrontend.com/css-code-examples/#sitemap-layouts
//https://codepen.io/andreacrawford/pen/NvqJXW
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";
import axios from "axios";

import { useFormik, FormikValues } from "formik";
import {Button ,TextField} from '@mui/material';
import * as yup from 'yup';

var validator = require("email-validator");





const Login = () => {
     const navigate=useNavigate();



     const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('כתובת אימייל לא תקינה')
          .required('שדה חובה'),
        password: yup
          .string('Enter your password')
          .required('שדה חובה'),
      });




    const [err, setErr] = useState(null);

    const { handleSubmit ,handleChange ,values ,getFieldProps ,errors,touched} = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema:validationSchema,

         onSubmit: async(values)=>{
          //  const {data:_initiators} = await axios.put(`http://localhost:3600/initiator/${20}`,{address:values.address,name:values.name,hp:'1223',tama38:1,pinuyBinuy:1})
        console.log('in submit');
          try{
            const response= await axios.post("http://localhost:3600/auth/login",{ userName:values.email,password:values.password})
           localStorage.setItem("token", response.data.accessToken);
           console.log("res",response.data);
           console.log("resdgdfg",response);

          // localStorage.setItem("userId",)
            navigate('/initiators')
        }
        catch(err){
            setErr(err.response.data?.message)
          } 
        }
        }

      
        );






    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [err, setErr] = useState(null);
    // const navigate=useNavigate();
    // const loginToServer = async (email,password) => {
    //     if(!validator.validate(email)){
    //         alert('email is not valid')
    //         return
    //     }
    //     try{
    //         const response= await axios.post("http://localhost:3600/auth/login",{ userName:email,password:password})
    //        localStorage.setItem("token", response.data.accessToken);
    //        console.log("res",response.data);
    //        console.log("resdgdfg",response);

    //       // localStorage.setItem("userId",)
    //         navigate('/initiators')
    //     }
    //     catch(err){
    //         setErr(err.response.data?.message)
    //       } 
    //     }






    return (
        <>
        <form onSubmit={handleSubmit} >
            <h2>login</h2>
    <TextField 
         value={values.name} 
         id="outlined-basic" 
         label=" מייל"
         variant="outlined" 
          {...getFieldProps("email")} 
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}

          
          
          />

          <br/>

  <TextField 
         value={values.password} 
         id="outlined-basic" 
         label=" סיסמה"
         variant="outlined" 
          {...getFieldProps("password")} 
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}

          
          />




            {/* <input placeholder="enter your user name" onChange={e=>setEmail(e.target.value)}></input>
            <br></br><br></br>
            <input placeholder="enter your password" type={"password"} onChange={e=>setPassword(e.target.value)}></input>
            <br></br><br></br> */}
            {/* <button onClick={()=>loginToServer(email,password)}>לחץ לכניסה</button> */}
            {err && err}
            <Button type="submit">לחץ לכניסה</Button>
            </form>
            <Link to="/register">אתה לא רשום? לחץ כאן</Link>
        </>
    )
}

export default Login

