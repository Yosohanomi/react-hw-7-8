import { Component } from "react";
import styles from "./TaskList.module.css";
import { Feedback } from "../Feedbacks/Feedback";

export class TaskList extends Component {

    tasks = [
        { id: 1, text: "Вивчити React" },
        { id: 2, text: "Зробити ДЗ" },
        { id: 3, text: "Повторити JS" },
        { id: 4, text: "Прочитати документацію" },
    ];

    addTask = () => {
        const text = this.input.value.trim();
        if (!text) return;

        this.tasks.push({
            id: Date.now(),
            text
        });

        this.input.value = "";
        this.forceUpdate();
    };

    deleteTask = (id) => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.forceUpdate();
    };

    render() {
        return (
            <div className={styles.task}>
                <h1 className={styles.title}>Tasks List</h1>

                <input
                    type="text"
                    className={styles.input}
                    ref={(el) => (this.input = el)}
                />

                <button
                    onClick={this.addTask}
                    className={styles.btnAdd}
                >
                    Add task
                </button>

                <ul className={styles.list}>
                    {this.tasks.map(task => (
                        <li key={task.id} className={styles.item}>
                            {task.text}
                            <button
                                onClick={() => this.deleteTask(task.id)}
                                className={styles.btnAdd}
                            >
                                Delete task
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <Feedback/>
                </div>
            </div>
        );
    }
}
