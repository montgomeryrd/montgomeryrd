import MenuBurger from '../MenuBurger/MenuBurger';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './styles.css';

const About = ({ page, setPage }) => {
    return (
        <div>
            <MenuBurger page={page} setPage={setPage} />
            <Left name={'front'} setPage={setPage} />
            <Right name={'works'} setPage={setPage} />
        </div>
    )
}

export default About;