import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    TrendingUp,
    Award,
    Globe,
    Briefcase,
    Target,
    BarChart3,
    Headphones,
    BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import corporateHeroSlide from "@/assets/corporate-hero-slide.jpg";

const CorporateEnglish = () => {
    const heroReveal = useScrollReveal();
    const benefitsReveal = useScrollReveal();
    const processReveal = useScrollReveal();
    const { t } = useLanguage();

    // SEO: Update document title and meta tags
    useEffect(() => {
        document.title = "Inglês para Empresas | Speak Online Internacional - Cursos Corporativos";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Treinamento de inglês corporativo para empresas. Aumente a produtividade da sua equipe com cursos personalizados. Pacotes Sprint, Gold e Premium disponíveis.');
        }

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.origin + '/ingles-para-empresas');

        // Cleanup on unmount
        return () => {
            document.title = "Speak Online Internacional - Escola de Inglês Premium";
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Aprenda inglês com quem entende sua carreira. Metodologia moderna, professores especializados e foco em resultados profissionais.');
            }
        };
    }, []);

    const openWhatsApp = (packageName: string) => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent(`Olá! Eu vim através do site e quero informações sobre o curso de Inglês Empresarial | Pacote ${packageName}`)}`, "_blank");
    };

    const openGeneralWhatsApp = () => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent("Olá! Eu vim através do site e quero informações sobre o curso de Inglês para Empresas")}`, "_blank");
    };

    const benefits = [
        {
            icon: TrendingUp,
            titleKey: "corporate.productivityIncrease",
            descKey: "corporate.productivityDesc"
        },
        {
            icon: Globe,
            titleKey: "corporate.internationalExpansion",
            descKey: "corporate.expansionDesc"
        },
        {
            icon: Award,
            titleKey: "corporate.talentRetention",
            descKey: "corporate.retentionDesc"
        },
        {
            icon: Briefcase,
            titleKey: "corporate.competitiveness",
            descKey: "corporate.competitivenessDesc"
        },
    ];

    const processSteps = [
        {
            icon: Target,
            titleKey: "corporate.process.diagnosis",
            descKey: "corporate.process.diagnosisDesc"
        },
        {
            icon: BookOpen,
            titleKey: "corporate.process.customProgram",
            descKey: "corporate.process.customProgramDesc"
        },
        {
            icon: Headphones,
            titleKey: "corporate.process.implementation",
            descKey: "corporate.process.implementationDesc"
        },
        {
            icon: BarChart3,
            titleKey: "corporate.process.followUp",
            descKey: "corporate.process.followUpDesc"
        },
    ];

    return (
        <main className="min-h-screen bg-background" role="main">
            <ScrollProgress />
            <Navigation />

            {/* Hero Section with Swiper */}
            <header
                ref={heroReveal.ref as React.RefObject<HTMLElement>}
                className={`pt-20 transition-all duration-1000 ${heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-label="Seção principal - Inglês para Empresas"
            >
                <h1 className="sr-only">Inglês para Empresas - Cursos Corporativos Speak Online Internacional</h1>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full"
                    a11y={{
                        enabled: true,
                        prevSlideMessage: 'Slide anterior',
                        nextSlideMessage: 'Próximo slide',
                        firstSlideMessage: 'Este é o primeiro slide',
                        lastSlideMessage: 'Este é o último slide',
                        paginationBulletMessage: 'Ir para slide {{index}}'
                    }}
                >
                    <SwiperSlide>
                        <figure className="relative w-full flex flex-col">
                            <img
                                src={corporateHeroSlide}
                                alt="Equipe profissional em reunião de negócios discutindo em inglês - Treinamento corporativo Speak Online Internacional"
                                width={1920}
                                height={1080}
                                className="w-full h-auto object-cover"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                            />
                            <figcaption className="sr-only">
                                Treinamento de inglês corporativo para equipes empresariais
                            </figcaption>
                            <div className="py-6 bg-primary flex justify-center md:absolute md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-transparent md:py-0">
                                <Button
                                    onClick={openGeneralWhatsApp}
                                    className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6 shadow-lg focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                    aria-label="Solicitar proposta de inglês corporativo via WhatsApp"
                                >
                                    {t('corporate.requestProposal')}
                                </Button>
                            </div>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </header>

            {/* Benefits Section */}
            <section
                ref={benefitsReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${benefitsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-labelledby="benefits-heading"
            >
                <div className="container mx-auto px-4">
                    <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
                        {t('corporate.whyInvest')} <span className="text-gradient-gold">{t('corporate.whyInvestHighlight')}</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        {t('corporate.whyInvestSubtitle')}
                    </p>

                    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none" role="list" aria-label="Benefícios do inglês corporativo">
                        {benefits.map((benefit, index) => (
                            <li key={index}>
                                <Card className="border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2 h-full focus-within:ring-2 focus-within:ring-secondary">
                                    <CardHeader>
                                        <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                                            <benefit.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                                        </div>
                                        <CardTitle className="text-lg">{t(benefit.titleKey)}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{t(benefit.descKey)}</CardDescription>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            {/* Process Section */}
            <section
                ref={processReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${processReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-labelledby="process-heading"
            >
                <div className="container mx-auto px-4">
                    <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
                        {t('corporate.howItWorks')} <span className="text-gradient-gold">{t('corporate.howItWorksHighlight')}</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        {t('corporate.howItWorksSubtitle')}
                    </p>

                    <ol className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto list-none" role="list" aria-label="Etapas do processo de implementação">
                        {processSteps.map((step, index) => (
                            <li key={index} className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold" aria-hidden="true">
                                    <step.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                                </div>
                                <div
                                    className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
                                    aria-label={`Etapa ${index + 1}`}
                                >
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                                <p className="text-muted-foreground text-sm">{t(step.descKey)}</p>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -z-10" aria-hidden="true"></div>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section
                className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary"
                aria-labelledby="cta-heading"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        {t('corporate.ctaTitle')}
                    </h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        {t('corporate.ctaSubtitle')}
                    </p>
                    <Button
                        onClick={openGeneralWhatsApp}
                        className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                        aria-label="Falar com especialista em inglês corporativo via WhatsApp"
                    >
                        {t('corporate.talkToSpecialist')}
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default CorporateEnglish;