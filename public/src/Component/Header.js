import {useState} from "react" ;



const Header = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const clickShowFormSearch = () => {
        setShowSearch(!showSearch);
        setShowCart(false);
        setShowLogin(false);
        setShowMenu(false);
    };

    const clickShowCart = () => {
        setShowCart(!showCart);
        setShowSearch(false);
        setShowLogin(false);
        setShowMenu(false);
    };

    const clickShowLogin = () => {
        setShowLogin(!showLogin);
        setShowCart(false);
        setShowSearch(false);
        setShowMenu(false);
    };

    const clickShowMenu = () => {
        setShowMenu(!showMenu);
        setShowLogin(false);
        setShowCart(false);
        setShowSearch(false);
    };

    return (
        <header className="header" id="header">
            <div className="menu__wraper">
                <div className="container">
                    <div className="row">
                        <a href="#" className="menu__logo"> <i className="fas fa-shopping-basket"></i> Groco </a>
                        <div className="menu__navbar" className={showMenu === true ? "menu__navbar active-transition" : "menu__navbar" }>
                            <ul className="navbar__list">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#features" className="nav-link">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#products" className="nav-link">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#categories" className="nav-link">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#review" className="nav-link">Review</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#blogs" className="nav-link">Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__btn-icon">
                            <i className="fas fa-bars icon" id="menu-btn" onClick={clickShowMenu} ></i>
                            <i className="fas fa-search icon" id="search-btn" onClick={clickShowFormSearch} ></i>
                            <i className="fas fa-shopping-cart icon" id="cart-btn" onClick={clickShowCart} ></i>
                            <i className="fas fa-user icon" id="login-btn" onClick={clickShowLogin} ></i>
                        </div>
                        <form action="" className={showSearch === true ? "search-form active-transition" : "search-form"} >
                            <input type="search" id="search-box" placeholder="search here..."></input>
                            <label htmlFor="search-box" className="fas fa-search" ></label>
                        </form>
                        <div className={showCart === true ? "menu__box-cart active-transition" : "menu__box-cart"} >
                            <div className="cart__singel-product" >
                                <img className="cart__image" src="./Images/cart/01.png" alt="" />
                                <div className="content">
                                    <h3 className="content-name">Lemon</h3>
                                    <span className="content-price">$4.99/-</span>
                                    <span className="content-quantity">qty: 1</span>
                                </div>
                                <i className="fas fa-trash btn-delete"></i>
                            </div>
                            <div className="cart__singel-product" >
                                <img className="cart__image" src="./Images/cart/02.png" alt="" />
                                <div className="content">
                                    <h3 className="content-name">Lemon</h3>
                                    <span className="content-price">$4.99/-</span>
                                    <span className="content-quantity">qty: 1</span>
                                </div>
                                <i className="fas fa-trash btn-delete"></i>
                            </div>
                            <div className="cart__singel-product" >
                                <img className="cart__image" src="./Images/cart/03.png" alt="" />
                                <div className="content">
                                    <h3 className="content-name">Lemon</h3>
                                    <span className="content-price">$4.99/-</span>
                                    <span className="content-quantity">qty: 1</span>
                                </div>
                                <i className="fas fa-trash btn-delete"></i>
                            </div>
                            <div className="total" >total : $19.32</div>
                            <a href="#" className="btn cart__btn">check out</a> 
                        </div>
                        <form action="" className={showLogin === true ? "login-form active-transition" : "login-form" } >
                            <h3 className="form__title">Login now</h3>
                            <input className="box" placeholder="your email..." type="email" /> 
                            <input className="box" placeholder="your password..." type="password" />
                            <p>forget your password <a href="#">click here</a></p> 
                            <p>don't have an account <a href="#">create now</a></p>
                            <input type="submit" value="logign now" className="btn" /> 
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header; 