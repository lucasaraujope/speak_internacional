import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const countries = [
    { name: 'Brasil', nameEn: 'Brazil', code: 'br' },
    { name: 'Estados Unidos', nameEn: 'United States', code: 'us' },
    { name: 'Canadá', nameEn: 'Canada', code: 'ca' },
    { name: 'França', nameEn: 'France', code: 'fr' },
    { name: 'Espanha', nameEn: 'Spain', code: 'es' },
    { name: 'Itália', nameEn: 'Italy', code: 'it' },
    { name: 'Holanda', nameEn: 'Netherlands', code: 'nl' },
];

const Countries = () => {
    const { ref, isVisible } = useScrollReveal();
    const { t, language } = useLanguage();

    return (
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
                        {t('countries.title')} <span className="text-gradient-gold">{t('countries.titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        {t('countries.subtitle')}
                    </p>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
                >
                    {countries.map((country, index) => (
                        <div
                            key={country.name}
                            className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 
                hover:bg-white/20 hover:scale-105 hover:shadow-gold transition-all duration-500 cursor-pointer group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <img
                                src={`https://flagcdn.com/w80/${country.code}.png`}
                                srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                                alt={`${country.name} flag`}
                                width={64}
                                height={48}
                                className="w-16 h-12 object-cover rounded shadow-md group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                                decoding="async"
                            />
                            <span className="text-primary-foreground font-medium text-center text-sm">
                                {language === 'en' ? country.nameEn : country.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countries;
