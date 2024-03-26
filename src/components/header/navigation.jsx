import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import Button from '../global/button/button';
import './navigation.scss';

function Navigation() {

    //Will create a reference to the navigation element which we pass into the dom, this can be used to toggle classes, check positioning ect. 
    const nav = useRef(null);

    const changeNavOnScroll = () => {
            const {scrollY} = window;
            if(scrollY > 100){
                nav.current.classList.add('fixed');
            } else {
                nav.current.classList.remove('fixed');
            }
    };


    //This will run on component load, return() => fires on component removal, the [] allows you to add in variables from useState() to refire this function on STATE change.
    useEffect(() => {
        changeNavOnScroll();
        window.addEventListener('scroll', changeNavOnScroll);
        return () => window.removeEventListener('scroll', changeNavOnScroll);
        
    }, []);

    return (
        <header ref={nav}>
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