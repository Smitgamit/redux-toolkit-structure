import React, { useState } from 'react'
import InputField from '../components/form/InputField'

export default function Login() {
    const [loginDetail, setLoginDetail] = useState({
        email: '',
        password: ''
    })
    function onChangeHandler(event) {
        event.preventDefault()
        const { name, value } = event.target;
        setLoginDetail((prevState) => ({ ...prevState, [name]: value }))
    }
    function handleLogin(event) {
        event.preventDefault()
        alert('login')
    }
    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form>
                    <InputField
                        name={"email"}
                        value={loginDetail.email}
                        type="email"
                        className="form-control"
                        placeHolder={"Email"}
                        onChangeHandler={onChangeHandler}
                    />
                    <InputField
                        name={"password"}
                        value={loginDetail.password}
                        type="password"
                        className="form-control"
                        placeHolder={"Password"}
                        onChangeHandler={onChangeHandler}
                    />
                    <button onClick={handleLogin} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}
