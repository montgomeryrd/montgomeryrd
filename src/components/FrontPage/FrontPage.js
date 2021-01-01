import ContactLinks from '../ContactLinks/ContactLinks';
import MenuBurger from '../MenuBurger/MenuBurger';
import Right from '../Right/Right';

const FrontPage = ({ page, setPage }) => {

    return (
        <div>
            <ContactLinks />
            <MenuBurger page={page} setPage={setPage} />
            <Right name={'about'} page={page} setPage={setPage} />
        </div>
    )
}

export default FrontPage;