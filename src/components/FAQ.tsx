import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a metodologia da Speak Online?",
    answer:
      "Nossa metodologia combina aulas ao vivo com professores especializados, material didático moderno e prática constante. Focamos em conversação e situações reais do mercado de trabalho, garantindo que você aprenda inglês aplicável ao seu dia a dia profissional.",
  },
  {
    question: "Quanto tempo leva para alcançar a fluência?",
    answer:
      "O tempo varia de acordo com seu nível inicial e dedicação. Em média, alunos iniciantes alcançam conversação básica em 3-6 meses e fluência intermediária em 12-18 meses. Nosso método acelerado e prática constante permitem resultados mais rápidos que cursos tradicionais.",
  },
  {
    question: "Os professores são nativos?",
    answer:
      "Trabalhamos com professores nativos e brasileiros com certificações internacionais (CELTA, TESOL, Cambridge). Todos têm experiência em inglês corporativo e passam por rigoroso processo de seleção.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança, sem taxas adicionais.",
  },
  {
    question: "Como são as aulas? Individuais ou em grupo?",
    answer:
      "Oferecemos ambos formatos. As aulas principais são em pequenos grupos (máx. 6 alunos) para garantir atenção individualizada. Planos superiores incluem aulas particulares e sessões de coaching personalizadas.",
  },
  {
    question: "Vocês oferecem certificado?",
    answer:
      "Sim, oferecemos certificado de conclusão de cada nível. Além disso, preparamos alunos para certificações internacionais como TOEFL, IELTS e Cambridge (custo da prova não incluso).",
  },
  {
    question: "E se eu perder uma aula?",
    answer:
      "Todas as aulas ficam gravadas na plataforma por 30 dias. Você também pode reagendar com até 24h de antecedência sem custos adicionais. Temos horários flexíveis de manhã, tarde e noite.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer:
      "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu investimento integralmente. Após esse período, você pode cancelar a qualquer momento, sem multas ou taxas de cancelamento.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos cursos e metodologia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline text-card-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a
            href="#contato"
            className="text-secondary hover:text-gold-dark smooth-transition font-semibold"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
