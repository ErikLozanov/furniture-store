import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { addToCartServiceFactory } from "../../services/addToCartService";

export const Header = () => {
    
	const addToCartService = addToCartServiceFactory();
	const {onLogout, isAuthenticated, userEmail, setCartItems, cartItems} = useAuthContext();

	if(isAuthenticated) {
	useEffect(() => {
		addToCartService.getAll()
		.then(res => setCartItems(res.length))
	},[])
    } else {
		if(localStorage.getItem('cart')) {
			console.log(JSON.parse(localStorage.getItem('cart')).length);
			setCartItems(JSON.parse(localStorage.getItem('cart')).length) ;
		}
	}


    return (

        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<Link className="navbar-brand" to="/">Furni<span>.</span></Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li><Link className="nav-link" to="/shop">Shop</Link></li>
						<li><Link className="nav-link" to="/about-us">About us</Link></li>
						<li><Link className="nav-link" to="/blog">Blog</Link></li>
						<li><Link className="nav-link" to="/contact-us">Contact us</Link></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><Link className="nav-link" to="/cart">{cartItems > 0 ?<span className="added-items">{cartItems}</span> : null}<img src="images/cart.svg"/></Link></li>
						{isAuthenticated ? (<div id="user">
					    <li><Link className="nav-link" onClick={onLogout} to="#">Logout</Link></li>
						</div>) : (<div id="guest">
					    <li><Link className="nav-link" to="/login">Login</Link></li>
						<li><Link className="nav-link" to="/register">Register</Link></li>
						</div>)}
						{isAuthenticated && (<span className="nav-link">Hello, {userEmail}!</span>)}
					</ul>
				</div>
			</div>
				
		</nav>
    );
};