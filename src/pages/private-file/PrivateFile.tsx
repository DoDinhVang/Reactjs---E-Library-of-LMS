import React, { useState } from 'react'
import { Select, Checkbox, Tag, Popover } from 'antd'
import { RightOutlined, DownloadOutlined, EyeOutlined, FileWordOutlined, MoreOutlined } from '@ant-design/icons';
import history from '../../util/history';
import Pagination from '../../components/Pagination'

const { Option } = Select
export default function PrivateFile() {

  const [active, setActive] = React.useState(1);

  const [isVisiblePopover, setIsVisiblePopover] = useState();
  const activeHandler = (clickedActive: any) => {

    setActive(parseInt(clickedActive));
  };
  return (
    <div id='private-file' className='main-content px-5'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>Trang chủ</li>
        <li className='breadcrumb-item px-4'> <RightOutlined className="icon-arrow" /> </li>
        <li className='breadcrumb-item'>Tệp riêng tư</li>
        <li className='breadcrumb-item px-4'> <RightOutlined className="icon-arrow" /> </li>
        <li className='breadcrumb-item ps-0 title_base'>Tất cả các tệp</li>
      </ol>
      <div className='d-flex align-items-center justify-content-between'>
        <Select className='custom-select' defaultValue="Thể loại" style={{ width: 120 }} onChange={() => {

        }}>
          <Option value="mp4">Mp4</Option>
          <Option value="mp3">Mp4</Option>
          <Option value="doc">Doc</Option>
          <Option value="pp">Ppts</Option>
          <Option value="xlsx">Xlsx</Option>
        </Select>
        <div>
          <DownloadOutlined style={{ color: "#FF7506", fontSize: '1.5rem', height: 42, width: 42, lineHeight: "42px", borderRight: "1.5px solid  #C9C4C0" }} />
          <button className='button-orange ms-3'>Đăng tải</button>
        </div>
      </div>
      <div className='private-file-content py-3 px-5 mt-3'>
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
                <th>Thể loại</th>
                <th>Tên</th>
                <th>Người chỉnh sửa</th>
                <th>Ngày chỉnh sửa</th>
                <th>Kích thước</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Checkbox value="A"></Checkbox></td>
                <td><FileWordOutlined /></td>
                <td style={{ cursor: "pointer" }} onClick={() => {

                }}>A.docs</td>
                <td>Nguyễn văn A</td>
                <td>15/5/2020</td>
                <td>20.5MB</td>
                <td>
                  <Popover
                    content={
                      <div>
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xem trước</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Đổi tên</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Tải xuống</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xóa</p>
                      </div>
                    }
                    placement="bottomRight"
                    trigger="click"
                    visible={isVisiblePopover}
                    onVisibleChange={() => { }}
                  >
                    <MoreOutlined />
                  </Popover>
                </td>
              </tr>
              <tr>
                <td><Checkbox value="A"></Checkbox></td>
                <td><FileWordOutlined /></td>
                <td style={{ cursor: "pointer" }} onClick={() => {

                }}>A.docs</td>
                <td>Nguyễn văn A</td>
                <td>15/5/2020</td>
                <td>20.5MB</td>
                <td>
                  <Popover
                    content={
                      <div>
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xem trước</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Đổi tên</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Tải xuống</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xóa</p>
                      </div>
                    }
                    placement="bottomRight"
                    trigger="click"
                    visible={isVisiblePopover}
                    onVisibleChange={() => { }}
                  >
                    <MoreOutlined />
                  </Popover>
                </td>
              </tr>
              <tr>
                <td><Checkbox value="A"></Checkbox></td>
                <td><FileWordOutlined /></td>
                <td style={{ cursor: "pointer" }} onClick={() => {

                }}>A.docs</td>
                <td>Nguyễn văn A</td>
                <td>15/5/2020</td>
                <td>20.5MB</td>
                <td>
                  <Popover
                    content={
                      <div>
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xem trước</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Đổi tên</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Tải xuống</p>
                        <hr className='m-0' style={{ color: "#CC5C00" }} />
                        <p className='mb-2' style={{ cursor: "pointer" }}>Xóa</p>
                      </div>
                    }
                    placement="bottomRight"
                    trigger="click"
                    visible={isVisiblePopover}
                    onVisibleChange={() => { }}
                  >
                    <MoreOutlined />
                  </Popover>
                </td>
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
