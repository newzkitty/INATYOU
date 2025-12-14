document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.pin-inputs input');
  const message = document.getElementById('pinMessage');
  const pinBox = document.getElementById('pinBox');

  const CORRECT_PIN = '241224'; // 👈 เปลี่ยนรหัสตรงนี้

  inputs.forEach((input, index) => {

    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');

      if (e.target.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }

      checkPin();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
    });

  });

  function checkPin() {
  const pin = Array.from(inputs).map(i => i.value).join('');

  if (pin.length === 6) {
    if (pin === CORRECT_PIN) {
      message.textContent = 'ถูกต้องแล้วค้าบ! นี่แหละๆ';

      message.style.color = '#ffffff';
      message.style.fontFamily = '"Sriracha", cursive';
      message.style.backgroundColor = '#76cb55';
      message.style.padding = '20px';
      message.style.borderRadius = '12px';
      message.style.fontSize = '16px';


      // ⛔ ปิดการกรอกเพิ่ม
      inputs.forEach(input => input.disabled = true);

      // ✅ รอ 1.2 วิ แล้วเปลี่ยนหน้า
      setTimeout(() => {
        window.location.href = 'firstquiz.html'; // 👈 เปลี่ยนชื่อไฟล์ได้
      }, 1200);

    } else {
      message.textContent = 'ผิดโว้ย! มั่วละไอ้หนุ่ม';

      message.style.color = '#ffffff';
      message.style.fontFamily = '"Sriracha", cursive';
      message.style.backgroundColor = '#ed3636';
      message.style.padding = '20px';
      message.style.borderRadius = '12px';
      message.style.fontSize = '16px';
      

      pinBox.classList.add('pin-error');

      setTimeout(() => {
        pinBox.classList.remove('pin-error');
        inputs.forEach(input => input.value = '');
        inputs[0].focus();
      }, 600);
    }
  }
}

});




