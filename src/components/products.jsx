import "./products.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return (
    <div className="products">

    <img src="" alt="" />
    <h5>Title Here</h5>

    <h6>$Total</h6>
    <h6>$PRice</h6>
    
    <QuantityPicker></QuantityPicker>

    <button className="btn btn-sm btn-dark">Add</button>
    </div>
    
    );

};

export default Product;