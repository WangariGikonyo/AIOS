import './Hero.css'
import jacketImage from '../../assets/jacket.jpg'
import ringImage from '../../assets/ring.jpg'
import diskImage from '../../assets/disk.jpg'

export function Hero() {
    return (
        <div className="green-bg">
            <div className=' green-bg-content container'>
                <div className="text-space">
                    <p>Welcome to <span className='orange-text'>AIOS</span> ( All In One Store ), Where <br /> you can get everything you need in one <br />store. Whether it is clothes, gadgets, food, <br /> home appliance and everything else.</p>
                </div>
                <div className="" style={{paddingBottom:20}}>
                    <div id="carousel-auto" class="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-auto" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-auto" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-auto" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                        <div class="carousel-inner">
                            <div class="carousel-image-div carousel-item active" data-bs-interval="2000">
                                <img src={jacketImage} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-image-div carousel-item" data-bs-interval="2000">
                                <img src={ringImage} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-image-div carousel-item" data-bs-interval="2000">
                                <img src={diskImage} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-auto" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-auto" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>



                </div>
            </div> 
        </div>
   
      
    );
}