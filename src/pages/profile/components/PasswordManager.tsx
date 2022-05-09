import React from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Option } = Select;

export default function PasswordManager() {

    const iconRender = (visible: any) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />

return (
    <>
        <h3 className='title px-5 py-3 mb-0'>Thay đổi mật khẩu</h3>
        <div className='row m-0 p-5' style={{ minHeight: '200' }}>
            <div className=' col-8 '>
                <form>
                    <div className='userId d-flex mb-3'>
                        <p className='mb-0 me-3 text-password' style={{ whiteSpace: 'nowrap', width: '30%' }}>Mật khẩu hiện tại:<span>*</span></p>
                        <Input.Password iconRender={iconRender} size='large' defaultValue={'123'} style={{ width: '70%' }} />
                    </div>
                    <div className='userId d-flex  mb-3'>
                        <p className='mb-0 me-3  text-password' style={{ whiteSpace: 'nowrap', width: '30%' }}>Mật khẩu mới:<span>*</span></p>
                        <Input.Password iconRender={iconRender} size='large' defaultValue={'123'} style={{ width: '70%' }} />
                    </div>
                    <div className='userId d-flex mb-3'>
                        <p className='mb-0 me-3  text-password' style={{ whiteSpace: 'nowrap', width: '30%' }}>Nhập lại mật khẩu mới:<span>*</span></p>
                        <Input.Password iconRender={iconRender} defaultValue={'Quản lý'} style={{ width: '70%' }} />
                    </div>
                    <div className='my-4 text-center'>
                        <button className='button-gray me-3'>Hủy</button>
                        <button className='button-orange'>Lưu</button>
                    </div>
                </form>
            </div>
            <div className=' col-4 px-4'>
                <div className='d-flex p-0'>
                    <span className='icon-note me-2'>i</span>
                    <div className='text-note'>
                        <p className='mb-0'>Mật khẩu phải ít nhất 8 ký tự bao gồm:</p>
                        <p className='mb-0'>-chữ cái</p>
                        <p className='mb-0'>-số</p>
                        <p className='mb-0'>-chữ cái viết hoa</p>
                        <p className='mb-0'>-chữ cái viết thường</p>
                        <p className='mb-0'>{`-chữ ký tự dấu đặc biệt như !~/)*^$&`}</p>

                    </div>
                </div>
            </div>
        </div>
    </>
)
}
