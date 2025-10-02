import Typewriter from "@/components/typewriter/Typewriter";

export default function Hero() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-transparent bg-[linear-gradient(120deg,#F9EFEF_20%,#F48E8E_40%,#F9EFEF_90%)] bg-clip-text text-[100px]" style={{ fontWeight: 400 }}>
                    illuminaite academy
                </h1>
                <h2 className="text-text text-xl mt-4">
                    <Typewriter 
                        text={['> demystifying the world of CS & AI \n> building a network of interdisciplinary \nstudents & opportunities']}
                        typingSpeed={30}
                    />
                </h2>
            </div>
        </div>
    )
}