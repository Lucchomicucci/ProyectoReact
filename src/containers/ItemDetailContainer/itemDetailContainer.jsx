import React, { useState, useEffect, useContext } from "react";
import { ItemDetail } from "../../components/ItemDetail/itemDetail";
import { useParams } from "react-router";
import { ShopContext } from "../../context/shopContext";

export const ItemDetailContainer = (props) => {
    const estadoGlobal = useContext(ShopContext)
    let { id } = useParams();

    useEffect( ()=> {
            const itemShow = estadoGlobal.allProducts.find( element => element.id == id )
            estadoGlobal.setItem(itemShow)
         
     },[id])

    return (
        <>  
            <ItemDetail item={estadoGlobal.item}/>
        </>
    )
}
