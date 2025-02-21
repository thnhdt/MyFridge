import React, { useState } from 'react';
import '../components/css/Fridge.css'; // Import file CSS mới
import img1 from '../assets/images/milk.jpg';
import img2 from '../assets/images/eggs.jpg';
import img3 from '../assets/images/chicken.jpg';
import img4 from '../assets/images/cabbage.jpg';
import img5 from '../assets/images/banhmi.jpg';
import img6 from '../assets/images/beef.jpg';

const fridgeItems = [
    {
        id: 1,
        name: 'Sữa tươi',
        image: img1,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    {
        id: 2,
        name: 'Trứng',
        image: img2,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    {
        id: 3,
        name: 'Thịt gà',
        image: img3,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    // {
    //     id: 5,
    //     name: 'Bánh mì',
    //     image: 'path/to/image5.jpg',
    //     dateAdded: '05-03-2025',
    //     expirationDate: '25-03-2025',
    // },
];

const expiredItems = [
    {
        id: 4,
        name: 'Xà lách',
        image: img4,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    {
        id: 6,
        name: 'Thịt bò',
        image: img6,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    {
        id: 7,
        name: 'Sữa bò',
        image: img1,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
    // {
    //     id: 8,
    //     name: 'Thịt gà',
    //     image: 'path/to/image3.jpg',
    //     dateAdded: '05-03-2025',
    //     expirationDate: '25-03-2025',
    // },
    // {
    //     id: 9,
    //     name: 'Rau xanh',
    //     image: 'path/to/image4.jpg',
    //     dateAdded: '05-03-2025',
    //     expirationDate: '25-03-2025',
    // },
    {
        id: 10,
        name: 'Bánh mì',
        image: img5,
        dateAdded: '05-03-2025',
        expirationDate: '25-03-2025',
    },
];

const Fridge = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [fridgeItemsState, setFridgeItemsState] = useState(fridgeItems);
    const [expiredItemsState, setExpiredItemsState] = useState(expiredItems);

    const handleDelete = (id) => {    
        setFridgeItemsState(fridgeItemsState.filter(item => item.id !== id));
        setExpiredItemsState(expiredItemsState.filter(item => item.id !== id));
    };

    return (
        <div className="fridge-container">
            <h1 style={{ marginTop: '60px' }}>Danh sách sản phẩm trong tủ lạnh</h1>
            <div className="fridge-columns">
                <div className="expired-items">
                    <h2>Sản phẩm còn hạn</h2>
                    {fridgeItemsState.map(item => (
                        <div 
                            key={item.id} 
                            className="fridge-item" 
                            onMouseEnter={() => setHoveredItem(item.id)} 
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="item-content">
                                <div className="item-info">
                                    <img src={item.image} alt={item.name} />
                                    <h2 style={{ marginLeft: '10px' }}>{item.name}</h2>
                                </div>
                                <button className="delete-button" onClick={() => handleDelete(item.id)}>Xóa</button>
                            </div>
                            {hoveredItem === item.id && (
                                <div className="item-details">
                                    <p>Ngày bỏ vào: {item.dateAdded}</p>
                                    <p>Ngày hết hạn: {item.expirationDate}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="expired-items">
                    <h2>Sản phẩm đã hết hạn</h2>
                    {expiredItemsState.map(item => (
                        <div 
                            key={item.id} 
                            className="fridge-item" 
                            onMouseEnter={() => setHoveredItem(item.id)} 
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="item-content">
                                <div className="item-info">
                                    <img src={item.image} alt={item.name} />
                                    <h2 style={{ marginLeft: '10px' }}>{item.name}</h2>
                                </div>
                                <button className="delete-button" onClick={() => handleDelete(item.id)}>Xóa</button>
                            </div>
                            {hoveredItem === item.id && (
                                <div className="item-details">
                                    <p>Ngày bỏ vào: {item.dateAdded}</p>
                                    <p>Ngày hết hạn: {item.expirationDate}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fridge;
