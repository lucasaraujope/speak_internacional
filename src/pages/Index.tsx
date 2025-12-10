import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Journey from "@/components/Journey";
import Testimonials from "../components/Testimonial";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import Countries from "@/components/Countries";

const Index = () => {
    return (
        <div className="min-h-screen">
            <ScrollProgress />
            <Navigation />
            <Hero />
            <Courses />
            <Countries />
            <Stats />
            <Journey />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Index;
