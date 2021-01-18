import Logo from '../Logo/Logo';
import './styles.css';

function MainContactPage({ page, setPage, toggle, setToggle }) {
    return (
        <div>
            <Logo setPage={setPage} setToggle={setToggle} />
            <main>
                <section className="contact">
                    <div className="container">
                        <h1>Get in touch</h1>
                        <p>Please enter your contact information and I will try and respond in a timely fashion</p>

                        <form>
                            <div className="form-group">
                                <label for="firstname">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    required
                                    className="form-element"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group">
                                <label for="lastname">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    required 
                                    className="form-element" 
                                    placeholder="" 
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    className="form-element" 
                                    placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    id="company" 
                                    className="form-element" 
                                    placeholder="" />
                            </div>
                            <div class="form-group full">
                                <label for="message">What are you looking for?</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="form-element" 
                                    placeholder=""></textarea>
                            </div>
                            <div class="submit-group">
                                <input type="submit" value="SEND MESSAGE" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <a id="linkedin-link" href="https://linkedin.com/in/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="linkedin montgomeryrd">

            </a>

            <a id="twitter-link" href="https://twitter.com/richard04755318" target="_blank" rel="noopener noreferrer" alt="twitter richard.montgomery.dev">

            </a>
        </div>
    )
}

export default MainContactPage;