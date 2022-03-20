const Blog = () => {
    return (
        <section className="section-blog" id="blogs">
            <div className="blog__wraper">
                <div className="container">
                    <div className="block__title">
                        <h1 className="heading">Our <span>Blog</span></h1>
                    </div>
                    <div className="blog">
                        <div className="row">
                            <div className="blog__box">
                                <div className="blog__image">
                                    <img className="image" src="../Images/blog/blog-1.jpg" alt="" />
                                </div>
                                <div className="blog__content">
                                    <div className="content__user">
                                        <a href="#" className="user-link"><i className="fas fa-user user-icon"></i> by Admin</a>
                                        <a href="#" className="user-date"><i className="fas fa-calendar user-icon"></i> 1st May, 2022</a>
                                    </div>
                                    <h3 className="content__title">Fresh And Organic Fresh And Organic</h3>
                                    <p className="content__desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                    <a className="btn blog__link">Read More</a>
                                </div>
                            </div>
                            <div className="blog__box">
                                <div className="blog__image">
                                    <img className="image" src="../Images/blog/blog-2.jpg" alt="" />
                                </div>
                                <div className="blog__content">
                                    <div className="content__user">
                                        <a href="#" className="user-link"><i className="fas fa-user user-icon"></i> by Admin</a>
                                        <a href="#" className="user-date"><i className="fas fa-calendar user-icon"></i> 1st May, 2022</a>
                                    </div>
                                    <h3 className="content__title">Fresh And Organic Fresh And Organic</h3>
                                    <p className="content__desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                    <a className="btn blog__link">Read More</a>
                                </div>
                            </div>
                            <div className="blog__box">
                                <div className="blog__image">
                                    <img className="image" src="../Images/blog/blog-3.jpg" alt="" />
                                </div>
                                <div className="blog__content">
                                    <div className="content__user">
                                        <a href="#" className="user-link"><i className="fas fa-user user-icon"></i> by Admin</a>
                                        <a href="#" className="user-date"><i className="fas fa-calendar user-icon"></i> 1st May, 2022</a>
                                    </div>
                                    <h3 className="content__title">Fresh And Organic Fresh And Organic</h3>
                                    <p className="content__desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                    <a className="btn blog__link">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;