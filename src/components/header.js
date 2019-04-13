import React, {Component} from 'react';
import '../style/index.css';
import '../style/camogreen.css';

                
class Header extends Component {
    state = {
        visible: false  
    };

    toggleMenu = (event) => {
               
        event.preventDefault();
        
        this.setState({visible: !this.state.visible})
    }

    

    render() {
    return (
        <header id="header">
            <h1><a href="URL">
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
					<a href="#menu" className="menuToggle" onClick={(event) => this.toggleMenu(event)}><span>Menu</span></a>
					
				</li>
			</ul>
		</nav>
        {this.state.visible && <div id="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/hunting/">Hunting</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/login/">Log In</a></li>

            </ul>

            <a href="#menu" className="close" onClick={(event) => this.toggleMenu(event)}></a>
        </div>
        }
        </header>
    )}
};

export default Header;