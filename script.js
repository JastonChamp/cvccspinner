const wheel = document.querySelector('.wheel');
const cvccWords = [
   'bend', 'milk', 'jump', 'sink', 'wind', 'lost', 'sand', 'melt',
  'lamp', 'belt', 'gulp', 'band', 'limp', 'pink', 'wing',
  'pond', 'rust', 'vest',  'bolt', 'clap', 'drag', 'fist', 'golf',
  'hunt', 'junk', 'kept', 'lend', 'musk', 'nest', 'pint', 'ramp', 
  'tent', 'wilt',  'zest', 'bulk', 'chip', 'dock', 'funk', 'grip',
  'hulk', 'inch', 'jolt',  'lump', 'mint', 'neck',  'pump',
  'rack', 'slip', 'tick', 'volt',  'yolk', 'clot',
  'drip', 'flap', 'grid',  'itch', 'jazz', 'kick', 'lock', 'moss',
  'numb', 'pack', 'quit', 'risk', 'smog', 'tack', 'vent',  
  'zoom',  'dust', 'film', 'grew', 'hiss',  'kill',
  'loud',  'swim',  
  'bump', 'clad', 'dung', 'flog', 'grim', 'huff',
  'kilt', 'lint', 'muck', 'puck', 'rung', 'shut', 'tusk', 'wisp'
];

cvccWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  
  let coloredWord = '';
  for (let letter of word) {
    if ('aeiou'.includes(letter)) {
      coloredWord += `<span class="vowel">${letter}</span>`;
    } else {
      coloredWord += letter;
    }
  }
  
  slot.innerHTML = coloredWord;
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
    const randomSlot = Math.floor(Math.random() * cvccWords.length);
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
    const randomSlot = Math.floor(Math.random() * cvccWords.length);
    slots[currentSlot].style.display = 'none';
    slots[randomSlot].style.display = 'flex';
    currentSlot = randomSlot;
  }, 2500);
});
