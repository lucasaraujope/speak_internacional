import { MessageCircle, Briefcase, Plane, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { openWhatsApp } from "@/utils/whatsapp";

const Courses = () => {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    const courses = [
        {
            icon: MessageCircle,
            titleKey: "courses.conversation",
            descKey: "courses.conversationDesc",
            features: ["Speaking intensivo", "Vocabulário prático", "Confiança na fala"],
            courseName: "Conversação",
        },
        {
            icon: Briefcase,
            titleKey: "courses.professional",
            descKey: "courses.professionalDesc",
            features: ["Business English", "Emails profissionais", "Reuniões e calls"],
            courseName: "Inglês Profissional",
        },
        {
            icon: Plane,
            titleKey: "courses.travel",
            descKey: "courses.travelDesc",
            features: ["Situações reais", "Cultura e etiqueta", "Viagens de negócios"],
            courseName: "Inglês para Viagens",
        },
        {
            icon: Users,
            titleKey: "courses.interviews",
            descKey: "courses.interviewsDesc",
            features: ["Mock interviews", "Técnicas de resposta", "Vocabulário técnico"],
            courseName: "Preparação para Entrevistas",
        },
    ];

    return (
        <section id="cursos" className="py-24 bg-muted/30" aria-labelledby="courses-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 id="courses-heading" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        {t('courses.title')} <span className="text-gradient-gold">{t('courses.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('courses.subtitle')}
                    </p>
                </div>

                <ul ref={ref as unknown as React.RefObject<HTMLUListElement>} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none" role="list" aria-label="Lista de cursos disponíveis">
                    {courses.map((course, index) => (
                        <li key={index}>
                            <Card
                                onClick={() => openWhatsApp(course.courseName)}
                                onKeyDown={(e) => e.key === 'Enter' && openWhatsApp(course.courseName)}
                                tabIndex={0}
                                role="button"
                                aria-label={`Saber mais sobre o curso de ${t(course.titleKey)}`}
                                className={`hover:shadow-card-hover smooth-transition cursor-pointer group border-border hover:-translate-y-2 focus:ring-2 focus:ring-secondary focus:outline-none ${isVisible ? "animate-slide-up" : "opacity-0"
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:shadow-gold smooth-transition group-hover:rotate-6" aria-hidden="true">
                                        <course.icon className="w-8 h-8 text-primary group-hover:scale-110 smooth-transition" aria-hidden="true" />
                                    </div>
                                    <CardTitle className="text-xl text-card-foreground">{t(course.titleKey)}</CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {t(course.descKey)}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2" aria-label={`Recursos do curso ${t(course.titleKey)}`}>
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-card-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" aria-hidden="true"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Courses;
