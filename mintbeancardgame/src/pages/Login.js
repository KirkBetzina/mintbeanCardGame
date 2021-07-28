import React, {useState, useEffect} from 'react';

const Form = (props) => {
    //STATE FOR THE FORM
    const [formData, setFormData] = React.useState(props.place);
    
    //FUNCTIONS
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
      props.handleSubmit(formData); // Submit to Places desired function
      props.history.push("/"); //Push back to display page
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="decription"
          value={formData._id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
        <input type="submit" value={props.label} />
      </form>
    );
  };
  
  export default Form;

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