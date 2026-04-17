import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'uz' | 'en' | 'ru';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'yasmina-language';

  readonly current = signal<AppLanguage>(
    (localStorage.getItem(this.storageKey) as AppLanguage) || 'uz'
  );

  private readonly dictionary: Record<AppLanguage, Record<string, string>> = {
    uz: {
      // Navbar
      home: 'Bosh sahifa',
      flavors: 'Ta’mlar',
      story: 'Biz haqimizda',
      contact: 'Aloqa',
      signIn: 'Kirish',
      signUp: 'Ro‘yxatdan o‘tish',
      logout: 'Chiqish',

      // Hero
      heroBadge: 'Nafis desert san\'ati',
      heroTitle: 'Yasmina Ice Cream bilan o\'zgacha ta’m his qiling',
      heroText: 'O‘ziga jalb etuvchi ranglar, boy tekstura va unutilmas ta’m uyg‘unligidagi premium muzqaymoq tajribasi.',
      explore: 'Mahsulotlarni ko‘rish',
      welcomeBack: 'Xush kelibsiz',
      createAccount: 'Akkaunt yarating',

      // Stats / cards
      signatureFlavors: 'maxsus ta’m',
      customerRating: 'mijozlar bahosi',
      premiumVibe: 'premium vibe',
      yasminaSignature: 'Yasmina Motto',
      caramelVanilla: 'Har bir ta’m - o’zgacha lazzat.',
      elegantBranding: 'Nafis brending',
      elegantBrandingText: 'Iliq karamel ranglar, yengil kompozitsiya va boy editorial tipografiya.',
      realAuthSystem: 'Haqiqiy auth tizimi',
      realAuthSystemText: 'Sign up va sign in sahifalari Node.js backend va JWT bilan ulangan.',
      multiLanguageUI: 'Ko‘p tilli interfeys',
      multiLanguageUIText: 'Navbar orqali o‘zbek, ingliz va rus tillari orasida tez almashing.',

      // Flavors page
      signatureMenu: 'Maxsus menyu',
      flavorsTitle: 'Insonga berilgan ilhomning eng cho‘qqisida yaratilgan.',
      flavorsText: 'Hattoki tatib ko‘rmasdan o‘zining jozibali ifori bilan har qanday masofani inkor etib o‘ziga jalb etuvchilar.',
      orderVibe: 'Buyurtma berish',

      caramelBloom: 'Karamel guli',
      caramelBloomSub: 'Gulli karamel ipakligi',
      berryVelvet: 'Berry Velvet',
      berryVelvetSub: 'Boy rezavorli krem',
      vanillaGold: 'Vanilla Gold',
      vanillaGoldSub: 'Hashamatli klassik vanil',
      hazelnutDream: 'Hazelnut Dream',
      hazelnutDreamSub: 'Qovurilgan yong‘oq nafisligi',
      pistachioMuse: 'Pistachio Muse',
      pistachioMuseSub: 'Yumshoq yashil premium nota',
      chocolateSilk: 'Chocolate Silk',
      chocolateSilkSub: 'Qalin qora kakao kremi',

      // Story page
      storyBadge: 'Bizning hikoya',
      storyTitle: 'Nafislik va kayfiyat uyg‘unlashgan alohida olam.',
      storyText: 'Bu yerda har bir ta’m o‘ziga xos hissiyot uyg‘otadi — yumshoq tekstura, nozik ranglar va mukammal balans orqali. Biz uchun muzqaymoq shunchaki desert emas. Bu — his qilish, zavq olish va har bir lahzani eslab qolish uchun yaratilgan tajriba.',
      storyRouteText: '',
      brandYearText: 'Brend identikasi maxsus vizual tizim bilan boyitildi.',
      designVision: 'Dizayn ko‘rishi',
      designVisionText: 'Nozik detallar va estetik muvozanat Yasmina’ni o‘ziga xos brendga aylantiradi.',
      experience: 'Tajriba',
      experienceText: '8+ yillik tajriba🔥',

      // Contact page
      contactBadge: 'Aloqa',
      contactTitle: 'Yasmina kayfiyati brendingiz yoki tadbiringizga yetsin',
      contactText: 'Hamkorlik, buyurtma yoki filial bo‘yicha savollar uchun shu yerdan yozing.',
      name: 'Ism',
      email: 'Email',
      message: 'Xabar + Telefon raqam',
      sendMessage: 'Xabar yuborish',

      // Auth
      signInTitle: 'Akkauntingizga kiring',
      signInText: 'Premium Yasmina tajribasiga qayting.',
      signUpTitle: 'Yangi akkaunt yarating',
      signUpText: 'Yasmina dunyosiga qo‘shiling.',
      fullName: 'To‘liq ism',
      password: 'Parol',
      confirmPassword: 'Parolni tasdiqlang',
      alreadyHaveAccount: 'Akkauntingiz bormi?',
      dontHaveAccount: 'Akkauntingiz yo‘qmi?',
      createNow: 'Hozir yarating',

      // Footer
      luxuryMood: 'Hashamatli kayfiyat, premium desertlar va nafis brend uslubi.',
      auth: 'Autentifikatsiya',
      tashkentContact: 'Toshkent • infoyasmina.local',

      // Theme / misc
      lightMode: 'Kunduzgi rejim',
      darkMode: 'Tungi rejim',
      language: 'Til',
      loading: 'Yuklanmoqda...',
      readMore: 'Batafsil',
      discoverMore: 'Ko‘proq ko‘rish',
      orbitChip1: 'Kremli',
orbitChip2: 'Ipakdek',
orbitChip3: 'Premium',

marquee1: 'Premium muzqaymoq tajribasi',
marquee2: 'Brend estetikasi',
marquee3: 'Scroll animatsiyalar',
marquee4: 'Nafis vizual uslub',

creativeFlow: 'Ijodiy oqim',
scrollMoments: 'Scroll lahzalari',
showcaseTitle: 'Foydalanuvchi sitega kirganda oddiy sahifa emas, balki haqiqiy brend tajribasini his qiladi.',

brandLayer: 'Brend qatlami',
softGradientsTitle: 'Yumshoq gradientlar va glass kartalar',
softGradientsText: 'Nafis yorug‘lik va iliq karamel ranglari saytni premium darajaga olib chiqadi.',

microMotion: 'Mikro animatsiya',
hoverFloatRevealTitle: 'Hover, suzish va reveal effektlar',
hoverFloatRevealText: 'Yengil harakatlar dizaynni shovqinli emas, balki premium qiladi.',

ctaPremiumMenu: 'Ta’mlar sahifasini oching va premium menyuni ko‘ring.',
highlightTitle1: 'Nafis harakat',
highlightText1: 'Yumshoq suzuvchi elementlar, qatlamli gradientlar va kirish animatsiyasi birinchi ekranni esda qolarli qiladi.',

highlightTitle2: 'Premium hikoyalash',
highlightText2: 'Har bir bo‘lim oddiy biznes template emas, balki vizual brend sahifasi kabi qurilgan.',

highlightTitle3: 'Zamonaviy scroll oqimi',
highlightText3: 'Kartalar scroll paytida ochiladi, bo‘limlar jonli ko‘rinadi va ikonlar ko‘zni tabiiy ravishda boshqaradi.',

promise1: 'Qo‘lda ishlangandek teksturalar va premium taqdimot',
promise2: 'Silliq o‘tishlarga ega ko‘p tilli interfeys',
promise3: 'Telefon, planshet va desktop uchun moslashuvchan dizayn',
    },

    en: {
      // Navbar
      home: 'Home',
      flavors: 'Flavors',
      story: 'About Us',
      contact: 'Contact',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      logout: 'Logout',

      // Hero
      heroBadge: 'Refined dessert artistry',
      heroTitle: 'Experience a new taste with Yasmina Ice Cream',
      heroText: 'A premium ice cream experience crafted with captivating colors, rich texture and unforgettable flavor harmony.',
      explore: 'Explore products',
      welcomeBack: 'Welcome back',
      createAccount: 'Create your account',

      // Stats / cards
      signatureFlavors: 'signature flavors',
      customerRating: 'customer rating',
      premiumVibe: 'premium vibe',
      yasminaSignature: 'Yasmina Philosophy',
      caramelVanilla: 'Every flavor — a unique delight.',
      elegantBranding: 'Elegant branding',
      elegantBrandingText: 'Warm caramel tones, airy composition and refined editorial typography.',
      realAuthSystem: 'Real authentication system',
      realAuthSystemText: 'Sign up and sign in connected to Node.js backend with JWT.',
      multiLanguageUI: 'Multi-language interface',
      multiLanguageUIText: 'Instantly switch between Uzbek, English and Russian from the navbar.',

      // Flavors
      signatureMenu: 'Signature menu',
      flavorsTitle: 'Crafted at the highest level of inspiration',
      flavorsText: 'Even without tasting, their captivating aroma attracts from any distance.',
      orderVibe: 'Order now',

      // Story
      storyBadge: 'Our story',
      storyTitle: 'A unique world of elegance and emotion',
      storyText: 'Every flavor here creates a distinct feeling — through soft texture, refined colors and perfect balance. For us, ice cream is not just a dessert. It is an experience to feel, enjoy and remember.',
      brandYearText: 'Brand identity enhanced with a unique visual system.',
      designVision: 'Design philosophy',
      designVisionText: 'Delicate details and aesthetic balance define Yasmina’s identity.',
      experience: 'Experience',
      experienceText: 'Over 8 years of excellence 🔥',

      // Contact
      contactBadge: 'Contact',
      contactTitle: 'Bring Yasmina elegance to your brand or event',
      contactText: 'For collaborations, orders or franchise inquiries, contact us here.',
      name: 'Name',
      email: 'Email',
      message: 'Message + phone number',
      sendMessage: 'Send message',

      // Auth
      signInTitle: 'Sign in to your account',
      signInText: 'Return to the premium Yasmina experience.',
      signUpTitle: 'Create a new account',
      signUpText: 'Join the Yasmina world.',
      fullName: 'Full name',
      password: 'Password',
      confirmPassword: 'Confirm password',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: 'Don’t have an account?',
      createNow: 'Create now',

      // Footer
      luxuryMood: 'Luxury atmosphere, premium desserts and refined brand identity.',
      auth: 'Authentication',
      tashkentContact: 'Tashkent • yasminaicecream@gmail.com',

      // Misc
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      language: 'Language',
      loading: 'Loading...',
      readMore: 'Read more',
      discoverMore: 'Discover more',

      orbitChip1: 'Creamy',
      orbitChip2: 'Silky',
      orbitChip3: 'Premium',

      marquee1: 'Premium ice cream experience',
      marquee2: 'Brand aesthetics',
      marquee3: 'Scroll interactions',
      marquee4: 'Elegant visual language',

      creativeFlow: 'Creative flow',
      scrollMoments: 'Scroll moments',
      showcaseTitle: 'When users enter the site, they feel a brand experience rather than just a simple page.',

      brandLayer: 'Brand layer',
      softGradientsTitle: 'Soft gradients + glass cards',
      softGradientsText: 'Elegant lighting and warm caramel tones make the whole site feel polished.',

      microMotion: 'Micro motion',
      hoverFloatRevealTitle: 'Hover, float and reveal',
      hoverFloatRevealText: 'Subtle motion keeps the design premium instead of noisy.',

      ctaPremiumMenu: 'Open the flavors page and explore the premium menu.',
      highlightTitle1: 'Elegant Motion',
highlightText1: 'Soft floating elements, layered gradients and cinematic entrance animation make the first screen memorable.',

highlightTitle2: 'Premium Storytelling',
highlightText2: 'Each section is built like a visual brand page, not just a simple business template.',

highlightTitle3: 'Modern Scroll Flow',
highlightText3: 'Cards reveal on scroll, sections feel alive, and icons guide the eye naturally through the page.',

promise1: 'Handcrafted textures and premium presentation',
promise2: 'Multi-language interface with smooth transitions',
promise3: 'Responsive layout for phone, tablet and desktop',
    },

    ru: {
      // Navbar
      home: 'Главная',
      flavors: 'Вкусы',
      story: 'О нас',
      contact: 'Контакты',
      signIn: 'Войти',
      signUp: 'Регистрация',
      logout: 'Выйти',

      // Hero
      heroBadge: 'Искусство изысканных десертов',
      heroTitle: 'Откройте новый вкус с Yasmina Ice Cream',
      heroText: 'Премиальное мороженое с притягательными цветами, богатой текстурой и незабываемым вкусом.',
      explore: 'Смотреть продукты',
      welcomeBack: 'С возвращением',
      createAccount: 'Создайте аккаунт',

      // Stats
      signatureFlavors: 'фирменные вкусы',
      customerRating: 'оценка клиентов',
      premiumVibe: 'премиум атмосфера',
      yasminaSignature: 'Философия Yasmina',
      caramelVanilla: 'Каждый вкус — особое удовольствие.',
      elegantBranding: 'Элегантный брендинг',
      elegantBrandingText: 'Тёплые карамельные оттенки, лёгкая композиция и изысканная типографика.',
      realAuthSystem: 'Настоящая система авторизации',
      realAuthSystemText: 'Регистрация и вход подключены к Node.js backend с JWT.',
      multiLanguageUI: 'Мультиязычный интерфейс',
      multiLanguageUIText: 'Быстрое переключение между узбекским, английским и русским языками.',

      // Flavors
      signatureMenu: 'Фирменное меню',
      flavorsTitle: 'Создано на пике вдохновения',
      flavorsText: 'Даже не пробуя, их аромат притягивает с любого расстояния.',
      orderVibe: 'Заказать',

      // Story
      storyBadge: 'Наша история',
      storyTitle: 'Мир изысканности и эмоций',
      storyText: 'Каждый вкус создаёт особое ощущение — мягкая текстура, утончённые цвета и идеальный баланс. Для нас мороженое — это не просто десерт, а эмоция, которую хочется запомнить.',
      brandYearText: 'Айдентика бренда усилена уникальной визуальной системой.',
      designVision: 'Дизайн-философия',
      designVisionText: 'Тонкие детали и эстетический баланс формируют уникальность Yasmina.',
      experience: 'Опыт',
      experienceText: 'Более 8 лет опыта 🔥',

      // Contact
      contactBadge: 'Контакты',
      contactTitle: 'Добавьте изысканность Yasmina вашему бренду или событию',
      contactText: 'Для сотрудничества, заказов или вопросов по филиалам свяжитесь с нами.',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение + номер телефона',
      sendMessage: 'Отправить',

      // Auth
      signInTitle: 'Вход в аккаунт',
      signInText: 'Вернитесь в премиальный мир Yasmina.',
      signUpTitle: 'Создайте аккаунт',
      signUpText: 'Присоединяйтесь к миру Yasmina.',
      fullName: 'Полное имя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      alreadyHaveAccount: 'Уже есть аккаунт?',
      dontHaveAccount: 'Нет аккаунта?',
      createNow: 'Создать',

      // Footer
      luxuryMood: 'Роскошная атмосфера, премиальные десерты и утончённый бренд.',
      auth: 'Авторизация',
      tashkentContact: 'Ташкент • yasminaicecream@gmail.com',

      // Misc
      lightMode: 'Светлый режим',
      darkMode: 'Тёмный режим',
      language: 'Язык',
      loading: 'Загрузка...',
      readMore: 'Подробнее',
      discoverMore: 'Смотреть больше',
      orbitChip1: 'Кремовый',
orbitChip2: 'Шёлковый',
orbitChip3: 'Премиум',

marquee1: 'Премиальный опыт мороженого',
marquee2: 'Эстетика бренда',
marquee3: 'Scroll анимации',
marquee4: 'Элегантный визуальный стиль',

creativeFlow: 'Творческий поток',
scrollMoments: 'Scroll моменты',
showcaseTitle: 'Пользователь ощущает не просто сайт, а настоящий брендовый опыт.',

brandLayer: 'Слой бренда',
softGradientsTitle: 'Мягкие градиенты и glass-карты',
softGradientsText: 'Тёплые карамельные оттенки создают ощущение премиума.',

microMotion: 'Микро-анимации',
hoverFloatRevealTitle: 'Hover, float и reveal эффекты',
hoverFloatRevealText: 'Лёгкие движения делают дизайн более премиальным.',

ctaPremiumMenu: 'Откройте страницу вкусов и посмотрите премиум меню.',
highlightTitle1: 'Элегантное движение',
highlightText1: 'Мягкие плавающие элементы, многослойные градиенты и кинематографичная анимация делают первый экран запоминающимся.',

highlightTitle2: 'Премиальная подача',
highlightText2: 'Каждый раздел построен как визуальная страница бренда, а не как обычный бизнес-шаблон.',

highlightTitle3: 'Современный scroll-поток',
highlightText3: 'Карточки появляются при прокрутке, разделы выглядят живыми, а иконки естественно ведут взгляд по странице.',

promise1: 'Текстуры ручной работы и премиальная подача',
promise2: 'Мультиязычный интерфейс с плавными переходами',
promise3: 'Адаптивный макет для телефона, планшета и компьютера',
    }
  };

  setLanguage(language: AppLanguage): void {
    localStorage.setItem(this.storageKey, language);
    this.current.set(language);
  }

  getCurrentLanguage(): AppLanguage {
    return this.current();
  }

  t(key: string): string {
    const lang = this.current();
    return this.dictionary[lang]?.[key] ?? key;
  }
}