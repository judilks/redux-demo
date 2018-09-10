import React from 'react';
import {ListItem, ListItemText} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton'
import {Delete} from '@material-ui/icons/'

const Todo = ({todo, deleteTodo}) => {
    return (
        <div>
            <ListItem style={style}>
                <ListItemText primary={todo.text}/>
                <IconButton onClick={() => {deleteTodo(todo)}}>
                    <Delete/>
                </IconButton>
            </ListItem>
        </div>
    );
};

const style = {
    textAlign:'center',
}

export default Todo;