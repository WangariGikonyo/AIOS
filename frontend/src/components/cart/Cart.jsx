import './Cart.css'

export function Cart(items) {
  return (
    <div className="  container search-bar ">  
    <div className="row">
        <div class="col-md-6 search-col">
            <input type="search"
            placeholder="Search products"
            />
             <i class="fa fa-search"/>
        </div>
        <div class="  col-md-6 cart-col">
            <div>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>  0 items in your cart


            </div>
        
        <button>Checkout</button>


        </div>
    

    </div>
    
    </div>
  );
}