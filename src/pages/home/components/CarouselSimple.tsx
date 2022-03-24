import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", top: '-20px', color: '#373839', fontSize: '1rem' }}
            onClick={onClick}
        ><i className="fa fa-angle-right"></i></div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", color: '#373839', top: '-20px', right: '2px', left: 'unset', fontSize: '1rem' }}
            onClick={onClick}
        ><i className="fa fa-angle-left"></i></div>
    );
}
export default function CarouselSimple() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className='carousel'>
                <h2 className='carousel_title mb-4'>Tệp riêng tư tải lên gần đây</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}
