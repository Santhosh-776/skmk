import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Leaf } from "lucide-react";
import unsweetenedKhoya from "@/assets/unsweetened-khova.jpeg";
import sweetenedKhoya from "@/assets/sweetened-khova.jpeg";
import elaichiKhoya from "@/assets/elaichi-khova.jpg";

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Unsweetened Khova",
            description:
                "Pure, fresh khova made from premium cow's milk. Perfect for traditional sweets and cooking. No added sugar or preservatives.",
            price: "₹280",
            unit: "per 1kg",
            image: unsweetenedKhoya,
            badges: ["Pure", "Sugar-Free"],
            rating: 4.9,
            features: [
                "100% Natural",
                "No Preservatives",
                "Fresh Daily",
                "Premium Quality",
            ],
        },
        {
            id: 2,
            name: "Sweetened Khova",
            description:
                "Delicately sweetened khova with the perfect balance of taste. Ideal for making burfi, laddu, and other traditional sweets.",
            price: "₹220",
            unit: "per 1kg",
            image: sweetenedKhoya,
            badges: ["Bestseller", "Traditional"],
            rating: 4.8,
            features: [
                "Perfect Sweetness",
                "Traditional Recipe",
                "Premium Taste",
                "Ready to Use",
            ],
        },
        {
            id: 3,
            name: "Elaichi Khova",
            description:
                "Aromatic khova infused with premium cardamom. A gourmet treat with a rich, fragrant flavor perfect for special occasions.",
            price: "₹205",
            unit: "per 1kg",
            image: elaichiKhoya,
            badges: ["Premium", "Aromatic"],
            rating: 4.9,
            features: [
                "Premium Cardamom",
                "Rich Aroma",
                "Gourmet Quality",
                "Festival Special",
            ],
        },
    ];

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="products"
            className="py-20 bg-gradient-to-b from-Milk-cream/30 to-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-Milk-orange/10 border border-Milk-orange/20 mb-4">
                        <Leaf className="h-4 w-4 text-Milk-orange mr-2" />
                        <span className="text-sm font-medium text-Milk-orange">
                            Our Premium Products
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Traditional Khova Varieties
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Each product is crafted with care using traditional
                        methods, ensuring authentic taste and premium quality
                        that has made us a trusted name in Milk products.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="card-gradient rounded-2xl border border-border hover-lift overflow-hidden group">
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {product.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            className={`${
                                                badge === "Bestseller"
                                                    ? "orange-gradient"
                                                    : badge === "Premium"
                                                    ? "Milk-gradient"
                                                    : "bg-white/90 text-Milk-green"
                                            } text-xs font-medium`}>
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-medium text-foreground">
                                        {product.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-foreground mb-2">
                                        Key Features:
                                    </h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {product.features.map(
                                            (feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <span className="text-Milk-green">
                                                        ✓
                                                    </span>
                                                    <span>{feature}</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-bold text-Milk-green">
                                            {product.price}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {product.unit}
                                        </div>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={scrollToContact}
                                        className="gap-2 group">
                                        <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                        Order Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="card-gradient p-8 rounded-2xl border border-border max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Can't Find What You're Looking For?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We offer custom orders and bulk quantities for
                            events, restaurants, and special occasions. Contact
                            us to discuss your specific requirements.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            onClick={scrollToContact}
                            className="gap-2">
                            Contact for Custom Orders
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
