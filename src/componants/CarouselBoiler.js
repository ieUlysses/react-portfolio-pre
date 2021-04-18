import Carousel from "./Carousel"
import "./Carousel.css"






let carouselInfo = [
    {
        title: "Html/css",
        image: "https://images.unsplash.com/photo-1618599919511-c0cd9e3625cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1307&q=80",
        text: "Hello and welcome",


    },
    {
        title: "Bootstrap",
        image: "https://images.unsplash.com/photo-1618599919511-c0cd9e3625cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1307&q=80",
        text: "s-2",


    },
    {
        title: "Material-Ui",
        image: "https://images.unsplash.com/photo-1618599919511-c0cd9e3625cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1307&q=80",
        text: "s-3",

    }
]
// eslint-disable-next-line 
export default function () {
    let slides = carouselInfo.map(slide => <CarouselBoiler
        imgage={slide.image}
        title={slide.title}
        text={slide.text}
    /* Forgot to add following line.code essentially gives boiler the key */


    />)


    return (

        <div>
            { slides}
        </div>

    )
}