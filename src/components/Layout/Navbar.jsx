import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Elements/Button'
import { useLogin } from '../../hooks/useLogin'
import { DarkMode } from '../../Context/DarkMode'
import { useTotalPrice } from '../../Context/TotalPriceContext'

function Navbar() {


    const cart = useSelector((state) => state.cart.data)
    const [totalCart, setTotalCart] = useState(0)
    const username = useLogin()
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)


    // useContext
    const { total } = useTotalPrice()

    // berfungsi untuk menambahkan total cart 
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart]);


    //handle logout
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }


    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10 ' >
            {username}
            <Button onClick={handleLogout} className=" bg-black ml-5" > Logout </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5" >
                item :{totalCart} | price: $ {total}
            </div>

            <Button className=" bg-black px-10 mx-5 p-2 text-white rounded"
                onClick={() => setIsDarkMode(!isDarkMode)} >
                {isDarkMode ? "Ligth" : "Dark"}
            </Button>
        </div>
    )
}

export default Navbar