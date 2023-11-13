import Button from "../UI/buttons/Button";
import {useState} from "react";

const Card = ({item}) => {
    const [state,setState] = useState(item);
    const handleAdd = ()=> {
        setState(prev => ({...prev, count: prev.count + 1,price: prev.price+item.price}))
    };
    const handleMinus = ()=> {
        if (state.count === 0) return
        setState(prev => ({...prev, count: prev.count - 1,price: prev.price-item.price}))
    }
    const handleReset = ()=> {
        setState(item);
    }
  return(
      <div>
          {`name: ${state.name} || `}
          {`count: ${state.count} || `}
          {`price: ${state.price} ||`}
          <br/>
          <Button fc={handleAdd}>+</Button>
          <Button fc={handleMinus}>-</Button>
          <Button fc={handleReset}>reset</Button>
      </div>
  )
}

export default Card;