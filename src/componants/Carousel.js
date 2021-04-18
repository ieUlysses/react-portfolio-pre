import "./Carousel.css"

// eslint-disable-next-line 
export default function (props) {
    return (<section className="wrapper">

        <div id="carouselExampleControls " className="carousel slide" data-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active a ">
                    <img className="one" src={props.image} alt="First slide" />
                    <div className="rounded">
                        <h4>
                            {props.text}
                        </h4>
                    </div>

                </div>
                <div className="carousel-item b">
                    <img className="two" src={props.image} alt="Second slide" />
                    <div className="rounded">
                        <h4>
                            {props.text}
                        </h4>
                    </div>
                </div>
                <div className="carousel-item c">
                    <img className="three" src={props.image} alt="Third slide" />
                    <div className="rounded">
                        <h4>
                            {props.text}
                        </h4>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    </section>
    );
}
