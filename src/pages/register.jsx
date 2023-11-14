import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragment/FormRegister";


const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type='register' >
            <FormRegister buttonInside="Register" />
        </AuthLayout>
    );
};

export default RegisterPage;
