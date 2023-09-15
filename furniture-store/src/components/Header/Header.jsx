import { Link } from "react-router-dom";

export const Header = () => {
    
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
						<div id="user">
					    <li><Link className="nav-link" to="/logout">Logout</Link></li>
						</div>
						<div id="guest">
					    <li><Link className="nav-link" to="/login">Login</Link></li>
						<li><Link className="nav-link" to="/register">Register</Link></li>
						</div>
						<li><a className="nav-link" href="cart.html"><img src="images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
    );
};