import React from 'react';

export function Mypage(props) {
  if (props.isLogin === true) {
    return (
      <div>
        <h1>Mypage</h1>
        <div className='username'>{props.userinfo.username}</div>
        <div className='email'>{props.userinfo.email}</div>
        <div className='mobile'>{props.userinfo.mobile}</div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>NOT FOUND</h1>
      </div>
    )
  }
}
