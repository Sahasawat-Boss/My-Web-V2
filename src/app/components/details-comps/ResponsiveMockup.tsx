import Image from "next/image";

export default function ResponsiveMockup() {
    return (
        <section className="w-full flex justify-center py-10 px-4 shadow">
            <div className="relative w-[450px]">
                {/* Laptop Mockup */}
                <Image
                    src="/Images/res/res02.png"
                    alt="Laptop Mockup"
                    width={1385}
                    height={788}
                    className="w-full h-auto rounded-xl shadow-lg"
                    priority
                />

                {/* Mobile Mockup - Positioned relative to the laptop */}
                <div className="absolute right-[35px] bottom-[-8px] w-[95px]">
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
