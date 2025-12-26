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
    MessageCircle,
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

        const subject = `Inquiry from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
        `.trim();

        // Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=srikrishnamilkkova@gmail.com&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        // Open Gmail in new tab
        window.open(gmailUrl, "_blank");

        toast({
            title: "Opening Gmail",
            description: "Gmail will open in a new tab to send your message.",
        });

        // Clear form after opening Gmail
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1000);
    };

    const handleOpenMap = () => {
        const googleMapsUrl = `https://www.google.com/maps/place/Sri+Krishna+milk+kova/@12.9360193,78.841922,13z/data=!4m10!1m2!2m1!1sSri+Krishna+Milk+Products+Main+Road+Milk+Colony+City+123456!3m6!1s0x3bad6ca7601cb1db:0x7dce311b7a775f97!8m2!3d12.9527427!4d78.9288063!15sCjtTcmkgS3Jpc2huYSBNaWxrIFByb2R1Y3RzIE1haW4gUm9hZCBNaWxrIENvbG9ueSBDaXR5IDEyMzQ1Nlo9Ijtzcmkga3Jpc2huYSBtaWxrIHByb2R1Y3RzIG1haW4gcm9hZCBtaWxrIGNvbG9ueSBjaXR5IDEyMzQ1NpIBDmRhaXJ5X3N1cHBsaWVy4AEA!16s%2Fg%2F11d_tr4j4p?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`;
        window.open(googleMapsUrl, "_blank");
    };
    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 9442773918", "+91 9884029157"],
            action: "tel:+919442773918",
            color: "dairy-green",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["srikrishnamilkkova@gmail.com"],
            action: "mailto:srikrishnamilkkova@gmail.com",
            color: "dairy-orange",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                "Sri Krishna Dairy - Proprietor: P. Ashokkumar",
                "3/442 Keel St, K. A. Mottur",
                "Keelalathur, K.V. Kuppam, Vellore",
            ],
            action: "#map",
            color: "dairy-green",
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Sun: 8:00 AM - 8:00 PM"],
            action: null,
            color: "dairy-orange",
        },
    ];

    //

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
                                <p className="text-sm font-medium text-foreground">
                                    Proprietor: P. Ashokkumar
                                </p>
                                <p className="text-muted-foreground mt-2">
                                    3/442 Keel St, K. A. Mottur
                                </p>
                                <p className="text-muted-foreground">
                                    Keelalathur, K.V. Kuppam, Vellore
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-4"
                                    onClick={() => {
                                        handleOpenMap();
                                    }}>
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
