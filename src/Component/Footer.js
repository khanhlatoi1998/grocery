const Footer = () => {

    return (
        <footer className="section-footer" id="footer">
            <div className="footer__wraper">
                <div className="container" >
                    <div className="footer">
                        <div className="row">
                            <div className="footer__box">
                                <h3 className="footer__title">Groco <i className="fas fa-shopping-basket"></i></h3>
                                <p className="footer__content">W3Schools Is Optimized For Learning And Training. Examples Might Be Simplified To Improve Reading And</p>
                                <ul className="footer__social">
                                    <li>
                                        <a href="#" className="icon-link" >
                                        <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-link" >
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-link" >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-link" >
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__box">
                                <h3 className="footer__title">Contact</h3>
                                <ul className="footer__contact">
                                    <li>
                                        <p className="footer__content"><i className="fas fa-phone"></i> +843757677</p>
                                    </li>
                                    <li>
                                        <p className="footer__content"><i className="fas fa-phone"></i> +843757677</p>
                                    </li>
                                    <li>
                                        <p className="footer__content"><i className="far fa-envelope"></i> khanh199@gmail.com</p>
                                    </li>
                                    <li>
                                        <p className="footer__content"><i className="fas fa-map-marker-alt"></i> Quan 5 - tpHCM</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__box">
                                <h3 className="footer__title">Quicks Links</h3>
                                <ul className="footer__links">
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Home</p></a>
                                    </li>
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Products</p></a>
                                    </li>
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Products</p></a>
                                    </li>
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Products</p></a>
                                    </li>
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Products</p></a>
                                    </li>
                                    <li>
                                        <a href="" className="link"><p className="footer__content"><i className="fas fa-arrow-right"></i> Products</p></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__box">
                                <div className="footer__newsletter">
                                    <h3 className="footer__title">Newsletter</h3>
                                    <p className="footer__content">W3Schools Is Optimized For Learning</p>
                                    <form className="footer__form" method="" action="" name="contact__form" >
                                        <input className="input-email" name="email" type="input" placeholder="your email..." />
                                        <br />
                                        <input className="input-submit btn" name="submit" type="submit" value="Subcribe"/>
                                    </form>
                                    <div className="footer__pay">
                                        <img src="../Images\footer\payment.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__copyright">W3Schools Is Optimized For Learning And Training. Examples Might</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer ;