window.addEventListener('load', () => {
    if (window.textFadeInterval) {
        clearTimeout(window.textFadeInterval);
    }

    const texts = document.querySelectorAll('.head-container .text');
    if (!texts.length) return;

    let currentIndex = 0;
    const fadeDuration = 1200;
    const holdDuration = 2500;

    texts.forEach((text, i) => {
        text.classList.remove('active');
        if (i === 0) text.classList.add('active');
    });

    function nextText() {
        if (currentIndex === texts.length - 1) {
            texts[currentIndex].classList.remove('active');

            setTimeout(() => {
                window.location.href = 'moment.html';
            }, fadeDuration + 200);

            return;
        }

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
