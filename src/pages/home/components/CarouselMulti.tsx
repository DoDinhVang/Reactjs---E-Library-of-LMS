import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function CarouselMulti() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='carousel mt-5 mb-5'>
            <h2 className='carousel_title mb-4'>Tài liệu môn học đã xem gần đây</h2>
            <Slider {...settings}>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center carousel_item'>
                    <div className='intro-subject me-3'>
                        <img src='https://picsum.photos/100/100' alt='img' className=' h-full w-full'></img>
                        <div className='overplay'>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className='subject'>Phát triển website </h5>
                            <p className='category'>Web Design</p>
                        </div>
                        <div>
                            <h5 className='classId'>W2B23 </h5>
                            <p className='teacher'>Giảng viên Hoa Hoa  </p>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>


    )
}
