import './Card.css'
import jacketImage from '../../assets/jacket.jpg'


export function Card() {
  return (
    <div className="container cards-col">
        <div className="row"> 
            <div className="col-md-3 " >
                <div className=' parent-image-cards'>
                <div className='image-cards'>
                    <img src={jacketImage} alt="jkt" />
                </div>
                <div className='image-cards-text'>
                    <p>Brown leather jacket</p>
                    <p className='money'>KES 4,500</p>
                    <button>ADD TO CART</button> <br />
                    <a href="">VIEW</a>
                </div>

                </div>
             
            </div>
            <div className="col-md-3 " ></div>
            <div className="col-md-3 " ></div>
            <div className="col-md-3 " ></div>
        </div>
    </div>
  );
}