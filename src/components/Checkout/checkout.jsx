import { useEffect, useContext, useState } from "react";
import { getFirestore } from "../../firebase/client";
import { ShopContext } from "../../context/shopContext";


export const Checkout = (props) =>{
    const estadoGlobal = useContext(ShopContext)
    const [compra, setCompra] = useState();
    

    useEffect( () => {
        const DB = getFirestore()
        const COLLECTION = DB.collection("orders")
        COLLECTION.get().then(response=> {
            let ordenes = (response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
            let ordenPorMail = ordenes.filter(el => el.buyer.mail == estadoGlobal.orderFin.buyer.mail)
            let ultOrden = ordenPorMail[ordenPorMail.length-1]
            setCompra(ultOrden)
            console.log(compra)
        })
    },[])

    return(
        <div>
            {
                !compra ?
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                : 
                <div className="orderCompra">
                <h1>Compra finalizada</h1>
                <p><b>Orden de compra: {compra.id}</b></p>
                <p><b>Nombre: {compra.buyer.nombre}</b></p>
                <p><b>Mail: {compra.buyer.mail}</b></p>
                <p><b>Telefono: {compra.buyer.tel}</b></p>
                </div>
            }
        </div>

    )
}