import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/contact";
const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const quickLinks = [
        { name: "Home", id: "home" },
        { name: "About Us", id: "about" },
        { name: "Products", id: "products" },
        { name: "Our Process", id: "process" },
        { name: "Contact", id: "contact" },
    ];

    const products = [
        "Unsweetened Kova",
        "Sweetened Kova",
        "Elaichi Kova",
        "Custom Orders",
        "Bulk Orders",
    ];

    return (
        <footer className="bg-gradient-to-b from-Milk-green to-Milk-green/90 text-black mt-20">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center text-black font-bold text-xl">
                                SK
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Sri Krishna Milk Products
                                </h3>
                                <p className="text-sm text-black/80">
                                    Premium Kova Products
                                </p>
                            </div>
                        </div>
                        <p className="text-black/90 mb-6 text-sm leading-relaxed">
                            For over a decade, we've been committed to bringing
                            you the finest traditional Milk products, crafted
                            with love and expertise that spans generations. From
                            our farm to your family.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-black/90 hover:text-black transition-smooth text-sm">
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Our Products
                        </h4>
                        <ul className="space-y-3">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <span className="text-black/90 text-sm cursor-pointer hover:text-black transition-smooth">
                                        {product}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Contact Info
                        </h4>
                        <div className="space-y-4">
                            {contactInfo.slice(0, 3).map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3">
                                        <Icon className="h-5 w-5 text-black/80 mt-0.5 flex-shrink-0" />
                                        <div>
                                            {info.details.map(
                                                (detail, detailIndex) => (
                                                    <p
                                                        key={detailIndex}
                                                        className="text-sm text-black/90">
                                                        {info.action &&
                                                        info.action !==
                                                            "#map" ? (
                                                            <a
                                                                href={
                                                                    info.action
                                                                }
                                                                className="hover:text-black transition-smooth">
                                                                {detail}
                                                            </a>
                                                        ) : (
                                                            detail
                                                        )}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-8 border-t border-black/20">
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-4">
                            Business Hours
                        </h4>
                        <div className="max-w-md mx-auto">
                            <div className="bg-black/10 rounded-lg p-4">
                                <p className="text-sm text-black/90">
                                    {contactInfo[3].details[0]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-black/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-black/80 text-center md:text-left">
                            <p>
                                © 2024 Sri Krishna Milk Products. All rights
                                reserved.
                            </p>
                            <p className="mt-1">
                                Proprietor: P. Ashokkumar | FSSAI License:
                                [License Number]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
