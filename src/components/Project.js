export default function Project(){
    return (
        <section id="project" className="project">
            <h1>PROJECT</h1> 
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/projects/ecommerce.png" alt="pro1"/>
                    </div>
                    <div className="col-md-6">
                        <a href="https://e-commerce-r0a8.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <h3><i className="fa-solid fa-link"></i> E-COMMERCE WEBSITE</h3>
                        </a>
                        <div>
                            <ul>
                                <li>Developed a dynamic E-Commerce platform using the MERN stack. Integrated React.js for intuitive user interfaces, revolutionizing online shopping experiences.</li>
                                <li>Implemented robust backend functionalities with Node.js and Express.js. Utilized MongoDB for efficient data storage and management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/projects/Todolist.png" alt="pro2"/>
                    </div>
                    <div className="col-md-6">
                        <a href="https://manikandan-fe-developer.github.io/To-Do_List/" target="_blank" rel="noopener noreferrer">
                            <h3><i className="fa-solid fa-link"></i> DYNAMIC TO-DO LIST WEBSITE</h3>
                        </a>
                        <div>
                            <ul>
                                <li>Created a dynamic todo list website for efficient task management with real-time updates.</li>
                                <li>Implemented local storage for seamless access to tasks across sessions and designed a user-friendly interface for easy task manipulation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/projects/Chatbot.png" alt="pro3"/>
                    </div>
                    <div className="col-md-6">
                        <a href="https://beginnercodes.wixsite.com/chatbot" target="_blank" rel="noopener noreferrer">
                            <h3><i className="fa-solid fa-link"></i> CHATBOT INTEGRATION ON WIX WEBSITE</h3>
                        </a>
                        <div>
                            <ul>
                                <li>Integrated ChatGPT into a Wix website for enhanced user engagement and support.</li>
                                <li>Collaborated with teams to define project objectives and deploy, implementing NLP algorithms for relevant responses.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><br/>
        </section>
    );
}