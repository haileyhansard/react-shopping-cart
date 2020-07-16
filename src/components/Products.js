import React, { useContext }  from 'react';
//Step 4, import useContext hook and pass in the context object we want to use into it
//Step4b also import the ProductContext (below)


// Components
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
	const {products, addItem} = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
