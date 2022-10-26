import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";

function MovieSlider() {

    const { movies } = useSelector((state) => state.movie);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {

    }, [])
    console.log(movies);
    return (
        <div style={{ color: "white", objectFit: "cover", width: "85%", marginLeft: "auto", marginRight: "auto", }}>
            <div >
                <h2 style={{ marginTop: 20, marginBottom: 20 }}>Trending Movies</h2>
                <Slider {...settings}>
                    {movies.map(movie => (

                        <div>
                            <img style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: "300px", padding: "2px",
                            }} src={`http://localhost:4000/${movie.image}`} />
                        </div>

                    ))}

                </Slider>
            </div >
        </div >

    )
}

export default MovieSlider