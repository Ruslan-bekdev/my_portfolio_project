import React from "react";
import classes from "../CommentsPage.module.css";

const ProductInfo = ({item}) => {
    return(
        <>
            {`Name: ${item.name}`}
            <br/>
            {`Email: ${item.email}`}
            <br/>
            {`Body: ${item.body}`}
            <br/>
        </>
    )
}

const Card = ({item}) => {
    return(
      <div className={classes.itemList__item}>
          <ProductInfo item={item}/>
      </div>
    )
}

export default Card;