import React, { useEffect, useState } from 'react';
import {
  Brain, Menu, X, ArrowUpRight, CheckCircle2, HeartHandshake, Puzzle, MapPin,
  MessageCircle, Stethoscope, Speech, HandHeart, BookOpen, Users, Sparkles,
  ChevronDown, Star, ShieldCheck
} from 'lucide-react';
import './App.css';

const services = [
  { icon: Brain, title: 'Avaliação Neuropsicológica', text: 'Investigação cuidadosa para compreender o desenvolvimento e orientar o melhor plano de cuidado.' },
  { icon: Puzzle, title: 'Terapia ABA', text: 'Intervenções individualizadas para ampliar autonomia, comunicação e habilidades.' },
  { icon: Speech, title: 'Fonoaudiologia', text: 'Desenvolvimento da comunicação, linguagem, fala e alimentação.' },
  { icon: HandHeart, title: 'Terapia Ocupacional', text: 'Mais independência e participação nas atividades do dia a dia.' },
  { icon: BookOpen, title: 'Psicopedagogia', text: 'Apoio ao aprendizado, às funções cognitivas e à autoestima.' },
  { icon: Users, title: 'Acompanhamento Familiar', text: 'Orientação e parceria com a família em cada etapa do desenvolvimento.' },
];

const WHATSAPP_URL = 'https://wa.me/5582996570350';
const INSTAGRAM_URL = 'https://instagram.com/neuro.encanto';
const ADDRESS = 'Avenida Deputado Ceci Cunha, 1397, Arapiraca - AL';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS);
const HERO_PHOTO = 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=85';
const CLINIC_PHOTO = 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1200&q=85';

