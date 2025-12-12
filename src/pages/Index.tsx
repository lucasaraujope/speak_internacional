import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import Countries from "@/components/Countries";

const Index = () => {
    // SEO: Set canonical URL for homepage
    useEffect(() => {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.origin + '/');

        return () => {
            canonical?.remove();
        };
    }, []);

    return (
        <main className="min-h-screen" role="main">
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
        </main>
    );
};

export default Index;
