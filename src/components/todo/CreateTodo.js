import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CreateTodo = ({createTodo}) => {
    return(
        <div>
            <TextField
                id="newTodo"
                label="Create Todo"
                margin="normal"
            />
            <Button variant="contained" color="primary" style={style} onClick={() => {
                    createTodo(document.getElementById("newTodo").value)
                    document.getElementById("newTodo").value = ""
                }}>
            
                Add Todo
            </Button>
        </div>
    )
}

const style = {
    margin:'auto',
    marginTop:10,
    display:'block'
    
}

export default CreateTodo