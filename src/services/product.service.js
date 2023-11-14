import axios from "axios";

// untuk mengambil semua data produk
export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        })

}




// untuk dynamic router mengambil single product
export const getDetailProductt = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        })
}