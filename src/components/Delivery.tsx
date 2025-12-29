import { Truck, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Delivery = () => {
    return (
        <section
            id="delivery"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-Milk-cream/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-Milk-orange/10 border border-Milk-orange/20 mb-3 sm:mb-4">
                        <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-Milk-orange mr-2" />
                        <span className="text-xs sm:text-sm font-medium text-Milk-orange">
                            Delivery Services
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
                        Daily Transport Facility
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                        Reliable and efficient delivery services for bulk orders
                        across Chennai and Vellore regions
                    </p>
                </div>

                {/* Main Delivery Card */}
                <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
                    <Card className="overflow-hidden border-2 border-Milk-orange/30 shadow-hero">
                        <div className="card-gradient p-6 sm:p-8 md:p-10">
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                {/* Truck Icon */}
                                <div className="orange-gradient w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-card flex-shrink-0 transform hover:scale-105 transition-transform">
                                    <Truck className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                                        Daily Bulk Order Delivery
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                                        We provide dedicated{" "}
                                        <span className="font-semibold text-foreground">
                                            daily transportation services
                                        </span>{" "}
                                        for bulk orders to ensure your premium
                                        kova products arrive fresh and on time.
                                        Our own delivery fleet covers from{" "}
                                        <span className="font-semibold text-Milk-orange">
                                            Vellore
                                        </span>{" "}
                                        to{" "}
                                        <span className="font-semibold text-Milk-orange">
                                            Chennai
                                        </span>
                                        .
                                    </p>
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="gap-2 h-10 sm:h-12 text-sm sm:text-base"
                                        onClick={() => {
                                            const contactSection =
                                                document.getElementById(
                                                    "contact"
                                                );
                                            if (contactSection) {
                                                contactSection.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}>
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Contact for Bulk Orders
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* CTA Section */}
                <div className="mt-8 sm:mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-Milk-orange/10 border border-Milk-orange/20 rounded-2xl p-4 sm:p-6">
                        <p className="text-sm sm:text-base text-foreground font-medium">
                            Interested in bulk orders with daily delivery?
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 h-8 sm:h-9 text-xs sm:text-sm"
                            onClick={() => {
                                window.open("tel:+919442773918", "_self");
                            }}>
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                            Call +91 9442773918
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
