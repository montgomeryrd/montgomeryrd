import './styles.css';

const Right = ({ name, setPage }) => {
    
    return (
        <div className="right-arrow-container">
            <div className="right-arrow" onClick={() => setPage(name)}>
                <div className={`${name}-right-arrow`}>{name}</div>
                <div className="right-arrow-one"></div>
            </div>
        </div>
    )
}

export default Right;