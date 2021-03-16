import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
import Task from './Task'
const Header = ({title}) => {
    const onClick= ()=>{
        console.log('click')
    }
    return (
        

        <div className="container">
            <h1>{title}</h1>
            <Button onClick={onClick} color='green' text='Add'/>
            <Task />
            
        </div>
    )
}
Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title:propTypes.string.isRequired
}
export default Header
