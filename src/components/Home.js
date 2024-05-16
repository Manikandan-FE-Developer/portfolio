export default function Home(){

    function download(){
        const resumeUrl = 'https://drive.google.com/uc?export=download&id=1ADutcr7UwsSQLbg59uCV7BTT4DNGGB5q';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Manikandan_CV.pdf';
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);
    }

    return (
        <section className="home" id="home">
            <div className="row">
                <div className="col-md-7">
                    <h2>I'm <span>Manikandan</span></h2>
                    <h4>Frontend Developer</h4>
                    <p>
                        As a frontend developer, I specialize in crafting engaging websites using HTML, CSS, JavaScript, and Bootstrap. I'm constantly learning and exploring new technologies, staying updated with the latest trends and tools to deliver high-quality work. You can check out my GitHub projects to see the tools I prefer and explore my Instapaper "Starred" list for insights into my interests and ongoing learning journey. Additionally, I enjoy working with APIs to create dynamic and interactive web experiences.           
                    </p>
                    <div className="download">
                        <button id="downloadBtn" onClick={download}>DOWNLOAD CV</button>
                    </div>              
                </div>
                <div className="col-md-5">
                    <div className="pic">
                        <img src="/images/myPic.jpg" alt="myPic"/>
                    </div>
                </div>
            </div><br/>
        </section>
    );
}