import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button'

const FormRegister = (props) => {
    const { buttonInside } = props
    return (

        <form action="" >
            <InputForm label="Fullname" type="text" placeholder="insert yourname here..." name="fullname" />
            <InputForm label="email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="password" type="password" placeholder="*****" name="password" />
            <InputForm label="confirm password" type="password" placeholder="*****" name="comfirmPassword" />

            <Button variant="bg-blue-700 w-full">{buttonInside}</Button>
        </form >
    )
}

export default FormRegister