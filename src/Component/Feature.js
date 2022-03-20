const Feature = () => {
    return (
        <section className="section-features" id="features">
            <div className="feature__wraper">
                <div className="container">
                    <h3 className="heading">Our <span>Features</span></h3>
                    <div className="row">
                        <div className="feature__box">
                            <div className="feature-image" >
                                <img className="image" src="./Images/features/01.png" alt="" />
                            </div>
                            <h3 className="feature-title" >Fresh And Organic</h3>
                            <p className="feature-desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                            <a href="#" className="btn featurer-btn" >Read More</a>
                        </div>
                        <div className="feature__box">
                            <div className="feature-image" >
                                <img className="image" src="./Images/features/02.png" alt="" />
                            </div>
                            <h3 className="feature-title" >Fresh And Organic</h3>
                            <p className="feature-desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                            <a href="#" className="btn featurer-btn" >Read More</a>
                        </div>
                        <div className="feature__box">
                            <div className="feature-image" >
                                <img className="image" src="./Images/features/03.png" alt="" />
                            </div>
                            <h3 className="feature-title" >Fresh And Organic</h3>
                            <p className="feature-desc">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                            <a href="#" className="btn featurer-btn" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;