import React, { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";


const FormLogin = () => {
    const [loginFaled, setLoginFailed] = useState("")

    const HandleLogin = (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }


        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res)
                window.location.href = '/products'
                console.log(res);
            } else {
                setLoginFailed(res.response.data)
            }
        })
    }


    const usernameRef = useRef(null)
    useEffect(() => {
        usernameRef.current.focus()
    }, []);

    return (

        <form onSubmit={HandleLogin}>
            <InputForm label="username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef} />
            <InputForm label="password" type="password" placeholder="*****" name="password" />
            <Button variant="bg-blue-700 w-full" type='submit'>Login</Button>
            {loginFaled && <p className="text-red-500 text-center mt-5 " >  {loginFaled}</p>}
        </form>
    );
};

export default FormLogin;
