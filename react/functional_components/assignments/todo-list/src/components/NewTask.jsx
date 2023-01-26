const NewTask = (props) => {
    
    return (
        <form onSubmit={ (e) => {props.handleSubmittedTask(e); }}>
        <input onChange= {(e) => {props.setNewTask(e.target.value); }} 
                type='text' value={props.newTask} /> 
        <div>
            <button>Add</button>
        </div>
        </form>
    )
};

export default NewTask;
