import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormLogin from "../components/Fragment/formLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type='login'>
            <FormLogin />
        </AuthLayout>
    );
};

export default LoginPage;
