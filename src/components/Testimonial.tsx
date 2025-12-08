import { Star, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const testimonials = [
    {
        name: "Ana Paula Silva",
        role: "Gerente de Projetos",
        initials: "AS",
        rating: 5,
        text: "A Speak Online mudou minha carreira. Hoje participo de reuniões internacionais com total confiança. Em 6 meses alcancei a fluência que buscava há anos.",
        company: "Tech Corp",
        type: "text",
    },
    {
        name: "Carlos Mendes",
        role: "Desenvolvedor Senior",
        initials: "CM",
        rating: 5,
        text: "Consegui minha promoção para Tech Lead após melhorar meu inglês com a Speak. A metodologia é prática e focada em resultados reais do mercado.",
        company: "StartupX",
        type: "text",
    },
    {
        name: "Juliana Costa",
        role: "Marketing Manager",
        initials: "JC",
        rating: 5,
        text: "Excelente investimento! Os professores são altamente qualificados e as aulas são personalizadas para minhas necessidades de negócios.",
        company: "Global Marketing",
        type: "text",
    },
    {
        name: "Roberto Oliveira",
        role: "Diretor Financeiro",
        initials: "RO",
        rating: 5,
        text: "Preparei-me para entrevistas em empresas internacionais e consegui posição em multinacional. A Speak foi fundamental nessa conquista.",
        company: "Finance Inc",
        type: "text",
    },
];

const videoTestimonials = [
    {
        name: "Mariana Santos",
        role: "Product Manager",
        thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "2:34",
    },
    {
        name: "Felipe Rodrigues",
        role: "Software Engineer",
        thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=225&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "3:12",
    },
];

const Testimonials = () => {
    const { ref, isVisible } = useScrollReveal();
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Histórias de <span className="text-gradient-gold">Sucesso</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Veja como nossos alunos transformaram suas carreiras
                    </p>
                </div>

                {/* Video Testimonials */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                        Depoimentos em <span className="text-gradient-gold">Vídeo</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {videoTestimonials.map((video, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border"
                                onClick={() => setActiveVideo(video.videoUrl)}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={`Depoimento de ${video.name}`}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
                                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-semibold">{video.name}</p>
                                    <p className="text-sm opacity-80">{video.role}</p>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-sm">
                                    {video.duration}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Modal */}
                {activeVideo && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div className="relative w-full max-w-4xl aspect-video">
                            <iframe
                                src={activeVideo}
                                className="w-full h-full rounded-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* Text Testimonials */}
                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-card-hover smooth-transition border-border hover:-translate-y-2 hover:scale-105 ${isVisible ? "animate-slide-up" : "opacity-0"
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar className="w-12 h-12 bg-gradient-gold">
                                        <AvatarFallback className="text-primary font-bold">
                                            {testimonial.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-card-foreground">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                                    ))}
                                </div>

                                <p className="text-sm text-card-foreground leading-relaxed mb-3">
                                    "{testimonial.text}"
                                </p>

                                <div className="text-xs text-muted-foreground font-medium">
                                    {testimonial.company}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
