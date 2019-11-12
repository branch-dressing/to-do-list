import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Todos';

        return /*html*/`
            <header>
                <h1>${title}</h1>
                <nav>
                </nav>
            </header>
        `;
    }
}

export default Header;