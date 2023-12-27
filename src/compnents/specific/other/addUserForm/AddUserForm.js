import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUsersAction} from '../../../../redux/actions/actions';

class User {
    constructor(id = '',name = '',username = '',email = '',phone = '',address={city:'',street:''}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

const AddUserForm = () => {
    const dispatch = useDispatch();
    const initialUsers = useSelector(state=>state.usersReducer.initialUsers);
    const [newUser, setNewUser] = useState(new User());

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const {name,value} = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            address:{
                ...prevState.address,
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...newUser,
            id: initialUsers.length+1,
        };
        dispatch(setUsersAction([...initialUsers,updatedUser]));

        setNewUser(new User());
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Добавить себя</h2>
            <div>
                <input value={newUser.name} onChange={handleInputChange} placeholder='Имя' type='text' name="name"/>
            </div>
            <div>
                <input value={newUser.username} onChange={handleInputChange} placeholder='Никнейм' type='text' name="username"/>
            </div>
            <div>
                <input value={newUser.email} onChange={handleInputChange} placeholder='Эл почта' type='text' name="email"/>
            </div>
            <div>
                <input value={newUser.phone} onChange={handleInputChange} placeholder='Номер телефона' type='text' name="phone"/>
            </div>
                <spun>необязательно:</spun>
            <div>
                <input value={newUser.address.city} onChange={handleAddressChange} placeholder='Город' type='text' name="city"/>
            </div>
            <div>
                <input value={newUser.address.street} onChange={handleAddressChange} placeholder='Улица' type='text' name="street"/>
            </div>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddUserForm;
