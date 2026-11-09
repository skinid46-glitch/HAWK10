import React from "react";

const Services = () => {
    const services = [
        {
            title: "Strength Training",
            description:
                "Build strength and improve your fitness with resistance-based workouts."
        },
        {
            title: "Personal Training",
            description:
                "Get focused guidance and training support to work towards your individual fitness goals."
        },
        {
            title: "Pilates",
            description:
                "Work on core strength, flexibility, balance and controlled movement."
        },
        {
            title: "Aerobics",
            description:
                "Enjoy energetic workouts designed to improve cardiovascular fitness and stamina."
        },
        {
            title: "Yoga",
            description:
                "Improve flexibility, balance and body awareness through mindful movement."
        },
        {
            title: "Kickboxing & Zumba",
            description:
                "Bring energy to your workout with dynamic movement and dance-inspired training."
        },
        {
            title: "Calisthenics",
            description:
                "Develop body control and functional strength through bodyweight exercises."
        }
    ];

    return (
        <section
            id="services"
            className="
                w-full bg-[#EFF5FF]
                px-5 sm:px-8 md:px-16 lg:px-20
                py-12 sm:py-14 md:py-20
                flex flex-col items-center
                gap-6
            "
        >
            <h1 className="
                text-black font-nudge font-bold
                tracking-wider
                text-[clamp(28px,4vw,50px)]
            ">
                Our Fitness Programs
            </h1>

            <p className="
                text-black font-Work font-medium
                text-sm md:text-lg leading-relaxed
                max-w-[680px] text-center
            ">
                Explore different ways to train, build strength,
                improve endurance and make fitness part of your lifestyle.
            </p>

            <div className="
                w-full max-w-[1100px]
                flex flex-col gap-3 mt-2
            ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className="
                            collapse collapse-arrow
                            bg-white text-black
                            border border-black/5
                            rounded-xl shadow-sm
                            focus:bg-[#174DAD]
                            focus:text-white
                            transition-colors duration-300
                        "
                    >
                        <div className="
                            collapse-title font-nudge
                            tracking-wider
                            text-[clamp(14px,1.4vw,18px)]
                            min-h-[64px] flex items-center
                        ">
                            {service.title}
                        </div>

                        <div className="
                            collapse-content font-Work
                            text-sm leading-relaxed
                        ">
                            {service.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;