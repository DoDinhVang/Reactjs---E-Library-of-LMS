import React from 'react'
import { useState } from 'react';
import history from '../../../util/history'
import { RightOutlined, FileOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';
import ResoucesItem from './components/ResoucesItem';
const { TabPane } = Tabs;
export default function SubjectResources() {

    return (
        <div id='subject-resources' className='main-content p-5'>
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
                        <Tabs defaultActiveKey="1" onChange={() => { }}>
                            <TabPane tab="Tổng quan" key="1" className='tabpane-1'>
                                <div>
                                    <div className='d-flex'>
                                        <h4 style={{flexBasis:'16%'}}>Giảng viên: </h4>
                                        <p>Hoa Hoa</p>
                                    </div>
                                    <div className='d-flex'>
                                        <h4 style={{flexBasis:'18%'}}>Mô tả:</h4>
                                        <div style={{ marginLeft: '58px' }}>
                                            <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At error architecto iure ipsa, ipsum ullam temporibus vero reprehenderit accusantium voluptatum laborum assumenda ab autem pariatur esse dicta quasi illo sed.</p>
                                        </div>

                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Hỏi đáp" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Thông báo môn học" key="3">
                                <div>
                                    <div>
                                        <img src=''></img>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>

                    </div>
                    <div className='resources-right col-4 p-3'>
                        <h3>Nội dung môn học</h3>
                        <hr></hr>
                        <div className='resources-content-e'>
                            <div className='resources-item mb-3'>
                                <ResoucesItem></ResoucesItem>
                                <ResoucesItem></ResoucesItem>
                                <ResoucesItem></ResoucesItem>
                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
