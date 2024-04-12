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
  greetings.innerText = "Will there ever be next valentines?"
  root.style.setProperty("--steps", "35")
  document.title = "pft"
  // if (date.getMonth() == 1 && date.getDate() == 14) {
  //   greetings.innerText = "Happy Valentine's Day, Vy"
  // } else {
  //   greetings.innerText = "It's not Valentine's Day yet, Vy"
  //   root.style.setProperty("--steps", "32")
  //   document.title = "Be a bit patient dear~"
  // }
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
    "Mi manchi",
    "Je te manque",
    "Ich vermisse dich",
    "Te extraño",
    "Eu sinto sua falta",
    "Я скучаю по тебе",
    "أشتاق إليك",
    "你想我了",
    "나는 너를 보고 싶어",
    "Ik mis je",
    "Μου λείπεις",
    "Ich vermisse dich",
    "Mij mankeert u",
    "मुझे तुम्हारी याद आती है",
    "Saya rindu padamu",
    "Bhulina ma",
    "나는 당신을 그리워합니다",
    "Minuks",
    "Ja tęsknię za tobą",
    "Mwen sonje ou",
    "ฉันคิดถึงคุณ",
    "Я тебя скучаю",
    "Мен сені қажет етемін",
    "مجھے تمہاری یاد آتی ہے",
    "Mingauk-ka mako",
    "Ma ka fe e",
    "Zehnäm mikä saa ikävän",
    "我想念你",
    "Sinto a tua falta",
    "Man atminies pēc tevis",
    "Akukho ozakukhumbula",
    "Nakukumbuka",
    "I miss you",
    "Je veux que tu reviennes",
    "Ich will dich zurück",
    "Quiero que vuelvas",
    "Eu quero você de volta",
    "Я хочу, чтобы ты вернулся",
    "أريدك أن تعود",
    "我希望你回来",
    "네가 돌아오길 원해",
    "Jag vill att du ska komma tillbaka",
    "Ik wil dat je terugkomt",
    "Θέλω να γυρίσεις",
    "أريدك أن تعود",
    "Hinditawo ndiwe",
    "मुझे तुम्हें वापस चाहिए",
    "Aku ingin kamu kembali",
    "मला तुम्हाला परत आणण्याची इच्छा आहे",
    "म तिमीलाई पछि चाहन्छु",
    "나는 너를 다시 원해",
    "Ma tahan, et sa tagasi tuled",
    "Chcę, żebyś wrócił",
    "Mwen vle ou tounen",
    "ฉันต้องการให้คุณกลับมา",
    "Я хочу, щоб ти повернувся",
    "Мен сені қайта қабылдауға күшім келеді",
    "می‌خواهم که به تو برگردم",
    "သင့်ကိုပြန်သွားရန်ကိုလိုအပ်သည်",
    "Mo ni nkan to wa nii",
    "Laman nangu ka",
    "Minä haluan sinut takaisin",
    "我想要你回來",
    "Quero que tu volvas",
    "Es gribu, lai tu atgrieztos",
    "Ndiyakuthanda",
    "Nakupenda",
    "I want you back"
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
