const Category = () => {
    return (
        <section className="section-categories" id="categories">
            <div className="category__wraper">
                <div className="container">
                    <h3 className="heading">Our <span>categories</span></h3>
                    <div className="row">
                        <div className="category__box">
                            <div className="category-image" >
                                <img className="image" src="./Images/categories/01.png" alt="" />
                            </div>
                            <h3 className="category-title" >Fresh And Organic</h3>
                            <p className="category-desc">upto 45% off</p>
                            <a href="#" className="btn categoryr-btn" >Shop Now</a>
                        </div>
                        <div className="category__box">
                            <div className="category-image" >
                                <img className="image" src="./Images/categories/02.png" alt="" />
                            </div>
                            <h3 className="category-title" >Fresh And Organic</h3>
                            <p className="category-desc">upto 45% off</p>
                            <a href="#" className="btn categoryr-btn" >Shop Now</a>
                        </div>
                        <div className="category__box">
                            <div className="category-image" >
                                <img className="image" src="./Images/categories/03.png" alt="" />
                            </div>
                            <h3 className="category-title" >Fresh And Organic</h3>
                            <p className="category-desc">upto 45% off</p>
                            <a href="#" className="btn categoryr-btn" >Shop Now</a>
                        </div>
                        <div className="category__box">
                            <div className="category-image" >
                                <img className="image" src="./Images/categories/04.png" alt="" />
                            </div>
                            <h3 className="category-title" >Fresh And Organic</h3>
                            <p className="category-desc">upto 45% off</p>
                            <a href="#" className="btn categoryr-btn" >Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;