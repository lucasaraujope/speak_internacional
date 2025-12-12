import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    Building2,
    Users,
    TrendingUp,
    Award,
    CheckCircle,
    Clock,
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
    const packagesReveal = useScrollReveal();
    const processReveal = useScrollReveal();

    const openWhatsApp = (packageName: string) => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent(`Olá! Eu vim através do site e quero informações sobre o curso de Inglês Empresarial | Pacote ${packageName}`)}`, "_blank");
    };

    const openGeneralWhatsApp = () => {
        window.open(`https://wa.me/5512991298390?text=${encodeURIComponent("Olá! Eu vim através do site e quero informações sobre o curso de Inglês para Empresas")}`, "_blank");
    };

    const benefits = [
        {
            icon: TrendingUp,
            title: "Aumento de Produtividade",
            description: "Colaboradores fluentes em inglês se comunicam melhor com clientes e parceiros internacionais."
        },
        {
            icon: Globe,
            title: "Expansão Internacional",
            description: "Prepare sua equipe para mercados globais e oportunidades de negócios internacionais."
        },
        {
            icon: Award,
            title: "Retenção de Talentos",
            description: "Investir no desenvolvimento dos colaboradores aumenta o engajamento e reduz turnover."
        },
        {
            icon: Briefcase,
            title: "Competitividade",
            description: "Equipes bilíngues são mais competitivas no mercado atual globalizado."
        },
    ];

    const packages = [
        {
            name: "Sprint",
            description: "Imersão rápida para acelerar sua fala",
            employees: "12h para Falar Inglês",
            features: [
                "4 horas mensais – 2 aulas ao vivo de 30 min por semana",
                "Acesso ilimitado à plataforma de vídeo aulas",
                "Material sem custo adicional - incluso no plano",
                "Garantia Tríplice Exclusiva",
            ],
            popular: false,
        },
        {
            name: "Gold",
            description: "Evolução consistente com mais prática guiada",
            employees: "24h para Falar Inglês",
            features: [
                "8 horas mensais – 4 aulas ao vivo de 30 min por semana",
                "Acesso ilimitado à plataforma de vídeo aulas",
                "3 aulas semanais de 45 minutos com o Nagibe, professor e CEO da Speak, ao vivo",
                "Material sem custo adicional - incluso no plano",
                "Garantia Tríplice Exclusiva",
            ],
            popular: true,
        },
        {
            name: "Premium",
            description: "Alta performance para quem quer avançar no máximo nível",
            employees: "30h para Falar Inglês",
            features: [
                "10 horas mensais – 5 aulas ao vivo de 30 min por semana",
                "Todos os benefícios dos Planos Sprint e Gold",
                "Diagnóstico Linguístico Inicial",
                "Mentoria e Plano de Crescimento on demand",
                "Garantia Tríplice Exclusiva",
            ],
            popular: false,
        },
    ];

    const processSteps = [
        {
            icon: Target,
            title: "Diagnóstico",
            description: "Avaliamos o nível de cada colaborador e entendemos os objetivos da empresa."
        },
        {
            icon: BookOpen,
            title: "Programa Personalizado",
            description: "Criamos um programa sob medida para as necessidades específicas do seu negócio."
        },
        {
            icon: Headphones,
            title: "Implementação",
            description: "Iniciamos as aulas com horários flexíveis que se adaptam à rotina da empresa."
        },
        {
            icon: BarChart3,
            title: "Acompanhamento",
            description: "Monitoramos o progresso e ajustamos o programa conforme necessário."
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <ScrollProgress />
            <Navigation />

            {/* Hero Section with Swiper */}
            <section
                ref={heroReveal.ref as React.RefObject<HTMLElement>}
                className={`pt-20 transition-all duration-1000 ${heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full"
                >
                    <SwiperSlide>
                        <div className="relative w-full flex flex-col">
                            <img
                                src={corporateHeroSlide}
                                alt="Speak Online International - English in Company"
                                className="w-full h-auto object-cover"
                            />
                            <div className="py-6 bg-primary flex justify-center md:absolute md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-transparent md:py-0">
                                <Button
                                    onClick={openGeneralWhatsApp}
                                    className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6 shadow-lg"
                                >
                                    Solicitar Proposta
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Benefits Section */}
            <section
                ref={benefitsReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${benefitsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Por que investir em <span className="text-gradient-gold">inglês corporativo?</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Empresas que investem no desenvolvimento linguístico dos colaboradores colhem resultados expressivos
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                                <CardHeader>
                                    <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                                        <benefit.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{benefit.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section
                ref={packagesReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 bg-muted/30 transition-all duration-1000 ${packagesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Pacotes <span className="text-gradient-gold">Empresariais</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Soluções flexíveis que se adaptam ao tamanho e às necessidades da sua empresa
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg, index) => (
                            <Card
                                key={index}
                                className={`relative border-border hover:shadow-gold transition-all duration-300 flex flex-col ${pkg.popular ? "ring-2 ring-secondary scale-105" : ""
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-gold text-primary px-4 py-1 rounded-full text-sm font-bold shadow-gold">
                                            Mais Popular
                                        </span>
                                    </div>
                                )}

                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                                    <CardDescription>{pkg.description}</CardDescription>
                                    <div className="flex items-center justify-center gap-2 mt-4">
                                        <Clock className="w-5 h-5 text-secondary" />
                                        <span className="text-foreground font-medium">{pkg.employees}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex flex-col flex-grow">
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        onClick={() => openWhatsApp(pkg.name)}
                                        className={`w-full mt-auto ${pkg.popular
                                                ? "bg-gradient-gold text-primary hover:shadow-gold"
                                                : "bg-primary text-primary-foreground hover:bg-primary/90"
                                            }`}
                                    >
                                        Solicitar Proposta
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section
                ref={processReveal.ref as React.RefObject<HTMLElement>}
                className={`py-20 transition-all duration-1000 ${processReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Como <span className="text-gradient-gold">Funciona</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Um processo simples e eficiente para implementar o inglês na sua empresa
                    </p>

                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Pronto para transformar sua equipe?
                    </h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Entre em contato e receba uma proposta personalizada para sua empresa.
                    </p>
                    <Button
                        onClick={openGeneralWhatsApp}
                        className="bg-gradient-gold text-primary hover:shadow-gold text-lg px-8 py-6"
                    >
                        Falar com Especialista
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default CorporateEnglish;