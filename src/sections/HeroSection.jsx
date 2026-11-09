import React from "react";
import Slider from "../components/Slider";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="
                relative w-full min-h-[100svh]
                bg-[#174dad] overflow-hidden
                flex flex-col justify-between
                select-none
            "
        >
            <div className="
                absolute top-[45%] left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[350px] h-[350px]
                bg-white rounded-full blur-[130px]
                opacity-50 pointer-events-none
            " />

            <div className="
                relative z-20 w-full
                mt-[150px] md:mt-[190px]
                max-w-7xl mx-auto px-6 md:px-12
                grid grid-cols-1 md:grid-cols-2
                items-center gap-10
            ">
                <div className="text-white">
                    <p className="
                        font-montserrat font-bold
                        tracking-[0.2em] text-sm
                        text-lime-300 mb-5
                    ">
                        WELCOME TO HAWK10
                    </p>

                    <h1 className="
                        font-montserrat font-black
                        text-[clamp(52px,8vw,105px)]
                        leading-[0.95] tracking-tight
                    ">
                        TRAIN
                        <br />
                        HARDER.
                        <br />
                        <span className="text-lime-300">
                            LIVE
                        </span>
                        <br />
                        STRONGER.
                    </h1>

                    <p className="
                        mt-7 max-w-[480px]
                        text-white/90 text-sm md:text-base
                        leading-relaxed font-medium
                    ">
                        Take your fitness journey to the next level.
                        Discover a motivating training environment,
                        expert guidance and a space built to help you
                        push your limits.
                    </p>

                    <a
                        href="https://wa.me/918733871709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center justify-center
                            bg-[#E8FE61] text-black
                            font-montserrat font-black
                            rounded-2xl px-7 py-4 mt-8
                            hover:scale-105 transition
                        "
                    >
                        Start Your Journey →
                    </a>
                </div>

                <div className="
                    relative w-full
                    rounded-3xl overflow-hidden
                    border-4 border-white/10
                    shadow-2xl
                    ml-10
                ">
                    <img
                        src="https://img.magicpin.com/8268511_store_images_1.webp"
                        alt="HAWK10 Fitness Arena gym interior"
                        className="
                            
                            w-full h-[350px] md:h-[520px]
                            object-cover
                        "
                    />

                    <div className="
                        absolute inset-0
                        bg-gradient-to-t from-[#102f68]/70
                        via-transparent to-transparent
                    " />

                    <div className="
                        absolute bottom-6 left-6
                        text-white
                    ">
                        <p className="font-black text-2xl">
                            HAWK10
                        </p>
                        <p className="text-lime-300 font-bold tracking-widest text-xs">
                            FITNESS ARENA
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-16 z-30">
                <Slider />
            </div>
        </section>
    );
};

export default HeroSection;