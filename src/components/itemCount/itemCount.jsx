import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
export const ItemCount = (props) => {
    const estadoGlobal = useContext(ShopContext)

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-secondary" type="button" onClick={estadoGlobal.onSubstract}>-</button>
            </div>
            <input type='number' value={estadoGlobal.valor} className="form-control" />
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={estadoGlobal.onAdd}>+</button>
            </div>
        </div>
    )
}