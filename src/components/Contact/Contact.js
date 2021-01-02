import MenuBurger from '../MenuBurger/MenuBurger';
import Left from '../Left/Left';
import './styles.css';

const Contact = ({ page, setPage }) => {
    return (
        <div>
            <MenuBurger page={page} setPage={setPage} />
            <Left name={'portfolio'} setPage={setPage} />
        </div>
    )
}

export default Contact;