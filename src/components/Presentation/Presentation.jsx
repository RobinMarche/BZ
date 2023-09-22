import planche_1 from "../../assets/planche_1.jpg";
import planche_2 from "../../assets/planche_2.jpg";
import planche_3 from "../../assets/planche_3.jpg";
import planche_4 from "../../assets/planche_4.jpg";

export default function Presentation() {
    return (
        <>
            <main className="flex flex-col lg:flex-row px-8 md:p-36">
                <div className="flex flex-col justify-center items-center md:px-8 md:justify-start mb-8">
                    <h1 id="bar" className="text-7xl text-info drop-shadow mt-8 md:text-9xl">Bar à Tapas</h1>
                    <h2 className="uppercase text-xl mb-8 tracking-widest md:mt-[-25px] mt-[-20px] text-white">Au centre ville de Dole</h2>
                    <p className="text-center pb-16 lg:w-1/2 md:text-xl" id="prez">Situés en plein coeur du centre ville piéton Dolois, Cyril et Nathalie vous accueille du lundi au samedi et vous propose <span className="text-info">plats du jour</span>, <span className="text-info">boissons</span> et <span className="text-info">tapas</span> pour votre plus grand plaisir. Au 53 Rue de Besançon, ce bar vous propose des produits d'artisans locaux. Alors, envie d'un café, de grignoter ou de passer un bon moment, Nous vous attendons !</p>

                    <button className="btn btn-info text-white">J'y vais !</button>
                </div>

                <div>
                    <img src={planche_3} alt="" className="w-full h-full object-cover object-center rounded-2xl"/>
                </div>

            </main>
                
            <div className="mt-8 my-4 h-0.5 border-t-0 border-solid border-infos bg-infos bg-gradient-to-r from-transparent via-blue-800 to-transparent opacity-85">
            </div>
        </>
    )
}