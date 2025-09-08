import { Truck, CheckCircle, ChefHat, Package } from "lucide-react";

const Process = () => {
    const steps = [
        {
            icon: Truck,
            title: "Direct Sourcing",
            description:
                "We partner with trusted local farmers to source the freshest, highest-quality cow's milk daily.",
            details: [
                "Fresh daily collection",
                "Quality certified farms",
                "Direct farmer partnerships",
                "No middlemen",
            ],
            color: "Milk-green",
        },
        {
            icon: CheckCircle,
            title: "Quality Check",
            description:
                "Every batch undergoes rigorous testing for purity, freshness, and quality before processing.",
            details: [
                "Laboratory testing",
                "Purity verification",
                "Freshness checks",
                "Quality certification",
            ],
            color: "Milk-orange",
        },
        {
            icon: ChefHat,
            title: "Traditional Preparation",
            description:
                "Our master craftsmen use time-honored techniques to create perfect khova with authentic taste.",
            details: [
                "Traditional methods",
                "Expert craftsmanship",
                "Slow cooking process",
                "Authentic recipes",
            ],
            color: "Milk-green",
        },
        {
            icon: Package,
            title: "Vacuum Packaging",
            description:
                "Advanced vacuum packaging technology ensures freshness and extends shelf life naturally.",
            details: [
                "Vacuum sealed",
                "Extended freshness",
                "Hygienic packaging",
                "Safe storage",
            ],
            color: "Milk-orange",
        },
    ];

    return (
        <section
            id="process"
            className="py-20 bg-gradient-to-b from-background to-Milk-cream/20 ">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-Milk-green/10 border border-Milk-green/20 mb-4">
                        <ChefHat className="h-4 w-4 text-Milk-green mr-2" />
                        <span className="text-sm font-medium text-Milk-green">
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        From Farm to Your Table
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to quality begins at the source and
                        continues through every step of our traditional
                        preparation process, ensuring you receive the finest
                        Milk products.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group">
                            {/* Connection Line (hidden on mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden xl:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-Milk-green/30 to-Milk-orange/30 z-0 transform translate-x-4"></div>
                            )}

                            {/* Step Card */}
                            <div className="relative z-10 card-gradient p-6 rounded-2xl border border-border hover-lift text-center group">
                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-Milk-orange rounded-full flex items-center justify-center text-white text-sm font-bold shadow-soft">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                                        step.color === "Milk-green"
                                            ? "Milk-gradient"
                                            : "orange-gradient"
                                    } shadow-soft group-hover:scale-110 transition-transform`}>
                                    <step.icon className="h-8 w-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Details */}
                                <div className="space-y-2">
                                    {step.details.map((detail, detailIndex) => (
                                        <div
                                            key={detailIndex}
                                            className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full ${
                                                    step.color === "Milk-green"
                                                        ? "bg-Milk-green"
                                                        : "bg-Milk-orange"
                                                }`}></span>
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Highlights */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="Milk-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                            <span className="text-white text-2xl font-bold">
                                0
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                            Zero Preservatives
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Our traditional methods and vacuum packaging
                            eliminate the need for artificial preservatives.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="orange-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                            <span className="text-white text-2xl font-bold">
                                24
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                            24-Hour Process
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            From milk sourcing to final packaging, our entire
                            process is completed within 24 hours.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="Milk-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                            <span className="text-white text-2xl font-bold">
                                100
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                            100% Quality
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Every batch meets our stringent quality standards
                            before reaching your kitchen.
                        </p>
                    </div>
                </div>

                {/* Quality Assurance */}
                <div className="mt-16 card-gradient p-8 rounded-2xl border border-border">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Quality Assurance Guarantee
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            We stand behind every product with our quality
                            guarantee. If you're not completely satisfied with
                            your purchase, we'll make it right.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-Milk-green" />
                                <span>FSSAI Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-Milk-green" />
                                <span>ISO Quality Standards</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-Milk-green" />
                                <span>Regular Lab Testing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-Milk-green" />
                                <span>100% Satisfaction Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
