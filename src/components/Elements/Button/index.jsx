import React from "react";

function Button(props) {

    const { children = 'KOSONG', variant = 'bg-black', onClick = () => { }, type = 'button' } = props; //nilai default
    return (
        <button onClick={onClick}
            className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type={type}
        >
            {children}
        </button>
    );
}

export default Button;
