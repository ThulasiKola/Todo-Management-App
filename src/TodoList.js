import React from 'react'

const TodoList = ({todolist,deleteitems}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteitems(index)}>Delete</button></h5>
            </div>)}
        </div>
    )
}

export default TodoList
