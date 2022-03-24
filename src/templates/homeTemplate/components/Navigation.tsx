import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    HomeOutlined, BellOutlined, SettingOutlined,
    FileSyncOutlined, ShoppingOutlined, BookOutlined,
    GithubOutlined, MessageOutlined, BarsOutlined
} from '@ant-design/icons';

export default function Navigation() {

    const [barVisible,setBarVisible] = useState(false)
  
    return (
        <nav className='nav-main d-flex'>

            <ul className='nav'>
                <li className='nav-item'><div onClick={()=>{
                    setBarVisible(oldState=> !oldState)
                }} className='nav-link barsOutLine'><BarsOutlined className='nav-icon' /></div></li>
                <li className='nav-item'><NavLink to='/' className='nav-link brand'><GithubOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/home'  activeClassName='active' className='nav-link'><HomeOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/subject-manager' activeClassName='active' className='nav-link'><BookOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/private-file' activeClassName='active' className='nav-link'><FileSyncOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/exam-bank' activeClassName='active' className='nav-link'><ShoppingOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/bell' activeClassName='active' className='nav-link'><BellOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/settings' activeClassName='active' className='nav-link'><SettingOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/helps' activeClassName='active' className='nav-link'><MessageOutlined className='nav-icon' /></NavLink></li>
            </ul>
            
           {barVisible? <div className='nav-persistent-visible' >
                <ul className='nav'>
                    <li className='nav-item'>
                        <NavLink to='/home' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <HomeOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Trang chủ</p>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/subject-manager' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <BookOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Quản lý môn học</p>
                        </NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/private-file' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <FileSyncOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Tệp riêng tư</p>
                        </NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/exam-bank' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <ShoppingOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Ngân hàng đề thi</p>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/bell' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <BellOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Thông báo</p>
                        </NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/settings' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <SettingOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Cài đặt hệ thống</p>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/helps' activeClassName='active' className='nav-link d-flex align-items-center'>
                            <MessageOutlined className='nav-icon me-3' />
                            <p className='mb-0'>Trợ giúp</p>
                        </NavLink>
                    </li>
                </ul>
            
            </div>:''}
        </nav>
    )
}
