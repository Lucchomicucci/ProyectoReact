import { Link } from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className="card">
            
                <img src={props.productos.pictureUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.productos.title}</h5>
                        <p className="card-text">{props.productos.description}</p>
                        <p className="card-text">${props.productos.price}</p>
                    </div>
                    <button className="btn btn-primary"><Link to={`/item/${props.productos.id}`}>Ver producto</Link></button>
        </div>
    )
}