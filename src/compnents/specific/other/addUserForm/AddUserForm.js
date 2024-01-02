import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUserAction} from '../../../../store/usersSlice';

const AddUserForm = () => {
    const dispatch = useDispatch();
    const {initialUsers} = useSelector(state=>state.usersReducer);
    const initialUser = {
        id:'',name:'',username:'',email:'',
        phone:'',address:{city:'',street:''}
    };
    const [newUser, setNewUser] = useState(initialUser);

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
        if (!newUser.name || !newUser.username || !newUser.email || !newUser.phone) {
            return alert('Все обязательные поля должны быть заполнены!');
        }

        const updatedAddress = {
            city: newUser.address.city || 'Данных нет',
            street: newUser.address.street || 'Данных нет',
        };

        const updatedUser = {
            ...newUser,
            address: updatedAddress,
            id: initialUsers.length + 1,
        };

        dispatch(addUserAction(updatedUser));
        setNewUser(initialUser);
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