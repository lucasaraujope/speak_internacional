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
      "Não trabalhamos com professores nativos somente com brasileiros, porém eles possuem certificações internacionais (CELTA, TESOL, Cambridge). Todos com vasta e passam por rigoroso processo de seleção.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança, sem taxas adicionais.",
  },
  {
    question: "Como são as aulas? Individuais ou em grupo?",
    answer:
      "Hoje a nós não oferecemos aulas em grupo somente individuais. Assim garantimos um experiência unica para cada aluno.",
  },
  {
    question: "E se eu perder uma aula?",
    answer:
      "Com até 24h de antecedência sem custos adicionais. Temos horários flexíveis de manhã, tarde e noite.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer:
      "Nós não prendemos o aluno ou seu cartão em mensalidades ou fidelidade, assim o mês que você paga você estudo, se não pagar não estuda",
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