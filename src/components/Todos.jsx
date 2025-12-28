import React from 'react'
import { TodoItem } from './todoitems'

export const Todos = ({todos, onDelete}) => {
  return (
    <div className="container">
        <h3 className="text-center my-3">Todos List</h3>
        {todos ? todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={onDelete}/>
         }) : <p>No todos to display</p>}
    </div>
  )
}
