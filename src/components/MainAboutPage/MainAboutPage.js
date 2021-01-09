import Logo from '../Logo/Logo';

function MainAboutPage({ setPage, setToggle }) {
    return (
        <div>
            <Logo setPage={setPage} setToggle={setToggle} />
        </div>
    );
}

export default MainAboutPage;