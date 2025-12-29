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
                "Our master craftsmen use time-honored techniques to create perfect kova with authentic taste.",
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
            title: "Hygenic Packaging",
            description:
                "Advanced hygenic packaging technology ensures freshness and extends shelf life naturally.",
            details: [
                "Hygenic sealed",
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
                        continues through every step of our organic preparation
                        process, ensuring you receive the finest Milk products.
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

                {/* Process Highlight */}
                <div className="mt-20">
                    <div className="card-gradient p-8 md:p-10 rounded-2xl border-2 border-Milk-orange/30 shadow-hero">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="orange-gradient w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-card flex-shrink-0 transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <span className="text-white text-4xl md:text-5xl font-bold block">
                                        24
                                    </span>
                                    <span className="text-white/90 text-xs md:text-sm font-medium">
                                        HOURS
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                                    Complete Process in{" "}
                                    <span className="text-Milk-orange">
                                        24 Hours
                                    </span>
                                </h3>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                    From the moment we source fresh milk from
                                    local farms to the final hygienic food-grade
                                    packaging, our entire production process is
                                    completed within 24 hours. This rapid
                                    turnaround ensures{" "}
                                    <span className="font-semibold text-foreground">
                                        maximum freshness
                                    </span>
                                    ,{" "}
                                    <span className="font-semibold text-foreground">
                                        superior quality
                                    </span>
                                    , and{" "}
                                    <span className="font-semibold text-foreground">
                                        authentic taste
                                    </span>{" "}
                                    in every product.
                                </p>
                            </div>
                        </div>
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
