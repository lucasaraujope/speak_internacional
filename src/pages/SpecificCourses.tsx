import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    BookOpen,
    Mic,
    FileText,
    Headphones,
    Video,
    Users,
    Clock,
    Star,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecificCourses = () => {
    const heroReveal = useScrollReveal();
    const coursesReveal = useScrollReveal();
    const workshopsReveal = useScrollReveal();

    // SEO: Update document title and meta tags
    useEffect(() => {
        document.title = "Cursos Específicos de Inglês | Speak Online Internacional - Workshops e Especializações";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Cursos especializados de inglês: apresentações, business writing, TOEFL, reuniões e networking. Workshops ao vivo com vagas limitadas.');
        }

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.origin + '/cursos-especificos');

        return () => {
            document.title = "Speak Online Internacional - Escola de Inglês Premium";
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Aprenda inglês com quem entende sua carreira. Metodologia moderna, professores especializados e foco em resultados profissionais.');
            }
        };
    }, []);

    const openWhatsApp = (courseName: string) => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent(`Olá! Eu vim através do site e quero informações sobre o curso de ${courseName}`)}`, "_blank");
    };

    const openWorkshopWhatsApp = (workshopName: string) => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent(`Olá! Eu vim através do site e quero informações sobre o curso de Workshop ${workshopName}`)}`, "_blank");
    };

    const openConsultantWhatsApp = () => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent("Olá! Eu vim através do site e quero informações sobre o curso de Programa Personalizado")}`, "_blank");
    };

    const extraCourses = [
        {
            icon: Mic,
            title: "Inglês para Apresentações",
            description: "Domine a arte de apresentar em inglês com confiança e impacto.",
            duration: "8 semanas",
            level: "Intermediário",
            features: ["Técnicas de oratória", "Vocabulário corporativo", "Prática com feedback", "Material exclusivo"],
            popular: true,
        },
        {
            icon: FileText,
            title: "Business Writing",
            description: "Aprenda a escrever e-mails, relatórios e documentos profissionais.",
            duration: "6 semanas",
            level: "Intermediário",
            features: ["E-mails profissionais", "Relatórios executivos", "Propostas comerciais", "Revisão personalizada"],
            popular: false,
        },
        {
            icon: Headphones,
            title: "Listening Intensivo",
            description: "Desenvolva sua compreensão auditiva com sotaques variados.",
            duration: "4 semanas",
            level: "Todos os níveis",
            features: ["Sotaques americano/britânico", "Podcasts e vídeos", "Exercícios diários", "Feedback de pronúncia"],
            popular: false,
        },
        {
            icon: Video,
            title: "Inglês para Reuniões",
            description: "Conduza e participe de reuniões em inglês com naturalidade.",
            duration: "6 semanas",
            level: "Intermediário+",
            features: ["Vocabulário de reuniões", "Expressões de negociação", "Simulações práticas", "Role-playing"],
            popular: true,
        },
        {
            icon: BookOpen,
            title: "TOEFL Preparation",
            description: "Preparação completa para o exame TOEFL com simulados.",
            duration: "12 semanas",
            level: "Intermediário+",
            features: ["Simulados completos", "Estratégias por seção", "Material oficial", "Garantia de resultado"],
            popular: false,
        },
        {
            icon: Users,
            title: "Networking em Inglês",
            description: "Construa conexões profissionais em eventos e plataformas.",
            duration: "4 semanas",
            level: "Intermediário",
            features: ["Small talk", "LinkedIn em inglês", "Pitch pessoal", "Eventos simulados"],
            popular: false,
        },
    ];

    const workshops = [
        {
            title: "Pronúncia Americana",
            date: "20 Nov 2024",
            time: "19h",
            duration: "2 horas",
            instructor: "Prof. Michael Johnson",
            spots: 15,
        },
        {
            title: "Phrasal Verbs Essenciais",
            date: "25 Nov 2024",
            time: "19h",
            duration: "2 horas",
            instructor: "Prof. Ana Carolina",
            spots: 20,
        },
        {
            title: "Inglês para Tech",
            date: "30 Nov 2024",
            time: "14h",
            duration: "3 horas",
            instructor: "Prof. Carlos Eduardo",
            spots: 12,
        },
    ];

    return (
        <main className="min-h-screen bg-background" role="main">
            <ScrollProgress />
            <Navigation />

            {/* Hero Section */}
            <header
                ref={heroReveal.ref as React.RefObject<HTMLElement>}
                className={`pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 transition-all duration-1000 ${heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-label="Seção principal - Cursos Específicos"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                        Cursos <span className="text-gradient-gold">Específicos</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        Aprimore habilidades específicas com nossos cursos complementares
                        e workshops intensivos ministrados por especialistas.
                    </p>
                </div>
            </header>

            {/* Extra Courses */}
            <section
                ref={coursesReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${coursesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-labelledby="specialized-courses-heading"
            >
                <div className="container mx-auto px-4">
                    <h2 id="specialized-courses-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Cursos <span className="text-gradient-gold">Especializados</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Focados em habilidades específicas para acelerar seu desenvolvimento profissional
                    </p>

                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none" role="list" aria-label="Lista de cursos especializados">
                        {extraCourses.map((course, index) => (
                            <li key={index}>
                                <article
                                    className={`glass-card rounded-2xl overflow-hidden group hover:shadow-gold transition-all duration-500 relative border border-border h-full focus-within:ring-2 focus-within:ring-secondary ${course.popular ? "ring-2 ring-secondary" : ""
                                        }`}
                                    aria-label={`Curso: ${course.title}${course.popular ? ' - Popular' : ''}`}
                                >
                                    {course.popular && (
                                        <div className="absolute top-4 right-4 z-10" aria-hidden="true">
                                            <span className="bg-gradient-gold text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Star className="w-3 h-3" aria-hidden="true" /> Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                                            <course.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                                        <div className="flex items-center gap-4 mb-4 text-sm">
                                            <span className="flex items-center gap-1 text-muted-foreground">
                                                <Clock className="w-4 h-4" aria-hidden="true" />
                                                <span aria-label={`Duração: ${course.duration}`}>{course.duration}</span>
                                            </span>
                                            <span className="text-secondary font-medium" aria-label={`Nível: ${course.level}`}>{course.level}</span>
                                        </div>

                                        <ul className="space-y-2 mb-6" aria-label={`Recursos do curso ${course.title}`}>
                                            {course.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-4 border-t border-border">
                                            <Button
                                                onClick={() => openWhatsApp(course.title)}
                                                className="w-full bg-gradient-gold text-primary hover:shadow-gold focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                                aria-label={`Inscrever-se no curso ${course.title} via WhatsApp`}
                                            >
                                                Inscrever-se
                                            </Button>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Workshops */}
            <section
                ref={workshopsReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 bg-muted/30 transition-all duration-1000 ${workshopsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                aria-labelledby="workshops-heading"
            >
                <div className="container mx-auto px-4">
                    <h2 id="workshops-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Workshops <span className="text-gradient-gold">Ao Vivo</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Sessões intensivas com interação em tempo real e vagas limitadas
                    </p>

                    <ul className="grid md:grid-cols-3 gap-8 list-none" role="list" aria-label="Lista de workshops">
                        {workshops.map((workshop, index) => (
                            <li key={index}>
                                <article
                                    className="glass-card p-6 rounded-2xl hover:shadow-gold transition-all duration-300 group border border-border h-full focus-within:ring-2 focus-within:ring-secondary"
                                    aria-label={`Workshop: ${workshop.title}`}
                                >
                                    <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-4">
                                        <Clock className="w-4 h-4" aria-hidden="true" />
                                        <time dateTime={workshop.date}>{workshop.date} às {workshop.time}</time>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                                        {workshop.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        Duração: {workshop.duration} • Instrutor: {workshop.instructor}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <span className="text-sm text-muted-foreground">
                                            <span className="text-secondary font-bold">{workshop.spots}</span> vagas restantes
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-secondary text-secondary hover:bg-secondary hover:text-primary focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                            onClick={() => openWorkshopWhatsApp(workshop.title)}
                                            aria-label={`Reservar vaga no workshop ${workshop.title}`}
                                        >
                                            Reservar <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                        </Button>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section
                className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary"
                aria-labelledby="cta-heading"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Não encontrou o que procura?
                    </h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Entre em contato conosco e criaremos um programa personalizado para suas necessidades.
                    </p>
                    <Button
                        onClick={openConsultantWhatsApp}
                        className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                        aria-label="Falar com consultor via WhatsApp para programa personalizado"
                    >
                        Fale com um Consultor
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default SpecificCourses;