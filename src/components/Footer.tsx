import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-gradient-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="text-2xl font-bold mb-4">
                            Speak <span className="text-gradient-gold">Online</span>
                        </div>
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
                                    href="mailto:contato@speakonline.com.br"
                                    className="text-primary-foreground/80 hover:text-secondary smooth-transition"
                                >
                                    contato@speakonline.com.br
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
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center smooth-transition group"
                            >
                                <Youtube className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
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
