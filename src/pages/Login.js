import {Form, Radio} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import Input from 'antd/lib/input/Input'
import React from 'react'
import '../resources/authentication.css'
import axios from 'axios'


function Login({onChange, designation}) {
  const navigate = useNavigate()
  const onFinish = async (values) =>{
    try{
      const response = await axios.post('https://gitauth.onrender.com/api/users/login', values)
    //   const response = await axios.post('http://localhost:8000/api/users/login', values)
      localStorage.setItem('userdata', JSON.stringify(response) )
      // message.success("Login successful!")
      console.log("LogIn successful")
      navigate('/home')
    } catch (error){
      // message.error('Login failed!')
      console.log("LogIn Failed")
    }
}

return (
<div className='login'>
    <div className='row justify-content-center align-middle'>
        <div className='col-md-5'>
            <div className='lottie'>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1idqu1ac.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
            </div>
        </div>
        <div className='col-md-5'>
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Log-in</h1>
                <br></br>
                <Form.Item label='Email' name='email'>
                    <Input />
                </Form.Item>

                <Form.Item label='Password' name='password'>
                    <Input />
                </Form.Item>

                <Radio.Group onChange={onChange} value={designation} className='p-2'>
                        <Radio value="Employee">Employee</Radio>
                        <Radio value="Manager">Manager</Radio>
                        <Radio value="Admin">Admin</Radio>
                    </Radio.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/register'>Not yet registered? click here to Login</Link>
                    <button className='primary' type='submit'>LOGIN</button>
                    <a href="https://github.com/login/oauth/authorize?client_id=e9ed2ec137eb58df2686">Login with github</a>
                </div>
            </Form>
            
        </div>
    </div>
</div>
)
}

export default Login