import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
{/*import logoFundoEscuro from "../assets/"
import logoFundoClaro from "@/assets/logo-azul.png";*/}

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
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

    const navLinks = [
        { label: "Início", href: "/", isScroll: true, scrollId: "inicio" },
        { label: "Sobre", href: "/sobre" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        {/*<img
                            src={isScrolled ? logoFundoClaro : logoFundoEscuro}
                            alt="Speak Online Internacional"
                            className="h-12 w-auto"
                        />*/}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            link.isScroll ? (
                                <button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.scrollId!)}
                                    className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary smooth-transition font-medium`}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    key={link.label}
                                    to={link.href!}
                                    className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary smooth-transition font-medium ${location.pathname === link.href ? "text-secondary" : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}

                        {/* Cursos Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                                onBlur={() => setTimeout(() => setIsCoursesOpen(false), 150)}
                                className={`flex items-center gap-1 ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary smooth-transition font-medium`}
                            >
                                Cursos <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isCoursesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in">
                                    <button
                                        onClick={() => { scrollToSection("cursos"); setIsCoursesOpen(false); }}
                                        className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        Cursos Principais
                                    </button>
                                    <Link
                                        to="/cursos-especificos"
                                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        Cursos Específicos
                                    </Link>
                                    <Link
                                        to="/ingles-para-empresas"
                                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                    >
                                        Inglês para Empresas
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => scrollToSection("planos")}
                            className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary smooth-transition font-medium`}
                        >
                            Planos
                        </button>

                        <Button
                            onClick={() => scrollToSection("contato")}
                            className="bg-gradient-gold text-primary-foreground hover:shadow-gold"
                        >
                            Solicitar Orçamento
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary smooth-transition`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 bg-background border-t animate-fade-in">
                        <button
                            onClick={() => scrollToSection("inicio")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            Início
                        </button>
                        <Link
                            to="/sobre"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sobre
                        </Link>
                        <button
                            onClick={() => scrollToSection("cursos")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            Cursos Principais
                        </button>
                        <Link
                            to="/cursos-especificos"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Cursos Específicos
                        </Link>
                        <Link
                            to="/ingles-para-empresas"
                            className="block px-4 py-3 text-foreground hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Inglês para Empresas
                        </Link>
                        <button
                            onClick={() => scrollToSection("planos")}
                            className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted"
                        >
                            Planos
                        </button>
                        <div className="px-4 pt-2">
                            <Button
                                onClick={() => scrollToSection("contato")}
                                className="w-full bg-gradient-gold text-primary-foreground"
                            >
                                Solicitar Orçamento
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
