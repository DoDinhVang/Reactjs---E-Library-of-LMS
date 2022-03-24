import React from 'react'
import { Select } from 'antd'
import CarouselSimple from './components/CarouselSimple'
import CarouselMulti from './components/CarouselMulti'

const { Option } = Select
export default function Home() {
  return (
    <div id='home' className='px-5 py-3' >
      <h1 className='title_base mb-5'>Trang chủ</h1>
      <div className='row m-0'>
        <div className='col position-relative'>
          <div className='col-container d-flex align-items-center position-absolute' style={{
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <p className='me-3'>Liên khóa</p>
            <Select defaultValue="2021-2022" style={{ width: 120 }} onChange={() => {

            }}>
              <Option value="2020-2021">2020-2021</Option>
              <Option value="2021-2022">2021-2022</Option>
              <Option value="2022-2023">2022-2023</Option>
            </Select>

          </div>
        </div>
        <div className='col '>
          <div className='col-container col-container1'>
            <p>12</p>
            <p>Môn học</p>
          </div>
        </div>
        <div className='col '>
          <div className='col-container col-container2'>
            <p>12</p>
            <p>Giảng viên</p>
          </div>

        </div>
        <div className='col '>
          <div className='col-container col-container3'>
            <p>12</p>
            <p>Tệp riêng tư</p>
          </div>
        </div>
        <div className='col '>
          <div className='col-container col-container4'>
            <p>12</p>
            <p>Đề thi</p>
          </div>
        </div>
      </div>
      {/* carousel multiple  */}
      <CarouselMulti />
      <div className='row recent-activity'>
        <div className='col-3'>
          <div className='activity-container p-2'>
            <h3 className='activity_header'>Thống kê truy cập</h3>
            <div className='row activity_body'>
              <div className='col-9 text-left'>
                  <p>Đang truy cập:</p>
                  <p>Lượt truy cập hôm nay:</p>
                  <p>Lượt truy cập tuần này:</p>
                  <p>Lượt truy cập tháng này:</p>
                  <p>Tổng lượt truy cập:</p>
              </div>
              <div className='col-3 text-center'>
                  <p>31</p>
                  <p>31</p>
                  <p>31</p>
                  <p>31</p>
                  <p>31</p>
                  
              </div>

            </div>
          </div>
        </div>
     
        <div className='col-9'>
             {/* <Carousel/> */}
             <CarouselSimple/>
        </div>

      </div>


    </div>


  )
}
