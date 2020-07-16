import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


//Step 3, import ProductContext into our App
import { ProductContext } from './contexts/ProductContext';
//Step 5b import CartContext into our App
import { CartContext } from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//Step 1
	const addItem = item => {
		setCart(
			[...cart, item]
		)
	};

	return (
		<div className="App">
			{/* // Step 3b, wrap all components and routes in ProductContext.Provider */}
			{/* // Step 5c wrap all components and routes in CartContext.Provider, but let ProductContext.Provider be the root */}
			<ProductContext.Provider value={{ products, addItem }}> 
				<CartContext.Provider value={{ cart }}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
