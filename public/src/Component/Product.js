import Rating from "react-rating";
import Slider from "react-slick";

const Product = () => {

    const showValue = (value) => {
        console.log(value);
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };

    return (
        <section className="section-products" id="products">
            <div className="product__wraper">
                <div className="container">
                    <h3 className="heading">Our <span>products</span></h3>
                    <div className="pro_slider">
                        <Slider {...settings} className="row">
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/01.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        start={0} 
                                        stop={5} 
                                        initialRating= {3.5}
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/02.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2} 
                                        start={0} 
                                        stop={5} 
                                        initialRating= {3.5}
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/03.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        initialRating= {3.5}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/04.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        initialRating= {4.5}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                        </Slider>
                    </div>
                    <div className="pro_slider">
                        <Slider {...settings} sclassName="row">
                        <div className="product__box">
                            <div className="product-image" >
                                    <img className="image" src="./Images/products/05.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/06.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/07.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                            <div className="product__box">
                                <div className="product-image" >
                                    <img className="image" src="./Images/products/08.png" alt="" />
                                </div>
                                <h3 className="product-title" >Fresh And Organic</h3>
                                <div className="pro__price" >$4.99 - $10.99</div>
                                <div className="pro__rating">
                                    <Rating 
                                        onClick={(value) => showValue(value)}
                                        fractions={2}
                                        start={0} 
                                        stop={5} 
                                        emptySymbol="fas fa-star icon-star custom-empty" 
                                        fullSymbol="fas fa-star icon-star custom-full" 
                                    />
                                </div>
                                <a href="#" className="btn productr-btn" >Read More</a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product; 