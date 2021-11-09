import { createContext } from "react";
import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/client";

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    const [allProducts, setAllProducts] = useState([])
    const [item, setItem] = useState([])
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(); // Toma el valor del input
    const [valor, setValor] = useState(1);
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [orderFin, setOrderFin] = useState();

    function onAdd() {
        if (valor < item.stock) {
            setValor(parseInt(valor) + 1)
        }
    }

    function onSubstract() {
        if (valor > 1) {
            setValor(parseInt(valor) - 1)
        }
    }
    
    const vaciarCarrito = () =>{
        setCart([])
        setTotalCarrito(0)
      }

    const deleteItem = (product) =>{
        let carritoFiltrado = cart.filter( el => el.itemDetalle.id !== product)
        setCart(carritoFiltrado)
    
        let productToDelete = cart.find(el => el.itemDetalle.id === product)
        let priceToSubstract = productToDelete.itemDetalle.price * productToDelete.cantidadContext
        setTotalCarrito(totalCarrito - priceToSubstract)
      }

    const deleteQuantity = (product) =>{
        const buscador = cart.find(el => el.itemDetalle.id == product.id)
        if(buscador && buscador.cantidadContext > 1){
                buscador.cantidadContext -= 1
                setTotalCarrito(totalCarrito - buscador.itemDetalle.price)
        }
    }

    const createOrder = (tel, mail, nombre) =>{
        // Se crea la orden con los datos
        const order = { buyer: {tel, mail, nombre}, item: cart, total: totalCarrito }
        const DB = getFirestore();
        DB.collection('orders').add(order);
        vaciarCarrito();
        setOrderFin(order)
    }

    

    useEffect( () => {

        const DB = getFirestore(); // conexion a la base de datos
        const COLLECTION = DB.collection("productos") // se toma la coleccion
        COLLECTION.get().then( response => {
            setAllProducts(response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
        })
    },[])

    return <ShopContext.Provider value={{allProducts, item, setItem, cart, setCart, cantidad, setCantidad, valor, setValor, totalCarrito, setTotalCarrito, vaciarCarrito, deleteItem, onAdd, onSubstract, deleteQuantity, createOrder, orderFin}}>
        {children}
    </ShopContext.Provider>
}