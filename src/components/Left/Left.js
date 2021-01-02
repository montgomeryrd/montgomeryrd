import './styles.css';

const Left = ({ name, setPage }) => {

    return (
        <div className="left-arrow-container">
            <div className="left-arrow" onClick={() => setPage(name)}>
                <div className={`${name}-left-arrow`}>{name}</div>
                <div className="left-arrow-one"></div>
            </div>
        </div>
    )
}

export default Left;