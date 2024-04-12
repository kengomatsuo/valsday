function heartclicked() {
  console.log('Pressed');
  rain();
  const loops = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3 + loops; i++) {
    rain();
  }
}

// check if Valentine's Day
var greetings = document.getElementById("happyvals")
var root = document.documentElement
const date = new Date()
window.onload = () => {
  document.title = "pft"
  if (date.getMonth() != 1 || date.getDate() != 14) {
    greetings.innerText = "Will there ever be next valentines?"
    root.style.setProperty("--steps", "35")
  }
}

// progress loop
var progressText = document.getElementById("progress")
var counter = 0
setInterval(() => {
  let concat = ""
  counter++
  if (counter == 4) {
    counter = 0
  }
  for (let i = 0; i < counter; i++) {
    concat += "."
  }
  progressText.innerText = "New stuff in progress" + concat
}, 1000);

function randomText() {
  let love = [
    "እወድሃለው",
    "Aщьызабзэ",
    "Ich han di geer",
    "Keske’",
    "Амарш",
    "Ama lala",
    "Mi tiḥu",
    "Eu reuëngoe",
    "诶青",
    "Jun no’oj ch’ool",
    "Mula mia",
    "Áyáʔ",
    "Alofa iu",
    "Biyô n’de",
    "Ngathangga ngurra",
    "Агъуащэ",
    "Afki h’oya",
    "Mi êrê iṅgláh",
    "Ek het jou lief",
    "Заха къило",
    "Ts’ena tsetsegh",
    "オシネプッ",
    "Moe ráhkisvuohta",
    "Higugma ko ikaw",
    "Te iubesc",
    "Ni’gi’ni",
    "Te dua",
    "نحبك",
    "Alingin",
    "Kwi wabishk",
    "Инаралкан",
    "Aku sayang tu",
    "አይበልሽ",
    "Ἀγαπῶ σε",
    "हम तूर से प्यार करैली",
    "Biiaalúuke",
    "Eu t’adoro",
    "أحبك",
    "Ti amo",
    "ܢܚܪܐ ܐܫܘܪܝܐ",
    "Níi3eníi3enáá",
    "Eu te amu",
    "Ti amu",
    "Къаш хъун",
    "Inadi nihi",
    "Ne miadun",
    "Ես սիրում եմ քեզ",
    "Te iubesc",
    "Ntyalke mparntwe",
    "Σ’αγαπώ",
    "মই তোমাক ভাল পাৰি",
    "Niyakahan",
    "Nalikutemwa",
    "ငါတို့ကိုချစ်ရတယ်",
    "Би хааштай",
    "Nya ka be",
    "K’i amo",
    "Nom amu",
    "¡Sipãn!",
    "Nuukwish",
    "我愛你",
    "Nëchi’ gidaht",
    "T’estimo",
    "I love you",
    "Niskaminan",
    "Соьр магIай",
    "Waan ku jeclaaday",
    "تحبك",
    "Qan tamuñaykama",
    "Mäni miyläw",
    "Mən səni sevirəm",
    "Monnuhoi",
    "Teichu",
    "Hər seyi seni sevirəm",
    "Tiang tresna samapti",
    "تهونو رمیش چیش",
    "M’bi fe",
    "Ngiyakuthanda",
    "Mina aase gachaa",
    "Мин ярашыу",
    "Maite zaitut",
    "Mba mi si",
    "Holong rohangku di ho",
    "Я цябе кахаю",
    "Nalikutemwa",
    "আমি তোমায় ভালোবাসি",
    "Lakh tirikh",
    "Ani sirki",
    "Abdi sayang deui",
    "Mi ke ma ku ma",
    "Mi luv yu",
    "Ni nipimo’p",
    "Volim te",
    "Me a gar ac’hanout",
    "Pallaku bassi",
    "Maimbawa’ ka",
    "Обичам те",
    "ငါတို့ကိုချစ်ရတယ်",
    "Би хааштай",
    "Min penkayqan",
    "بحبك",
    "Lekwé",
    "Kandukirira",
    "Gogolnna",
    "Би шинэчлэх сэтгэлээг хайрлуулж байна",
    "Nakupenda",
    "Ik hald fan dei",
    "Negligendam",
    "Naha ta yu fyari",
    "Amar priyo achi",
    "Ти си ми любов",
    "Ашшал бохш",
    "Szeretlek",
    "Arohaina ‘oe",
    "Ani ohev otach",
    "Aku cinta padamu",
    "M’bi fe",
    "Ninkunyan",
    "Eku vanme iruga",
    "Abwooli nungi",
    "Ouma vovola ngopfu",
    "Mo nighean donn",
    "Moi ku duka",
    "Aku cinta kamu",
    "Nipa nife e",
    "Mfezi wam",
    "N’ezra otach",
    "Moi kiziga",
    "Er liebt dich",
    "Te amo",
    "Mi estima vu",
    "Eme ou kapabe renmen",
    "Milele ikiwa nawe",
    "ἐγὼ φιλέω σε",
    "Iay oviani",
    "Ani ohev otach",
    "Afekwo",
    "Tuzofara",
    "Ngufulumele",
    "Nkalakata",
    "Kî rihíín",
    "Mama chakula",
    "Мен сени сүйөм",
    "Гъа хьо ме хъоста",
    "Ona di mmá",
    "Te quiero",
    "Ani ohev otach",
    "Mi aime a ou",
    "Ik hou van jou",
    "Џонака моронака махахе",
    "Eiiw",
    "Oghogho ekeme",
    "Ja te volim",
    "Nas tamana",
    "Tulitut papiarit",
    "Ani ahuv ot’cha",
    "Ngo kijijite",
    "Femn mwen renmen ou",
    "Tiam si",
    "Σ'αγαπώ",
    "Nna luwad"
  ];

  let miss = [
    "Missing u",
    "Missing us",
    "Du bist in meinen Gedanken",
    "Ik mis je",
    "Estás en mis pensamientos",
    "Je ressens ton absence",
    "你不在这里，我想你",
    "Manchi e mi manchi",
    "Saudades de você",
    "Ich sehne mich nach dir",
    "Mina kaipaan sinua",
    "Mi manchi",
    "أنت مفقود",
    "Estás ausente e eu sinto tua falta",
    "Falta você",
    "Ti sto pensando",
    "You're always on my mind",
    "Ik kan niet stoppen met aan je te denken",
    "وأنتَ غائب وأفتقدُك",
    "Mi manchi molto",
    "Мне очень не хватает тебя",
    "Te extraño mucho",
    "Kangen..",
    "Eu sinto muito a sua falta",
    "你不在，好难受",
    "Ты мне так сильно нужен",
    "C'est triste que tu ne sois pas ici",
    "I miss your presence so much",
    "Tu me manques beaucoup",
    "Te extraño demasiado",
    "Ich vermisse dich so sehr",
    "想你",
    "Eu quero você de volta",
    "我想要你回來",
    "Balik dong pls",
    "Мені дуже не вистачаєш",
    "Quisiera verte de nuevo",
    "Maneh waé",
    "Νοσταλγώ την παρουσία σου",
    "Eu sinto sua falta aqui",
    "Man ko sa balay",
    "Maneh sakène",
    "私はあなたが恋しいです",
    "Jag saknar dig så mycket",
    "Senti tua mancanza",
    "নিনা আছো",
    "আমি তোমাকে মিস করি",
    "너가 보고 싶어",
    "Ma ka fe e",
    "Akutaka wakakumana nawe",
    "मलाई तपाईंलाई मिस छ",
    "ನನಗೆ ನೀವು ಬಹಳ ಕಾಣಬೇಕಾಗಿದೆ",
    "நான் உங்களை மிஸ் செய்கிறேன்",
    "నేను మీకు కోరబడుతున్నాను",
    "มันทำให้ฉันคิดถึงคุณมาก",
    "Seni çok özlüyorum",
    "Мен сені өзім өтіріктен қорғаймын",
    "我很想你",
    "Я сильно тебе скучаю",
    "ਮੈਂ ਤੁਹਾਨੂੰ ਮਿਸ ਕਰਦਾ ਹਾਂ",
    "ਮੈਨੂੰ ਤੁਹਾਡਾ ਇੰਤਜਾਰ ਹੈ",
    "मी तुझ्यावर वाट लागलो",
    "हा बरा बुरा लागतो",
    "ഞാൻ നിന്നെ ഇഷ്ടപ്പെടുന്നു",
  ];

  const random = Math.floor(Math.random() * miss.length);
  return miss[random];
}

function rain() {
  let spawn = document.getElementById("spawn");
  let e = document.createElement('div');
  let opacity = Math.random();
  let size = Math.random();
  let left = Math.random() * screen.width * 0.7;
  let duration = Math.random();

  e.classList.add('rain');
  spawn.appendChild(e);
  e.innerText = randomText();
  e.style.opacity = .4 + opacity;
  e.style.fontSize = 0.4 + size + 'em';
  e.style.left = left + 'px';
  e.style.animationDuration = 2 + duration + 's';

  setTimeout(function () {
    spawn.removeChild(e)
  }, 20000)
}

setInterval(() => {
  rain();
}, 2500);

setInterval(() => {
  rain();
}, 2330);

setInterval(() => {
  rain();
}, 4013);
