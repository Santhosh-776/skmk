import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactInfo = [
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
