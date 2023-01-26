const Todo = (props) => {
    const todoClasses = ["bold", "italics"];

    if (props.todo.complete) {
        todoClasses.push('line-through')
    }
    
    return (
        <div>
            <input onChange={(event)=>{
                props.handleToggleComplete(props.i);
            }} checked={props.todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")} style={{marginLeft: "10px"}}>{props.todo.text}</span>
            <button onClick={(e) => {
                props.handleTodoDelete(props.i);
                }} 
                style={{marginLeft: "10px"}}>Delete</button>
            </div>
    )
};

export default Todo;

// need to create form to intake the task and save it as a object

// add the task to the list of tasks (default done as false)

// add check mark to cross out the text in CSS 