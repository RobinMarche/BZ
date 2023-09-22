import bar from '../../assets/bar.jpg'

export default function Bar() {
    return(
        <>
            <div className="mt-8 my-4 h-0.5 border-t-0 border-solid border-infos bg-infos bg-gradient-to-r from-transparent via-blue-800 to-transparent opacity-85">
            </div>
            <h1 id="bar" className="text-6xl text-info drop-shadow md:mt-16 md:text-8xl text-center my-8">Le Bar</h1>

            <div id='bar-background' className='md:h-[50vh] flex justify-center items-center'>
                <p id="prez" className="text-center md:w-1/2 p-8 md:text-xl">
                    Le BZ, un véritable havre de convivialité au cœur de Dole, est bien plus qu'un simple bar. C'est un lieu emblématique où Cyril et Nathalie vous accueillent chaleureusement, toujours prêts à vous faire découvrir le meilleur de la scène des boissons locales et des spiritueux.
                    <br /><br />
                    Situé dans un coin pittoresque de la ville, le BZ se distingue par son ambiance détendue et son décor rustique-chic. Les murs en pierre apparente et les tables en bois créent une atmosphère authentique, parfaite pour se détendre après une longue journée de travail ou pour partager des moments inoubliables entre amis.
                </p>
            </div>
        
        </>
    )
}