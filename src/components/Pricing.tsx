import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
    const { ref, isVisible } = useScrollReveal();
    const [activeModality, setActiveModality] = useState<"basico" | "intermediario">("basico");
    const { t } = useLanguage();

    const plansData = {
        basico: [
            {
                name: t('corporate.sprint'),
                description: t('corporate.sprintDesc'),
                hours: t('corporate.sprintHours'),
                features: [
                    t('corporate.feature.4hours'),
                    t('corporate.feature.unlimitedPlatform'),
                    t('corporate.feature.materialIncluded'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: false,
            },
            {
                name: t('corporate.gold'),
                description: t('corporate.goldDesc'),
                hours: t('corporate.goldHours'),
                features: [
                    t('corporate.feature.8hours'),
                    t('corporate.feature.unlimitedPlatform'),
                    t('corporate.feature.nagibe'),
                    t('corporate.feature.materialIncluded'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: true,
            },
            {
                name: t('corporate.premium'),
                description: t('corporate.premiumDesc'),
                hours: t('corporate.premiumHours'),
                features: [
                    t('corporate.feature.10hours'),
                    t('corporate.feature.allBenefits'),
                    t('corporate.feature.diagnosis'),
                    t('corporate.feature.mentorship'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: false,
            },
        ],
        intermediario: [
            {
                name: t('corporate.sprint'),
                description: t('corporate.sprintDesc'),
                hours: t('corporate.sprintHours'),
                features: [
                    t('corporate.feature.4hours'),
                    t('corporate.feature.unlimitedPlatform'),
                    t('corporate.feature.materialIncluded'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: false,
            },
            {
                name: t('corporate.gold'),
                description: t('corporate.goldDesc'),
                hours: t('corporate.goldHours'),
                features: [
                    t('corporate.feature.8hours'),
                    t('corporate.feature.unlimitedPlatform'),
                    t('corporate.feature.nagibe'),
                    t('corporate.feature.materialIncluded'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: true,
            },
            {
                name: t('corporate.premium'),
                description: t('corporate.premiumDesc'),
                hours: t('corporate.premiumHours'),
                features: [
                    t('corporate.feature.10hours'),
                    t('corporate.feature.allBenefits'),
                    t('corporate.feature.diagnosis'),
                    t('corporate.feature.mentorship'),
                    t('corporate.feature.tripleGuarantee'),
                ],
                popular: false,
            },
        ],
    };

    const openWhatsApp = (planName: string, modality: string) => {
        const modalityText = modality === "basico" ? "Básico" : "Intermediário";
        const message = encodeURIComponent(`Olá! Eu gostaria de saber mais sobre o plano ${planName} do módulo ${modalityText}.`);
        window.open(`https://wa.me/5512991298390?text=${message}`, "_blank");
    };

    const plans = plansData[activeModality];

    return (
        <section id="planos" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        {t('pricing.title')} <span className="text-gradient-gold">{t('pricing.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        {t('pricing.subtitle')}
                    </p>

                    {/* Toggle Básico / Intermediário */}
                    <div className="inline-flex items-center bg-muted rounded-full p-1.5 shadow-inner">
                        <button
                            onClick={() => setActiveModality("basico")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold smooth-transition ${activeModality === "basico"
                                    ? "bg-gradient-gold text-primary shadow-gold"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {t('pricing.basic')}
                        </button>
                        <button
                            onClick={() => setActiveModality("intermediario")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold smooth-transition ${activeModality === "intermediario"
                                    ? "bg-gradient-gold text-primary shadow-gold"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {t('pricing.intermediate')}
                        </button>
                    </div>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={`${activeModality}-${index}`}
                            className={`relative hover:shadow-card-hover smooth-transition border-border hover:-translate-y-3 flex flex-col ${plan.popular ? "ring-2 ring-secondary shadow-gold scale-105" : ""
                                } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-gold text-primary px-4 py-1 rounded-full text-sm font-bold shadow-gold">
                                        {t('pricing.mostPopular')}
                                    </span>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl mb-2 text-card-foreground">
                                    {plan.name}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {plan.description}
                                </CardDescription>
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <Clock className="w-5 h-5 text-secondary" />
                                    <span className="text-foreground font-medium">{plan.hours}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col flex-grow">
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-card-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    onClick={() => openWhatsApp(plan.name, activeModality)}
                                    className={`w-full mt-auto ${plan.popular
                                            ? "bg-gradient-gold text-primary-foreground hover:shadow-gold"
                                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                                        }`}
                                >
                                    {t('pricing.startNow')}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        {t('pricing.guarantee')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
