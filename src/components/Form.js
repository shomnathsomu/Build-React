import React, {useState} from 'react'

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        console.log("submitted!");
        let userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo);
        e.preventDefault();
    };

    return (
        <div className="form">
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-content">
                    <label htmlFor = "name">Name :</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required />
                </div>

                <div className="form-content">
                    <label htmlFor = "email">Email :</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>

                <div className="form-content">
                    <label htmlFor = "password">Password :</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required />
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
