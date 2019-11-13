import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todos;
        //const onUpdate = this.props.onUpdate;
        //const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const todo = this.props.item;

        return /*html*/`
            <li class="list-item">
    ]           <div class="info-container">
                    <h2>${todo.task}</h2>
                    <p>Status: ${todo.complete}</p>
                </div>
            </li>
        `;
    }
}

export default TodoItem;