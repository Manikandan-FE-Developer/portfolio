import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certification() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section id="certification" className="certification">
            <h1>CERTIFICATION</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="swiper">
                            <Slider {...settings}>
                                <div className="swiper-slide">
                                    <img src="images/certificates/C.jpg" alt="c" />
                                    <p>Diploma in C</p>
                                    <p>Green Apple Computer Education, Mayiladuthurai.</p>
                                </div>
                                <div className="swiper-slide">
                                    <img src="images/certificates/J.jpg" alt="j" />
                                    <p>Java & MySQL</p>
                                    <p>Besant Technologies, Chennai</p>
                                </div>
                                <div className="swiper-slide">
                                    <img src="images/certificates/Junior.jpg" alt="junior" />
                                    <p>English Typewriting Junior</p>
                                    <p>Viveka Technical Institute, Mayiladuthurai.</p>
                                </div>
                                <div className="swiper-slide">
                                    <img src="images/certificates/Senior.jpg" alt="senior" />
                                    <p>English Typewriting Senior</p>
                                    <p>Viveka Technical Institute, Mayiladuthurai.</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div><br/>
        </section>
    );
}