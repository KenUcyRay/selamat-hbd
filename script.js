let textStep = 0;

const texts = [
  "Hari ini belum tanggal 21 hehe maap kecepetan",
  "Tapi OBET tuh terlalu spesial buat ditunda , asikk takut ah🎈",
  "Makanya aku rayain dari sekarang , salah ga sih , maaf kalo salah atuh ya😚",
  "tadi kamu semangatin yang sekolah...",
  "Tapi kali ini, biar gweh raja yang semangatin kamu",
  "Apa pun yang kamu rasain belakangan ini, kamu ke gema aja , dia raja psikologis.",
  "Dan kamu juga gak harus kuat setiap saat.",
  "Tapi ingat, kamu tuh penting. Dan berhak dicintai dengan tulus , cihuyyy.",
  "Ini akhir... tapi bukan terakhir, Bet.",
  "Hidup kamu harus terus lanjut ya dan oke gas oke gas seperti pak prabowo🌱"
];

function startMusic() {
  const music = document.getElementById("bg-music");
  music.play().catch(() => {
    console.log("Autoplay diblokir, klik dulu ya buat mulaiin musik.");
  });
}

function typeText(text, callback) {
  const display = document.getElementById("textDisplay");
  display.innerHTML = "";
  let i = 0;
  const speed = 40;

  const interval = setInterval(() => {
    display.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}

function nextText() {
  const button = document.getElementById("nextBtn");
  button.disabled = true;

  if (textStep < texts.length) {
    if (textStep === 0) {
      startConfetti();
    }

    typeText(texts[textStep], () => {
      button.disabled = false;

      if (textStep === texts.length - 1) {
        button.innerText = "Tutup Pesan Ini";
      }

      textStep++;
    });
  } else {
    alert("Happy bday aja lah dari gw mah ygy");
  }
}

function startConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });

  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, 4000);
}

window.onload = function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    nextText();
  }, 2000);
};
