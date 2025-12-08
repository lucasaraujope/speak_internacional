import { useEffect, useRef, useState } from "react";
import { Users, Award, Star, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: 5000,
        suffix: "+",
        label: "Alunos Ativos",
    },
    {
        icon: Award,
        value: 95,
        suffix: "%",
        label: "Taxa de Aprovação",
    },
    {
        icon: Star,
        value: 4.9,
        suffix: "/5",
        label: "Avaliação Média",
        decimals: 1,
    },
    {
        icon: TrendingUp,
        value: 87,
        suffix: "%",
        label: "Crescimento de Carreira",
    },
];

const AnimatedCounter = ({
    end,
    duration = 2000,
    decimals = 0,
}: {
    end: number;
    duration?: number;
    decimals?: number;
}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = startValue + (end - startValue) * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return (
        <span ref={countRef} className="text-5xl font-bold white-text">
            {count.toFixed(decimals)}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-24 bg-gradient-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Resultados que <span className="text-gradient-gold">Comprovam</span>
                    </h2>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Números que refletem nossa excelência e o sucesso dos nossos alunos
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-20 h-20 rounded-2xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-gold smooth-transition group-hover:scale-110">
                                <stat.icon className="w-10 h-10 text-secondary" />
                            </div>
                            <div className="mb-2 flex items-baseline justify-center gap-1">
                                <AnimatedCounter
                                    end={stat.value}
                                    decimals={stat.decimals}
                                />
                                <span className="text-3xl font-bold text-secondary">{stat.suffix}</span>
                            </div>
                            <div className="text-lg text-primary-foreground/80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