const testimonials = [
  ['Juliana Martins', 'Mãe do Lucas', '“O Neuro Encanto foi um divisor de águas para nossa família. Hoje vemos nosso filho muito mais confiante e feliz.”'],
  ['Carlos Eduardo', 'Pai da Mariana', '“Equipe atenciosa e extremamente profissional. Nos sentimos acolhidos desde o primeiro contato.”'],
  ['Patrícia Souza', 'Mãe do Heitor', '“O acompanhamento fez toda a diferença. Percebemos avanços importantes no desenvolvimento do nosso filho.”'],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenu(false);
  const go = (id) => { close(); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="site-shell">
      <div className="ambient ambient-a" /><div className="ambient ambient-b" />
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <button className="brand" onClick={() => go('#inicio')} aria-label="Neuro Encanto">
          <span className="brand-mark"><Brain size={30}/></span>
          <span><strong>NEURO ENCANTO</strong><small>CENTRO DE NEURODESENVOLVIMENTO</small></span>
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => go('#inicio')}>Início</button>
          <button onClick={() => go('#sobre')}>Sobre</button>
          <button onClick={() => go('#servicos')}>Serviços</button>
          <button onClick={() => go('#equipe')}>Equipe</button>
          <button onClick={() => go('#depoimentos')}>Depoimentos</button>
          <button onClick={() => go('#contato')}>Contato</button>
          <button onClick={() => go('#localizacao')}>Localização</button>
          <button className="mobile-cta" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}><MessageCircle size={17}/> Agende sua consulta</button>
        </nav>
        <button className="desktop-cta" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}><MessageCircle size={17}/> Agende sua consulta</button>
        <button className="menu-toggle" onClick={() => setMenu(v => !v)} aria-label="Abrir menu">{menu ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14}/> APOIO ESPECIALIZADO PARA UM FUTURO MELHOR</div>
            <h1>Cada criança tem<br/><span>um mundo único.</span><br/><em>Nós ajudamos a descobrir o seu.</em></h1>
            <p>O Neuro Encanto é um centro de neurodesenvolvimento dedicado ao diagnóstico, acompanhamento e desenvolvimento de crianças e adolescentes, com cuidado próximo às famílias.</p>
            <div className="hero-actions"><button className="primary" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}><MessageCircle size={18}/> Agende sua consulta <ArrowUpRight size={17}/></button><button className="text-btn" onClick={() => go('#servicos')}>Conheça nossos serviços <ArrowUpRight size={16}/></button></div>
            <div className="trust-row"><span><ShieldCheck size={17}/> Atendimento personalizado</span><span><HeartHandshake size={17}/> Cuidado em parceria</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-wrap"><img src={HERO_PHOTO} alt="Criança em ambiente acolhedor"/><div className="photo-glow"/></div>
            <div className="floating-card card-one"><Brain size={20}/><span><b>Desenvolvimento</b><small>olhar individualizado</small></span></div>
            <div className="floating-card card-two"><HeartHandshake size={20}/><span><b>Cuidado próximo</b><small>família no centro</small></span></div>
            <div className="orb orb-a"/><div className="orb orb-b"/>
          </div>
        </section>

        <section id="servicos" className="section services-section">
          <div className="section-heading"><div><div className="eyebrow">NOSSOS SERVIÇOS</div><h2>Acompanhamento completo<br/><span>para cada fase do desenvolvimento.</span></h2></div><p>Oferecemos avaliações e intervenções personalizadas, com base em evidências científicas e nas necessidades únicas de cada criança e adolescente.</p></div>
          <div className="service-grid">{services.map(({icon: Icon, title, text}) => <article className="service-card" key={title}><div className="icon-box"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18}/></article>)}</div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="about-photo"><img src={CLINIC_PHOTO} alt="Ambiente acolhedor do Neuro Encanto"/><div className="three-d-badge"><div className="mini-orb"><Brain size={25}/></div><span>Neuro<br/><b>Encanto</b></span></div></div>
          <div className="about-copy"><div className="eyebrow">POR QUE ESCOLHER O NEURO ENCANTO?</div><h2>Mais que terapias,<br/><span>acolhemos histórias.</span></h2><p>Aqui, cada criança é vista, ouvida e respeitada em sua individualidade. Nosso compromisso é promover avanços reais, com uma equipe especializada, ambiente acolhedor e um plano de cuidado personalizado.</p><div className="pill-row"><div><Users/><span>Equipe multidisciplinar</span></div><div><HeartHandshake/><span>Atendimento personalizado</span></div><div><ShieldCheck/><span>Ambiente seguro e acolhedor</span></div></div></div>
        </section>

        <section id="equipe" className="section team-section">
          <div className="eyebrow">CUIDADO EM EQUIPE</div><h2>Profissionais que trabalham<br/><span>em conjunto pelo desenvolvimento.</span></h2>
          <div className="team-orbit"><div className="center-node"><Brain size={42}/><span>Neuro<br/>Encanto</span></div><div className="orbit-card o1"><Stethoscope/><b>Avaliação</b><small>olhar clínico</small></div><div className="orbit-card o2"><Speech/><b>Comunicação</b><small>fonoaudiologia</small></div><div className="orbit-card o3"><Puzzle/><b>Aprendizagem</b><small>psicopedagogia</small></div><div className="orbit-card o4"><HandHeart/><b>Autonomia</b><small>terapia ocupacional</small></div></div>
        </section>

        <section id="depoimentos" className="section testimonials-section">
          <div className="section-heading"><div><div className="eyebrow">DEPOIMENTOS</div><h2>Famílias que confiam,<br/><span>crianças que evoluem.</span></h2></div><p>Veja o que dizem pais e responsáveis que já fazem parte da nossa jornada.</p></div>
          <div className="testimonial-grid">{testimonials.map(([name, role, quote]) => <article className="testimonial" key={name}><div className="stars">{[1,2,3,4,5].map(i => <Star key={i} size={15} fill="currentColor"/>)}</div><p>{quote}</p><div><b>{name}</b><small>{role}</small></div></article>)}</div>
        </section>

        <section id="contato" className="cta-section"><div><div className="eyebrow light">VAMOS COMEÇAR?</div><h2>Agende uma avaliação<br/>e dê o primeiro passo.</h2></div><p>Entre em contato e tire suas dúvidas. Estamos prontos para caminhar com você e com seu filho nessa jornada.</p><button className="cta-light" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}><MessageCircle size={18}/> Agendar agora <ArrowUpRight size={17}/></button><div className="address-line"><span>{ADDRESS}</span><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram @neuro.encanto</a></div><div className="scribble">Juntos por<br/><b>mais conquistas!</b> ♡</div></section>

        <section id="localizacao" className="section location-section"><div className="section-heading location-heading"><div><div className="eyebrow">ONDE ESTAMOS</div><h2>Um espaço pensado para acolher <span>crianças e famílias.</span></h2></div><p>Encontre o Neuro Encanto na Avenida Deputado Ceci Cunha, em Arapiraca. Consulte a rota no Google Maps antes da sua visita.</p></div><div className="map-card"><iframe title="Mapa do Neuro Encanto" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe><div className="map-info"><div><strong>Neuro Encanto</strong><span>{ADDRESS}</span></div><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={17}/> Abrir no Google Maps <ArrowUpRight size={16}/></a></div></div></section>
      </main>

      <footer><div className="footer-brand"><span className="brand-mark"><Brain size={26}/></span><span><strong>NEURO ENCANTO</strong><small>CENTRO DE NEURODESENVOLVIMENTO</small></span></div><div className="footer-links"><button onClick={() => go('#inicio')}>Início</button><button onClick={() => go('#sobre')}>Sobre</button><button onClick={() => go('#servicos')}>Serviços</button><button onClick={() => go('#equipe')}>Equipe</button><button onClick={() => go('#contato')}>Contato</button><button onClick={() => go('#localizacao')}>Localização</button></div><small>© 2026 Neuro Encanto. Todos os direitos reservados.</small></footer>
    </div>
  );
}

export default App;
