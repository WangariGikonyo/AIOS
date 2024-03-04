
import axios from 'axios'
import './Card.css'
import { useEffect, useState } from 'react';


export function Card() {
    const[loading, setLoading] = useState(false)
    const[data, setData]=useState([])
    const[cart, setCart]=useState([])
    const [cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        setLoading(true)
        axios({
            method:'GET',
            url:'https://fakestoreapi.com/products'
        }).then(res=>{
            // console.log(res.data)
            setData(res.data)
        }).catch(e=>console.log(e))
        .finally(()=>setLoading(false))
    })

    const addCartButton = (item) => {
        console.log('clicked');
        setCartCount(cartCount + 1);
        cart.push(item);
        console.log(item);
    };
  return (
    <div className="container cards-col">
    <div className="row"> 
        {data.map((item) => (
            <div key={item.id} className="col-md-3 col-sm-6">
                <div className='parent-image-cards'>
                    <div className='image-cards'>
                        <img src={item.image} alt="jkt" />
                    </div>
                    <div className='image-cards-text'>
                        <p>{item.title}</p>
                        <p className='money'> KES {item.price}</p>
                        <button  onClick={() => addCartButton(item)}>ADD TO CART</button> <br />
                        <span>{cartCount}</span>
                        <a href="">VIEW</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

   
  );
}