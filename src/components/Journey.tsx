import { CheckCircle2, BookOpen, Target, TrendingUp, Award, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Journey = () => {
    const { t } = useLanguage();

    const journeySteps = [
        {
            icon: CheckCircle2,
            title: t('journey.diagnosis'),
            description: t('journey.diagnosisDesc'),
        },
        {
            icon: BookOpen,
            title: t('journey.personalizedPlan'),
            description: t('journey.personalizedPlanDesc'),
        },
        {
            icon: Target,
            title: t('journey.interactiveClasses'),
            description: t('journey.interactiveClassesDesc'),
        },
        {
            icon: TrendingUp,
            title: t('journey.constantPractice'),
            description: t('journey.constantPracticeDesc'),
        },
        {
            icon: Award,
            title: t('journey.achievements'),
            description: t('journey.achievementsDesc'),
        },
        {
            icon: Sparkles,
            title: t('journey.fluency'),
            description: t('journey.fluencyDesc'),
        },
    ];

    const openWhatsApp = () => {
        const message = encodeURIComponent(t('journey.whatsappMessage'));
        window.open(`https://wa.me/5512991298390?text=${message}`, "_blank");
    };

    return (
        <section id="metodologia" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        {t('journey.title')} <span className="text-gradient-gold">{t('journey.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('journey.subtitle')}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center border border-border rounded-2xl p-6 hover:shadow-gold hover:-translate-y-2 transition-all duration-300 bg-card">
                                    {/* Step Number */}
                                    <div className="absolute -top-5 -left-2 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-bold text-xl shadow-gold">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-card">
                                        <step.icon className="w-10 h-10 text-primary-foreground" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>

                                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                                {index < journeySteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={openWhatsApp}
                        className="inline-block bg-gradient-gold px-8 py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <p className="text-primary font-semibold text-lg">
                            {t('journey.cta')}
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;
