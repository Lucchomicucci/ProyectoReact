import React from "react";
import { Item } from "../Item/Item";


export const ItemList = (props) =>{

    return(
        <div className="productsContainer">
            {props.productos.map( element => {
                    return <Item productos={element} key={element.id}/>
                })
            }
        </div>
    )
}