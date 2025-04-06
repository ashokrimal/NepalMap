import chalk from 'chalk';
import readlineSync from 'readline-sync';

const provinces = {
  1: {
    number: "1️⃣",
    name_en: "Province 1",
    name_np: "प्रदेश नं १",
    city_en: "Biratnagar",
    city_np: "विराटनगर",
    fact_en: "Known for Mount Everest and tea gardens in Ilam.",
    fact_np: "सगरमाथा र इलामका चियाबगानहरूको लागि प्रसिद्ध।",
    color: 'bgWhite', // Correctly assigning style names
    aliases: ["1", "province 1", "प्रदेश १", "प्रदेश नं १"]
  },
  2: {
    number: "2️⃣",
    name_en: "Province 2",
    name_np: "मधेश प्रदेश",
    city_en: "Janakpur",
    city_np: "जनकपुर",
    fact_en: "Famous for Janaki Temple and rich Mithila culture.",
    fact_np: "जानकी मन्दिर र समृद्ध मिथिला संस्कृतिका लागि प्रसिद्ध।",
    color: 'bgMagenta',
    aliases: ["2", "province 2", "प्रदेश २", "मधेश", "मधेश प्रदेश"]
  },
  3: {
    number: "3️⃣",
    name_en: "Bagmati Province",
    name_np: "बाग्मती प्रदेश",
    city_en: "Kathmandu",
    city_np: "काठमाडौं",
    fact_en: "Home to the capital city and many UNESCO heritage sites.",
    fact_np: "राजधानी काठमाडौं र युनेस्को सम्पदाको घर।",
    color: 'bgCyan',
    aliases: ["3", "bagmati", "province 3", "बाग्मती", "बाग्मती प्रदेश"]
  },
  4: {
    number: "4️⃣",
    name_en: "Gandaki Province",
    name_np: "गण्डकी प्रदेश",
    city_en: "Pokhara",
    city_np: "पोखरा",
    fact_en: "Gateway to Annapurna range and beautiful lakes.",
    fact_np: "अन्नपूर्ण हिमश्रृंखला र सुन्दर तालहरूको प्रवेशद्वार।",
    color: 'bgBlueBright',
    aliases: ["4", "gandaki", "province 4", "गण्डकी", "गण्डकी प्रदेश"]
  },
  5: {
    number: "5️⃣",
    name_en: "Lumbini Province",
    name_np: "लुम्बिनी प्रदेश",
    city_en: "Nepalgunj",
    city_np: "नेपालगञ्ज",
    fact_en: "Birthplace of Lord Buddha and a growing economic hub.",
    fact_np: "गौतम बुद्धको जन्मस्थल र आर्थिक केन्द्र।",
    color: 'bgRed',
    aliases: ["5", "lumbini", "province 5", "लुम्बिनी", "लुम्बिनी प्रदेश"]
  },
  6: {
    number: "6️⃣",
    name_en: "Karnali Province",
    name_np: "कर्णाली प्रदेश",
    city_en: "Surkhet",
    city_np: "सुर्खेत",
    fact_en: "Largest province by area with Rara Lake and remoteness.",
    fact_np: "रारा ताल र दुर्गमता सहितको सबैभन्दा ठूलो प्रदेश।",
    color: 'bgYellow',
    aliases: ["6", "karnali", "province 6", "कर्णाली", "कर्णाली प्रदेश"]
  },
  7: {
    number: "7️⃣",
    name_en: "Sudurpashchim Province",
    name_np: "सुदूरपश्चिम प्रदेश",
    city_en: "Dhangadhi",
    city_np: "धनगढी",
    fact_en: "Rich in Tharu culture and far-western natural beauty.",
    fact_np: "थारु संस्कृति र सुदूर पश्चिमको प्राकृतिक सौन्दर्यले भरिपूर्ण।",
    color: 'bgGreen',
    aliases: ["7", "sudurpaschim", "province 7", "सुदूरपश्चिम", "सुदूरपश्चिम प्रदेश"]
  }
};

// Language support
const languages = {
  en: {
    title: '🇳🇵 Interactive Map of Nepal',
    prompt: '👉 Province number or name: ',
    invalid: '❌ Invalid input. Please enter a number (1-7) or province name.',
    city: 'City:',
    fact: 'Fact:',
    separator: '──────────────────────────────────────────────'
  },
  np: {
    title: '🇳🇵 अन्तरक्रियात्मक नेपाल नक्सा',
    prompt: '👉 प्रदेश नम्बर वा नाम (Province number or name): ',
    invalid: '❌ मान्य इनपुट होइन। कृपया १ देखि ७ वा प्रदेशको नाम लेख्नुहोस्।',
    city: 'प्रमुख शहर:',
    fact: 'जानकारी:',
    separator: '──────────────────────────────────────────────'
  }
};

// Default language: English
let language = 'en';

// Language switch option
const switchLanguage = readlineSync.keyInSelect(['English', 'Nepali'], 'Select Language: ', { cancel: 'Exit' });

if (switchLanguage === 0) {
  language = 'en'; // English
} else if (switchLanguage === 1) {
  language = 'np'; // Nepali
} else {
  process.exit(); // Exit if no valid choice
}

console.log(`\n${chalk.redBright.bold(languages[language].title)}`);
console.log(chalk.gray(languages[language].separator));

for (let i = 7; i >= 1; i--) {
  const p = provinces[i];
  console.log(`${chalk[p.color].black.bold(` ${p.number} ${p['name_' + language]} `)}  ${chalk.bold('✩')} ${chalk.italic(p['city_' + language])}`);
}

const input = readlineSync.question(chalk.bold(`\n${languages[language].prompt}`)).trim().toLowerCase();

// Match user input with aliases
const match = Object.values(provinces).find(p => p.aliases.includes(input));

if (match) {
  console.log(`\n${chalk[match.color].black.bold(` ℹ️ ${match['name_' + language]} `)}\n`);
  console.log(`${chalk.yellow('🔸 ' + languages[language].city)} ${match['city_' + language]}`);
  console.log(`${chalk.green('📌 ' + languages[language].fact)} ${match['fact_' + language]}\n`);
} else {
  console.log(chalk.redBright(languages[language].invalid));
}