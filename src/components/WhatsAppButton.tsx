import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/utils/whatsapp";

const WhatsAppButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleWhatsAppClick = () => {
        window.open(getWhatsAppUrl("os cursos da Speak Online Internacional"), "_blank");
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {isExpanded && (
                    <div className="bg-card rounded-2xl shadow-2xl p-4 max-w-xs animate-scale-in border border-border">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm text-card-foreground">Speak Online</div>
                                    <div className="text-xs text-muted-foreground">
                                        Online • Responde rápido
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-sm text-card-foreground mb-3">
                            Olá! 👋 Como podemos ajudar você a conquistar a fluência em inglês?
                        </p>
                        <Button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                        >
                            Iniciar Conversa
                        </Button>
                    </div>
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl flex items-center justify-center smooth-transition hover:scale-110 group"
                >
                    {isExpanded ? (
                        <X className="w-7 h-7 text-white" />
                    ) : (
                        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
                    )}
                </button>
            </div>
        </>
    );
};

export default WhatsAppButton;
