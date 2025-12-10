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
                        Cursos <span className="text-gradient-gold">Específicos</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        Aprimore habilidades específicas com nossos cursos complementares
                        e workshops intensivos ministrados por especialistas.
                    </p>
                </div>
            </section>

            {/* Extra Courses */}
            <section
                ref={coursesReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${coursesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Cursos <span className="text-gradient-gold">Especializados</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Focados em habilidades específicas para acelerar seu desenvolvimento profissional
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {extraCourses.map((course, index) => (
                            <div
                                key={index}
                                className={`glass-card rounded-2xl overflow-hidden group hover:shadow-gold transition-all duration-500 relative border border-border ${course.popular ? "ring-2 ring-secondary" : ""
                                    }`}
                            >
                                {course.popular && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-gradient-gold text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                            <Star className="w-3 h-3" /> Popular
                                        </span>
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300">
                                        <course.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                                    <div className="flex items-center gap-4 mb-4 text-sm">
                                        <span className="flex items-center gap-1 text-muted-foreground">
                                            <Clock className="w-4 h-4" /> {course.duration}
                                        </span>
                                        <span className="text-secondary font-medium">{course.level}</span>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 border-t border-border">
                                        <Button
                                            onClick={() => openWhatsApp(course.title)}
                                            className="w-full bg-gradient-gold text-primary hover:shadow-gold"
                                        >
                                            Inscrever-se
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshops */}
            <section
                ref={workshopsReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 bg-muted/30 transition-all duration-1000 ${workshopsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Workshops <span className="text-gradient-gold">Ao Vivo</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Sessões intensivas com interação em tempo real e vagas limitadas
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {workshops.map((workshop, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl hover:shadow-gold transition-all duration-300 group border border-border"
                            >
                                <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-4">
                                    <Clock className="w-4 h-4" />
                                    {workshop.date} às {workshop.time}
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
                                        className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
                                        onClick={() => openWorkshopWhatsApp(workshop.title)}
                                    >
                                        Reservar <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Não encontrou o que procura?
                    </h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Entre em contato conosco e criaremos um programa personalizado para suas necessidades.
                    </p>
                    <Button
                        onClick={openConsultantWhatsApp}
                        className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6"
                    >
                        Fale com um Consultor
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default SpecificCourses;