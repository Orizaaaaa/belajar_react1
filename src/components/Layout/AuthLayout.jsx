import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../Context/DarkMode";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    { console.log(isDarkMode); }


    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`} >
            <div className="w-full max-w-xs">
                <button className="absolute right-2 bg-blue-600 p-2 text-white rounded"
                    onClick={() => setIsDarkMode(!isDarkMode)} >
                    {isDarkMode ? "Ligth" : "Dark"}
                </button>
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="mt-5 mb-5">Welcome, please enter your details</p>
                {children}

                <Navigation type={type} />
            </div>
        </div>
    );
};


const Navigation = ({ type }) => { //type yang ini merupakan sebuah paramerter 
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center" >
                Don't have an account?
                <Link className="font-bold text-blue-600" to="/register"> Register</Link>
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-5 text-center" >
                Alredy have an account?
                <Link className="font-bold text-blue-600" to="/login"> Login</Link>
            </p>
        )
    }

}

export default AuthLayout;
