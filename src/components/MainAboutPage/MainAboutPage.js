import Logo from '../Logo/Logo';

function MainAboutPage({ page, setPage }) {
    return (
        <div>
            <Logo page={page} setPage={setPage} />
        </div>
    );
}

export default MainAboutPage;