document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const toastEl = document.getElementById('bookingToast');
  const toastBody = toastEl?.querySelector('.toast-body');

  // Initialize EmailJS
  emailjs.init("nsn7GEwkCU_Ft2W0J"); // ✅ Your public key

  // Telegram Bot Setup
  const TELEGRAM_BOT_TOKEN = "7916634272:AAHA4W5AlRlXo8AkSDH2brYggG_CRz8dStg";
  const TELEGRAM_CHAT_ID = "6031568061"; // ✅ your chat ID
  const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    const requiredFields = ['name', 'email', 'phone', 'referral', 'eventType', 'eventDate', 'eventLocation'];
    const isValid = requiredFields.every((field) => data[field]?.trim() !== '');

    if (!isValid) {
      showToast('Please fill in all required fields before submitting.');
      return;
    }

    // Send Telegram notification
    const telegramMessage = `
📩 *New Booking Received!*
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
🔗 Heard via: ${data.referral}

🎉 Event Type: ${data.eventType}
📅 Date: ${data.eventDate}
📍 Location: ${data.eventLocation}
📝 Message: ${data.message || 'N/A'}
`;

    try {
      // Send to Telegram
      await fetch(TELEGRAM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown'
        }),
      });

      // Send confirmation email
      await emailjs.send('service_wzd2w2r', 'template_l7uqxbm', data);

      showToast('Booking submitted successfully! A confirmation email has been sent.');
      bookingForm.reset();
    } catch (error) {
      console.error('Error:', error);
      showToast('Submission failed. Please try again later.');
    }
  });

  // Toast Function
  function showToast(message) {
    if (!toastEl || !toastBody) return;
    toastBody.textContent = message;
    toastEl.classList.add('show');
    toastEl.style.zIndex = '2000';
    setTimeout(() => toastEl.classList.remove('show'), 2000);
  }
});
