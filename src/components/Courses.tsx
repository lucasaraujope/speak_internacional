import { MessageCircle, Briefcase, Plane, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const courses = [
    {
        icon: MessageCircle,
        title: "Conversação",
        description: "Desenvolva fluência natural em conversas do dia a dia e situações sociais.",
        features: ["Speaking intensivo", "Vocabulário prático", "Confiança na fala"],
    },
    {
        icon: Briefcase,
        title: "Inglês Profissional",
        description: "Domine o inglês corporativo para reuniões, apresentações e negociações.",
        features: ["Business English", "Emails profissionais", "Reuniões e calls"],
    },
    {
        icon: Plane,
        title: "Inglês para Viagens",
        description: "Aprenda o essencial para viajar com confiança e aproveitar ao máximo.",
        features: ["Situações reais", "Cultura e etiqueta", "Viagens de negócios"],
    },
    {
        icon: Users,
        title: "Preparação para Entrevistas",
        description: "Prepare-se para entrevistas em inglês e conquiste sua vaga internacional.",
        features: ["Mock interviews", "Técnicas de resposta", "Vocabulário técnico"],
    },
];

const Courses = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="cursos" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Nossos <span className="text-gradient-gold">Cursos</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Programas especializados para cada objetivo profissional
                    </p>
                </div>

                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-card-hover smooth-transition cursor-pointer group border-border hover:-translate-y-2 ${isVisible ? "animate-slide-up" : "opacity-0"
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardHeader>
                                <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:shadow-gold smooth-transition group-hover:rotate-6">
                                    <course.icon className="w-8 h-8 text-primary group-hover:scale-110 smooth-transition" />
                                </div>
                                <CardTitle className="text-xl text-card-foreground">{course.title}</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {course.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {course.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-card-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;