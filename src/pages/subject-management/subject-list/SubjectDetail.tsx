import React, { Fragment } from 'react'
import { RightOutlined, PaperClipOutlined, DownloadOutlined } from "@ant-design/icons"
import { useState } from 'react'
import history from '../../../util/history'
export default function SubjectDetail() {

    const [isOpen, setIsOpen] = useState(false)
  

    return (
        <div id="subject-detail" className='main-content px-5'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item' style={{cursor: "pointer"}} onClick={()=>{
                    history.push("/subject-list")
                }}>Danh sách môn học</li>
                <li className='breadcrumb-item px-4'><RightOutlined /> </li>
                <li className='breadcrumb-item ps-0 title_base'>Thương mại điện tử</li>
            </ol>
            <div className='subject-intro container px-5 py-3'>
                <h1>Tổng quan</h1>
                <div className='row'>
                    <div className='col-4 p-0'>
                        <p className='subject-id'>Mã môn học:<span className='ms-2'>20GA</span></p>
                        <p className='subject-name' style = {{
                            cursor: 'pointer'
                        }} onClick={()=>{
                            history.push('/subject-resources/20GA')
                        }}>Môn học:<span>Thương mại điện tử</span></p>
                    </div>
                    <div className='col-8 p-0'>
                        <p className='teacher'>Giảng viên: <span className='ms-2'>hoa hoa</span></p>
                        <p className='description'>Mô tả: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, asperiores.</span></p>
                    </div>
                </div>
            </div>
            <div className='subject-content mt-3'>
                <h1 className='m-0 mb-3'>Danh sách chủ đề</h1>
                <div className='lesson'>
                    <div className={`lesson-name py-2 px-2 p ${isOpen?"active": ""}`}>
                        <RightOutlined className={`arrow-icon me-3`} onClick={() => {
                            setIsOpen(isOpen => !isOpen)
                          
                        }} />
                        <p className='mb-0' style = {{cursor: "pointer"}}>Giới thiệu chung về thương mại điện tử</p>
                    </div>
                    {isOpen?<div className={`lesson-desc`}>
                        <div className='video my-3'>
                            <img src="https://picsum.photos/200/300" alt="" />
                            <div className='overplay'></div>
                            <div className='icon-play'>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className='files'>
                            <h1>Tài nguyên</h1>
                            <hr/>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='d-flex align-items-center resource py-1 px-2 me-3'>
                                    <PaperClipOutlined className='paperclip' />
                                    <p className='file-name mb-0'>HTKL_KT45P_1001.doc</p>
                                </div>
                                <div className='d-flex align-items-center btn-download py-1 px-2'>
                                    <DownloadOutlined className='download' />
                                    <p className='mb-0'>tải về</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='d-flex align-items-center resource py-1 px-2 me-3'>
                                    <PaperClipOutlined className='paperclip' />
                                    <p className='file-name mb-0'>HTKL_KT45P_1001.doc</p>
                                </div>
                                <div className='d-flex align-items-center btn-download py-1 px-2'>
                                    <DownloadOutlined className='download me-3' />
                                    <p className='mb-0'>tải về</p>
                                </div>
                            </div>
                        </div>
                       
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}
