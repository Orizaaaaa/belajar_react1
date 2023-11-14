import React from 'react'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../redux/slices/cartSlice'

const CardProduct = (props) => {
    const { children } = props
    return (

        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between" >
            {children}
        </div>
    )
}


const Header = (props) => {
    const { image, id } = props
    return (
        <Link to={`/product/${id}`}>
            <img className='p-8 rounded-t-lg h-60 w-full object-cover ' src={image} alt="" />
        </Link>
    )
}

const Body = (props) => {
    const { children, name } = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className='text-xl font-semibold tracking-tight text-white' > {name.substring(0, 20)}...</h5>
                <p className="text-s text-white">
                    {children.substring(0, 100)}
                </p>
            </a>
        </div>
    )
}


const Footer = (props) => {
    const { price, id } = props
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className='text-3xl font-bold text-white' >
                US ${price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</span>
            <Button variant='bg-blue-600' onClick={() => dispatch(addTocart({ id, qty: 1 }))}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;



export default CardProduct