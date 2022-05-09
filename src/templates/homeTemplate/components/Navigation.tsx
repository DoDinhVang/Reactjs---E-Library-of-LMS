import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    HomeOutlined, BellOutlined, SettingOutlined,
    FileSyncOutlined, ShoppingOutlined, BookOutlined,
    GithubOutlined, MessageOutlined, BarsOutlined
} from '@ant-design/icons';

export default function Navigation() {

    const [barVisible, setBarVisible] = useState(false)

    return (
        <nav className='nav-main d-flex'>

            <ul className='nav'>
                <li className='nav-item'><div onClick={() => {
                    setBarVisible(oldState => !oldState)
                }} className='nav-link barsOutLine'><BarsOutlined className='nav-icon' /></div></li>


                <li className='nav-item'>
                    <NavLink to='/' className='nav-link brand'>
                        <svg width="52" height="42" viewBox="0 0 74 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.1631 12.3827C58.1955 12.3827 57.2586 12.4745 56.3524 12.6429C55.308 10.2398 53.8182 8.03571 51.8983 6.13775C47.9203 2.18878 42.6368 0 37 0C31.3632 0 26.0797 2.18878 22.1017 6.15306C20.1972 8.05102 18.692 10.2551 17.6476 12.6582C16.7414 12.4898 15.8045 12.398 14.8369 12.398C6.66583 12.3827 0 19.0255 0 27.1837C0 35.0663 6.22042 41.5255 14.0228 41.9694C14.2993 41.9847 14.5758 42 14.8522 42C15.1287 42 15.4051 41.9847 15.6816 41.9694H36.0016C36.3395 41.9847 36.6621 42 37 42C37.3379 42 37.6604 41.9847 37.9983 41.9694H58.3184C58.5948 41.9847 58.8713 42 59.1478 42C67.3341 42 74 35.3571 74 27.199C74.0153 19.0255 67.3495 12.3827 59.1631 12.3827ZM37 3.39796C45.0328 3.39796 51.8522 8.61735 54.2482 15.8265L49.6559 13.8061C47.0448 9.56633 42.3603 6.71939 37 6.71939C31.655 6.71939 26.9552 9.55102 24.3441 13.8061L19.7518 15.8265C22.1478 8.61735 28.9826 3.39796 37 3.39796ZM37 39.5969C26.9859 39.5969 18.8456 31.4847 18.8456 21.5051C18.8456 20.4643 18.9377 19.4388 19.1067 18.4439H19.0913L21.9174 17.2041H21.9327L34.3736 11.7245C36.0477 10.9898 37.9522 10.9898 39.6264 11.7245L52.0672 17.2041L54.8933 18.4439C55.0622 19.4388 55.1544 20.4643 55.1544 21.5051C55.1698 31.4847 47.0141 39.5969 37 39.5969Z" fill="white" />
                        </svg>
                    </NavLink></li>
                <li className='nav-item'><NavLink to='/home' activeClassName='active' className='nav-link'><HomeOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/subject-list' activeClassName='active' className='nav-link'><BookOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/private-file' activeClassName='active' className='nav-link'><FileSyncOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/exam-bank' activeClassName='active' className='nav-link'><ShoppingOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/bell' activeClassName='active' className='nav-link'><BellOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/settings' activeClassName='active' className='nav-link'><SettingOutlined className='nav-icon' /></NavLink></li>
                <li className='nav-item'><NavLink to='/helps' activeClassName='active' className='nav-link'><MessageOutlined className='nav-icon' /></NavLink></li>
            </ul>

            {barVisible ? <div className='nav-persistent-visible' >
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
                        </NavLink>
                        <ul className='submenu list-unstyled'>
                            <li className='nav-item'><NavLink to='/subject-list' className='nav-link'>Danh Sách môn học</NavLink></li>
                            <li className='nav-item'><NavLink to='/document' className='nav-link'>Phê duyệt tài liệu môn học</NavLink></li>
                        </ul>
                    </li>
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

            </div> : ''}
        </nav>
    )
}
