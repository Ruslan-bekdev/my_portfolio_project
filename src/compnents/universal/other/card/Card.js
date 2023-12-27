import React, {useState} from "react";
import Button from "../../UI/buttons/Button";
import Image from "../../UI/image/Image";

const Card = ({item,config}) => {
    const {mapper,functions,classes} = config;
    const [newItem,setNewItem] = useState(item);

    const isImageLink = (string) => {
        return typeof string === 'string' && string.match(/\.(jpeg|jpg|gif|png)$/) != null
    };

    const renderContent = () => {
        return Object.entries(mapper).map(([key, value], index) => {
            const itemKeyValue = newItem[key];
            return isImageLink(itemKeyValue)
                ? <Image customClasses={classes.image} src={itemKeyValue}/>
                : <div>{`${value} ${itemKeyValue}`}<br/></div>
        });
    };

    const renderControls = () => {
        let buttons;
        buttons = functions.map((func,index) => (
            <Button func={()=>func.onClick(newItem,setNewItem)} customClasses={func.className} key={index}>
                {func.label}
            </Button>
        ));
        return <div>{buttons}</div>
    };

    return (
        <div className={classes.item}>
            {renderContent()}
            {renderControls()}
        </div>
    );
};

export default Card;