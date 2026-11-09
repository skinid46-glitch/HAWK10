import React from "react";

const HeadLine = () => {
    return (
        <section
            id="about"
            className="
                w-full bg-white text-black
                flex flex-col items-center justify-center
                px-5 sm:px-8 md:px-10
                py-[clamp(60px,8vw,110px)]
                text-center overflow-hidden
            "
        >
            <p className="
                text-[#174DAD] font-montserrat
                font-extrabold tracking-[0.25em]
                text-xs md:text-sm mb-5
            ">
                ABOUT HAWK10
            </p>

            <h1 className="
                font-nudge
                text-[clamp(30px,5vh,58px)]
                md:text-[clamp(38px,5vh,64px)]
                leading-[1.15] tracking-[0.1rem]
                max-w-[900px]
            ">
                Your Fitness Journey.
                <br />
                <span className="text-[#174DAD]">
                    Your Strongest Self.
                </span>
            </h1>

            <p className="
                mt-6 max-w-[720px]
                text-[clamp(13px,1.1vw,16px)]
                font-Work font-medium
                leading-[1.8] text-gray-700
            ">
                HAWK10 Fitness Arena is a fitness destination in
                Sindhu Bhavan, Ahmedabad. Whether you are working
                towards better strength, improved fitness or a
                healthier lifestyle, make every workout count.
            </p>

            <a
                href="https://wa.me/918733871709"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    py-4 px-7 bg-[#E8FE61]
                    rounded-full mt-8
                    font-montserrat font-extrabold
                    text-sm hover:scale-105
                    transition duration-200
                "
            >
                Get In Touch →
            </a>

            <img
                src="https://img.magicpin.com/8268511_store_images_2.webp"
                alt="HAWK10 Fitness Arena exterior"
                className="
                    mt-12 w-full max-w-[1000px]
                    h-[250px] sm:h-[400px]
                    object-cover rounded-2xl
                    shadow-xl
                "
            />
        </section>
    );
};

export default HeadLine;