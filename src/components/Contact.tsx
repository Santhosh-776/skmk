import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    MessageCircle,
    Youtube,
    Send,
    CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: "Message Sent Successfully!",
                description:
                    "Thank you for contacting us. We'll get back to you within 24 hours.",
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 98765 43210", "+91 87654 32109"],
            action: "tel:+919876543210",
            color: "dairy-green",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["info@srikrishnadairy.com", "orders@srikrishnadairy.com"],
            action: "mailto:info@srikrishnadairy.com",
            color: "dairy-orange",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                "Sri Krishna Dairy",
                "Main Road, Dairy Colony",
                "City - 123456",
            ],
            action: "#map",
            color: "dairy-green",
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Sat: 6:00 AM - 8:00 PM", "Sun: 7:00 AM - 6:00 PM"],
            action: null,
            color: "dairy-orange",
        },
    ];

    const socialLinks = [
        { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-600" },
        {
            icon: Instagram,
            name: "Instagram",
            url: "#",
            color: "text-pink-600",
        },
        {
            icon: MessageCircle,
            name: "WhatsApp",
            url: "https://wa.me/919876543210",
            color: "text-green-600",
        },
        { icon: Youtube, name: "YouTube", url: "#", color: "text-red-600" },
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-dairy-cream/20 to-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-dairy-green/10 border border-dairy-green/20 mb-4">
                        <Phone className="h-4 w-4 text-dairy-green mr-2" />
                        <span className="text-sm font-medium text-dairy-green">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Contact Sri Krishna Dairy
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Ready to experience the finest traditional dairy
                        products? Contact us today for orders, inquiries, or to
                        learn more about our premium khoya varieties.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Contact Information
                            </h3>

                            {contactInfo.map((info, index) => (
                                <Card
                                    key={index}
                                    className="p-6 mb-4 hover-lift border border-border card-gradient">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-soft ${
                                                info.color === "dairy-green"
                                                    ? "dairy-gradient"
                                                    : "orange-gradient"
                                            }`}>
                                            <info.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                {info.title}
                                            </h4>
                                            {info.details.map(
                                                (detail, detailIndex) => (
                                                    <p
                                                        key={detailIndex}
                                                        className="text-muted-foreground text-sm">
                                                        {info.action ? (
                                                            <a
                                                                href={
                                                                    info.action
                                                                }
                                                                className="hover:text-dairy-green transition-smooth">
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
                                </Card>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center hover:scale-110 transition-transform shadow-soft hover:shadow-card"
                                        aria-label={social.name}>
                                        <social.icon
                                            className={`h-5 w-5 ${social.color}`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 border border-border card-gradient">
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Send us a Message
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-foreground mb-2">
                                            Full Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-foreground mb-2">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number *
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="h-12"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your requirements, questions, or special orders..."
                                        className="min-h-32 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="contact"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="mt-6 p-4 bg-dairy-green/5 rounded-lg border border-dairy-green/20">
                                <div className="flex items-center gap-2 text-dairy-green mb-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-medium">
                                        Quick Response Guarantee
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    We respond to all inquiries within 2-4 hours
                                    during business hours. For urgent orders,
                                    please call us directly.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Map Section */}
                <div
                    className="mt-16"
                    id="map">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Find Us
                    </h3>
                    <Card className="overflow-hidden border border-border">
                        <div className="w-full h-80 bg-gradient-to-br from-dairy-green/10 to-dairy-orange/10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-dairy-green mx-auto mb-4" />
                                <p className="text-lg font-medium text-foreground mb-2">
                                    Sri Krishna Dairy
                                </p>
                                <p className="text-muted-foreground">
                                    Main Road, Dairy Colony, City - 123456
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-4">
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
