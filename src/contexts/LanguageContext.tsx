import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr' | 'it';

interface Translations {
    [key: string]: {
        [lang in Language]: string;
    };
}

export const translations: Translations = {
    // Navigation
    'nav.home': { pt: 'Início', en: 'Home', es: 'Inicio', fr: 'Accueil', it: 'Inizio' },
    'nav.about': { pt: 'Sobre', en: 'About', es: 'Acerca de', fr: 'À propos', it: 'Chi siamo' },
    'nav.courses': { pt: 'Cursos', en: 'Courses', es: 'Cursos', fr: 'Cours', it: 'Corsi' },
    'nav.mainCourses': { pt: 'Cursos Principais', en: 'Main Courses', es: 'Cursos Principales', fr: 'Cours Principaux', it: 'Corsi Principali' },
    'nav.specificCourses': { pt: 'Cursos Específicos', en: 'Specific Courses', es: 'Cursos Específicos', fr: 'Cours Spécifiques', it: 'Corsi Specifici' },
    'nav.corporateEnglish': { pt: 'Inglês para Empresas', en: 'Corporate English', es: 'Inglés para Empresas', fr: 'Anglais pour Entreprises', it: 'Inglese per Aziende' },
    'nav.plans': { pt: 'Planos', en: 'Plans', es: 'Planes', fr: 'Forfaits', it: 'Piani' },
    'nav.requestQuote': { pt: 'Solicitar Orçamento', en: 'Request Quote', es: 'Solicitar Cotización', fr: 'Demander un Devis', it: 'Richiedi Preventivo' },

    // Hero
    'hero.badge': { pt: 'Referência em Inglês Profissional', en: 'Professional English Reference', es: 'Referencia en Inglés Profesional', fr: 'Référence en Anglais Professionnel', it: 'Riferimento in Inglese Professionale' },
    'hero.title1': { pt: 'Domine o Inglês e', en: 'Master English and', es: 'Domina el Inglés y', fr: 'Maîtrisez l\'Anglais et', it: 'Padroneggia l\'Inglese e' },
    'hero.title2': { pt: 'Impulsione sua Carreira', en: 'Boost Your Career', es: 'Impulsa tu Carrera', fr: 'Boostez Votre Carrière', it: 'Potenzia la Tua Carriera' },
    'hero.description': { pt: 'Metodologia moderna e professores especializados para profissionais que querem resultados reais. Aprenda inglês com quem entende sua carreira.', en: 'Modern methodology and specialized teachers for professionals who want real results. Learn English with those who understand your career.', es: 'Metodología moderna y profesores especializados para profesionales que quieren resultados reales. Aprende inglés con quienes entienden tu carrera.', fr: 'Méthodologie moderne et professeurs spécialisés pour les professionnels qui veulent de vrais résultats. Apprenez l\'anglais avec ceux qui comprennent votre carrière.', it: 'Metodologia moderna e insegnanti specializzati per professionisti che vogliono risultati reali. Impara l\'inglese con chi capisce la tua carriera.' },
    'hero.globalFluency': { pt: 'Fluência Global', en: 'Global Fluency', es: 'Fluidez Global', fr: 'Aisance Mondiale', it: 'Fluenza Globale' },
    'hero.professionalCommunication': { pt: 'Comunicação profissional', en: 'Professional communication', es: 'Comunicación profesional', fr: 'Communication professionnelle', it: 'Comunicazione professionale' },
    'hero.fastResults': { pt: 'Resultados Rápidos', en: 'Fast Results', es: 'Resultados Rápidos', fr: 'Résultats Rapides', it: 'Risultati Rapidi' },
    'hero.provenMethod': { pt: 'Metodologia comprovada', en: 'Proven methodology', es: 'Metodología comprobada', fr: 'Méthodologie éprouvée', it: 'Metodologia comprovata' },
    'hero.formTitle': { pt: 'Solicite um Orçamento', en: 'Request a Quote', es: 'Solicita un Presupuesto', fr: 'Demandez un Devis', it: 'Richiedi un Preventivo' },
    'hero.formDescription': { pt: 'Descubra o plano ideal para seus objetivos', en: 'Discover the ideal plan for your goals', es: 'Descubre el plan ideal para tus objetivos', fr: 'Découvrez le plan idéal pour vos objectifs', it: 'Scopri il piano ideale per i tuoi obiettivi' },
    'hero.fullName': { pt: 'Nome completo', en: 'Full name', es: 'Nombre completo', fr: 'Nom complet', it: 'Nome completo' },
    'hero.yourName': { pt: 'Seu nome', en: 'Your name', es: 'Tu nombre', fr: 'Votre nom', it: 'Il tuo nome' },
    'hero.email': { pt: 'E-mail', en: 'Email', es: 'Correo electrónico', fr: 'E-mail', it: 'E-mail' },
    'hero.goalLabel': { pt: 'Seu objetivo com o inglês', en: 'Your English goal', es: 'Tu objetivo con el inglés', fr: 'Votre objectif avec l\'anglais', it: 'Il tuo obiettivo con l\'inglese' },
    'hero.goalPlaceholder': { pt: 'Ex: Melhorar comunicação em reuniões, preparar para entrevista...', en: 'E.g.: Improve meeting communication, prepare for interview...', es: 'Ej: Mejorar comunicación en reuniones, preparar para entrevista...', fr: 'Ex: Améliorer la communication en réunion, préparer un entretien...', it: 'Es: Migliorare la comunicazione nelle riunioni, prepararsi per un colloquio...' },
    'hero.submitButton': { pt: 'Receber Proposta Personalizada', en: 'Receive Personalized Proposal', es: 'Recibir Propuesta Personalizada', fr: 'Recevoir une Proposition Personnalisée', it: 'Ricevi Proposta Personalizzata' },
    'hero.responseTime': { pt: 'Resposta em até 24 horas úteis', en: 'Response within 24 business hours', es: 'Respuesta en hasta 24 horas hábiles', fr: 'Réponse sous 24 heures ouvrables', it: 'Risposta entro 24 ore lavorative' },

    // Courses
    'courses.title': { pt: 'Nossos', en: 'Our', es: 'Nuestros', fr: 'Nos', it: 'I nostri' },
    'courses.titleHighlight': { pt: 'Cursos', en: 'Courses', es: 'Cursos', fr: 'Cours', it: 'Corsi' },
    'courses.subtitle': { pt: 'Programas especializados para cada objetivo profissional', en: 'Specialized programs for each professional goal', es: 'Programas especializados para cada objetivo profesional', fr: 'Programmes spécialisés pour chaque objectif professionnel', it: 'Programmi specializzati per ogni obiettivo professionale' },
    'courses.conversation': { pt: 'Conversação', en: 'Conversation', es: 'Conversación', fr: 'Conversation', it: 'Conversazione' },
    'courses.conversationDesc': { pt: 'Desenvolva fluência natural em conversas do dia a dia e situações sociais.', en: 'Develop natural fluency in everyday conversations and social situations.', es: 'Desarrolla fluidez natural en conversaciones cotidianas y situaciones sociales.', fr: 'Développez une aisance naturelle dans les conversations quotidiennes et les situations sociales.', it: 'Sviluppa una fluenza naturale nelle conversazioni quotidiane e nelle situazioni sociali.' },
    'courses.professional': { pt: 'Inglês Profissional', en: 'Professional English', es: 'Inglés Profesional', fr: 'Anglais Professionnel', it: 'Inglese Professionale' },
    'courses.professionalDesc': { pt: 'Domine o inglês corporativo para reuniões, apresentações e negociações.', en: 'Master corporate English for meetings, presentations, and negotiations.', es: 'Domina el inglés corporativo para reuniones, presentaciones y negociaciones.', fr: 'Maîtrisez l\'anglais des affaires pour les réunions, présentations et négociations.', it: 'Padroneggia l\'inglese aziendale per riunioni, presentazioni e negoziazioni.' },
    'courses.travel': { pt: 'Inglês para Viagens', en: 'Travel English', es: 'Inglés para Viajes', fr: 'Anglais pour Voyages', it: 'Inglese per Viaggi' },
    'courses.travelDesc': { pt: 'Aprenda o essencial para viajar com confiança e aproveitar ao máximo.', en: 'Learn the essentials to travel with confidence and make the most of it.', es: 'Aprende lo esencial para viajar con confianza y aprovecharlo al máximo.', fr: 'Apprenez l\'essentiel pour voyager en confiance et en profiter au maximum.', it: 'Impara l\'essenziale per viaggiare con fiducia e trarne il massimo.' },
    'courses.interviews': { pt: 'Preparação para Entrevistas', en: 'Interview Preparation', es: 'Preparación para Entrevistas', fr: 'Préparation aux Entretiens', it: 'Preparazione per Colloqui' },
    'courses.interviewsDesc': { pt: 'Prepare-se para entrevistas em inglês e conquiste sua vaga internacional.', en: 'Prepare for English interviews and land your international position.', es: 'Prepárate para entrevistas en inglés y conquista tu puesto internacional.', fr: 'Préparez-vous aux entretiens en anglais et décrochez votre poste international.', it: 'Preparati per i colloqui in inglese e conquista la tua posizione internazionale.' },

    // Countries Section
    'countries.title': { pt: 'Países onde', en: 'Countries where we', es: 'Países donde', fr: 'Pays où nous', it: 'Paesi dove' },
    'countries.titleHighlight': { pt: 'Atuamos', en: 'Operate', es: 'Actuamos', fr: 'Opérons', it: 'Operiamo' },
    'countries.subtitle': { pt: 'Nossa metodologia alcança alunos em diversos países ao redor do mundo', en: 'Our methodology reaches students in various countries around the world', es: 'Nuestra metodología alcanza estudiantes en diversos países alrededor del mundo', fr: 'Notre méthodologie atteint des étudiants dans divers pays du monde', it: 'La nostra metodologia raggiunge studenti in vari paesi del mondo' },

    // About Page
    'about.title': { pt: 'Sobre a', en: 'About', es: 'Sobre', fr: 'À propos de', it: 'Chi siamo' },
    'about.description': { pt: 'Há mais de 10 anos transformando vidas através do ensino de inglês de qualidade, conectando profissionais brasileiros às melhores oportunidades do mundo.', en: 'For over 10 years transforming lives through quality English teaching, connecting Brazilian professionals to the best opportunities in the world.', es: 'Hace más de 10 años transformando vidas a través de la enseñanza de inglés de calidad, conectando profesionales brasileños a las mejores oportunidades del mundo.', fr: 'Depuis plus de 10 ans, nous transformons des vies grâce à un enseignement de l\'anglais de qualité, connectant les professionnels brésiliens aux meilleures opportunités du monde.', it: 'Da oltre 10 anni trasformiamo vite attraverso l\'insegnamento dell\'inglese di qualità, collegando i professionisti brasiliani alle migliori opportunità del mondo.' },
    'about.missionTitle': { pt: 'Nossa Missão', en: 'Our Mission', es: 'Nuestra Misión', fr: 'Notre Mission', it: 'La Nostra Missione' },
    'about.missionDesc': { pt: 'Democratizar o acesso ao ensino de inglês de alta qualidade, utilizando tecnologia e metodologias inovadoras para capacitar profissionais a alcançarem fluência e conquistarem suas metas de carreira internacional.', en: 'Democratize access to high-quality English education, using technology and innovative methodologies to empower professionals to achieve fluency and reach their international career goals.', es: 'Democratizar el acceso a la enseñanza de inglés de alta calidad, utilizando tecnología y metodologías innovadoras para capacitar a profesionales a alcanzar fluidez y conquistar sus metas de carrera internacional.', fr: 'Démocratiser l\'accès à un enseignement de l\'anglais de haute qualité, en utilisant la technologie et des méthodologies innovantes pour permettre aux professionnels d\'atteindre la fluidité et de réaliser leurs objectifs de carrière internationale.', it: 'Democratizzare l\'accesso all\'insegnamento dell\'inglese di alta qualità, utilizzando tecnologia e metodologie innovative per consentire ai professionisti di raggiungere la fluenza e conquistare i loro obiettivi di carriera internazionale.' },
    'about.visionTitle': { pt: 'Nossa Visão', en: 'Our Vision', es: 'Nuestra Visión', fr: 'Notre Vision', it: 'La Nostra Visione' },
    'about.visionDesc': { pt: 'Ser reconhecida como a principal escola de inglês online do Brasil, formando uma comunidade global de profissionais bilíngues preparados para liderar em um mercado cada vez mais conectado.', en: 'To be recognized as the leading online English school in Brazil, forming a global community of bilingual professionals prepared to lead in an increasingly connected market.', es: 'Ser reconocida como la principal escuela de inglés en línea de Brasil, formando una comunidad global de profesionales bilingües preparados para liderar en un mercado cada vez más conectado.', fr: 'Être reconnue comme la principale école d\'anglais en ligne du Brésil, formant une communauté mondiale de professionnels bilingues prêts à diriger dans un marché de plus en plus connecté.', it: 'Essere riconosciuta come la principale scuola di inglese online in Brasile, formando una comunità globale di professionisti bilingue preparati a guidare in un mercato sempre più connesso.' },
    'about.valuesTitle': { pt: 'Nossos', en: 'Our', es: 'Nuestros', fr: 'Nos', it: 'I Nostri' },
    'about.valuesTitleHighlight': { pt: 'Valores', en: 'Values', es: 'Valores', fr: 'Valeurs', it: 'Valori' },
    'about.valuesSubtitle': { pt: 'Os pilares que guiam cada decisão e interação na Speak Online', en: 'The pillars that guide every decision and interaction at Speak Online', es: 'Los pilares que guían cada decisión e interacción en Speak Online', fr: 'Les piliers qui guident chaque décision et interaction chez Speak Online', it: 'I pilastri che guidano ogni decisione e interazione a Speak Online' },

    // Values
    'value1.title': { pt: 'A fala transforma', en: 'Speaking transforms', es: 'El habla transforma', fr: 'La parole transforme', it: 'Il parlare trasforma' },
    'value1.desc': { pt: 'Fluência nasce da prática ativa. Colocamos o aluno para falar desde o primeiro dia, sempre com foco em alta performance comunicativa.', en: 'Fluency comes from active practice. We have students speak from day one, always focusing on high communicative performance.', es: 'La fluidez nace de la práctica activa. Ponemos al alumno a hablar desde el primer día, siempre con enfoque en alto rendimiento comunicativo.', fr: 'La fluidité naît de la pratique active. Nous faisons parler l\'élève dès le premier jour, toujours axé sur une haute performance communicative.', it: 'La fluenza nasce dalla pratica attiva. Facciamo parlare l\'allievo dal primo giorno, sempre concentrandoci su alte prestazioni comunicative.' },
    'value2.title': { pt: 'Neurociência aplicada ao aprendizado', en: 'Neuroscience applied to learning', es: 'Neurociencia aplicada al aprendizaje', fr: 'Neuroscience appliquée à l\'apprentissage', it: 'Neuroscienza applicata all\'apprendimento' },
    'value2.desc': { pt: 'Apoiamos nossa metodologia em princípios cognitivos que tornam o progresso mais natural, leve e consistente.', en: 'We support our methodology on cognitive principles that make progress more natural, light, and consistent.', es: 'Apoyamos nuestra metodología en principios cognitivos que hacen el progreso más natural, ligero y consistente.', fr: 'Nous appuyons notre méthodologie sur des principes cognitifs qui rendent les progrès plus naturels, légers et constants.', it: 'Supportiamo la nostra metodologia su principi cognitivi che rendono il progresso più naturale, leggero e costante.' },
    'value3.title': { pt: 'Humanidade no centro', en: 'Humanity at the center', es: 'Humanidad en el centro', fr: 'L\'humanité au centre', it: 'Umanità al centro' },
    'value3.desc': { pt: 'A relação professor aluno é a base da evolução. Valorizamos acolhimento, empatia e um ambiente seguro para desenvolver confiança.', en: 'The teacher-student relationship is the foundation of evolution. We value welcoming, empathy, and a safe environment to develop confidence.', es: 'La relación profesor-alumno es la base de la evolución. Valoramos la acogida, la empatía y un ambiente seguro para desarrollar confianza.', fr: 'La relation enseignant-élève est la base de l\'évolution. Nous valorisons l\'accueil, l\'empathie et un environnement sûr pour développer la confiance.', it: 'Il rapporto insegnante-allievo è la base dell\'evoluzione. Valorizziamo l\'accoglienza, l\'empatia e un ambiente sicuro per sviluppare la fiducia.' },
    'value4.title': { pt: 'Evolução real, evidenciada', en: 'Real, evidenced evolution', es: 'Evolución real, evidenciada', fr: 'Évolution réelle, démontrée', it: 'Evoluzione reale, evidenziata' },
    'value4.desc': { pt: 'Como instituição orientada a resultados, não vendemos aulas. Entregamos progresso mensurável, com métricas claras e acompanhamento contínuo.', en: 'As a results-oriented institution, we don\'t sell classes. We deliver measurable progress, with clear metrics and continuous monitoring.', es: 'Como institución orientada a resultados, no vendemos clases. Entregamos progreso medible, con métricas claras y seguimiento continuo.', fr: 'En tant qu\'institution orientée résultats, nous ne vendons pas de cours. Nous offrons des progrès mesurables, avec des métriques claires et un suivi continu.', it: 'Come istituzione orientata ai risultati, non vendiamo lezioni. Offriamo progressi misurabili, con metriche chiare e monitoraggio continuo.' },
    'value5.title': { pt: 'Respeito à jornada individual', en: 'Respect for individual journey', es: 'Respeto al viaje individual', fr: 'Respect du parcours individuel', it: 'Rispetto del percorso individuale' },
    'value5.desc': { pt: 'Cada aluno tem um ritmo, uma história e um propósito. Nossa metodologia se adapta ao indivíduo para garantir evolução consistente e personalizada.', en: 'Each student has their own rhythm, history, and purpose. Our methodology adapts to the individual to ensure consistent and personalized evolution.', es: 'Cada alumno tiene un ritmo, una historia y un propósito. Nuestra metodología se adapta al individuo para garantizar evolución consistente y personalizada.', fr: 'Chaque élève a son propre rythme, son histoire et son objectif. Notre méthodologie s\'adapte à l\'individu pour garantir une évolution cohérente et personnalisée.', it: 'Ogni allievo ha un proprio ritmo, una storia e uno scopo. La nostra metodologia si adatta all\'individuo per garantire un\'evoluzione coerente e personalizzata.' },
    'value6.title': { pt: 'Inovação com propósito pedagógico', en: 'Innovation with pedagogical purpose', es: 'Innovación con propósito pedagógico', fr: 'Innovation avec objectif pédagogique', it: 'Innovazione con scopo pedagogico' },
    'value6.desc': { pt: 'Utilizamos tecnologia quando ela melhora o aprendizado e potencializa resultados. Inovamos para ampliar fluência, não para dispersar.', en: 'We use technology when it improves learning and enhances results. We innovate to expand fluency, not to disperse.', es: 'Utilizamos tecnología cuando mejora el aprendizaje y potencia resultados. Innovamos para ampliar fluidez, no para dispersar.', fr: 'Nous utilisons la technologie quand elle améliore l\'apprentissage et renforce les résultats. Nous innovons pour étendre la fluidité, pas pour disperser.', it: 'Utilizziamo la tecnologia quando migliora l\'apprendimento e potenzia i risultati. Innoviamo per ampliare la fluenza, non per disperdere.' },
    'value7.title': { pt: 'Excelência como padrão', en: 'Excellence as standard', es: 'Excelencia como estándar', fr: 'L\'excellence comme norme', it: 'Eccellenza come standard' },
    'value7.desc': { pt: 'Comprometidos com formação de alta performance na língua inglesa, buscamos sempre superar expectativas e entregar experiências transformadoras.', en: 'Committed to high-performance English language training, we always seek to exceed expectations and deliver transformative experiences.', es: 'Comprometidos con la formación de alto rendimiento en el idioma inglés, buscamos siempre superar expectativas y entregar experiencias transformadoras.', fr: 'Engagés dans une formation linguistique anglaise de haute performance, nous cherchons toujours à dépasser les attentes et à offrir des expériences transformatrices.', it: 'Impegnati nella formazione ad alte prestazioni nella lingua inglese, cerchiamo sempre di superare le aspettative e offrire esperienze trasformative.' },

    // Stats
    'stats.experience': { pt: 'Anos de Experiência', en: 'Years of Experience', es: 'Años de Experiencia', fr: 'Années d\'Expérience', it: 'Anni di Esperienza' },
    'stats.students': { pt: 'Alunos Formados', en: 'Graduated Students', es: 'Alumnos Graduados', fr: 'Étudiants Diplômés', it: 'Studenti Laureati' },
    'stats.satisfaction': { pt: 'Satisfação', en: 'Satisfaction', es: 'Satisfacción', fr: 'Satisfaction', it: 'Soddisfazione' },
    'stats.teachers': { pt: 'Professores', en: 'Teachers', es: 'Profesores', fr: 'Professeurs', it: 'Insegnanti' },

    // Footer
    'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.', es: 'Todos los derechos reservados.', fr: 'Tous droits réservés.', it: 'Tutti i diritti riservati.' },

    // Common
    'common.subscribe': { pt: 'Inscrever-se', en: 'Subscribe', es: 'Inscribirse', fr: 'S\'inscrire', it: 'Iscriversi' },
    'common.learnMore': { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más', fr: 'En savoir plus', it: 'Scopri di più' },
    'common.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto', fr: 'Contact', it: 'Contatto' },

    // WhatsApp
    'whatsapp.greeting': { pt: 'Olá! Eu vim através do site e quero informações sobre', en: 'Hello! I came through the website and I want information about', es: '¡Hola! Llegué a través del sitio web y quiero información sobre', fr: 'Bonjour! Je suis venu par le site web et je veux des informations sur', it: 'Ciao! Sono arrivato tramite il sito web e voglio informazioni su' },
    'whatsapp.generalCourse': { pt: 'os cursos', en: 'the courses', es: 'los cursos', fr: 'les cours', it: 'i corsi' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const t = (key: string): string => {
        if (translations[key] && translations[key][language]) {
            return translations[key][language];
        }
        console.warn(`Translation missing for key: ${key}`);
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
