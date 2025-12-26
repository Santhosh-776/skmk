import {
    Facebook,
    Instagram,
    MessageCircle,
    Youtube,
    Heart,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

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

    const socialLinks = [
        { icon: Facebook, name: "Facebook", url: "#" },
        { icon: Instagram, name: "Instagram", url: "#" },
        {
            icon: MessageCircle,
            name: "WhatsApp",
            url: "https://wa.me/919876543210",
        },
        { icon: Youtube, name: "YouTube", url: "#" },
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
                                    Premium Traditional Products
                                </p>
                            </div>
                        </div>
                        <p className="text-black/90 mb-6 text-sm leading-relaxed">
                            For over a decade, we've been committed to bringing
                            you the finest traditional Milk products, crafted
                            with love and expertise that spans generations. From
                            our farm to your family.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-smooth"
                                    aria-label={social.name}>
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
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
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-black/80 mt-0.5" />
                                <div>
                                    <p className="text-sm text-black/90">
                                        +91 98765 43210
                                    </p>
                                    <p className="text-sm text-black/90">
                                        +91 87654 32109
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-black/80 mt-0.5" />
                                <div>
                                    <p className="text-sm text-black/90">
                                        info@srikrishnaMilk.com
                                    </p>
                                    <p className="text-sm text-black/90">
                                        orders@srikrishnaMilk.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-black/80 mt-0.5" />
                                <div>
                                    <p className="text-sm text-black/90">
                                        Sri Krishna Milk Products
                                    </p>
                                    <p className="text-sm text-black/90">
                                        Main Road, Milk Colony
                                    </p>
                                    <p className="text-sm text-black/90">
                                        City - 123456
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-8 border-t border-black/20">
                    <div className="text-center mb-8">
                        <h4 className="text-lg font-semibold mb-4">
                            Business Hours
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
                            <div className="bg-black/10 rounded-lg p-4">
                                <p className="font-medium mb-1">
                                    Monday - Saturday
                                </p>
                                <p className="text-sm text-black/90">
                                    6:00 AM - 8:00 PM
                                </p>
                            </div>
                            <div className="bg-black/10 rounded-lg p-4">
                                <p className="font-medium mb-1">Sunday</p>
                                <p className="text-sm text-black/90">
                                    7:00 AM - 6:00 PM
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
                                Proprietor: [Your Name] | FSSAI License:
                                [License Number]
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-black/80">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-red-400 fill-red-400" />
                            <span>for quality Milk products</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
