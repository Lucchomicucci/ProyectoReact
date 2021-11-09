import React, {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../../components/ItemList/ItemList";
import { ShopContext } from "../../context/shopContext";

export const ItemListContainer = (props) => {
    const estadoGlobal = useContext(ShopContext)
    const [products, setProducts] = useState(estadoGlobal.allProducts);
    let { category } = useParams();

    useEffect( () => {
                const productsToShow = estadoGlobal.allProducts.filter( element => element.category == category )
                !category 
                ? setProducts(estadoGlobal.allProducts)
                : setProducts(productsToShow)
    },[category])

    return (
        <>
        <ItemList productos={products}/>
        </>
    )
}