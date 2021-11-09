import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"

export const Cart = (props) => {
    const estadoGlobal = useContext(ShopContext)
    let carrito = estadoGlobal.cart
    const [mail, setMail] = useState();
    const [tel, setTel] = useState();
    const [nombre, setNombre] = useState();

    return(
        <div className="carrito">
          {
              carrito.length === 0
              ? <div className="carritoVacio">
                <Link to="/productos" className="text-warning bg-dark">
                  <div>Tu carrito esta vacio</div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/reactjscoder-27045.appspot.com/o/cartempty.png?alt=media&token=6a6944e5-3ba9-4ead-81e5-2e7cac363438" alt="" />
                </Link>
              </div>
              : carrito.map( el =>{
                  return (
                <div className="cart cart-bg row" key={el.itemDetalle.id}>
                  <div className="col">{el.itemDetalle.title}</div>
                  <div className="col">{el.cantidadContext}</div>
                  <div className="col">
                  <button type="button" className="btn btn-secondary" onClick={()=> estadoGlobal.deleteItem(el.itemDetalle.id)}>X</button>
                  <button type="button" className="btn btn-secondary" onClick={()=> estadoGlobal.deleteQuantity(el.itemDetalle)}>Borrar Item</button>
                  </div>
                </div>
              )
            })
          }
          
          <div className="container-sm">
            <div class="form-floating mb-3">
              <input required type="email" class="form-control" id="floatingInput" onInput={(e)=> {setMail(e.target.value)}} placeholder="name@example.com" />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="text" class="form-control" id="phone"  onInput={(e)=> {setTel(e.target.value)}} placeholder="Telefono" />
              <label for="phone">Telefono</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="text" class="form-control" id="floatingPassword" onInput={(e)=> {setNombre(e.target.value)}} placeholder="Nombre" />
              <label for="floatingPassword">Nombre</label>
            </div>
            {
            tel && nombre && mail && estadoGlobal.totalCarrito !== 0?
              <div class="col-12">
                <Link to="/checkout"><button type="submit" class="btn btn-primary" onClick={() => {estadoGlobal.createOrder(tel, mail, nombre)}}>Comprar</button></Link>
              </div>
              :
              <div class="col-12">
                <button disabled type="submit" class="btn btn-primary">Comprar</button>
                <h2 className="cart">Total: ${estadoGlobal.totalCarrito}</h2>
              </div>
            }
          </div>
        </div>
    )
}