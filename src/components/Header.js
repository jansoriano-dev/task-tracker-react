
//rafce

import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const testClick =()=>{
        console.log('test')
    }
    return (
        <div>
            <header className='header'>
                <h1 >
                   {title}
                </h1>
                <Button color='#152238' text='Add' onClick={testClick}/>
            </header>
        </div>
    )
}
Header.defaultProps={
    title:'Task Tracker',
}


export default Header
