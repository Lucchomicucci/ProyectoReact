import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavbarComponent } from './components/Navbar/navbar';
import { ItemListContainer } from './containers/ItemListContainer/itemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer';
import { HomeContainer } from './containers/HomeContainer/homeContainer';
import { ShopComponentContext } from './context/shopContext';
import { Cart } from './components/Cart/cart';
import { Checkout } from './components/Checkout/checkout';

function App() {
  return (
    <ShopComponentContext>
      <BrowserRouter>
      
        <NavbarComponent />

          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/productos" component={ItemListContainer} />
            <Route exact path="/productos/:category" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="*" component={() => <h1>404</h1> /* TODO Crear componente personalizado de 404*/}/> 
          </Switch>

      </BrowserRouter>
    </ShopComponentContext>
  );
}

export default App;

