import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const plansData = {
    basico: [
        {
            name: "Essencial",
            description: "Ideal para quem está começando",
            features: [
                "1 aula semanal (50min)",
                "Material didático digital",
                "Acesso à plataforma",
                "Grupo de conversação",
                "Suporte por email",
            ],
            popular: false,
        },
        {
            name: "Profissional",
            description: "Mais popular entre iniciantes",
            features: [
                "2 aulas semanais (50min)",
                "Material didático completo",
                "Acesso total à plataforma",
                "Grupos de conversação",
                "Aulas de reforço",
                "Suporte prioritário",
            ],
            popular: true,
        },
        {
            name: "Executive",
            description: "Para quem quer acelerar",
            features: [
                "3 aulas semanais (50min)",
                "Material premium",
                "Acesso VIP à plataforma",
                "Conversação semanal",
                "Coaching de estudos",
                "Suporte 24/7",
            ],
            popular: false,
        },
    ],
    intermediario: [
        {
            name: "Essencial",
            description: "Para consolidar seu inglês",
            features: [
                "2 aulas semanais (50min)",
                "Material didático avançado",
                "Acesso à plataforma",
                "Grupo de conversação",
                "Simulados mensais",
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
    ],
};

const Pricing = () => {
    const { ref, isVisible } = useScrollReveal();
    const [activeModality, setActiveModality] = useState<"basico" | "intermediario">("basico");

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
                        Planos de <span className="text-gradient-gold">Estudo</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Escolha o plano ideal para seus objetivos
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
                            Básico
                        </button>
                        <button
                            onClick={() => setActiveModality("intermediario")}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold smooth-transition ${activeModality === "intermediario"
                                    ? "bg-gradient-gold text-primary shadow-gold"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Intermediário
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
                                    onClick={() => openWhatsApp(plan.name, activeModality)}
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

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Todos os planos incluem <span className="text-secondary font-semibold">garantia de 7 dias</span> e podem ser cancelados a qualquer momento
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
