import React from "react";

const Wall = ({value,count}) => {
    const creatWall = () => {
        let result = '';

        for (let i = 0;i<count;i++)
            result+=value;

        return result;
    }
    return(
      <h2>{creatWall()}</h2>
    )
}

export default Wall;