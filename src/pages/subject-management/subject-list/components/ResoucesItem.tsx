import React from 'react'
import { RightOutlined, FileOutlined } from '@ant-design/icons'
import {useState} from "react"

export default function ResoucesItem() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const trunCaseText = (text: string) =>{
        if (text.length > 30) {
            return text.substring(0, 30) + "..."
        }
        return text;
    }
    return (
        <>
            {!isOpen ?
                <div className="d-flex align-items-center item-close ps-2 pe-1 mb-3">
                    <h4>{trunCaseText("Bài 1 : giới thiệu về thương mại điện tử")}</h4>
                    <RightOutlined className='arrow-icon'  onClick={()=>{
                        setIsOpen(isOpen => !isOpen);
                    }}/>
                    <p>1/2 <span>|</span> <span>45 phút</span></p>
                </div> :
                <div className="ps-3 pe-1 py-1 item-open mb-3">
                    <div className='d-flex align-items-center item-open-tittle'>
                        <h4>{trunCaseText("Bài 1 : giới thiệu về thương mại điện tử")}</h4>
                        <RightOutlined className='arrow-icon'  onClick={()=>{
                        setIsOpen(isOpen => !isOpen);
                    }} />
                        <p>1/2 <span>|</span> <span>45 phút</span></p>
                        <hr></hr>
                    </div>
                    <div className='d-flex align-items-center item-open-content mb-3 py-2 px-3'>
                        <div className='play-icon col-4 me-3'>
                            <i className="fa fa-play"></i>
                        </div>
                        <h4 className='col-8'> 1: Giới thiệu về thương mai điện tử trong những năm gần đây</h4>
                    </div>
                    <div className='d-flex align-items-center item-open-content py-2 px-3'>

                        <div className='file-icon col-4 me-3'>
                            <FileOutlined />
                        </div>
                        <h4 className='col-8'> 1: Giới thiệu về thương mai điện tử trong những năm gần đây</h4>
                    </div>
                    <div className="lineheight"></div>

                </div>}
        </>
    )
}
