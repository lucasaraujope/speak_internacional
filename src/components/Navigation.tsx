import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoFundoEscuro from "@/assets/logo-fundo-escuro.png";
import logoFundoClaro from "@/assets/logo-fundo-claro.jpg";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isCorporatePage = location.pathname === "/ingles-para-empresas";
    const { t } = useLanguage();

    // Optimized scroll handler with requestAnimationFrame
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (!isHomePage) {
            window.location.href = `/#${id}`;
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    // Define background and text colors based on scroll state and page
    const navBgClass = isCorporatePage
        ? isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-primary shadow-md"
        : isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent";

    const textClass = isCorporatePage
        ? isScrolled
            ? "text-primary hover:text-secondary"
            : "text-primary-foreground hover:text-secondary"
        : isScrolled
            ? "text-primary hover:text-secondary"
            : "text-white hover:text-secondary";

    // Logo logic: on corporate page, use dark logo when scrolled, light logo otherwise
    const logoSrc = isCorporatePage
        ? isScrolled ? logoFundoClaro : logoFundoEscuro
        : isScrolled ? logoFundoClaro : logoFundoEscuro;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={logoSrc}
                            alt="Speak Online Internacional"
                            width={120}
                            height={48}
                            className="h-12 w-auto"
                            loading="eager"
                            decoding="async"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => scrollToSection("inicio")}
                            className={`${textClass} smooth-transition font-medium`}
                        >
                            {t('nav.home')}
                        </button>
                        <Link
                            to="/sobre"
                            className={`${textClass} smooth-transition font-medium ${location.pathname === "/sobre" ? "text-secondary" : ""
                                }`}
                        >
                            {t('nav.about')}
                        </Link>

                        {/* Cursos Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                                onBlur={() => setTimeout(() => setIsCoursesOpen(false), 150)}
                                className={`flex items-center gap-1 ${textClass} smooth-transition font-medium`}
                            >
                                {t('nav.courses')} <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isCoursesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in">
                                    <button
                                        onClick={() => { scrollToSection("cursos"); setIsCoursesOpen(false); }}
                                        className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        {t('nav.mainCourses')}
                                    </button>
                                    <Link
                                        to="/cursos-especificos"
                                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        {t('nav.specificCourses')}
                                    </Link>
                                    <Link
                                        to="/ingles-para-empresas"
                                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        {t('nav.corporateEnglish')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => scrollToSection("planos")}
                            className={`${textClass} smooth-transition font-medium`}
                        >
                            {t('nav.plans')}
                        </button>

                        <Button
                            onClick={() => scrollToSection("contato")}
                            className="bg-gradient-gold text-primary-foreground hover:shadow-gold"
                        >
                            {t('nav.requestQuote')}
                        </Button>

                        <LanguageSelector isScrolled={isScrolled} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${textClass} smooth-transition`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 bg-background border-t animate-fade-in">
                        <div className="flex justify-center py-2">
                            <LanguageSelector />
                        </div>
                        <button
                            onClick={() => scrollToSection("inicio")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            {t('nav.home')}
                        </button>
                        <Link
                            to="/sobre"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.about')}
                        </Link>
                        <button
                            onClick={() => scrollToSection("cursos")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            {t('nav.mainCourses')}
                        </button>
                        <Link
                            to="/cursos-especificos"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.specificCourses')}
                        </Link>
                        <Link
                            to="/ingles-para-empresas"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.corporateEnglish')}
                        </Link>
                        <button
                            onClick={() => scrollToSection("planos")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            {t('nav.plans')}
                        </button>
                        <div className="px-4 pt-2">
                            <Button
                                onClick={() => scrollToSection("contato")}
                                className="w-full bg-gradient-gold text-primary-foreground"
                            >
                                {t('nav.requestQuote')}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
