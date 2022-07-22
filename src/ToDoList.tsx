import React, { useState } from "react";

function ToDoList() {
    const [toDo, setTodo] = useState("");
    
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = event;

        setTodo(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(toDo);
    }

    return (
        <div>
            <form>
                <input placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;