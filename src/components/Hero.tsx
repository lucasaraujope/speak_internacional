import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Globe, TrendingUp, Award } from "lucide-react";

const Hero = () => {
    const { toast } = useToast();
    const [scrollY, setScrollY] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        goal: "",
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Solicitação enviada!",
            description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", goal: "" });
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with gradient overlay and parallax */}
            <div className="absolute inset-0 bg-gradient-hero">
                <div className="absolute inset-0 bg-black/40"></div>
                <img
                    
                    alt="Professional team learning English online"
                    className="w-full h-full object-cover mix-blend-overlay opacity-30"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="text-primary-foreground animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Award className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium text-secondary">
                                Referência em Inglês Profissional
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Domine o Inglês e{" "}
                            <span className="text-gradient-gold">Impulsione sua Carreira</span>
                        </h1>

                        <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                            Metodologia moderna e professores especializados para profissionais que
                            querem resultados reais. Aprenda inglês com quem entende sua carreira.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-semibold">Fluência Global</div>
                                    <div className="text-sm text-primary-foreground/80">
                                        Comunicação profissional
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-semibold">Resultados Rápidos</div>
                                    <div className="text-sm text-primary-foreground/80">
                                        Metodologia comprovada
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="animate-scale-in">
                        <div className="bg-card rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                                Solicite um Orçamento
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Descubra o plano ideal para seus objetivos
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                                        Nome completo
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Seu nome"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-background border-input"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                                        E-mail
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="bg-background border-input"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                                        Seu objetivo com o inglês
                                    </label>
                                    <Textarea
                                        placeholder="Ex: Melhorar comunicação em reuniões, preparar para entrevista..."
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        required
                                        className="bg-background border-input min-h-[100px]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold text-lg py-6"
                                >
                                    Receber Proposta Personalizada
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    Resposta em até 24 horas úteis
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
