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
            <div className='carousel carousel-simple'>
                <h2 className='carousel_title mb-4'>Tệp riêng tư tải lên gần đây</h2>
                <Slider {...settings}>
                    <div className='d-flex align-items-center carousel_item'>
                        <div className='img-subject me-3'>
                            <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                            <div className='overplay'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='intro-subject'>
                            <div>
                                <h5 className='subject'>Thương mại điện tử là gì.doc</h5>
                                <p className='date'>12:01 12/12/2022</p>
                            </div>
                            <div>
                                <h5 className='classId'>W2B23 </h5>
                                <p className='teacher'>Giảng viên Hoa Hoa  </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center carousel_item'>
                        <div className='img-subject me-3'>
                            <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                            <div className='overplay'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='intro-subject'>
                            <div>
                                <h5 className='subject'>Thương mại điện tử là gì.doc</h5>
                                <p className='date'>12:01 12/12/2022</p>
                            </div>
                            <div>
                                <h5 className='classId'>W2B23 </h5>
                                <p className='teacher'>Giảng viên Hoa Hoa  </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center carousel_item'>
                        <div className='img-subject me-3'>
                            <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                            <div className='overplay'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='intro-subject'>
                            <div>
                                <h5 className='subject'>Thương mại điện tử là gì.doc</h5>
                                <p className='date'>12:01 12/12/2022</p>
                            </div>
                            <div>
                                <h5 className='classId'>W2B23 </h5>
                                <p className='teacher'>Giảng viên Hoa Hoa  </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center carousel_item'>
                        <div className='img-subject me-3'>
                            <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                            <div className='overplay'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='intro-subject'>
                            <div>
                                <h5 className='subject'>Thương mại điện tử là gì.doc</h5>
                                <p className='date'>12:01 12/12/2022</p>
                            </div>
                            <div>
                                <h5 className='classId'>W2B23 </h5>
                                <p className='teacher'>Giảng viên Hoa Hoa  </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center carousel_item'>
                        <div className='img-subject me-3'>
                            <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                            <div className='overplay'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='intro-subject'>
                            <div>
                                <h5 className='subject'>Thương mại điện tử là gì.doc</h5>
                                <p className='date'>12:01 12/12/2022</p>
                            </div>
                            <div>
                                <h5 className='classId'>W2B23 </h5>
                                <p className='teacher'>Giảng viên Hoa Hoa  </p>
                            </div>
                        </div>
                    </div>

                  
                </Slider>
            </div>
        </>
    )
}
