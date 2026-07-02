import Todo from "../assets/hero.png"

function Hero() {
    return (
        <div>
            <div className="relative h-screen w-screen">
                <img src={Todo} alt="test" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-black font-bold">SUMMER FEST IS HERE!</h1>
                    <p className="text-xl text-black mt-4">ENDS July 15</p>
                </div>
            </div>
        </div>

    )
}

export default Hero