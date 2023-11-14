import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../Context/DarkMode';
import { useTotalPrice, useTotalPriceDispatch } from '../../Context/TotalPriceContext';


const TableCart = (props) => {
    // useSelector merupakan sebuah method yang di miliki oleh react redux
    const { products } = props
    const cart = useSelector((state) => state.cart.data)


    // usecontext untuk total
    const dispatch = useTotalPriceDispatch()
    const { total } = useTotalPrice()

    // dark mode dengan use context bawaan react
    const { isDarkMode } = useContext(DarkMode)

    // total price supaya bertambah
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)

            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum,
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, products])


    //useref anjing
    const totalPriceRef = useRef(null)

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart]);

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`} >
            <thead>
                <tr  >
                    <th>Product </th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>


                {/* menampilkan hasil dari oprasi sum useEfect dan Total Price */}
                {products.length > 0 && cart.map((item) => {
                    const product = products.find((product) => product.id === item.id)
                    return (
                        <tr key={item.id} >
                            <td>{product.title}</td>
                            <td>${product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                            <td>{item.qty}</td>
                            <td>{(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                        </tr>
                    )
                })}


                <tr ref={totalPriceRef} >
                    <td colSpan={3} > <b>Total Price</b></td>
                    <td><b>${total.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</b></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart