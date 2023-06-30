import React from 'react'
import '../resources/default-layout.css'

function DefaultLayout(props) {
  return (
    <div className='layout'>
        <div className='header d-flex justify-content-between '>
            <div>
                <h1 className='logo'>User</h1>
            </div>
            <div>
            </div>
        </div>
        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout