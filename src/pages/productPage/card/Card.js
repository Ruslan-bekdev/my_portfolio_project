import classes from "../ProductPage.module.css";
import {useState} from "react";
import Button from "../../../compnents/UI/buttons/Button";
import Image from "../../../compnents/UI/image/Image";

const useCardState = (initialProduct) => {
    const [product,setProduct] = useState(initialProduct);

    const handleAdd = ()=> {
        setProduct((prev) => ({
            ...prev,
            count: prev.count + 1,
            price: (prev.count + 1) * initialProduct.price,
        }));
    };
    const handleMinus = () => {
        if (product.count === 0) return
        setProduct((prev) => ({
            ...prev,
            count: prev.count - 1,
            price: (prev.count - 1) * initialProduct.price,
        }));
    };
    const handleReset = ()=> {
        setProduct(initialProduct);
    };

    const [add,minus,reset] = [handleAdd,handleMinus,handleReset]
    return [product,add,minus,reset];
}
const ProductInfo = ({product}) => {
    return(
        <>
            <Image src={product.image} alt={`${product.title.slice(0, 13)}...`} className={classes.item__image}/>
            {`name: ${product.title}`}
            <br/>
            {`count: ${product.count}`}
            <br/>
            {`price: ${product.price}`}
            <br/>
        </>
    )
}
const ActionButtons = ({add,minus,reset}) => {
    return(
        <>
            <Button fc={add}>+</Button>
            <Button fc={minus}>-</Button>
            <Button fc={reset}>reset</Button>
        </>
    )
}

const Card = ({item}) => {
    const [product, add, minus, reset] = useCardState(item);
    return(
      <div className={classes.itemList__item}>
          <ProductInfo product={product}/>
          <ActionButtons add={add} minus={minus} reset={reset}/>
      </div>
    )
}

export default Card;