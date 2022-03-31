import React from 'react'
import history from '../../../util/history'
export default function Header() {
    return (
        <div className='header px-5 py-3'>
            <div className='header_container'>
                <p className='mb-0 btn-sign-out'>Đăng xuất</p>
                <p className='line mb-0'></p>
                <div className='avatar' onClick={()=>{
                    history.push('/profile')
                }}>
                    <img src='https://picsum.photos/50/50' alt='avatar'></img>
                    <span className='type-user'>Admin</span>
                </div>
                

            </div>
        </div>
    )
}
