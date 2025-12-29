import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero.png";

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Traditional Milk farm with cows grazing in green pastures"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-float">
                        <span className="text-sm font-medium">
                            🥛 Premium Milk Products
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Premium
                        <span className="block Milk-gradient bg-clip-text text-transparent">
                            Kova & Milk Products
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Direct from farmers to your table – 100% natural,
                        hygienic, and preservative-free kova products made with
                        traditional expertise.
                    </p>

                    {/* Key Features */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-green-400">✓</span>
                            <span>100% Natural</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-green-400">✓</span>
                            <span>Preservative-Free</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-green-400">✓</span>
                            <span>Organic Methods</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="hero"
                            size="hero"
                            onClick={scrollToContact}
                            className="gap-3 group">
                            Contact Us Today
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-white/70 mb-4">
                            Trusted by thousands of families
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-white/60">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    50+
                                </div>
                                <div className="text-sm">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    1000+
                                </div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    100%
                                </div>
                                <div className="text-sm">Organic Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
