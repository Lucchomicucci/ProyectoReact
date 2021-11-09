import { CartWidgetComponent } from "../CartWidget/cartWidget"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

export const NavbarComponent = (props) => {
    const estadoGlobal = useContext(ShopContext)
    let carrito = estadoGlobal.cart

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <img id="logoppal" src="./imagenes/Beliftlogosinbg.png" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos" className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/productos/1" className="dropdown-item">Remeras</Link>
                            <Link to="/productos/2" className="dropdown-item" >Buzos</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Contacto</Link>
                    </li>
                    {
                    carrito.length !== 0 ?
                    <li className="nav-item">
                        <CartWidgetComponent />
                    </li>
                    : <span></span>
                    }
                </ul>
            </div>
        </nav>
    )
}