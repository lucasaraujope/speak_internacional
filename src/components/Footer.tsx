import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoFundoEscuro from "@/assets/logo-branca.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-gradient-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <img
                            src={logoFundoEscuro}
                            alt="Speak Online Internacional"
                            className="h-12 w-auto mb-4"
                        />
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Transformando carreiras através da fluência em inglês. Metodologia moderna para
                            profissionais que buscam resultados.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-secondary">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#inicio"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cursos"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    Cursos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#metodologia"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    Metodologia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#planos"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    Planos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-secondary">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 mt-1 text-secondary shrink-0" />
                                <a
                                    href="mailto:comercial@speakonlineinternational.com.br"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    comercial@speakonlineinternational.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 mt-1 text-secondary shrink-0" />
                                <a
                                    href="tel:+5511999999999"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    (11) 99999-9999
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 text-secondary shrink-0" />
                                <span className="text-primary-foreground/80">
                                    São Paulo, SP - Brasil
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-secondary">Redes Sociais</h3>
                        <p className="text-primary-foreground/80 text-sm mb-4">
                            Siga-nos e fique por dentro de dicas e conteúdos exclusivos
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.youtube.com/@speakonlineinternational"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Youtube className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="https://www.instagram.com/speakonlinebrasil/"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/speak-online-international/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="https://open.spotify.com/show/5GKxmZmSVxk42Huy4LkKbn?si=7aac47b5eb9d452e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <svg className="w-5 h-5 text-primary-foreground group-hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com/@speak.online"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <svg className="w-5 h-5 text-primary-foreground group-hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/10 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                        <p>© {currentYear} Speak Online Internacional. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-secondary smooth-transition">
                                Política de Privacidade
                            </a>
                            <a href="#" className="hover:text-secondary smooth-transition">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
