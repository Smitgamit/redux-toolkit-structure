import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/form/InputField'
import { userLogin } from '../features/authSlice'
import Swal from 'sweetalert2'

export default function Login() {
    const { loading, error, userToken } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: ''
    })

    function onChangeHandler(event) {
        event.preventDefault()
        const { name, value } = event.target;
        setLoginDetail((prevState) => ({ ...prevState, [name]: value }))
    }
    function handleLogin(event) {
        event.preventDefault()
        dispatch(userLogin(loginDetail))
        // alert('login')
    }
    useEffect(() => {
        if (userToken !== null) {
            navigate('/products', { replace: true })
        } else {
            navigate("/login", { replace: true });
        }
    }, [userToken, navigate])

    return (
        <div>
            <main className="form-signin w-100 m-auto">
                {error && Swal.fire(
                    { error },
                    'error'
                )}
                <form>
                    <InputField
                        name={"username"}
                        value={loginDetail.username}
                        type="username"
                        className="form-control"
                        placeHolder={"username"}
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
                    <button
                        onClick={!loading ? handleLogin : null}
                        disabled={loading}
                        className="w-100 btn btn-lg btn-primary" type="submit">
                        {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Sign in'}
                    </button>
                </form>
            </main>
        </div>
    )
}
