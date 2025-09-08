import { Shield, Heart, Truck, Award } from "lucide-react";
import khoyaImage from "@/assets/khova-traditional.jpeg";

const About = () => {
    const features = [
        {
            icon: Heart,
            title: "Fresh Cow's Milk",
            description:
                "We source only the finest, freshest cow's milk from trusted local farmers who share our commitment to quality.",
        },
        {
            icon: Shield,
            title: "Traditional Preparation",
            description:
                "Our khova is prepared using time-honored traditional methods passed down through generations, ensuring authentic taste and texture.",
        },
        {
            icon: Truck,
            title: "Hygienic Packaging",
            description:
                "State-of-the-art vacuum packaging and cold storage facilities maintain freshness and extend shelf life without preservatives.",
        },
        {
            icon: Award,
            title: "Premium Quality",
            description:
                "Every batch undergoes rigorous quality checks to ensure you receive only the finest Milk products for your family.",
        },
    ];

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-b from-background to-Milk-cream/30">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-Milk-green/10 border border-Milk-green/20 mb-4">
                        <span className="text-sm font-medium text-Milk-green">
                            About Sri Krishna Milk Products
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Tradition Meets Quality
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        For over a decade, we've been dedicated to bringing you
                        the finest traditional Milk products, crafted with love
                        and expertise that spans generations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                From Farm to Family
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Sri Krishna Milk Products was born from a
                                passion for preserving traditional Milk-making
                                methods while meeting modern quality standards.
                                We believe that the best Milk products come from
                                the perfect blend of time-tested techniques and
                                contemporary hygiene practices.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Every product we create tells a story of
                                dedication, from the careful selection of the
                                finest cow's milk to the artisanal preparation
                                of our signature khova varieties.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="card-gradient p-6 rounded-xl border border-border hover-lift">
                                    <div className="Milk-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src={khoyaImage}
                                alt="Traditional khova preparation in copper vessel"
                                className="w-full h-[500px] object-cover rounded-2xl shadow-card"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 Milk-gradient rounded-full opacity-20 animate-float"></div>
                        <div
                            className="absolute -bottom-4 -left-4 w-32 h-32 orange-gradient rounded-full opacity-15 animate-float"
                            style={{ animationDelay: "1s" }}></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 pt-16 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-Milk-green mb-2">
                                10+
                            </div>
                            <div className="text-muted-foreground">
                                Years of Excellence
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-Milk-orange mb-2">
                                1000+
                            </div>
                            <div className="text-muted-foreground">
                                Satisfied Customers
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-Milk-green mb-2">
                                100%
                            </div>
                            <div className="text-muted-foreground">
                                Natural Ingredients
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-Milk-orange mb-2">
                                24/7
                            </div>
                            <div className="text-muted-foreground">
                                Quality Assurance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
