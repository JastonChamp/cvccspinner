const wheel = document.querySelector('.wheel');
const ccvcWords = [
  'bend', 'milk', 'jump', 'sink', 'wind', 
  'lost', 'sand', 'melt', 'lamp', 'belt',
  'pink', 'limp', 'band', 'gulp',
  'wing', 'pond',  'rust', 'vest', 'bolt',
  'fist', 'golf', 
   'hunt', 'junk',  'kept',
  'lend', 'musk', 'pint', 'tent',  'ramp', 'wilt',
  'zest', 'bulk', 'dock', 'funk', 'hulk', 'inch', 
  'mint', 'lump', 'jolt', 
  'neck', 'pump', 'rack', 'tick',  'volt', 'yolk', 'numb', 'quilt',
  'dust', 'vent', 'film',  'bump', 'tack', 
   'plum',  'spit', 'trot',  'bloc', 
 
];

ccvcWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  slot.textContent = word; // Display the CCVC word
  slot.style.display = 'none';
  wheel.appendChild(slot);

   let coloredWord = '';
  for (let letter of word) {
    if ('aeiou'.includes(letter)) {
      coloredWord += `<span class="vowel">${letter}</span>`;
    } else {
      coloredWord += letter;
    }
  }
  
  slot.innerHTML = coloredWord;  // Use innerHTML to insert HTML content
  slot.style.display = 'none';
  wheel.appendChild(slot);
});

const slots = document.querySelectorAll('.slot');
slots[0].style.display = 'flex';

let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  let shuffleCount = 0;
  let lastRandom = 0;

  const shuffleEffect = setInterval(() => {
    slots[lastRandom].style.display = 'none';
    const randomSlot = Math.floor(Math.random() * ccvcWords.length);
    slots[randomSlot].style.display = 'flex';
    lastRandom = randomSlot;
    shuffleCount++;
    if (shuffleCount > 20) {
      clearInterval(shuffleEffect);
      slots[lastRandom].style.display = 'none';
      slots[currentSlot].style.display = 'flex';
    }
  }, 100);

  setTimeout(() => {
    const randomSlot = Math.floor(Math.random() * ccvcWords.length);
    slots[currentSlot].style.display = 'none';
    slots[randomSlot].style.display = 'flex';
    currentSlot = randomSlot;
  }, 2500);
});
