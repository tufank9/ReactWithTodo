import { useState } from "react";
import { supabase } from "./supabase/supabase";

export function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    //ToDo ekleme fonksiyonu
    // finish
    async function addTask() {
        if (newTask !== "") {
            setTask([...task, newTask]);
            const { data, error } = await fetchData();
        }
    }
    async function fetchData() {
        const { data, error } = await supabase
            .from('ToDo')
            .insert([{ todo: newTask }])
            .select();
        return { data, error };
    }
    // finish

    // todo'da olan dataları sorgulamak için olan fonksiyon
    async function getDatas() {
        const { data, error } = await supabase
            .from('ToDo')
            .select('todo');
        console.log(data);
    }
    getDatas()

    // ToDo silme fonksiyon
    // start
    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);

        fetchDelete(task[index]);
    }
    async function fetchDelete(taskToDelete) {
        const { error } = await supabase
            .from('ToDo')
            .delete()
            .eq('todo', taskToDelete);

        if (error) {
            console.error("Error deleting task:", error.message); // Hata mesajını konsola yazdır
        } else {
            console.log("Deleted task:", taskToDelete); // Başarılı silme durumunda konsola yazdır
        }
    }
    // finish

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add Todos..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ol>
                {task.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
