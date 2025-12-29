import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Delivery from "@/components/Delivery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Products />
                <Process />
                <Delivery />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Index;
