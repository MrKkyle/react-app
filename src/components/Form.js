import {useState} from "react";
function Form()
{
    const[inputs, setInputs] = useState({});
    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(inputs);
    }

    /* name property is required when creating forms, 
       since the values are only eligible if the 
       set name of that value is set in the form
    */   

    return (
    <div className = 'modal'>
        <form className = 'modal-content' method = 'post' onSubmit = {handleSubmit}>

            <div className = 'img-container'>
                <img className = 'avatar'></img>
            </div>
            <div className = 'modal-container'>
                <label><b>Username</b></label>
                <span><input type = 'text' placeholder = "Enter your name"  name = "username" value = {inputs.username || ""} onChange = {handleChange} required></input></span>

                <label><b>Password</b></label>
                <span><input type = 'password' placeholder = "Enter password" name = "password" value = {inputs.password || ""} onChange = {handleChange} required></input></span>

                <button className = 'button' type = 'submit'>Submit</button>
            </div>
        </form>
    </div>
    );
}

export default Form;