import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('todo-input'),
                complete: false
            };

            try {
                await onAdd(newToDo);
                // form.reset();
                // document.activeElement.blur();
            }
            catch (err) {
                console.log(err);
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <form>
                <input type="text" name="todo-input" class="todo-input">
                <button>Add Item</button>
            </form>
        `;
    }
}

export default AddTodo;