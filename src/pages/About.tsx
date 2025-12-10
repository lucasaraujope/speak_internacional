import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, MessageCircle, Brain, Heart, TrendingUp, User, Lightbulb, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

const About = () => {
    const heroReveal = useScrollReveal();
    const missionReveal = useScrollReveal();
    const valuesReveal = useScrollReveal();
    const { t } = useLanguage();
    const [hoveredValue, setHoveredValue] = useState<number | null>(null);

    const values: { titleKey: string; descKey: string; Icon: LucideIcon }[] = [
        { titleKey: 'value1.title', descKey: 'value1.desc', Icon: MessageCircle },
        { titleKey: 'value2.title', descKey: 'value2.desc', Icon: Brain },
        { titleKey: 'value3.title', descKey: 'value3.desc', Icon: Heart },
        { titleKey: 'value4.title', descKey: 'value4.desc', Icon: TrendingUp },
        { titleKey: 'value5.title', descKey: 'value5.desc', Icon: User },
        { titleKey: 'value6.title', descKey: 'value6.desc', Icon: Lightbulb },
        { titleKey: 'value7.title', descKey: 'value7.desc', Icon: Award },
    ];

    return (
        <div className="min-h-screen bg-background">
            <ScrollProgress />
            <Navigation />

            {/* Hero Section */}
            <section
                ref={heroReveal.ref as React.RefObject<HTMLElement>}
                className={`pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 transition-all duration-1000 ${heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                        {t('about.title')} <span className="text-gradient-gold">Speak Online</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        {t('about.description')}
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section
                ref={missionReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${missionReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="glass-card p-8 rounded-2xl hover:shadow-gold transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.missionTitle')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('about.missionDesc')}
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl hover:shadow-gold transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.visionTitle')}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('about.visionDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section
                ref={valuesReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 bg-muted/30 transition-all duration-1000 ${valuesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        {t('about.valuesTitle')} <span className="text-gradient-gold">{t('about.valuesTitleHighlight')}</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        {t('about.valuesSubtitle')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {values.map((value, index) => {
                            const IconComponent = value.Icon;
                            return (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer w-full max-w-[280px]"
                                    onMouseEnter={() => setHoveredValue(index)}
                                    onMouseLeave={() => setHoveredValue(null)}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`
                    overflow-hidden rounded-2xl transition-all duration-500 
                    hover:shadow-gold hover:scale-105
                    bg-card flex flex-col items-center
                  `}>
                                        {/* Icon */}
                                        <div className="py-8 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-10 h-10 text-primary" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="p-4 w-full">
                                            <h3 className="text-lg font-bold text-foreground text-center">
                                                {t(value.titleKey)}
                                            </h3>
                                        </div>

                                        {/* Hover Description Overlay */}
                                        <div className={`
                      absolute inset-0 bg-primary/95 rounded-2xl p-6 flex items-center justify-center
                      transition-all duration-500 ease-in-out
                      ${hoveredValue === index ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}>
                                            <div className="text-center">
                                                <h3 className="text-xl font-bold text-secondary mb-3">
                                                    {t(value.titleKey)}
                                                </h3>
                                                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                                                    {t(value.descKey)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">10+</div>
                            <p className="text-primary-foreground/80">{t('stats.experience')}</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">15k+</div>
                            <p className="text-primary-foreground/80">{t('stats.students')}</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">98%</div>
                            <p className="text-primary-foreground/80">{t('stats.satisfaction')}</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">50+</div>
                            <p className="text-primary-foreground/80">{t('stats.teachers')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default About;
