const DataUnavailablePlaceholder = ({ message }) => {
    return (
        <div className='container'>
            <p>Данные недоступны</p>
            <p>{message}</p>
        </div>
    );
};

export default DataUnavailablePlaceholder;