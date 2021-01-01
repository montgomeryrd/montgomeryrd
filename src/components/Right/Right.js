import './styles.css';

const Right = ({ name, page, setPage }) => {
    
    return (
        <div className={`${page}-arrow-container`}>
            <div className={`${page}-arrow`} onClick={() => setTimeout(() => setPage(name), 2000)}>
                <div className={`${page}-${name}-arrow`}>{name}</div>
                <div className={`${page}-arrow-one`}></div>
            </div>
        </div>
    )
}

export default Right;