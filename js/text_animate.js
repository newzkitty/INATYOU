document.addEventListener('DOMContentLoaded', () => {
  // 🔥 เคลียร์ interval เก่าทิ้ง
  if (window.textFadeInterval) {
    clearInterval(window.textFadeInterval);
  }

  const texts = document.querySelectorAll('.head-container .text');
  if (!texts.length) return;

  let currentIndex = 0;

  const fadeDuration = 1200; // ต้องตรงกับ CSS
  const holdDuration = 1800;

  // reset ทุกข้อความก่อน
  texts.forEach((text, i) => {
    text.classList.remove('active');
    if (i === 0) text.classList.add('active');
  });

  window.textFadeInterval = setInterval(() => {
    // 🔴 กรณีข้อความสุดท้าย
    if (currentIndex === texts.length - 1) {
      texts[currentIndex].classList.remove('active');

      clearInterval(window.textFadeInterval); // ⛔ หยุด loop

      // รอ fade out เสร็จ แล้วเปลี่ยนหน้า
      setTimeout(() => {
        window.location.href = 'moment.html'; // 👈 เปลี่ยนชื่อหน้าได้
      }, fadeDuration);

      return;
    }

    // fade out ข้อความปัจจุบัน
    texts[currentIndex].classList.remove('active');

    setTimeout(() => {
      currentIndex++;
      texts[currentIndex].classList.add('active');
    }, fadeDuration);

  }, fadeDuration + holdDuration);
});

