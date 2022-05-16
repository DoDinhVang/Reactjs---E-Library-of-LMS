import React from 'react'
import { Checkbox, Input, DatePicker } from 'antd'
const { TextArea } = Input
export default function ModalContent() {
  return (
    <div>
      <form>
        <div className='row m-0'>
          <div className='col-4 m-0'>
            <p style={{ color: "#373839", fontWeight: "700" }}>Ngày bắt đầu <span style={{ color: "#FF7506" }}>*</span></p>
            <p style={{ color: "#373839", fontWeight: "700" }}>Người hủy <span style={{ color: "#FF7506" }}>*</span></p>
            <p style={{ color: "#373839", fontWeight: "700" }}>Ghi chú</p>
          </div>
          <div className='col-8 m-0'>
            <DatePicker style={{ width: '120px', display: "block" }} className='mb-3' showTime onChange={() => { }} onOk={() => { }} />
            <Input style={{ width: "120px", display: "block" }} placeholder="Basic usage" className='mb-3' />
            <TextArea className='mb-3' rows={4} placeholder="maxLength is 6" maxLength={6} />
            <div className='mb-3'>
              <Checkbox checked={true} className="me-3"></Checkbox>
              <span>Gửi thông báo cho người tạo</span>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='button-gray me-3'>Hủy</button>
          <button className='button-orange'>Lưu</button>
        </div>
      </form>

    </div>
  )
}
