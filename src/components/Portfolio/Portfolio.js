import MenuBurger from '../MenuBurger/MenuBurger';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './styles.css';

const Portfolio = ({ page, setPage }) => {
    return (
        <div>
            <MenuBurger page={page} setPage={setPage} />
            <Left name={'about'} setPage={setPage} />
            <Right name={'contact'} setPage={setPage} />
        </div>
    )
}

export default Portfolio;