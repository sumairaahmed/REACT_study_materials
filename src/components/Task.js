import React from 'react'
const tasks =[
    {
        id:1,
        text:"get papers",
        time:"monday"

    }
]
const Task = () => {
    return (
        <>
          {tasks.map((task)=>(
              <h3 key={task.id}>{task.text}</h3>
          ))}  
        </>
    )
}

export default Task
