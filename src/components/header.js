import React, {Component} from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';

                
class Header extends Component {
    state = {
        visible: false  
    };

    toggleMenu = (event) => {
        event.preventDefault();
        document.body.classList.toggle('is-menu-visible');
        this.setState({visible: !this.state.visible})
    }

    getRoute = (route) => {
        history.push(route);
    }
    

    render() {
    return (
        <header id="header">
            <h1><a href="" onClick={() => this.getRoute('/')}>
                <img src={require('../assets/logo-sml.png')} className="logo" />
                </a>
            </h1>
            {/* <nav id="nav">
                <ul>
                    <li className="special">
                        <button className="menuToggle" onClick={this.toggleMenu}>
                            <span>Menu</span>
                        </button>
                    </li>
                </ul>
                {this.state.visible && <div id="menu">
                    <ul>
                        <li><a href="URL/">Home</a></li>
                        <li><a href="URL/hunting/">Hunting</a></li>
                        <li><a href="URL/about/">About</a></li>
                        <li><a href="URL/login/">Log In</a></li>
                    </ul>
                    <button className="close" onClick={this.toggleMenu}></button>
                </div>
                } </nav> */}
            
            <nav id="nav">
			<ul>
				<li className="special">
					<a href="" className="menuToggle" onClick={(event) => this.toggleMenu(event)}><span>Menu</span></a>
					
				</li>
			</ul>
		</nav>
        {/* {this.state.visible && <div id="menu">
            <ul>
                <li><a href="" onClick={() => this.getRoute('/')}>Home</a></li>
                <li><a href="" onClick={() => this.getRoute('/hunting')}>Hunting</a></li>
                <li><a href="" onClick={() => this.getRoute('/about')}>About</a></li>
                <li><a href="" onClick={() => this.getRoute('/login')}>Log In</a></li>

            </ul>

            <a href="" className="close" onClick={(event) => this.toggleMenu(event)}></a>
        </div>
        } */}
        </header>
    )}
};

export default Header;