window.addEventListener('load', () => {
  if (window.textFadeInterval) {
    clearTimeout(window.textFadeInterval);
  }

  const texts = document.querySelectorAll('.head-container .text');
  if (!texts.length) return;

  let currentIndex = 0;
  const fadeDuration = 1200;
  const holdDuration = 1800;

  // reset ทุกข้อความ
  texts.forEach((text, i) => {
    text.classList.remove('active');
    if (i === 0) text.classList.add('active');
  });

  function nextText() {
    const isLast = currentIndex === texts.length - 1;

    // 🔴 ถ้าเป็นข้อความสุดท้าย → ค้างไว้
    if (isLast) {
      clearTimeout(window.textFadeInterval);
      return;
    }

    // fade out ข้อความปัจจุบัน
    texts[currentIndex].classList.remove('active');

    setTimeout(() => {
      currentIndex++;
      texts[currentIndex].classList.add('active');

      window.textFadeInterval = setTimeout(
        nextText,
        fadeDuration + holdDuration
      );
    }, fadeDuration);
  }

  window.textFadeInterval = setTimeout(
    nextText,
    fadeDuration + holdDuration
  );
});
