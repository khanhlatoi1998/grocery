import Rating from "react-rating";
import Slider from "react-slick";

const Review = () => {

    const setting = {
        dots: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToCroll: 1,
        initialSlide: 0, // picture initial
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    };

    return (
        <section className="section-review" id="review">
            <div className="review__wraper">
                <div className="container">
                    <h3 className="heading">Customer's <span>Review</span></h3>
                    <div className="review">
                        <Slider {...setting} className="row">
                            <div className="review__box">
                                <div className="review__image">
                                    <img className="image" src="./Images/review/01.png" alt="" />
                                </div>
                                <p className="review__content">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                <h3 className="review__name">John Deo</h3>
                                <Rating
                                    // onClick={(value) => showValue(value)}
                                    fractions={2}
                                    start={0} 
                                    stop={5} 
                                    initialRating= {5}
                                    emptySymbol="fas fa-star icon-star custom-empty" 
                                    fullSymbol="fas fa-star icon-star custom-full" 
                                />
                            </div>
                            <div className="review__box">
                                <div className="review__image">
                                    <img className="image" src="./Images/review/02.png" alt="" />
                                </div>
                                <p className="review__content">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                <h3 className="review__name">John Deo</h3>
                                <Rating
                                    // onClick={(value) => showValue(value)}
                                    fractions={2}
                                    start={0} 
                                    stop={5} 
                                    initialRating= {4.5}
                                    emptySymbol="fas fa-star icon-star custom-empty" 
                                    fullSymbol="fas fa-star icon-star custom-full" 
                                />
                            </div>
                            <div className="review__box">
                                <div className="review__image">
                                    <img className="image" src="./Images/review/03.png" alt="" />
                                </div>
                                <p className="review__content">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                <h3 className="review__name">John Deo</h3>
                                <Rating
                                    // onClick={(value) => showValue(value)}
                                    fractions={2}
                                    start={0} 
                                    stop={5} 
                                    initialRating= {3.5}
                                    emptySymbol="fas fa-star icon-star custom-empty" 
                                    fullSymbol="fas fa-star icon-star custom-full" 
                                />
                            </div>
                            <div className="review__box">
                                <div className="review__image">
                                    <img className="image" src="./Images/review/04.png" alt="" />
                                </div>
                                <p className="review__content">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning</p>
                                <h3 className="review__name">John Deo</h3>
                                <Rating
                                    // onClick={(value) => showValue(value)}
                                    fractions={2}
                                    start={0} 
                                    stop={5} 
                                    initialRating= {5}
                                    emptySymbol="fas fa-star icon-star custom-empty" 
                                    fullSymbol="fas fa-star icon-star custom-full" 
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;