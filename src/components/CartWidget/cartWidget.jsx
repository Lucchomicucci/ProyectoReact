import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"


export const CartWidgetComponent = (props) => {
  const estadoGlobal = useContext(ShopContext)
  let carrito = estadoGlobal.cart
  let cantidadTotal = 0;

  carrito.forEach(element => {
    cantidadTotal += element.cantidadContext 
  });

  return (
    
    <>
    
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito<span class="badge badge-light">{cantidadTotal}</span>
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Productos seleccionandos</h5>
              <button type="button" className="btn" data-dismiss="modal">X</button>
            </div>
            
            <div className="modal-body">
            <div key="0001" className="row">
                        <div class="col">Producto</div>
                        <div class="col">Cantidad</div>
                        <div class="col">Acciones</div>
                      </div>
              
              {
                carrito.length === 0
                  ? <Link to="/productos" className="text-warning bg-dark">Tu carrito esta vacio</Link>
                  : carrito.map( el =>{

                    return (
                      

                      <div key={el.itemDetalle.id} className="row">
                        <div class="col">{el.itemDetalle.title}</div>
                        <div class="col">{el.cantidadContext}</div>
                        <div class="col"><button type="button" className="btn btn-secondary" onClick={()=> estadoGlobal.deleteQuantity(el.itemDetalle)}>Borrar Item</button></div>
                      </div>
                    )
                  })
              }
              </div>
            
            <div className="modal-footer">
              <h5>{estadoGlobal.totalCarrito}</h5>
              {/* <button type="button" className="btn btn-secondary" onClick={estadoGlobal.vaciarCarrito}>Vaciar carrito</button> */}
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary"><Link to="/cart">Ir al carrito</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}