import React from 'react';
import fotoIntro from "../img/fotoIntro.png";

function MainIntroduction() {
  return (
    <main id="mainIntroduction" className="introducao1">
      <div className="introducao">
        <img src={fotoIntro} alt="foto da intro possuíndo vetorização de imagem do engenheiro e design responsável pela landing page" />
        <div>
        <h1>Desenvolvedor FullStack && Machine Learning</h1>
        <p>Homem negro e brasiliense com foco em tecnologia, busco desafios para criar soluções eficientes e gerar impacto real.</p>
        </div>
      </div>
    </main>
  );
}

export default MainIntroduction;
