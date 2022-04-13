import React, { Component } from 'react'
import loading from './spin.gif'

const Spinner = () => {
    return (
      <div>
        <div className='text-center'>
            <img className='my-4' src={loading} alt="loading"/>
        </div>
      </div>
    )
}

export default Spinner
