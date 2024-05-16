export default function Contact(){

    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 address">
                        <div className="info">
                            <p><i className="fa-solid fa-location-dot fa-flip"></i> Bengaluru</p>
                        </div>
                        <div className="info">
                            <p><i className="fa-solid fa-phone fa-shake"></i>+91 6384614956</p>
                        </div>
                        <div className="info">
                            <a href="mailto:manikandan151020@gmail.com">
                                <p><i className="fa-solid fa-envelope fa-bounce"></i>manikandan151020@gmail.com</p>
                            </a>
                        </div>
                        <div className="info">
                            <a href="https://github.com/Manikandan-FE-Developer" target="_blank" rel="noopener noreferrer">
                                <p><i className="fa-brands fa-github fa-spin"></i>Manikandan-FE-Developer</p>
                            </a>
                        </div>
                        <div className="info">
                            <a href="https://www.linkedin.com/in/manikandan2000/" target="_blank" rel="noopener noreferrer">
                                <p><i className="fa-brands fa-linkedin fa-beat"></i>Manikandan D</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="26fef11b-c15b-4d2a-b7ce-413844f6de61"/>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" placeholder="Your Name" required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" name="email" placeholder="Your Email" required/>
                                </div>
                                <div className="form-group">
                                    <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success float-left">Send</button>
                                </div>
                                <div id="response">
                                    <p>Thank you for your message!</p>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </div><br/>
        </section>
    );
}