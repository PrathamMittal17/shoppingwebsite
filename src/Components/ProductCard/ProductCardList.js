import React,{useContext} from 'react'
import { Spinner,Alert } from 'react-bootstrap';
import { UserDetails } from '../../App';
import { CartItemsTotal } from '../../App';
import ProductCard from './ProductCard';
import './ProductCardList.css'

const ProductCardList = ({products}) => {
    
    const [user] = useContext(UserDetails);
    const [cartItems,setCartItems]  = useContext(CartItemsTotal);

    
    if(user.id){
    if(products){
    return(
        <div className="ProductCardList">
            {
                products.map((product,i)=>{
                    return <ProductCard
                        key={products[i].product_id}
                        id={products[i].product_id}
                        image={products[i].img}
                        brandName={products[i].brand_name}
                        productName={products[i].product_name}
                        price={products[i].price}
                       userId={user.id}
                       cartTotal={[cartItems,setCartItems]}
                    />
                })
            }
        </div>
    );
        }
    else{
        return(
            <div style={{textAlign:'center',padding:'100px'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
        );
    }
    }
    else{
        return <Alert variant="primary" style={{textAlign:'center'}}>Please Sign In/Register First</Alert>
    }
}

export default ProductCardList;