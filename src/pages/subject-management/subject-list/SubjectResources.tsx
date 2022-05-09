import React from 'react'
import history from '../../../util/history'
import { RightOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default function SubjectResources() {

    const trunCaseText = (text:string)=>{
        if(text.length > 30){
            return text.substring(0,30) + "..."
        }
        return text;
    } 
    return (
        <div id='subject-resources' className='main-content px-5'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item' style={{ cursor: "pointer" }} onClick={() => {
                    history.push("/subject-list")
                }}>Danh sách môn học</li>
                <li className='breadcrumb-item px-4'><RightOutlined /> </li>
                <li className='breadcrumb-item ps-0 title_base'>Thương mại điện tử</li>
            </ol>

            <div className='resources-content container'>
                <div className='row'>
                    <div className='resources-left col-8'>
                        <video style={{ width: "100%", height: "300px" }} controls>
                            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
                        </video>
                        <Tabs defaultActiveKey="1" onChange={()=>{}}>
                            <TabPane tab="Tổng quan" key="1">
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Hỏi đáp" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Thông báo môn học" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>

                    </div>
                    <div className='resources-right col-4'>
                            <h3>Nội dung môn học</h3>
                            <div className='resources-content'>
                                <div className='d-flex align-items-center resources-item ps-2 pe-1'>
                                    <h4>{trunCaseText("Bài 1 : giới thiệu về thương mại điện tử")}</h4>
                                    <RightOutlined className='arrow-icon'/>
                                    <p>1/2 <span>|</span> <span>45 phút</span></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
