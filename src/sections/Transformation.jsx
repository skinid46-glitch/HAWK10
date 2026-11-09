import React from "react";

const gymImages = [
    {
        src: "https://img.magicpin.com/8268511_store_images_0.webp",
        alt: "HAWK10 gym workout area"
    },
    {
        src: "https://img.magicpin.com/8268511_store_images_1.webp",
        alt: "HAWK10 gym reception and training equipment"
    },
    {
        src: "https://img.magicpin.com/8268511_store_images_2.webp",
        alt: "HAWK10 Fitness Arena exterior"
    },
    {
        src: "https://img.magicpin.com/8268511_store_images_3.webp",
        alt: "HAWK10 Pilates training area"
    },
    {
        src: "https://img.magicpin.com/8268511_store_images_4.webp",
        alt: "HAWK10 cardio and workout equipment"
    },
    {
        src: "https://img.magicpin.com/8268511_store_images_5.webp",
        alt: "HAWK10 Fitness Arena reception lounge"
    }
];

const Transformation = () => {
    return (
        <section
            id="transformations"
            className="
                w-full bg-white
                px-5 sm:px-8 md:px-12
                py-16 md:py-24
                flex flex-col items-center
            "
        >
            <h1 className="
                font-nudge text-black text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider
            ">
                Step Inside
            </h1>

            <h1 className="
                font-nudge text-[#174DAD] text-center
                text-[clamp(28px,5vw,56px)]
                leading-tight tracking-wider mt-2
            ">
                HAWK10 Fitness Arena
            </h1>

            <p className="
                mt-5 max-w-[650px]
                text-center text-gray-600
                font-Work leading-relaxed
            ">
                Explore the training environment and facilities
                at HAWK10, Times Square Grand.
            </p>

            <div className="
                w-full max-w-[1100px]
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-4 sm:gap-5 mt-12
            ">
                {gymImages.map((image, index) => (
                    <div
                        key={index}
                        className="
                            group overflow-hidden
                            rounded-2xl bg-gray-100
                            shadow-md
                        "
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="
                                w-full h-[250px] sm:h-[280px]
                                object-cover
                                group-hover:scale-105
                                transition-transform duration-500
                            "
                        />
                    </div>
                ))}
            </div>

            <div className="
                mt-16 w-full max-w-[1100px]
                min-h-[320px] rounded-3xl
                bg-[#174DAD]
                flex flex-col justify-center items-center
                text-center px-6 sm:px-12 py-12
            ">
                <h1 className="
                    text-white font-nudge
                    text-[clamp(24px,4vw,42px)]
                    tracking-wide
                ">
                    Ready To Get Stronger?
                </h1>

                <p className="
                    mt-5 text-white
                    text-sm md:text-base
                    font-montserrat leading-relaxed
                    max-w-[700px]
                ">
                    Take the first step towards your fitness goals.
                    Contact HAWK10 Fitness Arena to learn more.
                </p>

                <a
                    href="https://wa.me/918733871709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        mt-8 bg-[#E8FE61] text-black
                        font-montserrat font-extrabold
                        px-8 py-4 rounded-2xl
                        hover:scale-105 transition
                    "
                >
                    Contact HAWK10 →
                </a>
            </div>
        </section>
    );
};

export default Transformation;