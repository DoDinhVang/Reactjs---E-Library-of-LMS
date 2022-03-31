import React from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
export default function PersonalInfo() {
    return (
        <>
            <h3 className='title px-5 py-3 mb-4'>Thông tin chung</h3>
            <div className=' d-flex justify-content-between px-4' style={{ minHeight: '200' }}>
                <div className='avatar'>
                    <h3 className='short-name'>H</h3>
                    <div className='icon-camera'>
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5531 4.62586H24.6233L24.1408 3.10996C23.8281 2.22048 23.2479 1.45081 22.4807 0.9076C21.7136 0.364388 20.7974 0.0745219 19.8591 0.0781588H12.1398C11.1924 0.0799411 10.2693 0.380859 9.50109 0.938441C8.73283 1.49602 8.15813 2.28211 7.85809 3.18576L7.37564 4.70166H5.44583C4.24626 4.70166 3.09583 5.18079 2.2476 6.03365C1.39938 6.88651 0.922852 8.04324 0.922852 9.24936V21.3766C0.922852 22.5827 1.39938 23.7394 2.2476 24.5923C3.09583 25.4451 4.24626 25.9243 5.44583 25.9243H26.5531C27.7527 25.9243 28.9031 25.4451 29.7513 24.5923C30.5995 23.7394 31.0761 22.5827 31.0761 21.3766V9.24936C31.0861 8.6458 30.9765 8.04628 30.7537 7.48575C30.5308 6.92521 30.1993 6.41489 29.7783 5.98454C29.3573 5.55419 28.8553 5.21241 28.3015 4.97914C27.7478 4.74587 27.1534 4.62578 26.5531 4.62586ZM28.0607 21.3008C28.0607 21.7028 27.9019 22.0884 27.6192 22.3727C27.3364 22.657 26.9529 22.8167 26.5531 22.8167H5.44583C5.04598 22.8167 4.6625 22.657 4.37976 22.3727C4.09702 22.0884 3.93817 21.7028 3.93817 21.3008V9.17357C3.93817 8.77152 4.09702 8.38595 4.37976 8.10166C4.6625 7.81738 5.04598 7.65767 5.44583 7.65767H8.46116C8.78993 7.67492 9.11528 7.5835 9.38751 7.39736C9.65975 7.21123 9.86391 6.94062 9.96882 6.62685L10.783 4.14077C10.8841 3.83968 11.0768 3.57817 11.3338 3.3932C11.5908 3.20822 11.8992 3.10914 12.2152 3.10996H19.9345C20.2505 3.10914 20.5589 3.20822 20.8159 3.3932C21.0729 3.57817 21.2656 3.83968 21.3667 4.14077L22.1809 6.62685C22.2776 6.916 22.4589 7.16908 22.701 7.35298C22.9431 7.53689 23.2347 7.64308 23.5378 7.65767H26.5531C26.9529 7.65767 27.3364 7.81738 27.6192 8.10166C27.9019 8.38595 28.0607 8.77152 28.0607 9.17357V21.3008ZM15.9995 7.65767C14.8067 7.65767 13.6407 8.01329 12.649 8.67957C11.6573 9.34584 10.8843 10.2928 10.4279 11.4008C9.97143 12.5088 9.852 13.728 10.0847 14.9042C10.3174 16.0804 10.8918 17.1609 11.7352 18.0089C12.5786 18.8569 13.6531 19.4344 14.8229 19.6684C15.9928 19.9023 17.2053 19.7823 18.3073 19.3233C19.4092 18.8644 20.3511 18.0872 21.0138 17.09C21.6764 16.0929 22.0301 14.9205 22.0301 13.7213C22.0301 12.1131 21.3947 10.5708 20.2638 9.43365C19.1328 8.29651 17.5989 7.65767 15.9995 7.65767ZM15.9995 16.7531C15.4031 16.7531 14.8201 16.5753 14.3242 16.2421C13.8284 15.909 13.4419 15.4355 13.2137 14.8815C12.9854 14.3275 12.9257 13.7179 13.0421 13.1298C13.1584 12.5417 13.4456 12.0015 13.8673 11.5775C14.289 11.1535 14.8263 10.8647 15.4112 10.7477C15.9961 10.6307 16.6024 10.6908 17.1534 10.9202C17.7044 11.1497 18.1753 11.5383 18.5066 12.0369C18.8379 12.5355 19.0148 13.1216 19.0148 13.7213C19.0148 14.5254 18.6971 15.2965 18.1316 15.8651C17.5661 16.4337 16.7992 16.7531 15.9995 16.7531Z" fill="white" />
                        </svg>

                    </div>
                </div>
                <div className='row' style={{ flexBasis: '80%' }}>
                    <div className='col-6'>
                        <div className='userId d-flex mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Mã người dùng</p>
                            <Input disabled size='large' defaultValue={'123'} style={{ width: '70%' }} />
                        </div>
                        <div className='userId d-flex  mb-3'>
                            <p className='mb-0' style={{ whiteSpace: 'nowrap', width: '30%', marginRight: '12px' }}>Giới tính</p>
                            <Select disabled defaultValue="lucy" style={{ width: 120, textAlign: 'left' }} onChange={() => { }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                        </div>
                        <div className='userId d-flex mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Vai trò</p>
                            <Input disabled defaultValue={'Quản lý'} style={{ width: '70%' }} />
                        </div>
                        <div className='userId d-flex  mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Email</p>
                            <Input disabled style={{ width: '70%' }} defaultValue={'huu0302@gmail.com'} />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='userId d-flex  mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Tên người dùng</p>
                            <Input disabled style={{ width: '70%' }} defaultValue={'admin123'} />
                        </div>
                        <div className='userId d-flex  mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Số điện thoại</p>
                            <Input disabled style={{ width: '70%' }} defaultValue={'12356789'} />
                        </div>
                        <div className='userId d-flex  mb-3'>
                            <p className='mb-0 me-3' style={{ whiteSpace: 'nowrap', width: '30%' }}>Địa chỉ</p>
                            <TextArea disabled style={{ width: '70%' }} rows={4} defaultValue='hi tớ là chomeo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
