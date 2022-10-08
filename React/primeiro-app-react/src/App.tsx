import { useState } from 'react';

const SLIDES = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises.",
  },
  {
    title: 'First, 10 push-ups',
    text: "Do 10 reps. Remember about full range of motion. Don't rush.",
  },
  {
    title: 'Next, 20 squats',
    text: 'Squats are important. Remember to keep your back straight.',
  },
  {
    title: 'Finally, 15 sit-ups',
    text: 'Slightly bend your knees. Remember about full range of motion.',
  },
  {
    title: 'Great job!',
    text: 'You made it, have a nice day and see you next time!',
  },
];

/**
 *
 * Desafio:
 * Criar um pequeno SlideShow
 *
 * Tem que ter Três botões: reset, anterior e próximo
 *
 * Botão Reset: quando clicado, tem que colocar o primeiro slide na tela.
 * Quando o primeiro slide estiver na tela, o botão tem que ficar desabilitado.
 *
 * Botão Anterior: Quando clicado tem que levar para o slide anterior.
 * Quando o primeiro slide estiver na tela, o botão tem que ficar desabilitado.
 *
 * Botão Próximo: Quando clicado leva ao proximo slide.
 * Quando o slide for o último, deve ser desabilitado.
 *
 */

function App() {
  const totalSlides = SLIDES.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const reset = () => {
    setCurrentSlide(0);
  };

  const previous = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };
  return (
    <div>
      <button disabled={currentSlide === 0} onClick={reset}>
        reset
      </button>
      <button disabled={currentSlide === 0} onClick={previous}>
        anterior
      </button>
      <button disabled={currentSlide === totalSlides - 1} onClick={next}>
        próximo
      </button>

      <h1>{SLIDES[currentSlide].title}</h1>
      <p>{SLIDES[currentSlide].text}</p>
    </div>
  );
}

export default App;
