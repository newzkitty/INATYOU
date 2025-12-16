window.addEventListener('load', () => {
  if (window.textFadeInterval) {
    clearTimeout(window.textFadeInterval);
  }

  const texts = document.querySelectorAll('.head-container .text');
  if (!texts.length) return;

  const isLastPage = window.location.pathname.includes('lastpage.html');

  let currentIndex = 0;
  const fadeDuration = 1200;
  const holdDuration = 1800;

  // reset
  texts.forEach((text, i) => {
    text.classList.remove('active');
    if (i === 0) text.classList.add('active');
  });

 function nextText() {
  const isLast = currentIndex === texts.length - 1;

  // 🔴 ถ้าเป็นข้อความสุดท้าย
  if (isLast) {
    // ❗ ถ้าเป็น lastpage → ค้างไว้ ไม่ fade out
    if (isLastPage) return;

    // หน้าอื่น → fade out แล้วเปลี่ยนหน้า
    texts[currentIndex].classList.remove('active');

    setTimeout(() => {
      window.location.href = 'lastpage.html';
    }, fadeDuration + 200);

    return;
  }

  // 👉 ข้อความปกติ
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
