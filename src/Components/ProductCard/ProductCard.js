import React,{useEffect, useState} from 'react'
import {Card,Button} from 'react-bootstrap';


const ProductCard = ({id=0,image,brandName,productName,price,userId=0,cartTotal}) => {

    const [inCart,changeInCart] = useState("Add To Cart");
    const [buttonDisable,changeButtonDisable] = useState(false);

    useEffect(()=>{
        console.log(userId)
        fetch("https://young-refuge-95269.herokuapp.com/getitemcartstatus",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                customerId:userId,
                productId:id
               })
        })
        .then(data=>data.json())
        .then(status=>{
            if(status[0]){
                changeInCart("Item In Cart");
                changeButtonDisable(true);
            }
            else{
                changeInCart("Add to Cart");
                changeButtonDisable(false);
            }
        })
        
        
    },[userId,id]);

    const addToCart=()=>{
        changeInCart("Item In Cart");
        changeButtonDisable(true);
        if(userId){
            fetch("https://young-refuge-95269.herokuapp.com/cart",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    productId:id,
                    customerId:userId,
                    status:'T'
                })
            })

            fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{
                method:"put",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    customerId:userId,
                    operation:"I"
                    
                })
            })
            .then(data=>data.json())
            .then(total=>cartTotal[1](total))
            
        }
    }
    
    return(
        <Card style={{ width: '18rem', margin:'20px'}}>
            <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down'}} variant="top" src={image} />
            <Card.Body>
                <Card.Subtitle>{brandName}</Card.Subtitle>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                Rs.{price}
                </Card.Text>
                <Button disabled={buttonDisable} variant="primary" onClick={addToCart}>{inCart}</Button>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;