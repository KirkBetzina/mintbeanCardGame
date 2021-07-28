    import React, { useEffect } from 'react'
    import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
    import {useState} from 'react'
    
    
    const Login = (props) => {
    
        const [user, setUser] =  useState({username: "", password: ""}) 
        const handleSubmit = () => {
          props.getLogin(user.username, user.password)
          
        console.log('handleSubmit')
    
      }
        const handleChange = (event) => {
            console.log('handleChange - value', event.target.value)
            console.log('handleChange - name', event.target.name)
            const name = event.target.name 
            setUser({
              ...user,
              [name]: event.target.value
            })
          }
          React.useEffect(() => {
            
          }, []);
      
        
        
        return (
            <div id= 'form'>
                <Form inline>
                <FormGroup >
                    <Label for="exampleUsername" hidden>Username</Label>
                    <Input onChange={handleChange} type="username" name="username" id="exampleUsername" placeholder="Username" />
                </FormGroup>
                {' '}
                <FormGroup >
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button className="btn btn-med btn-danger btn-block" onClick={handleSubmit}>Submit</Button>
                
                </Form>
                <a href='/create'>Create Account</a>
            </div>
          );
    }
    export default Login

// const Login = () => {
    
//     const [login, setLogin] = useState([{}])
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const onChange = (event) => {
//         setLogin({...FormData, [event.target.name]: event.target.value})
//     }
//     return(
//        <div className='login'>
//             <h1>Hey, Login ova heeya!</h1>
//                 <span className="card-text">
//                     <input className="mb-2 form-control titleIn" onChange={event => setUsername(event.target.value)} placeholder="Username" />
//                     <input className="mb-2 form-control desIn " onChange={event => setPassword(event.target.value)} placeholder="Password" />
//                     <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px', 'fontWeight': 'bold'}} onClick={}>Login</button>
//             </span>
//         </div>
//     )
// }