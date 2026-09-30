import React from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  Heart,
  Menu,
  MessageCircle,
  Puzzle,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import "./App.css";

const services = [
  { icon: Brain, title: "Avaliação Neuropsicológica", text: "Investigação cuidadosa para compreender necessidades e orientar o próximo passo." },
  { icon: Puzzle, title: "Terapia ABA", text: "Intervenções individualizadas para desenvolver autonomia, comunicação e aprendizagem." },
  { icon: MessageCircle, title: "Fonoaudiologia", text: "Apoio ao desenvolvimento da comunicação, linguagem e interação." },
  { icon: Heart, title: "Terapia Ocupacional", text: "Mais independência e participação nas atividades do dia a dia." },
  { icon: Sparkles, title: "Psicopedagogia", text: "Estratégias para favorecer aprendizagem, atenção e confiança." },
  { icon: Users, title: "Acompanhamento Familiar", text: "Orientação próxima para que a família participe de cada conquista." },
];

const testimonials = [
  { name: "Juliana Martins", role: "Mãe do Lucas", text: "Um atendimento acolhedor, cuidadoso e muito humano. Sentimos segurança desde o primeiro encontro." },
  { name: "Carlos Eduardo", role: "Pai da Mariana", text: "Equipe atenciosa e profissional. O ambiente é acolhedor e o cuidado é realmente individualizado." },
  { name: "Patrícia Souza", role: "Mãe do Heitor", text: "Acompanhamento próximo e claro. A família entende cada etapa e participa das conquistas." },
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Logo() {
  return (
    <div className="brand" aria-label="Neuro Encanto">
      <div className="brand-mark"><Brain size={24} strokeWidth={1.7} /></div>
      <div>
        <strong>NEURO ENCANTO</strong>
        <span>CENTRO DE NEURODESENVOLVIMENTO</span>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="logo-button" onClick={() => scrollTo("inicio")} aria-label="Ir para o início"><Logo /></button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {["Sobre", "Serviços", "Equipe", "Depoimentos", "Contato"].map((item) => (
              <button key={item} onClick={() => { setOpen(false); scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")); }}>{item}</button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => scrollTo("contato")}><MessageCircle size={17} /> Agende sua consulta</button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section-pad">
          <div className="hero-glow glow-a" />
          <div className="hero-glow glow-b" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><Sparkles size={14} /> APOIO ESPECIALIZADO PARA UM FUTURO MELHOR</div>
              <h1>Cada criança tem um mundo único.<br /><span>Nós ajudamos a descobrir o seu.</span></h1>
              <p className="hero-lead">O Neuro Encanto é um centro de neurodesenvolvimento dedicado a crianças e adolescentes, com foco no desenvolvimento pleno de suas habilidades e no bem-estar da família.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo("contato")}><MessageCircle size={18} /> Agende sua consulta</button>
                <button className="text-btn" onClick={() => scrollTo("servicos")}>Conheça nossos serviços <ArrowRight size={17} /></button>
              </div>
              <div className="hero-trust"><CheckCircle2 size={17} /> Atendimento individualizado <span>•</span> <CheckCircle2 size={17} /> Equipe multidisciplinar</div>
            </div>

            <div className="hero-visual" aria-label="Ambiente acolhedor do Neuro Encanto">
              <div className="orb orb-one" /><div className="orb orb-two" />
              <div className="scene-card card-back" />
              <div className="scene-card card-main">
                <img src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=85" alt="Criança em ambiente acolhedor" />
                <div className="image-shade" />
                <div className="floating-note"><Heart size={16} fill="currentColor" /> Cuidado que respeita cada história.</div>
              </div>
              <div className="float-card float-top"><Brain size={18} /><span><b>Desenvolvimento</b><small>olhar individualizado</small></span></div>
              <div className="float-card float-bottom"><Star size={16} fill="currentColor" /><span><b>Ambiente acolhedor</b><small>para crianças e famílias</small></span></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="services section-pad">
          <div className="container">
            <div className="section-heading split-heading">
              <div><div className="eyebrow">NOSSOS SERVIÇOS</div><h2>Acompanhamento completo para cada fase do desenvolvimento.</h2></div>
              <p>Avaliações e intervenções personalizadas, baseadas em evidências e adaptadas às necessidades únicas de cada criança e adolescente.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowRight size={17} /></span></article>)}
            </div>
          </div>
        </section>

        <section id="sobre" className="about section-pad">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <div className="about-image"><img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1200&q=85" alt="Ambiente infantil acolhedor" /></div>
              <div className="about-badge"><Heart size={17} fill="currentColor" /> Acolhimento em cada detalhe</div>
            </div>
            <div className="about-copy"><div className="eyebrow">POR QUE ESCOLHER O NEURO ENCANTO?</div><h2>Mais que terapias,<br /><span>acolhemos histórias.</span></h2><p>Cada criança é vista, ouvida e respeitada em sua individualidade. Nosso compromisso é promover avanços reais em um ambiente seguro, acolhedor e preparado para apoiar toda a família.</p><div className="feature-list"><div><CheckCircle2 /><span><b>Equipe multidisciplinar</b><small>Profissionais trabalhando em conjunto.</small></span></div><div><CheckCircle2 /><span><b>Atendimento personalizado</b><small>Planos pensados para cada necessidade.</small></span></div><div><CheckCircle2 /><span><b>Família no centro</b><small>Orientação para cada etapa.</small></span></div></div></div>
          </div>
        </section>

        <section id="equipe" className="team section-pad">
          <div className="container team-card"><div className="team-copy"><div className="eyebrow">UMA EQUIPE, UM PROPÓSITO</div><h2>Cuidado integrado para <span>pequenas grandes conquistas.</span></h2><p>O trabalho multidisciplinar conecta diferentes olhares para construir um plano de desenvolvimento coerente, próximo e humano.</p><button className="outline-btn" onClick={() => scrollTo("contato")}>Conheça nossa abordagem <ArrowRight size={17} /></button></div><div className="team-stack"><div className="mini-3d m1"><Stethoscope /></div><div className="mini-3d m2"><Brain /></div><div className="mini-3d m3"><Heart /></div><div className="team-photo"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85" alt="Profissional de saúde em atendimento" /></div></div></div>
        </section>

        <section id="depoimentos" className="testimonials section-pad">
          <div className="container"><div className="section-heading"><div className="eyebrow">DEPOIMENTOS</div><h2>Famílias que confiam,<br /><span>crianças que evoluem.</span></h2></div><div className="testimonial-grid">{testimonials.map((t) => <article className="testimonial" key={t.name}><div className="stars">{[1,2,3,4,5].map((n) => <Star key={n} size={15} fill="currentColor" />)}</div><p>“{t.text}”</p><strong>{t.name}</strong><span>{t.role}</span></article>)}</div></div>
        </section>

        <section id="contato" className="contact section-pad">
          <div className="container contact-panel"><div><div className="eyebrow">VAMOS COMEÇAR?</div><h2>Agende uma avaliação<br />e dê o primeiro passo.</h2></div><p>Entre em contato para tirar suas dúvidas e entender qual caminho faz mais sentido para sua família.</p><button className="primary-btn light" onClick={() => window.location.href = "mailto:contato@neuroencanto.com.br"}><MessageCircle size={18} /> Entrar em contato <ArrowRight size={17} /></button></div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><Logo /><div className="footer-links"><button onClick={() => scrollTo("sobre")}>Sobre</button><button onClick={() => scrollTo("servicos")}>Serviços</button><button onClick={() => scrollTo("equipe")}>Equipe</button><button onClick={() => scrollTo("depoimentos")}>Depoimentos</button></div><span>© 2026 Neuro Encanto. Todos os direitos reservados.</span></div></footer>
    </div>
  );
}

export default App;
