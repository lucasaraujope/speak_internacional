import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
    {
        name: "Essencial",
        description: "Ideal para quem está começando",
        features: [
            "2 aulas semanais (50min)",
            "Material didático digital",
            "Acesso à plataforma",
            "Grupo de conversação",
            "Suporte por email",
        ],
        popular: false,
    },
    {
        name: "Profissional",
        description: "Mais popular entre profissionais",
        features: [
            "3 aulas semanais (50min)",
            "Material didático completo",
            "Acesso total à plataforma",
            "Grupos de conversação ilimitados",
            "Aulas de reforço",
            "Simulados e certificações",
            "Suporte prioritário",
        ],
        popular: true,
    },
    {
        name: "Executive",
        description: "Para quem busca resultados máximos",
        features: [
            "5 aulas semanais (50min)",
            "Professores PhD ou mestres",
            "Material premium personalizado",
            "Acesso VIP à plataforma",
            "Conversação diária",
            "Coaching de carreira",
            "Preparação para certificações",
            "Networking internacional",
            "Suporte 24/7",
        ],
        popular: false,
    },
];

const Pricing = () => {
    const { ref, isVisible } = useScrollReveal();

    const openWhatsApp = (planName: string) => {
        window.open(`https://wa.me/5511999999999?text=Olá! Tenho interesse no plano ${planName}.`, "_blank");
    };

    return (
        <section id="planos" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Planos de <span className="text-gradient-gold">Estudo</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Escolha o plano ideal para seus objetivos
                    </p>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative hover:shadow-card-hover smooth-transition border-border hover:-translate-y-3 flex flex-col ${plan.popular ? "ring-2 ring-secondary shadow-gold scale-105" : ""
                                } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-gold text-primary px-4 py-1 rounded-full text-sm font-bold shadow-gold">
                                        Mais Popular
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
                                    onClick={() => openWhatsApp(plan.name)}
                                    className={`w-full mt-auto ${plan.popular
                                            ? "bg-gradient-gold text-primary-foreground hover:shadow-gold"
                                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                                        }`}
                                >
                                    Começar Agora
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Pricing;
