const slider = document.querySelector('.js-devs-slider') as HTMLElement | null;
const track = document.querySelector('.js-devs-track') as HTMLElement | null;
const prevBtn = document.querySelector('.js-devs-prev') as HTMLButtonElement | null;
const nextBtn = document.querySelector('.js-devs-next') as HTMLButtonElement | null;

if (slider && track && prevBtn && nextBtn) {
  const cards = Array.from(track.children) as HTMLElement[];
  let currentIndex = 0;

  const getCardsPerView = (): number => {
    return window.innerWidth <= 768 ? 1 : 2;
  };

  const getMaxIndex = (): number => {
    return Math.max(0, cards.length - getCardsPerView());
  };

  const updateSlider = (): void => {
    const firstCard = cards[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    track.style.transform = `translate3d(-${cardWidth * currentIndex}px, 0, 0)`;

    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= getMaxIndex();
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
    updateSlider();
  });

  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', (e: TouchEvent) => {
    startX = e.changedTouches[0].clientX;
  });

  slider.addEventListener('touchend', (e: TouchEvent) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
    } else {
      currentIndex = Math.max(0, currentIndex - 1);
    }

    updateSlider();
  });

  window.addEventListener('resize', () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    updateSlider();
  });

  updateSlider();
}