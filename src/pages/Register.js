import {Form, Radio} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import Input from 'antd/lib/input/Input'
import '../resources/authentication.css'
import axios from 'axios'


function Register({onChange, designation}) {
    const navigate = useNavigate()

    // const [designation, setDesignation]= useState("Manager")

    const onFinish = async (values) =>{
        try{
            await axios.post('https://gitauth.onrender.com/api/users/register', values)
            // await axios.post('http://localhost:8000/api/users/register', values)
            // message.success('Registration successful!!!')
            console.log("Registration successful!!!")
            navigate('/home')
            
        } catch(error){
            // message.error('Something went wrong!');
            console.log("Something went wrong!(Front)")
        }
    };
    // const onChange = (e) => {
    //     console.log('radio checked', e.target.value);
    //     setDesignation(e.target.value);
    //   };


  return (
    <div className='register'>
        <div className='row justify-content-center align-items-center w-100 h-150'>
            <div className='col-md-5'>
                <div className='lottie'>
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1idqu1ac.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
                </div>
            </div>
            <div className='col-md-5'>
                <Form layout='vertical' onFinish={onFinish}>
                    <h1>Register</h1>
                    <br></br>
                    <Form.Item label='Name' name='name'>
                        <Input />
                    </Form.Item>

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
                        <Link to='/'>Already Registered, click here to Login</Link>
                        <button className='primary' type='submit'>Register</button>
                    </div>
                </Form>
                
            </div>
        </div>
    </div>
  )
}

export default Register;