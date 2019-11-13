import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import { getTodos, addTodo, updateTodo, removeTodo } from '../services/todo-api.js';

class TodoApp extends Component {

    async onRender(dom) {

        const header = new Header({ title: 'My Todos' });
        dom.prepend(header.renderDOM());
        
        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());
        
        const main = dom.querySelector('main');
        const list = new TodoList({ todos: [] });
        main.appendChild(list.renderDOM());

        const add = new AddTodo({ 
            onAdd: async (todo) => {
                try {
                    const saved = await addTodo(todo);
                    const todos = this.state.todo;
                    todos.push(saved);
                    list.update({ todos });
                }

                catch (err) {
                    console.log(err);
                }
            } 
        });
        main.appendChild(add.renderDOM());

        try {
            const todos = await getTodos();
            list.update({ todos: todos });
        }
        catch (err) {
            console.log('Load to dos failed', err);
        }
        finally {
            loading.update({ loading: false });
        }
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main>
                    <!-- add todo goes here -->
                    <!-- todo list goes here -->
                </main>
            </div>
        `;
    }
}

export default TodoApp;