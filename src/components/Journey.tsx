import { CheckCircle2, BookOpen, Target, TrendingUp, Award, Sparkles } from "lucide-react";

const journeySteps = [
    {
        icon: CheckCircle2,
        title: "Diagnóstico",
        description: "Avaliação completa do seu nível e objetivos",
    },
    {
        icon: BookOpen,
        title: "Plano Personalizado",
        description: "Criamos uma jornada sob medida para você",
    },
    {
        icon: Target,
        title: "Aulas Interativas",
        description: "Aprenda com metodologia moderna e engajadora",
    },
    {
        icon: TrendingUp,
        title: "Prática Constante",
        description: "Conversação e exercícios práticos diários",
    },
    {
        icon: Award,
        title: "Conquistas",
        description: "Acompanhe sua evolução com metas claras",
    },
    {
        icon: Sparkles,
        title: "Fluência",
        description: "Domine o inglês e alcance seus objetivos",
    },
];

const Journey = () => {
    const openWhatsApp = () => {
        window.open("https://wa.me/5511999999999?text=Olá! Quero começar minha jornada de aprendizado de inglês.", "_blank");
    };

    return (
        <section id="metodologia" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Jornada do <span className="text-gradient-gold">Aluno Speak</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Do primeiro contato à fluência: seu caminho estruturado para o sucesso
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
                            ✨ Comece sua jornada hoje e veja resultados em semanas, não anos
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;
