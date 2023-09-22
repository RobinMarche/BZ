import planche_1 from "../../assets/planche_1.jpg";
import planche_2 from "../../assets/planche_2.jpg";
import carousel_1 from "../../assets/carousel_1.jpg";

export default function Carousel() {

    return(
        <>

        <h1 id="bar" className="text-6xl text-info drop-shadow md:mt-16 md:text-8xl text-center my-8">Les Planches</h1>
        <p className="text-center pb-16 md:mx-64 px-8  md:text-xl" id="prez">Le BZ vous invite à découvrir une expérience gustative authentique avec ses succulentes planches mettant en avant les délices du terroir franc-comtois. Dans un cadre chaleureux et convivial, laissez-vous séduire par ces créations gourmandes qui célèbrent la richesse de la charcuterie et du fromage de la région.</p>

        <div className="md:flex md:justify-center mb-16">
            <div className="carousel mx-6 md:w-1/3 rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={planche_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={planche_2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={carousel_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={planche_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}