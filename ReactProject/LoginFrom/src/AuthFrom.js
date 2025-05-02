import React, { useState } from 'react'

const AuthFrom = () => {
    const [isLogin, setIsLogin] = useState("")
    
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle '>
                    <button className={isLogin ? 'active' : ""} onClick={() => { setIsLogin(true) }} >Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => { setIsLogin(false) }}>SignUp</button>
                </div>
                {
                    isLogin ? <>
                        <div className='form'>
                            <h2>Login From</h2>
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='password' />
                            <a href='#'>Forgot password </a>
                            <button  >Login</button>
                            <p>
                                Not a Member ?
                                <a href='#' onClick={() => setIsLogin(false)} > SignUp Now </a>
                            </p>
                        </div>
                    </> : <>
                        <div className='form'>
                            <h2>SignUp From</h2>
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='password' />
                            <input type='password' placeholder='Confrim password' />
                            <button  >SignUp</button>

                        </div>


                    </>
                }
            </div>
        </div >
    )
}

export default AuthFrom
