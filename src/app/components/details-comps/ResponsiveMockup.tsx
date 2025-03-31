import Image from "next/image";

export default function ResponsiveMockup() {
    return (
        <section className="w-full flex justify-center py-10 px-4 shadow">
            <div className="relative w-[380px]">
                {/* Laptop Mockup */}
                <Image
                    src="/Images/res/res02.png"
                    alt="Laptop Mockup"
                    width={1385}
                    height={788}
                    className="w-full h-[110%] sm:h-full rounded-xl shadow-lg"
                    priority
                />

                {/* Mobile Mockup - Positioned relative to the laptop */}
                <div className="absolute right-[13px] sm:right-[25px] bottom-[-20px] sm:bottom-[-6px] w-[80px]">
                    <Image
                        src="/Images/res/res01.png"
                        alt="Mobile Mockup"
                        width={276}
                        height={532}
                        className="w-full h-auto rounded-xl shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
