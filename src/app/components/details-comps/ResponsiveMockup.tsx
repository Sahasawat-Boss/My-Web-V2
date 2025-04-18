import Image from "next/image";

export default function ResponsiveMockup() {
    return (
        <section className="w-full flex justify-center pt-8 px-4 shadow">
            
            <div className="relative w-[390px]">
                {/* Laptop Mockup */}
                <Image
                    src="/Images/res/desktop.png"
                    alt="Laptop Mockup"
                    width={1395}
                    height={798}
                    className="w-full h-[110%] sm:h-full rounded-xl shadow-lg"
                    priority
                />

                {/* Mobile Mockup - Positioned relative to the laptop */}
                <div className="absolute right-[10px] sm:right-[18px] bottom-[-20px] sm:bottom-[-6px] w-[70px] md:w-[85px]">
                    <Image
                        src="/Images/res/mobile.png"
                        alt="Mobile Mockup"
                        width={276}
                        height={532}
                        className="w-full h-auto rounded-xl shadow-xl"
                        priority
                    />
                </div>

                {/* Tablet Mockup - Positioned relative to the laptop */}
                <div className="absolute left-[2px] sm:left-[-10px] bottom-[-6px] sm:bottom-[6px]  w-[140px] md:w-[180px]">
                    <Image
                        src="/Images/res/ipad.png"
                        alt="Tablet Mockup"
                        width={400}
                        height={600}
                        className="w-full h-auto rounded-xl shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
