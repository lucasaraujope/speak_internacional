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
    'hero.description': { pt: 'Falar inglês muda destinos.\n\nAbre portas, cria oportunidades, conecta pessoas e transforma vidas.\n\nE é exatamente por isso que a Speak Online existe.\n\nAcreditamos que fluência não acontece em silêncio.\n\nEla nasce da prática, da coragem de tentar, da orientação certa e de um ambiente que acolhe, inspira e desenvolve.\n\nAqui, cada aula é construída para que você fale, pense e sinta o inglês com naturalidade.', en: 'Speaking English changes destinies.\n\nIt opens doors, creates opportunities, connects people, and transforms lives.\n\nAnd that\'s exactly why Speak Online exists.\n\nWe believe fluency doesn\'t happen in silence.\n\nIt comes from practice, the courage to try, the right guidance, and an environment that welcomes, inspires, and develops.\n\nHere, every class is built so you speak, think, and feel English naturally.', es: 'Hablar inglés cambia destinos.\n\nAbre puertas, crea oportunidades, conecta personas y transforma vidas.\n\nY es exactamente por eso que Speak Online existe.\n\nCreemos que la fluidez no sucede en silencio.\n\nNace de la práctica, del coraje de intentar, de la orientación correcta y de un ambiente que acoge, inspira y desarrolla.\n\nAquí, cada clase está construida para que hables, pienses y sientas el inglés con naturalidad.', fr: 'Parler anglais change les destins.\n\nCela ouvre des portes, crée des opportunités, connecte les gens et transforme des vies.\n\nEt c\'est exactement pour cela que Speak Online existe.\n\nNous croyons que la fluidité ne se produit pas en silence.\n\nElle naît de la pratique, du courage d\'essayer, de la bonne orientation et d\'un environnement qui accueille, inspire et développe.\n\nIci, chaque cours est conçu pour que vous parliez, pensiez et ressentiez l\'anglais naturellement.', it: 'Parlare inglese cambia i destini.\n\nApre porte, crea opportunità, connette persone e trasforma vite.\n\nEd è esattamente per questo che Speak Online esiste.\n\nCrediamo che la fluenza non avvenga in silenzio.\n\nNasce dalla pratica, dal coraggio di provare, dalla giusta guida e da un ambiente che accoglie, ispira e sviluppa.\n\nQui, ogni lezione è costruita perché tu parli, pensi e senta l\'inglese con naturalezza.' },
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
    'about.description': { pt: 'Há mais de 20 anos levando fluência em inglês em tempo recorde de maneira simples e direta, conectando profissionais brasileiros às melhores oportunidades do mundo.', en: 'For over 20 years bringing English fluency in record time in a simple and direct way, connecting Brazilian professionals to the best opportunities in the world.', es: 'Hace más de 20 años llevando fluidez en inglés en tiempo récord de manera simple y directa, conectando profesionales brasileños a las mejores oportunidades del mundo.', fr: 'Depuis plus de 20 ans, nous apportons la maîtrise de l\'anglais en un temps record de manière simple et directe, connectant les professionnels brésiliens aux meilleures opportunités du monde.', it: 'Da oltre 20 anni portiamo la fluenza in inglese in tempo record in modo semplice e diretto, collegando i professionisti brasiliani alle migliori opportunità del mondo.' },
    'about.missionTitle': { pt: 'Nossa Missão', en: 'Our Mission', es: 'Nuestra Misión', fr: 'Notre Mission', it: 'La Nostra Missione' },
    'about.missionDesc': { pt: 'Transformar vidas pela oralidade. Como instituição especializada em alta performance na língua inglesa, a Speak Online International oferece uma experiência de aprendizagem leve, inteligente e fundamentada em ciência. Capacitar cada aluno a falar inglês com autonomia, segurança e confiança é o centro de tudo o que fazemos.', en: 'Transform lives through speaking. As an institution specialized in high performance in the English language, Speak Online International offers a light, intelligent learning experience grounded in science. Empowering each student to speak English with autonomy, security, and confidence is at the center of everything we do.', es: 'Transformar vidas a través de la oralidad. Como institución especializada en alto rendimiento en el idioma inglés, Speak Online International ofrece una experiencia de aprendizaje ligera, inteligente y fundamentada en ciencia. Capacitar a cada alumno para hablar inglés con autonomía, seguridad y confianza es el centro de todo lo que hacemos.', fr: 'Transformer des vies par l\'oral. En tant qu\'institution spécialisée dans la haute performance en langue anglaise, Speak Online International offre une expérience d\'apprentissage légère, intelligente et fondée sur la science. Permettre à chaque élève de parler anglais avec autonomie, sécurité et confiance est au cœur de tout ce que nous faisons.', it: 'Trasformare vite attraverso l\'oralità. Come istituzione specializzata in alte prestazioni nella lingua inglese, Speak Online International offre un\'esperienza di apprendimento leggera, intelligente e basata sulla scienza. Permettere a ogni studente di parlare inglese con autonomia, sicurezza e fiducia è al centro di tutto ciò che facciamo.' },
    'about.visionTitle': { pt: 'Nossa Visão', en: 'Our Vision', es: 'Nuestra Visión', fr: 'Notre Vision', it: 'La Nostra Visione' },
    'about.visionDesc': { pt: 'Ser a instituição de referência global em ensino de inglês focado em oralidade, unindo neurociência, tecnologia com propósito e uma metodologia autoral que entrega fluência real, mensurável e sustentável. Nossa visão é elevar o padrão internacional do aprendizado de idiomas e formar comunicadores de alta performance.', en: 'To be the global reference institution in English teaching focused on speaking, combining neuroscience, purposeful technology, and an original methodology that delivers real, measurable, and sustainable fluency. Our vision is to raise the international standard of language learning and train high-performance communicators.', es: 'Ser la institución de referencia global en enseñanza de inglés enfocada en oralidad, uniendo neurociencia, tecnología con propósito y una metodología autoral que entrega fluidez real, medible y sostenible. Nuestra visión es elevar el estándar internacional del aprendizaje de idiomas y formar comunicadores de alto rendimiento.', fr: 'Être l\'institution de référence mondiale dans l\'enseignement de l\'anglais axé sur l\'oral, combinant neuroscience, technologie avec un objectif et une méthodologie originale qui offre une fluidité réelle, mesurable et durable. Notre vision est d\'élever la norme internationale de l\'apprentissage des langues et de former des communicateurs de haute performance.', it: 'Essere l\'istituzione di riferimento globale nell\'insegnamento dell\'inglese focalizzato sull\'oralità, unendo neuroscienza, tecnologia con uno scopo e una metodologia originale che offre fluenza reale, misurabile e sostenibile. La nostra visione è elevare lo standard internazionale dell\'apprendimento delle lingue e formare comunicatori ad alte prestazioni.' },
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
    'footer.description': { pt: 'Acreditamos que fluência não acontece em silêncio. Ela nasce da prática, da coragem de tentar, da orientação certa e de um ambiente que acolhe, inspira e desenvolve. Aqui, cada aula é construída para que você fale, pense e sinta o inglês com naturalidade.', en: 'We believe fluency doesn\'t happen in silence. It comes from practice, the courage to try, the right guidance, and an environment that welcomes, inspires, and develops. Here, every class is built so you speak, think, and feel English naturally.', es: 'Creemos que la fluidez no sucede en silencio. Nace de la práctica, del coraje de intentar, de la orientación correcta y de un ambiente que acoge, inspira y desarrolla. Aquí, cada clase está construida para que hables, pienses y sientas el inglés con naturalidad.', fr: 'Nous croyons que la fluidité ne se produit pas en silence. Elle naît de la pratique, du courage d\'essayer, de la bonne orientation et d\'un environnement qui accueille, inspire et développe. Ici, chaque cours est conçu pour que vous parliez, pensiez et ressentiez l\'anglais naturellement.', it: 'Crediamo che la fluenza non avvenga in silenzio. Nasce dalla pratica, dal coraggio di provare, dalla giusta guida e da un ambiente che accoglie, ispira e sviluppa. Qui, ogni lezione è costruita perché tu parli, pensi e senta l\'inglese con naturalezza.' },
    'footer.quickLinks': { pt: 'Links Rápidos', en: 'Quick Links', es: 'Enlaces Rápidos', fr: 'Liens Rapides', it: 'Link Rapidi' },
    'footer.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto', fr: 'Contact', it: 'Contatto' },
    'footer.socialMedia': { pt: 'Redes Sociais', en: 'Social Media', es: 'Redes Sociales', fr: 'Réseaux Sociaux', it: 'Social Media' },
    'footer.followUs': { pt: 'Siga-nos e fique por dentro de dicas e conteúdos exclusivos', en: 'Follow us and stay up to date with tips and exclusive content', es: 'Síguenos y mantente al día con consejos y contenido exclusivo', fr: 'Suivez-nous et restez informé des astuces et contenus exclusifs', it: 'Seguici e rimani aggiornato con consigli e contenuti esclusivi' },
    'footer.privacy': { pt: 'Política de Privacidade', en: 'Privacy Policy', es: 'Política de Privacidad', fr: 'Politique de Confidentialité', it: 'Politica sulla Privacy' },
    'footer.terms': { pt: 'Termos de Uso', en: 'Terms of Use', es: 'Términos de Uso', fr: 'Conditions d\'Utilisation', it: 'Termini di Utilizzo' },

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
