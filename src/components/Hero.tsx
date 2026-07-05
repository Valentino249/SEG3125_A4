import BG from "../assets/hanging_clothes.jpg"

interface HeroProps {
  onNavigate: (page: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
    return (
        <div>
            <div className="relative h-screen w-screen">
                <img src={BG} alt="test" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl lg:text-9xl text-black bg-white rounded px-5 font-bold">SUMMER FEST IS HERE!</h1>
                    <div className="flex flex-col gap-3">
                        <p className="text-xl text-black bg-white rounded px-5 font-bold mt-4">ENDS July 15</p>
                        <button className="btn" onClick={() => onNavigate("search")}>SHOP NOW</button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Hero