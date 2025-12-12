import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import { Globe, TrendingUp, Award } from "lucide-react";

const Hero = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
  });

  // Optimized scroll handler with requestAnimationFrame to prevent reflows
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", goal: "" });
  }, [toast]);

  return (
    <header id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden" role="banner" aria-label="Seção principal">
      {/* Background with gradient overlay and parallax */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="w-full h-full object-cover mix-blend-overlay opacity-30 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-primary-foreground animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-secondary" aria-hidden="true" />
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

            <div className="flex flex-wrap gap-6 mb-8" role="list" aria-label="Benefícios principais">
              <div className="flex items-center gap-3" role="listitem">
                <div className="w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center" aria-hidden="true">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Fluência Global</div>
                  <div className="text-sm text-primary-foreground/80">
                    Comunicação profissional
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3" role="listitem">
                <div className="w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center" aria-hidden="true">
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
          <aside className="animate-scale-in" aria-label="Formulário de orçamento">
            <div className="bg-card rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2 text-card-foreground">
                Solicite um Orçamento
              </h2>
              <p className="text-muted-foreground mb-6">
                Descubra o plano ideal para seus objetivos
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulário de solicitação de orçamento">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-medium mb-2 text-card-foreground">
                    Nome completo
                  </label>
                  <Input
                    id="hero-name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-input"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium mb-2 text-card-foreground">
                    E-mail
                  </label>
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-input"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="hero-goal" className="block text-sm font-medium mb-2 text-card-foreground">
                    Seu objetivo com o inglês
                  </label>
                  <Textarea
                    id="hero-goal"
                    placeholder="Ex: Melhorar comunicação em reuniões, preparar para entrevista..."
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    required
                    className="bg-background border-input min-h-[100px]"
                    aria-required="true"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold text-lg py-6 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Receber Proposta Personalizada
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Resposta em até 24 horas úteis
                </p>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Hero;
