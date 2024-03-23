import logo from '../assets/logo.svg';
import Button from '../button';
import './navigation.scss';

function Navigation(){
    return (
        <header>
            <div className="container">
                <div className="nav-link-group">
                    <div className="logo"><img src={logo} alt="barrytickle.com logo"/></div>
                    <input type="checkbox" id="hamburger"/>
                    <label htmlFor="hamburger"></label>
                    <nav>
                        <a href={`/`}>Home</a>
                        <a href="/">About Me</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Blog</a>
                        <a href="">Contact Me</a>
                    </nav>
                </div>
                <Button config={{shape:"round", color:"green"}} callToAction="Get in touch" url="/contact-me"/>
            </div>
        </header>
    )
}

export default Navigation;