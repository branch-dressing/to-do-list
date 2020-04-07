import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        
        const completeButt = dom.querySelector('.complete-button');
        completeButt.addEventListener('click', () =>{
            todo.complete = !todo.complete;
            onUpdate(todo);
            console.log(todo.complete, 'complete');
        });

        const removeButt = dom.querySelector('.remove-button');
        removeButt.addEventListener('click', () => {
            const confirmed = confirm('YOU SURE BRO?');
            if (confirmed) onRemove(todo);
        })
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <li class="list-item">
    ]           <div class="info-container">
                    <h2 class="${todo.complete ? 'complete' : ''}">${todo.task}</h2>
                    <p>Complete: ${todo.complete}</p>
                    <button class="complete-button">Complete</button>
                    <button class="remove-button"> Trash It</button>
                </div>
            </li>
        `;
    }
}

export default TodoItem;