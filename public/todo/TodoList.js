import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    
    onRender(list) {

        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.removeTodo;

        todos.forEach(todo => {
            const props = { todo, onUpdate, onRemove };
            const listItem = new TodoItem(props);
            const listItemDOM = listItem.renderDOM();
            list.appendChild(listItemDOM);
        });
        
    }
    renderHTML() {
        return /*html*/`
            <ul class="todolist"></ul>
        `;
    }
}

export default TodoList;
