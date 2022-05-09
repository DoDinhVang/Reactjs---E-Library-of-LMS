import React from 'react';
import { useState } from 'react';
import { setDisibleAttributeActionCreator } from '../../redux/action-creator/profileTypeActionCreator';
import PasswordManager from './components/PasswordManager';
import PersonalInfo from './components/PersonalInfo';
import { useDispatch } from 'react-redux';


export default function Profile() {
  const [isSelected, setIsSelected] = useState({
    child1: 'is-selected',
    child2: '',
    silder: 'slider-left',
    visibleEditButton: true // true: show edit button, false: hide edit button
  })

 const dispatch = useDispatch();

  return (
    <div id='profile' className='main-content'>
      <h1 className='title_base'>Thông tin người dùng</h1>
      <div className='pe-5'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <div className='d-flex align-items-center'>
            <div className='d-flex align-items-center checkBox justify-content-around'>
              <p className={`mb-0 p-2 ${isSelected.child1}`} onClick={() => {
                setIsSelected({
                  child1: 'is-selected',
                  child2: '',
                  silder: 'slider-left',
                  visibleEditButton: true
                })
              }}>Thông tin cá nhân</p>

              <p className={`mb-0 p-2 ${isSelected.child2}`} onClick={() => {
                setIsSelected({
                  ...isSelected,
                  child1: '',
                  child2: 'is-selected',
                  silder: 'slider-right',
                  visibleEditButton: false
                })
              }}>Thay đổi mật khẩu</p>
              <div className={`slider ${isSelected.silder}`}></div>
            </div>
          </div>
          <button className='button-orange' style={
            {
              display: isSelected.visibleEditButton ? 'block' : 'none'
            }
          } onClick={() => {
            dispatch(setDisibleAttributeActionCreator(false))
          }}>Chỉnh sửa</button>
        </div>
        <div className='profile-content'>

          {isSelected.silder === 'slider-left' ? <PersonalInfo/> : <PasswordManager />}

        </div>
      </div>
    </div>
  )
}
