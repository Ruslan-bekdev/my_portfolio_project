import {useState} from "react";
import './App.css';
import Card from "./compnents/card/Card";

function App() {
    const initialProducts = [
        {name: 'first', count: 0, price: 10},
        {name: 'second', count: 0, price: 20},
        {name: 'third', count: 0, price: 30},
    ]
    const [searchInput,setSearchInput] = useState('');
    const handleInputChange = (e) =>{
        setSearchInput(e.target.value);
    }
    const getFilteredProducts = () => {
        return initialProducts.filter((item) => item.name.includes(searchInput.trim()));
    }
    const renderProducts = () => {
        const filteredProducts = getFilteredProducts();
        return filteredProducts.length
            ?filteredProducts.map((item,index) => <Card item={item} key={index+1}/>)
            :<p>Товары не найдены</p>
    }
  return (
    <div className="App">
            <input onChange={handleInputChange} value={searchInput}
                   type="text" name="name" id=""
            />
            {renderProducts()}
    </div>
  );
}

export default App;
