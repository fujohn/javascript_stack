import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const { removeFromDom, products, setProducts} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            {
                products.map((product, index)=>{
                return (
                    <div>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        |
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>
                        |
                        <button onClick={ (e) => {deleteProduct(product._id)} }>Delete</button>
                    </div>
                )
                })
            }
        </div>
    )
}

export default ProductList;

