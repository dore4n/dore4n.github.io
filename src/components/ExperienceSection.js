import React from 'react';

function ExperienceSection() {
  return (
    <section className="experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">EXPERIÊNCIA</h2>
      <div>
        <p className="experiencia-texto">Desenvolvo soluções <strong>fullstack</strong> utilizando <strong>Python</strong>,
          <strong>Java</strong> e <strong>React</strong>, com foco na criação de <strong>agentes verticais</strong> e aplicações
          de <strong>Machine Learning</strong>. Tenho experiência com a API da <strong>OpenAI</strong> e o
          <strong>Hugging Face</strong>, participando do conceito, desenvolvimento e aprimoramento de aplicações
          inteligentes, como o VetGPT. Além do desenvolvimento <strong>back-end</strong> e da implementação de modelos
          supervisionados por IA, também atuo no <strong>UI/UX Design</strong> e no <strong>Front-End</strong>, garantindo
          interfaces intuitivas e funcionais.
        </p>

        <div className="empresa">
          <span className="empresa-ano">2023 - 2024</span>
          <h3 className="empresa-titulo">Yellow Leaf</h3>
          <span className="empresa-titulo">Desenvolvedor de Machine Learning</span>
          <p className="empresa-texto">Integração de APIs para desenvolvimento de funcionalidades baseadas em Inteligência Artificial, como assistentes virtuais e automação de processos aumentando a efetividade para toda a equipe.
          </p>
          <ul className="empresa-habilidades">
            <li>Python</li>
            <li>Criação de Agentes Verticais</li>
            <li>LangChain</li>
            <li>LangGraph</li>
            <li>Banco de Dados Vetorial</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">2022 - 2024</span>
          <h3 className="empresa-titulo">CENUV - Diretoria de TI</h3>
          <span className="empresa-titulo">Desenvolvedor FullStack</span>
          <p className="empresa-texto">Implementação de novas features, análise de código, manutenção de aplicativos SaaS e
            confecção de testes unitários de aplicações. Acompanhamento de testes integrados.</p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>Vue</li>
            <li>Java</li>
            <li>SpringBoot</li>
            <li>AWS</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div >
    </section >
  );
}

export default ExperienceSection;
