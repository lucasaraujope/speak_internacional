import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const languages: { code: Language; flagCode: string; name: string }[] = [
    { code: 'pt', flagCode: 'br', name: 'Português' },
    { code: 'en', flagCode: 'us', name: 'English' },
    { code: 'es', flagCode: 'es', name: 'Español' },
    { code: 'fr', flagCode: 'fr', name: 'Français' },
    { code: 'it', flagCode: 'it', name: 'Italiano' },
];

interface LanguageSelectorProps {
    isScrolled?: boolean;
}

const LanguageSelector = ({ isScrolled = false }: LanguageSelectorProps) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === language);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-secondary/20 ${isScrolled ? 'text-primary' : 'text-primary-foreground'
                    }`}
            >
                <img
                    src={`https://flagcdn.com/w40/${currentLanguage?.flagCode}.png`}
                    alt={currentLanguage?.name}
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                />
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[160px] animate-fade-in">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-secondary/20 ${language === lang.code
                                    ? 'bg-secondary/30 text-secondary-foreground'
                                    : 'text-foreground'
                                }`}
                        >
                            <img
                                src={`https://flagcdn.com/w40/${lang.flagCode}.png`}
                                alt={lang.name}
                                className="w-6 h-4 object-cover rounded-sm shadow-sm"
                            />
                            <span className="font-medium">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
