import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import Pagination from '../../../components/Pagination'
import { BarsOutlined } from '@ant-design/icons';
import history from '../../../util/history';
import { useLocation} from 'react-router-dom';
const { Option } = Select

export default function SubjectList() {
    const [active, setActive] = React.useState(1);
    const{pathname} = useLocation();
    console.log("path", pathname)

    const activeHandler = (clickedActive: any) => {

        setActive(parseInt(clickedActive));
    };
    return (

        <div id='subject-list' className='main-content px-5'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>Quản lý môn học</li>
                <li className='breadcrumb-item px-4'> <RightOutlined /> </li>
                <li className='breadcrumb-item ps-0 title_base'>Danh sách môn học</li>
            </ol>
            <div className='d-flex align-items-center'>
                <p className='mb-0 me-3'>niên khóa</p>
                <Select className='custom-select' defaultValue="2021-2022" style={{ width: 120 }} onChange={() => {

                }}>
                    <Option value="2020-2021">2020-2021</Option>
                    <Option value="2021-2022">2021-2022</Option>
                    <Option value="2022-2023">2022-2023</Option>
                </Select>
            </div>

            <div className='subject-list-content mt-3 py-3 px-5'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <p>Môn học</p>
                            <Select className='custom-select' defaultValue="" style={{ width: 149 }} onChange={() => {

                            }}>
                                <Option value=''>Tất cả môn học</Option>
                                <Option value="môn a">môn a</Option>
                                <Option value="môn b">môn b</Option>
                                <Option value="môn c">môn c</Option>
                            </Select>
                        </div>
                        <div className='mx-3'>
                            <p>Giảng viên</p>
                            <Select className='custom-select' defaultValue="" style={{ width: 158 }} onChange={() => {

                            }}>
                                <Option value=''>Tất cả giảng viên</Option>
                                <Option value="gv1">Giảng Viên a</Option>
                                <Option value="gv2">Giảng Viên b</Option>
                                <Option value="gv3">Giảng Viên c</Option>
                            </Select>
                        </div>
                        <div>
                            <p>Tình trạng tài liệu</p>
                            <Select className='custom-select' defaultValue="" style={{ width: 156 }} onChange={() => {

                            }}>
                                <Option value=''>Tất cả tình trạng</Option>
                                <Option value="dapheduyet">Đã phê duyệt</Option>
                                <Option value="môn b">Chờ phê duyệt</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='input-search-base'>
                        <input placeholder='Tìm kiếm kết quả theo tên, môn học...'></input>
                        <i className="fa fa-search search-icon"></i>
                    </div>
                </div>
                <div className="subject-list mt-3">
                    <table className='table-subject-list'>
                        <thead className='py-3'>
                            <tr>
                                <th>Mã môn học</th>
                                <th>Tên môn học</th>
                                <th>Giảng Viên</th>
                                <th>Số tài liệu chở duyệt</th>
                                <th>Tình trạng tài liệu môn học</th>
                                <th>Ngày gửi phê duyệt</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20GA</td>
                                <td style = {{cursor: "pointer"}} onClick = {()=>{
                                    history.push(`${pathname}/subject-detail/20ga`)
                                }}>Thương mại điện tử</td>
                                <td>Nguyễn văn A</td>
                                <td>15/20</td>
                                <td className='fst-italic' >chờ phê duyệt</td>
                                <td>12/2/2021</td>
                                <td style={{ width: "10%" }}><BarsOutlined style={{ cursor: "pointer" }} /></td>
                            </tr>
                            <tr>
                                <td>20GA</td>
                                <td>Thương mại </td>
                                <td>Nguyễn văn A</td>
                                <td>15/20</td>
                                <td style={{
                                    color: "#49C510"
                                }}>đã phê duyệt</td>
                                <td>12/2/2021</td>
                                <td style={{ width: "10%" }}><BarsOutlined style={{ cursor: "pointer" }} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='data-per-page' style={{fontStyle:"italic"}}>
                            <span>Hiển thị</span>
                            <input className='mx-2' defaultValue={8}/>
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

