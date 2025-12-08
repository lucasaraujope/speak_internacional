import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const About = () => {
    const heroReveal = useScrollReveal();
    const missionReveal = useScrollReveal();
    const valuesReveal = useScrollReveal();

    const values = [
        {
            icon: Target,
            title: "Excelência",
            description: "Comprometidos com os mais altos padrões de ensino e resultados.",
        },
        {
            icon: Heart,
            title: "Dedicação",
            description: "Cada aluno recebe atenção personalizada para alcançar seus objetivos.",
        },
        {
            icon: Users,
            title: "Comunidade",
            description: "Construímos uma rede de profissionais que se apoiam mutuamente.",
        },
        {
            icon: Globe,
            title: "Globalização",
            description: "Preparamos você para oportunidades em qualquer lugar do mundo.",
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
                        Sobre a <span className="text-gradient-gold">Speak Online</span>
                    </h1>
                    <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        Há mais de 10 anos transformando vidas através do ensino de inglês de qualidade,
                        conectando profissionais brasileiros às melhores oportunidades do mundo.
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
                            <h2 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Democratizar o acesso ao ensino de inglês de alta qualidade, utilizando
                                tecnologia e metodologias inovadoras para capacitar profissionais a
                                alcançarem fluência e conquistarem suas metas de carreira internacional.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl hover:shadow-gold transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Ser reconhecida como a principal escola de inglês online do Brasil,
                                formando uma comunidade global de profissionais bilíngues preparados
                                para liderar em um mercado cada vez mais conectado.
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
                        Nossos <span className="text-gradient-gold">Valores</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Os pilares que guiam cada decisão e interação na Speak Online
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl hover:bg-background transition-all duration-300 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300">
                                    <value.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">10+</div>
                            <p className="text-primary-foreground/80">Anos de Experiência</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">15k+</div>
                            <p className="text-primary-foreground/80">Alunos Formados</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">98%</div>
                            <p className="text-primary-foreground/80">Satisfação</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">50+</div>
                            <p className="text-primary-foreground/80">Professores</p>
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
