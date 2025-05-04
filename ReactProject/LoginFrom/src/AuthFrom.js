
import React, { useState } from 'react';

const AuthFrom = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        setError('');

        if (!email || !password) return setError("Email And Password Is Both Are Required")

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return setError("Enter valid Email ");

        if (password.length < 6) return setError("Password must be at least 6 characters long!");

        alert("Login Success ✅");
        setEmail('');
        setPassword('');

    };

    const handleSingUp = () => {
        setError('');

        if (!email || !password) return setError("Email And Password Is Both Are Required")

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return setError("Enter valid Email ");

        if (password.length < 6) return setError("Password must be at least 6 characters long!");

        if (password)

            alert("You’ve Signed Up Successfully! 🎉");
        setEmail('');
        setPassword('');

    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle '>
                    <button className={isLogin ? 'active' : ""} onClick={() => {
                        setIsLogin(true)
                    }} >Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>

                {isLogin ? (
                    <div className='form'>
                        <h2>Login Form</h2>
                        <input

                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p >{error}</p>}
                        <a href='#'>Forgot password</a>
                        <button onClick={handleLogin}>Login</button>
                        <p>
                            Not a Member ?
                            <a href='#' onClick={() => setIsLogin(false)}> SignUp Now </a>
                        </p>
                    </div>
                ) : (
                    <div className='form'>
                        <h2>SignUp Form</h2>

                        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <input type='password' placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)} />
                        {error && <p >{error}</p>}
                        <button onClick={handleSingUp}>SignUp</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthFrom;


