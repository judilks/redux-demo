import React from 'react';
import Todo from './Todo'
import List from '@material-ui/core/List'
import CreateTodo from './CreateTodo'

const TodoList = ({todos, deleteTodo, createTodo}) => {
    return (
        <div>
            <List component="nav" style={style}>
                {todos.map(todo => {
                    return(<Todo todo={todo} deleteTodo={deleteTodo} />)
                })}
            </List>
            <CreateTodo createTodo={createTodo} />
        </div>
    );
};

const style = {
    margin:'auto',
    width:"15%"
}

export default TodoList;