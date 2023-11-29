import React from "react";

const Wall = ({value,count}) => {
    const creatWall = () => {
        let wallValue = '';
        for (let i = 0;i<count;i++){
          wallValue+=value;
        }
        return wallValue;
    }
    return(
      <h2>{creatWall()}</h2>
    )
}

export default Wall;