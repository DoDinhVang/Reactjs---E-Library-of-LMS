import React,{useState} from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Select, Checkbox, Tag } from 'antd'
import Pagination from '../../../components/Pagination'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import MyModal from '../../../components/MyModal';
import { useDispatch } from 'react-redux';
import { setVisibleModalActionCreator } from '../../../redux/action-creator/ModalActionCreator';
const { Option } = Select

export default function SubjectMatetial() {

    const dispatch = useDispatch();
    const [active, setActive] = React.useState(1);
    const activeHandler = (clickedActive: any) => {

        setActive(parseInt(clickedActive));
    };


    return (
        <div id='subject-material' className='main-content px-5'>
            <MyModal title = "Hủy phê duyệt"></MyModal>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>Quản lý môn học</li>
                <li className='breadcrumb-item px-4'> <RightOutlined /> </li>
                <li className='breadcrumb-item ps-0 title_base'>Danh sách Tài Liệu</li>
            </ol>
            <div className='d-flex align-items-center justify-content-between'>
                <Select className='custom-select' defaultValue="all" style={{ width: 155 }} onChange={() => {

                }}>
                    <Option value="all">Tất cả tình trạng</Option>
                    <Option value="done">Đã phê duyệt</Option>
                    <Option value="wait">Chờ phê duyệt</Option>
                    <Option value="cancel">Đã hủy</Option>
                </Select>
                <div>
                    <DownloadOutlined style={{ color: "#FF7506", fontSize: '1.5rem', height: 42, width: 42, lineHeight: "42px", borderRight: "1.5px solid  #C9C4C0" }} />
                    <button className='button-gray mx-2' onClick={()=>{
                         dispatch(setVisibleModalActionCreator(true));
                    }}>Hủy</button>
                    <button className='button-orange'>Phê duyệt</button>
                </div>
            </div>

            <div className='subject-material-content mt-3 py-3 px-5'>
                <div className='d-flex align-items-center justify-content-end'>
                    <div className='input-search-base'>
                        <input placeholder='Tìm kiếm kết quả theo tên, môn học...'></input>
                        <i className="fa fa-search search-icon"></i>
                    </div>
                </div>
                <div className="table-main mt-3">
                    <table className='table-content'>
                        <thead className='py-3'>
                            <tr>
                                <th><Checkbox value="A"></Checkbox></th>
                                <th>Tên tài liệu</th>
                                <th>Phân loại</th>
                                <th>Giảng Viên</th>
                                <th>Ngày gửi</th>
                                <th>Tình trạng</th>
                                <th>Phê duyệt tài liệu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Checkbox value="A"></Checkbox></td>
                                <td>20GA</td>
                                <td style={{ cursor: "pointer" }} onClick={() => {

                                }}>Bài giảng</td>
                                <td>Nguyễn văn A</td>
                                <td>15/5/2020</td>
                                <td className='fst-italic' ><Tag color="success">Đã phê duyệt</Tag></td>
                                <td style={{ color: "#7C7C7C", fontStyle: "italic" }}>đã phê duyệt</td>
                                <td> <EyeOutlined /></td>
                            </tr>
                            <tr>
                                <td><Checkbox value="A"></Checkbox></td>
                                <td>20GA</td>
                                <td style={{ cursor: "pointer" }} onClick={() => {

                                }}>Bài giảng</td>
                                <td>Nguyễn văn A</td>
                                <td>15/5/2020</td>
                                <td className='fst-italic' ><Tag color="processing">Chờ phê duyệt</Tag></td>
                                <td>
                                    <div>
                                        <button className='button-orange me-3'>Phê duyệt</button>
                                        <button className='button-gray' style = {{backgroundColor: "#C9C4C0"}}>Hủy</button>
                                    </div>

                                </td>
                                <td> <EyeOutlined /></td>
                            </tr>
                            <tr>
                                <td><Checkbox value="A"></Checkbox></td>
                                <td>20GA</td>
                                <td style={{ cursor: "pointer" }} onClick={() => {

                                }}>Bài giảng</td>
                                <td>Nguyễn văn A</td>
                                <td>15/5/2020</td>
                                <td className='fst-italic' ><Tag color="error">Đã hủy</Tag></td>
                                <td style={{ color: "#7C7C7C", fontStyle: "italic" }}>
                                    Đã hủy

                                </td>
                                <td> <EyeOutlined /></td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='data-per-page' style={{ fontStyle: "italic" }}>
                            <span>Hiển thị</span>
                            <input className='mx-2' defaultValue={8} />
                            <span>hàng trong mỗi trang</span>
                        </div>
                        <div>
                            <Pagination
                                active={active}
                                size={100}
                                step={2}
                                onClickHandler={activeHandler}
                                position="end"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
