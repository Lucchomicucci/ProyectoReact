import React, { useContext, useState } from "react";
import { ItemCount } from '../itemCount/itemCount';
import { But } from "../Button/buttonComponent";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";


export const ItemDetail = (props) => {
    const estadoGlobal = useContext(ShopContext)
    const [compra, setCompra] = useState(true); // Cambiar la vista

    const updateCantidad = () =>{
        estadoGlobal.setCantidad(estadoGlobal.valor)
        estadoGlobal.setValor(1) 
    }

    const agregarCarrito = (event) => {
        updateCantidad();
        let itemDetalle = estadoGlobal.item
        let cantidadContext = estadoGlobal.valor
        let itemAgregado = {itemDetalle, cantidadContext}
        
        const buscador = estadoGlobal.cart.find(producto => producto.itemDetalle.id == itemDetalle.id)
        if(buscador){
            if(itemDetalle == buscador.itemDetalle){
                buscador.cantidadContext += cantidadContext
                estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + (cantidadContext * itemDetalle.price))
            }else{
                estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + cantidadContext * itemDetalle.price)
                estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
            }
            setCompra(false)
        }else{
            console.log(estadoGlobal.totalCarrito, cantidadContext, itemDetalle.price)
            estadoGlobal.setTotalCarrito(estadoGlobal.totalCarrito + cantidadContext * itemDetalle.price)
            estadoGlobal.setCart([...estadoGlobal.cart, itemAgregado])
        }
        setCompra(false)
        
    }





    return (
        <div class="container bg-dark text-white">
            <h1 class="my-4">{props.item.title}</h1>
            <div class="row">
                <div class="col-md-8">
                    <img class="img-fluid" src={props.item.pictureUrl} alt="" />
                </div>
                <div class="col-md-4">
                    <h3 class="my-3">{props.item.title}</h3>
                    <p>{props.item.description}</p>

                    {!!compra
                    ? <div><ItemCount stock={props.item.stock} initial="1"/> <But funcion={agregarCarrito} texto={'Agregar'}/></div>
                    : <Link to="/cart"> <But texto={'Comprar'}/> </Link>
                    }

                </div>
            </div>
        </div>
    )
}