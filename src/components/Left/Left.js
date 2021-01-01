import { useState } from 'react';
import './styles.css';

const Left = ({ name, setPage }) => {
    const[nameOfContainer, setNameOfContainer] = useState('arrow-container-left');

    return (
        <div className={nameOfContainer} onClick={() => setNameOfContainer('arrow-container-left zoom')}>
            <div className="arrow-left" onClick={() => setTimeout(() => setPage(name), 2000)}>
                <div className={name}>{name}</div>
                <div className="arrow-left-one"></div>
            </div>
        </div>
    )
}

export default Left;