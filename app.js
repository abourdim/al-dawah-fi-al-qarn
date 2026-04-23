/* الدعوة الإسلامية في القرن الحالي — ISLAMIC DAWAH THIS CENTURY — app.js v2.0 */
/* Based on "Al-Dawah al-Islamiyyah fi al-Qarn al-Hali" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الدعوة الإسلامية في القرن الحالي',
    splashSub: 'وسائل الدعوة وتحدياتها في العصر الحديث',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النحل ١٦: ١٢٥',
    tabHome: 'الرئيسية', tabTraits: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'بطاقات الدعوة',
    traitsDesc: '٢٠ بطاقة عن وسائل الدعوة الحديثة — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن الدعوة الإسلامية — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في الدعوة',
    progressDesc: 'تقدمك وإنجازاتك في رحلة التعرف على وسائل الدعوة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الداعية',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة عن وسائل الدعوة الحديثة',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Islamic Dawah This Century',
    splashSub: 'Methods of dawah and its challenges in the modern age',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nahl 16:125',
    tabHome: 'Home', tabTraits: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Dawah Cards',
    traitsDesc: '20 cards on modern dawah methods — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic dawah — 4 choices per question',
    progressTitle: 'My Dawah Journey',
    progressDesc: 'Your progress and achievements in learning about dawah methods',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the Caller',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards on modern dawah methods',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "La Da'wa Islamique au Siècle Actuel",
    splashSub: "Les moyens de la da'wa et ses défis à l'ère moderne",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nahl 16:125',
    tabHome: 'Accueil', tabTraits: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: "Cartes de la Da'wa",
    traitsDesc: "20 cartes sur les méthodes modernes de da'wa — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: "Testez vos connaissances sur la da'wa islamique — 4 choix par question",
    progressTitle: "Mon Parcours de Da'wa",
    progressDesc: "Vos progrès et réalisations dans l'apprentissage des méthodes de da'wa",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Prédicateur',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 cartes sur les méthodes modernes de da'wa",
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 DAWAH CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🕊️',
    ar:{title:'الدعوة في القرن الحادي والعشرين',desc:'يرسم الغزالي في هذا الكتاب معالم الدعوة في العصر الحديث. يرى أن الدعوة اليوم تحتاج وعياً حضارياً لا مجرد حماسة عاطفية. الداعية الحكيم يخاطب العقل والقلب معاً ويعرف لغة العصر ومشكلاته.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'إن الله رفيق يحب الرفق في الأمر كله — متفق عليه',action:'تحدث مع شخص اليوم عن الإسلام بأسلوب لطيف يناسب فهمه ومستواه',young:'كن حكيماً في كلامك! تحدث بلطف وبأسلوب يفهمه الجميع 🕊️'},
    en:{title:'Wisdom in Dawah',desc:'Al-Ghazali sees in this book: Dawah with wisdom means addressing each person with the appropriate style and knowledge. The wise caller knows when to speak and when to be silent, when to be firm and when to be gentle. Wisdom is not weakness but the pinnacle of intellectual strength.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Allah is gentle and loves gentleness in all matters — Agreed upon',action:'Speak to someone today about Islam in a kind manner that suits their understanding and level',young:'Be wise in your words! Speak kindly in a way everyone can understand 🕊️'},
    fr:{title:'La Sagesse dans la Prédication',desc:"La da'wa avec sagesse signifie s'adresser à chaque personne avec le style et le savoir appropriés. Le prédicateur sage sait quand parler et quand se taire, quand être ferme et quand être doux. La sagesse n'est pas une faiblesse mais le sommet de la force intellectuelle.",verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Allah est doux et aime la douceur en toute chose — Unanimement reconnu',action:"Parlez à quelqu'un aujourd'hui de l'Islam de manière aimable adaptée à sa compréhension",young:"Sois sage dans tes paroles ! Parle gentiment d'une manière que tout le monde comprend 🕊️"}
  },
  {
    id:2, emoji:'📡',
    ar:{title:'الإعلام الحديث',desc:'يرى الغزالي في هذا الكتاب: وسائل الإعلام الحديثة من أقوى أدوات الدعوة في هذا العصر. التلفاز والإذاعة والصحافة يمكن أن تكون منابر للحق إذا أحسن المسلمون استخدامها. إهمال الإعلام يعني ترك الساحة لأعداء الأمة.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'شارك محتوى إسلامياً مفيداً اليوم عبر وسائل التواصل الاجتماعي',young:'استخدم الإنترنت لنشر الخير! شارك معلومة إسلامية مفيدة 📡'},
    en:{title:'Modern Media',desc:'Al-Ghazali sees in this book: Modern media is one of the most powerful tools for dawah in this age. Television, radio, and press can be pulpits for truth if Muslims use them well. Neglecting media means leaving the field to the enemies of the ummah.',verse:'And prepare against them whatever you are able of strength',verseRef:'Al-Anfal 60',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Share beneficial Islamic content today through social media',young:'Use the internet to spread goodness! Share useful Islamic knowledge 📡'},
    fr:{title:'Les Médias Modernes',desc:"Les médias modernes sont l'un des outils les plus puissants pour la da'wa à notre époque. La télévision, la radio et la presse peuvent être des tribunes pour la vérité si les musulmans les utilisent bien. Négliger les médias signifie laisser le terrain aux ennemis de la oumma.",verse:'Et préparez contre eux tout ce que vous pouvez de force',verseRef:'Al-Anfal 60',hadith:'Transmettez de moi ne serait-ce qu\'un verset — Bukhari',action:"Partagez aujourd'hui du contenu islamique bénéfique via les réseaux sociaux",young:"Utilise internet pour répandre le bien ! Partage une information islamique utile 📡"}
  },
  {
    id:3, emoji:'🎓',
    ar:{title:'التعليم والتربية',desc:'يرى الغزالي في هذا الكتاب: التعليم هو الأساس المتين للدعوة. بناء المدارس والجامعات الإسلامية يضمن استمرارية الرسالة. الداعية المتعلم أقدر على مواجهة التحديات الفكرية.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً عن الإسلام اليوم واشرحه لغيرك بأسلوب واضح',young:'تعلم شيئاً جديداً عن دينك كل يوم! ثم علّمه لصديق 🎓'},
    en:{title:'Education and Upbringing',desc:'Al-Ghazali sees in this book: Education is the solid foundation of dawah. Building Islamic schools and universities ensures the continuity of the message. An educated caller is better able to face intellectual challenges.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new about Islam today and explain it to others clearly',young:'Learn something new about your religion every day! Then teach it to a friend 🎓'},
    fr:{title:"L'Éducation et la Formation",desc:"L'éducation est le fondement solide de la da'wa. Construire des écoles et universités islamiques assure la continuité du message. Un prédicateur instruit est mieux capable de faire face aux défis intellectuels.",verse:'Lis au nom de ton Seigneur qui a créé',verseRef:'Al-Alaq 1',hadith:"Quiconque emprunte un chemin cherchant le savoir, Allah lui facilitera un chemin vers le Paradis — Muslim",action:"Apprenez quelque chose de nouveau sur l'Islam aujourd'hui et expliquez-le clairement à autrui",young:"Apprends quelque chose de nouveau sur ta religion chaque jour ! Puis enseigne-le à un ami 🎓"}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'الحوار والتواصل',desc:'يرى الغزالي في هذا الكتاب: الحوار مع الآخر فريضة دعوية. الإسلام دين الحجة والبرهان لا دين الإكراه. الحوار البناء يفتح القلوب المغلقة ويزيل الشبهات.',verse:'وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'النحل ١٢٥',hadith:'كلمة الحكمة ضالة المؤمن فحيث وجدها فهو أحق بها — رواه الترمذي',action:'ادخل في حوار بنّاء مع شخص غير مسلم اليوم واستمع لوجهة نظره باحترام',young:'تحدث مع أصدقائك عن الأشياء الجميلة في الإسلام بلطف واحترام 🤝'},
    en:{title:'Dialogue and Communication',desc:'Al-Ghazali sees in this book: Dialogue with others is a dawah obligation. Islam is a religion of proof and evidence, not compulsion. Constructive dialogue opens closed hearts and removes doubts.',verse:'And argue with them in a way that is best',verseRef:'An-Nahl 125',hadith:'A word of wisdom is the lost property of the believer; wherever they find it, they are most deserving of it — Tirmidhi',action:'Engage in constructive dialogue with a non-Muslim today and listen to their perspective respectfully',young:'Talk to your friends about the beautiful things in Islam with kindness and respect 🤝'},
    fr:{title:'Le Dialogue et la Communication',desc:"Le dialogue avec l'autre est une obligation de da'wa. L'Islam est une religion de preuve et de démonstration, pas de contrainte. Le dialogue constructif ouvre les coeurs fermés et dissipe les doutes.",verse:'Et discute avec eux de la meilleure façon',verseRef:'An-Nahl 125',hadith:"La parole de sagesse est l'objet perdu du croyant ; où qu'il la trouve, il en est le plus digne — Tirmidhi",action:"Engagez un dialogue constructif avec un non-musulman aujourd'hui et écoutez son point de vue avec respect",young:"Parle à tes amis des belles choses de l'Islam avec gentillesse et respect 🤝"}
  },
  {
    id:5, emoji:'💻',
    ar:{title:'التقنية في خدمة الدعوة',desc:'يرى الغزالي في هذا الكتاب: التقنية الحديثة أداة محايدة يمكن توظيفها لخدمة الدعوة. المواقع الإلكترونية والتطبيقات والبرمجيات يمكن أن تنشر الإسلام لملايين البشر في لحظات.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الدال على الخير كفاعله — رواه مسلم',action:'ساهم في مشروع تقني إسلامي أو ادعم تطبيقاً مفيداً للدعوة',young:'استخدم التكنولوجيا لتعلم الإسلام! هناك تطبيقات رائعة للقرآن 💻'},
    en:{title:'Technology Serving Dawah',desc:'Al-Ghazali sees in this book: Modern technology is a neutral tool that can be employed to serve dawah. Websites, applications, and software can spread Islam to millions of people in moments.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'The one who guides to good is like the one who does it — Muslim',action:'Contribute to an Islamic tech project or support a useful dawah application',young:'Use technology to learn about Islam! There are amazing Quran apps 💻'},
    fr:{title:'La Technologie au Service de la Prédication',desc:"La technologie moderne est un outil neutre qui peut être employé au service de la da'wa. Les sites web, applications et logiciels peuvent diffuser l'Islam à des millions de personnes en un instant.",verse:"Et Nous ne t'avons envoyé qu'en miséricorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Celui qui guide vers le bien est comme celui qui le fait — Muslim',action:"Contribuez à un projet technologique islamique ou soutenez une application utile pour la da'wa",young:"Utilise la technologie pour apprendre l'Islam ! Il y a des applications formidables pour le Coran 💻"}
  },
  {
    id:6, emoji:'👦',
    ar:{title:'الشباب وقود الدعوة',desc:'يرى الغزالي في هذا الكتاب: الشباب هم عماد الدعوة وقوتها المحركة. أصحاب النبي ﷺ كان أغلبهم شباباً. الاستثمار في الشباب استثمار في مستقبل الأمة.',verse:'إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',verseRef:'الكهف ١٣',hadith:'سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: شاب نشأ في عبادة الله — متفق عليه',action:'شجع شاباً اليوم على التعلم والعمل للإسلام وقدم له قدوة حسنة',young:'أنتَ مهم جداً! الشباب المسلم يمكنه تغيير العالم للأفضل 👦'},
    en:{title:'Youth: The Fuel of Dawah',desc:'Al-Ghazali sees in this book: Youth are the backbone and driving force of dawah. Most of the Prophet\'s companions were young. Investing in youth is investing in the future of the ummah.',verse:'Indeed, they were youths who believed in their Lord, and We increased them in guidance',verseRef:'Al-Kahf 13',hadith:'Seven will be shaded by Allah on the Day when there is no shade except His: a youth who grew up worshipping Allah — Agreed upon',action:'Encourage a young person today to learn and work for Islam and be a good example for them',young:'You are very important! Young Muslims can change the world for the better 👦'},
    fr:{title:'La Jeunesse : Moteur de la Prédication',desc:"La jeunesse est le pilier et la force motrice de la da'wa. La plupart des compagnons du Prophète étaient jeunes. Investir dans la jeunesse, c'est investir dans l'avenir de la oumma.",verse:'Ce sont des jeunes gens qui croyaient en leur Seigneur et Nous les avons guidés davantage',verseRef:'Al-Kahf 13',hadith:"Sept seront ombragés par Allah le Jour où il n'y aura d'ombre que la Sienne : un jeune qui a grandi dans l'adoration d'Allah — Unanimement reconnu",action:"Encouragez un jeune aujourd'hui à apprendre et travailler pour l'Islam et soyez un bon exemple",young:"Tu es très important ! Les jeunes musulmans peuvent changer le monde en mieux 👦"}
  },
  {
    id:7, emoji:'🌍',
    ar:{title:'عالمية الإسلام',desc:'الإسلام رسالة عالمية لكل البشر بلا استثناء. ليس ديناً عربياً بل هو رحمة للعالمين. الدعوة يجب أن تتجاوز الحدود الجغرافية والعرقية.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِلنَّاسِ بَشِيرًا وَنَذِيرًا',verseRef:'سبأ ٢٨',hadith:'الناس سواسية كأسنان المشط — رواه أحمد',action:'تعرف على ثقافة إسلامية مختلفة اليوم واكتشف جمال التنوع في الأمة',young:'الإسلام للجميع! تعرّف على مسلمين من بلدان مختلفة 🌍'},
    en:{title:'The Universality of Islam',desc:'Islam is a universal message for all humanity without exception. It is not an Arab religion but a mercy for all worlds. Dawah must transcend geographic and ethnic boundaries.',verse:'And We have not sent you except as a bringer of good tidings and a warner to all mankind',verseRef:'Saba 28',hadith:'People are equal like the teeth of a comb — Ahmad',action:'Learn about a different Islamic culture today and discover the beauty of diversity in the ummah',young:'Islam is for everyone! Get to know Muslims from different countries 🌍'},
    fr:{title:"L'Universalité de l'Islam",desc:"L\'Islam est un message universel pour toute l'humanité sans exception. Ce n'est pas une religion arabe mais une miséricorde pour tous les mondes. La da'wa doit transcender les frontières géographiques et ethniques.",verse:"Et Nous ne t'avons envoyé qu'en annonciateur et avertisseur pour toute l'humanité",verseRef:'Saba 28',hadith:'Les gens sont égaux comme les dents d\'un peigne — Ahmad',action:"Découvrez une culture islamique différente aujourd'hui et appréciez la beauté de la diversité dans la oumma",young:"L'Islam est pour tout le monde ! Découvre des musulmans de différents pays 🌍"}
  },
  {
    id:8, emoji:'🎭',
    ar:{title:'الدعوة بالثقافة',desc:'الثقافة والأدب والفن وسائل دعوية فعالة. الشعر والقصة والمسرح يمكن أن تحمل رسالة الإسلام بأسلوب يأسر القلوب والعقول.',verse:'وَمَا عَلَّمْنَاهُ الشِّعْرَ وَمَا يَنْبَغِي لَهُ إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُبِينٌ',verseRef:'يس ٦٩',hadith:'إن من البيان لسحراً — رواه البخاري',action:'اقرأ أو اكتب قصة قصيرة تحمل قيمة إسلامية جميلة وشاركها مع أصدقائك',young:'اكتب قصة جميلة عن قيمة إسلامية! القصص تؤثر في القلوب 🎭'},
    en:{title:'Dawah Through Culture',desc:'Culture, literature, and art are effective means of dawah. Poetry, stories, and theater can carry the message of Islam in a way that captivates hearts and minds.',verse:'And We did not teach him poetry, nor is it befitting for him. It is not but a reminder and a clear Quran',verseRef:'Ya-Sin 69',hadith:'Indeed, in eloquence there is magic — Bukhari',action:'Read or write a short story that carries a beautiful Islamic value and share it with friends',young:'Write a beautiful story about an Islamic value! Stories touch hearts 🎭'},
    fr:{title:'La Prédication par la Culture',desc:"La culture, la littérature et l'art sont des moyens efficaces de da'wa. La poésie, les histoires et le théâtre peuvent porter le message de l'Islam d'une manière qui captive les coeurs et les esprits.",verse:"Et Nous ne lui avons pas enseigné la poésie, et cela ne lui convient pas. Ce n'est qu'un rappel et un Coran clair",verseRef:'Ya-Sin 69',hadith:"Certes, dans l'éloquence il y a de la magie — Bukhari",action:"Lisez ou écrivez une courte histoire portant une belle valeur islamique et partagez-la avec vos amis",young:"Écris une belle histoire sur une valeur islamique ! Les histoires touchent les coeurs 🎭"}
  },
  {
    id:9, emoji:'🌟',
    ar:{title:'الدعوة بالقدوة',desc:'القدوة الحسنة أبلغ من ألف خطبة. سلوك المسلم هو أول دعوة يراها الناس. من عاش الإسلام حقاً كان داعية صامتاً بلا كلمات.',verse:'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',verseRef:'الأحزاب ٢١',hadith:'كان خلقه القرآن — رواه مسلم',action:'كن قدوة حسنة اليوم في أخلاقك وتعاملاتك — أظهر جمال الإسلام بسلوكك',young:'كن قدوة حسنة! عندما تتصرف بأخلاق، الناس يحبون الإسلام 🌟'},
    en:{title:'Dawah by Example',desc:'A good example is more eloquent than a thousand sermons. A Muslim\'s behavior is the first form of dawah people see. Whoever truly lives Islam becomes a silent caller without words.',verse:'There has certainly been for you in the Messenger of Allah an excellent pattern',verseRef:'Al-Ahzab 21',hadith:'His character was the Quran — Muslim',action:'Be a good example today in your manners and dealings — show the beauty of Islam through your behavior',young:'Be a good example! When you behave well, people love Islam 🌟'},
    fr:{title:'La Prédication par l\'Exemple',desc:"Le bon exemple est plus éloquent que mille sermons. Le comportement du musulman est la première forme de da'wa que les gens voient. Celui qui vit véritablement l'Islam devient un prédicateur silencieux.",verse:'Vous avez certes dans le Messager d\'Allah un excellent modèle',verseRef:'Al-Ahzab 21',hadith:'Son caractère était le Coran — Muslim',action:"Soyez un bon exemple aujourd'hui dans vos manières et vos relations — montrez la beauté de l'Islam par votre comportement",young:"Sois un bon exemple ! Quand tu te comportes bien, les gens aiment l'Islam 🌟"}
  },
  {
    id:10, emoji:'🕌',
    ar:{title:'دور المساجد',desc:'المسجد ليس مكاناً للصلاة فقط بل هو مركز إشعاع حضاري ودعوي. في عهد النبي ﷺ كان المسجد جامعة ومحكمة ومركزاً اجتماعياً. يجب إعادة هذا الدور.',verse:'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ',verseRef:'التوبة ١٨',hadith:'من بنى لله مسجداً بنى الله له بيتاً في الجنة — متفق عليه',action:'شارك في نشاط تعليمي أو اجتماعي في المسجد القريب منك اليوم',young:'المسجد ليس فقط للصلاة! اذهب لتتعلم وتلعب وتصنع أصدقاء 🕌'},
    en:{title:'The Role of Mosques',desc:'The mosque is not just a place of prayer but a center of civilizational and dawah outreach. In the Prophet\'s time, the mosque was a university, court, and social center. This role must be restored.',verse:'Only those who believe in Allah and the Last Day maintain the mosques of Allah',verseRef:'At-Tawbah 18',hadith:'Whoever builds a mosque for Allah, Allah builds for them a house in Paradise — Agreed upon',action:'Participate in an educational or social activity at your nearest mosque today',young:'The mosque is not just for prayer! Go to learn, play, and make friends 🕌'},
    fr:{title:'Le Rôle des Mosquées',desc:"La mosquée n'est pas seulement un lieu de prière mais un centre de rayonnement civilisationnel et de da'wa. À l'époque du Prophète, la mosquée était université, tribunal et centre social. Ce rôle doit être restauré.",verse:'Seuls peuplent les mosquées d\'Allah ceux qui croient en Allah et au Jour Dernier',verseRef:'At-Tawbah 18',hadith:'Quiconque construit une mosquée pour Allah, Allah lui construit une maison au Paradis — Unanimement reconnu',action:"Participez à une activité éducative ou sociale dans votre mosquée la plus proche aujourd'hui",young:"La mosquée n'est pas que pour la prière ! Vas-y pour apprendre, jouer et te faire des amis 🕌"}
  },
  {
    id:11, emoji:'📢',
    ar:{title:'فنون التواصل',desc:'الداعية يحتاج أن يتقن فنون التواصل والخطابة والإقناع. الكلمة الطيبة صدقة وهي مفتاح القلوب. القرآن نفسه يستخدم أساليب بلاغية متنوعة لمخاطبة العقول.',verse:'أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ',verseRef:'إبراهيم ٢٤',hadith:'الكلمة الطيبة صدقة — متفق عليه',action:'تدرب على فن الإلقاء: اشرح فكرة إسلامية لأصدقائك بأسلوب مشوق ومقنع',young:'تعلم كيف تتحدث بشكل جميل! الكلمة الطيبة تفتح القلوب 📢'},
    en:{title:'Communication Arts',desc:'A caller needs to master the arts of communication, public speaking, and persuasion. A kind word is charity and the key to hearts. The Quran itself uses varied rhetorical methods to address minds.',verse:'Have you not seen how Allah presents a parable — a good word like a good tree',verseRef:'Ibrahim 24',hadith:'A kind word is charity — Agreed upon',action:'Practice public speaking: explain an Islamic concept to friends in an engaging and persuasive way',young:'Learn how to speak beautifully! A kind word opens hearts 📢'},
    fr:{title:'Les Arts de la Communication',desc:"Un prédicateur doit maîtriser les arts de la communication, l'art oratoire et la persuasion. La bonne parole est une aumône et la clé des coeurs. Le Coran lui-même utilise des méthodes rhétoriques variées pour s'adresser aux esprits.",verse:'N\'as-tu pas vu comment Allah propose en parabole une bonne parole semblable à un bel arbre',verseRef:'Ibrahim 24',hadith:'La bonne parole est une aumône — Unanimement reconnu',action:"Pratiquez l'art oratoire : expliquez un concept islamique à vos amis de manière engageante et persuasive",young:"Apprends à bien parler ! Une bonne parole ouvre les coeurs 📢"}
  },
  {
    id:12, emoji:'💎',
    ar:{title:'الإخلاص في الدعوة',desc:'الإخلاص لله شرط قبول الدعوة. الداعية الذي يبتغي الشهرة أو المال أو السلطة قد أفسد عمله. الإخلاص يجعل الكلمة البسيطة تصل للقلوب.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات — متفق عليه',action:'جدد نيتك في كل عمل دعوي تقوم به اليوم: اجعله خالصاً لله وحده',young:'افعل كل شيء لأجل الله! لا تفعل الخير فقط ليراك الناس 💎'},
    en:{title:'Sincerity in Dawah',desc:'Sincerity to Allah is a condition for the acceptance of dawah. A caller who seeks fame, money, or power has corrupted their work. Sincerity makes a simple word reach hearts.',verse:'They were only commanded to worship Allah with sincerity in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions — Agreed upon',action:'Renew your intention in every dawah effort today: make it purely for the sake of Allah alone',young:'Do everything for the sake of Allah! Do not do good just so people see you 💎'},
    fr:{title:'La Sincérité dans la Prédication',desc:"La sincérité envers Allah est une condition d'acceptation de la da'wa. Un prédicateur qui cherche la célébrité, l'argent ou le pouvoir a corrompu son oeuvre. La sincérité fait qu'une simple parole atteint les coeurs.",verse:"Ils n'ont été commandés que d'adorer Allah en Lui vouant un culte sincère",verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions — Unanimement reconnu',action:"Renouvelez votre intention dans chaque effort de da'wa aujourd'hui : faites-le uniquement pour Allah",young:"Fais tout pour Allah ! Ne fais pas le bien juste pour que les gens te voient 💎"}
  },
  {
    id:13, emoji:'⏳',
    ar:{title:'الصبر في الدعوة',desc:'طريق الدعوة طويل وشاق ويحتاج صبراً عظيماً. الأنبياء صبروا سنوات طويلة قبل أن يؤمن بهم الناس. الداعية الذي يستعجل الثمار يفقد الطريق.',verse:'فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ',verseRef:'الأحقاف ٣٥',hadith:'ما أُعطي أحد عطاءً خيراً وأوسع من الصبر — متفق عليه',action:'تحلَّ بالصبر اليوم في جهودك الدعوية — لا تستعجل النتائج وثق بالله',young:'كن صبوراً! حتى لو لم تَرَ النتيجة فوراً، الله يرى جهدك ⏳'},
    en:{title:'Patience in Dawah',desc:'The path of dawah is long and difficult, requiring great patience. Prophets waited many years before people believed. A caller who rushes for results loses the way.',verse:'So be patient as were those of determination among the messengers',verseRef:'Al-Ahqaf 35',hadith:'No one has been given a gift better and more comprehensive than patience — Agreed upon',action:'Be patient today in your dawah efforts — do not rush for results and trust in Allah',young:'Be patient! Even if you do not see results right away, Allah sees your effort ⏳'},
    fr:{title:'La Patience dans la Prédication',desc:"Le chemin de la da'wa est long et difficile, nécessitant une grande patience. Les prophètes ont attendu de nombreuses années avant que les gens ne croient. Un prédicateur qui se précipite perd le chemin.",verse:'Sois patient comme l\'ont été les messagers doués de fermeté',verseRef:'Al-Ahqaf 35',hadith:"Personne n'a reçu un don meilleur et plus vaste que la patience — Unanimement reconnu",action:"Soyez patient aujourd'hui dans vos efforts de da'wa — ne vous précipitez pas et faites confiance à Allah",young:"Sois patient ! Même si tu ne vois pas les résultats tout de suite, Allah voit ton effort ⏳"}
  },
  {
    id:14, emoji:'🏛️',
    ar:{title:'المؤسسات الدعوية',desc:'العمل المؤسسي أقوى وأبقى من العمل الفردي. الدعوة تحتاج مؤسسات منظمة ذات رؤية واضحة وإدارة حكيمة. التنظيم المؤسسي يضمن استمرارية العمل.',verse:'إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُمْ بُنْيَانٌ مَرْصُوصٌ',verseRef:'الصف ٤',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'انضم إلى مؤسسة دعوية أو تطوعية في منطقتك اليوم وشارك بوقتك ومهاراتك',young:'اعمل مع فريق! العمل الجماعي أقوى من العمل بمفردك 🏛️'},
    en:{title:'Dawah Institutions',desc:'Institutional work is stronger and more lasting than individual effort. Dawah needs organized institutions with clear vision and wise management. Institutional organization ensures the continuity of work.',verse:'Indeed, Allah loves those who fight in His cause in a row as though they are a solid cemented structure',verseRef:'As-Saff 4',hadith:'Allah\'s hand is with the community — Tirmidhi',action:'Join a dawah or volunteer organization in your area today and contribute your time and skills',young:'Work with a team! Teamwork is stronger than working alone 🏛️'},
    fr:{title:'Les Institutions de Prédication',desc:"Le travail institutionnel est plus fort et plus durable que l'effort individuel. La da'wa a besoin d'institutions organisées avec une vision claire et une gestion sage. L'organisation institutionnelle assure la continuité du travail.",verse:'Allah aime ceux qui combattent dans Son sentier en rang comme s\'ils étaient un édifice renforcé',verseRef:'As-Saff 4',hadith:'La main d\'Allah est avec la communauté — Tirmidhi',action:"Rejoignez une organisation de da'wa ou de bénévolat dans votre région aujourd'hui et contribuez avec votre temps et vos compétences",young:"Travaille en équipe ! Le travail d'équipe est plus fort que travailler seul 🏛️"}
  },
  {
    id:15, emoji:'📱',
    ar:{title:'وسائل التواصل الاجتماعي',desc:'وسائل التواصل الاجتماعي سلاح ذو حدين. يمكن أن تكون منبراً عظيماً للدعوة أو وسيلة لنشر الفتن. المسلم الواعي يستخدمها لنشر الخير والعلم.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'من دعا إلى هدى كان له من الأجر مثل أجور من تبعه — رواه مسلم',action:'انشر اليوم منشوراً مفيداً عن الإسلام على حسابك في وسائل التواصل',young:'استخدم وسائل التواصل لنشر الخير! شارك آية أو حديثاً جميلاً 📱'},
    en:{title:'Social Media',desc:'Social media is a double-edged sword. It can be a great platform for dawah or a means of spreading discord. The aware Muslim uses it to spread goodness and knowledge.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Maidah 2',hadith:'Whoever calls to guidance will have a reward like that of those who follow it — Muslim',action:'Post something beneficial about Islam on your social media account today',young:'Use social media to spread good! Share a beautiful verse or hadith 📱'},
    fr:{title:'Les Réseaux Sociaux',desc:"Les réseaux sociaux sont une arme à double tranchant. Ils peuvent être une grande plateforme pour la da'wa ou un moyen de semer la discorde. Le musulman conscient les utilise pour répandre le bien et le savoir.",verse:'Et entraidez-vous dans la piété et la bienfaisance',verseRef:'Al-Maidah 2',hadith:'Quiconque appelle à la guidée aura une récompense semblable à celle de ceux qui le suivent — Muslim',action:"Publiez aujourd'hui quelque chose de bénéfique sur l'Islam sur vos réseaux sociaux",young:"Utilise les réseaux sociaux pour répandre le bien ! Partage un beau verset ou hadith 📱"}
  },
  {
    id:16, emoji:'🔬',
    ar:{title:'الدعوة في العصر الرقمي',desc:'العصر الرقمي يفرض على الدعوة أن تتطور وتتكيف. المحتوى الرقمي الجذاب والمتقن يمكن أن يصل لملايين الشباب الذين لا يذهبون للمساجد.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'أنشئ محتوى رقمياً إسلامياً جذاباً اليوم: فيديو قصير أو تصميم أو مقال',young:'أنشئ محتوى إسلامياً ممتعاً! فيديو قصير أو رسمة جميلة عن الإسلام 🔬'},
    en:{title:'Dawah in the Digital Age',desc:'The digital age requires dawah to evolve and adapt. Attractive and well-crafted digital content can reach millions of youth who do not go to mosques.',verse:'O mankind, We have created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Create attractive Islamic digital content today: a short video, design, or article',young:'Create fun Islamic content! A short video or beautiful drawing about Islam 🔬'},
    fr:{title:"La Prédication à l'Ère Numérique",desc:"L'ère numérique exige que la da'wa évolue et s'adapte. Un contenu numérique attrayant et bien fait peut atteindre des millions de jeunes qui ne vont pas aux mosquées.",verse:'Ô hommes, Nous vous avons créés d\'un mâle et d\'une femelle et Nous avons fait de vous des peuples et des tribus pour que vous vous entre-connaissiez',verseRef:'Al-Hujurat 13',hadith:'Transmettez de moi ne serait-ce qu\'un verset — Bukhari',action:"Créez aujourd'hui du contenu numérique islamique attrayant : une courte vidéo, un design ou un article",young:"Crée du contenu islamique amusant ! Une courte vidéo ou un beau dessin sur l'Islam 🔬"}
  },
  {
    id:17, emoji:'🎨',
    ar:{title:'الإبداع في الدعوة',desc:'الدعوة تحتاج إبداعاً وتجديداً مستمراً. الأساليب التقليدية وحدها لا تكفي لمخاطبة الأجيال الجديدة. الإبداع في طرق العرض مع ثبات المضمون.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانْظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت ٢٠',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'فكر في طريقة إبداعية جديدة لتوصيل رسالة إسلامية اليوم',young:'كن مبدعاً! فكر في طرق جديدة ومبتكرة لتعليم الإسلام 🎨'},
    en:{title:'Creativity in Dawah',desc:'Dawah needs continuous creativity and renewal. Traditional methods alone are not sufficient for addressing new generations. Creativity in presentation with steadfastness in content.',verse:'Say: Travel through the land and observe how He began creation',verseRef:'Al-Ankabut 20',hadith:'Indeed, Allah is Beautiful and loves beauty — Muslim',action:'Think of a creative new way to deliver an Islamic message today',young:'Be creative! Think of new and innovative ways to teach about Islam 🎨'},
    fr:{title:'La Créativité dans la Prédication',desc:"La da'wa a besoin de créativité et de renouvellement continus. Les méthodes traditionnelles seules ne suffisent pas pour s'adresser aux nouvelles générations. La créativité dans la présentation avec la constance du contenu.",verse:'Dis : Parcourez la terre et voyez comment Il a commencé la création',verseRef:'Al-Ankabut 20',hadith:'Allah est Beau et aime la beauté — Muslim',action:"Pensez à une manière créative et nouvelle de transmettre un message islamique aujourd'hui",young:"Sois créatif ! Pense à des moyens nouveaux et innovants d'enseigner l'Islam 🎨"}
  },
  {
    id:18, emoji:'🗣️',
    ar:{title:'تعدد اللغات',desc:'الدعوة يجب أن تتحدث بلغات العالم. ترجمة القرآن والمحتوى الإسلامي لكل اللغات ضرورة عصرية. كل لغة باب جديد لدخول الإسلام.',verse:'وَمَا أَرْسَلْنَا مِنْ رَسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ',verseRef:'إبراهيم ٤',hadith:'من تعلم لغة قوم أمن شرهم — أثر',action:'تعلم كلمات إسلامية بلغة جديدة اليوم أو ساعد في ترجمة محتوى إسلامي',young:'تعلم لغة جديدة! كل لغة تفتح باباً لنشر الخير 🗣️'},
    en:{title:'Multilingualism',desc:'Dawah must speak the languages of the world. Translating the Quran and Islamic content into all languages is a modern necessity. Every language is a new door for Islam to enter.',verse:'And We did not send any messenger except in the language of his people to make it clear to them',verseRef:'Ibrahim 4',hadith:'Whoever learns the language of a people is safe from their harm — Narration',action:'Learn Islamic words in a new language today or help translate Islamic content',young:'Learn a new language! Every language opens a door to spreading goodness 🗣️'},
    fr:{title:'Le Multilinguisme',desc:"La da'wa doit parler les langues du monde. Traduire le Coran et le contenu islamique dans toutes les langues est une nécessité moderne. Chaque langue est une nouvelle porte pour l'Islam.",verse:"Et Nous n'avons envoyé de messager qu'avec la langue de son peuple pour leur expliquer clairement",verseRef:'Ibrahim 4',hadith:'Celui qui apprend la langue d\'un peuple est à l\'abri de leur mal — Narration',action:"Apprenez des mots islamiques dans une nouvelle langue aujourd'hui ou aidez à traduire du contenu islamique",young:"Apprends une nouvelle langue ! Chaque langue ouvre une porte pour répandre le bien 🗣️"}
  },
  {
    id:19, emoji:'🤲',
    ar:{title:'التعاون الدعوي',desc:'التعاون بين الدعاة والمؤسسات الإسلامية ضرورة ملحة. التنافس السلبي والتفرق يضعف الدعوة. الوحدة في الهدف مع تنوع الأساليب.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'تعاون مع داعية أو مؤسسة إسلامية أخرى اليوم في مشروع مشترك',young:'تعاون مع أصدقائك! العمل معاً أقوى وأجمل 🤲'},
    en:{title:'Cooperative Dawah',desc:'Cooperation between callers and Islamic institutions is an urgent necessity. Negative competition and division weaken dawah. Unity of purpose with diversity of methods.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Cooperate with another caller or Islamic organization today on a joint project',young:'Cooperate with your friends! Working together is stronger and more beautiful 🤲'},
    fr:{title:'La Coopération dans la Prédication',desc:"La coopération entre les prédicateurs et les institutions islamiques est une nécessité urgente. La compétition négative et la division affaiblissent la da'wa. L'unité de but avec la diversité des méthodes.",verse:'Et tenez fermement au lien d\'Allah tous ensemble et ne vous divisez pas',verseRef:'Al Imran 103',hadith:'Le croyant pour le croyant est comme un édifice dont les parties se soutiennent — Unanimement reconnu',action:"Coopérez avec un autre prédicateur ou une autre organisation islamique aujourd'hui sur un projet commun",young:"Coopère avec tes amis ! Travailler ensemble est plus fort et plus beau 🤲"}
  },
  {
    id:20, emoji:'🌅',
    ar:{title:'مستقبل الدعوة',desc:'مستقبل الدعوة مشرق رغم التحديات. الإسلام دين الفطرة وسينتشر بإذن الله. على الدعاة الاستعداد للمستقبل بالعلم والتقنية والأخلاق.',verse:'هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ',verseRef:'التوبة ٣٣',hadith:'ليبلغن هذا الأمر ما بلغ الليل والنهار — رواه أحمد',action:'ضع خطة لمشروع دعوي مستقبلي وابدأ في تنفيذها اليوم',young:'المستقبل مشرق! كن جزءاً من نشر الخير في العالم 🌅'},
    en:{title:'The Future of Dawah',desc:'The future of dawah is bright despite challenges. Islam is the religion of natural disposition and will spread by Allah\'s permission. Callers must prepare for the future with knowledge, technology, and ethics.',verse:'It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion',verseRef:'At-Tawbah 33',hadith:'This matter will reach everywhere that night and day reach — Ahmad',action:'Create a plan for a future dawah project and start implementing it today',young:'The future is bright! Be part of spreading goodness in the world 🌅'},
    fr:{title:"L'Avenir de la Prédication",desc:"L'avenir de la da'wa est brillant malgré les défis. L'Islam est la religion de la nature innée et se répandra par la permission d'Allah. Les prédicateurs doivent se préparer à l'avenir avec le savoir, la technologie et l'éthique.",verse:'C\'est Lui qui a envoyé Son Messager avec la guidée et la religion de vérité pour la faire prévaloir sur toute religion',verseRef:'At-Tawbah 33',hadith:'Cette affaire atteindra partout où atteignent la nuit et le jour — Ahmad',action:"Créez un plan pour un futur projet de da'wa et commencez à le mettre en oeuvre aujourd'hui",young:"L'avenir est brillant ! Fais partie de ceux qui répandent le bien dans le monde 🌅"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الآية التي تأمر بالدعوة بالحكمة والموعظة الحسنة؟',opts:['البقرة ٢٥٦','النحل ١٢٥','آل عمران ١١٠','الأنعام ١٠٨'],correct:1,hint:'هذه الآية في سورة النحل وتعتبر منهج الدعوة',quran:'النحل ١٢٥'},
    en:{q:'Which verse commands dawah with wisdom and good instruction?',opts:['Al-Baqarah 256','An-Nahl 125','Al Imran 110','Al-Anam 108'],correct:1,hint:'This verse is in Surah An-Nahl and is considered the methodology of dawah',quran:'An-Nahl 125'},
    fr:{q:'Quel verset ordonne la prédication avec sagesse et bonne exhortation ?',opts:['Al-Baqarah 256','An-Nahl 125','Al Imran 110','Al-Anam 108'],correct:1,hint:'Ce verset se trouve dans la Sourate An-Nahl et est considéré comme la méthodologie de la da\'wa',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الحديث: "بلّغوا عني ولو ..."',opts:['حديثاً','كلمة','آية','حرفاً'],correct:2,hint:'هذا الحديث يحث على نشر العلم ولو بالقليل',quran:'النحل ١٢٥'},
    en:{q:'Complete the hadith: "Convey from me even if it is a single..."',opts:['Hadith','Word','Verse','Letter'],correct:2,hint:'This hadith encourages spreading knowledge even if little',quran:'An-Nahl 125'},
    fr:{q:'Complétez le hadith : « Transmettez de moi ne serait-ce qu\'un... »',opts:['Hadith','Mot','Verset','Lettre'],correct:2,hint:'Ce hadith encourage la diffusion du savoir même en petite quantité',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما أول كلمة نزلت من القرآن الكريم؟',opts:['قل','بسم','اقرأ','الحمد'],correct:2,hint:'هذه الكلمة تدل على أهمية العلم في الإسلام',quran:'العلق ١'},
    en:{q:'What was the first word revealed from the Holy Quran?',opts:['Say','In the name','Read','Praise'],correct:2,hint:'This word indicates the importance of knowledge in Islam',quran:'Al-Alaq 1'},
    fr:{q:'Quel fut le premier mot révélé du Saint Coran ?',opts:['Dis','Au nom','Lis','Louange'],correct:2,hint:'Ce mot indique l\'importance du savoir en Islam',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'ما معنى "الدال على الخير كفاعله"؟',opts:['من يدل على الخير يُعاقَب','من يدل على الخير له نفس أجر فاعله','من يدل على الخير يجب عليه فعله','من يدل على الخير يخسر أجره'],correct:1,hint:'هذا الحديث يشجع على الدلالة على الخير',quran:'الأنبياء ١٠٧'},
    en:{q:'What does "The one who guides to good is like the one who does it" mean?',opts:['Whoever guides to good is punished','Whoever guides to good gets the same reward','Whoever guides to good must do it','Whoever guides to good loses reward'],correct:1,hint:'This hadith encourages guiding others to good',quran:'Al-Anbiya 107'},
    fr:{q:'Que signifie « Celui qui guide vers le bien est comme celui qui le fait » ?',opts:['Celui qui guide vers le bien est puni','Celui qui guide vers le bien a la même récompense','Celui qui guide vers le bien doit le faire','Celui qui guide vers le bien perd sa récompense'],correct:1,hint:'Ce hadith encourage à guider les autres vers le bien',quran:'Al-Anbiya 107'}
  },
  {
    ar:{q:'في أي سورة وردت آية "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا"؟',opts:['البقرة','آل عمران','النساء','المائدة'],correct:1,hint:'هذه السورة الثالثة في القرآن',quran:'آل عمران ١٠٣'},
    en:{q:'In which surah does the verse "Hold firmly to the rope of Allah all together" appear?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Maidah'],correct:1,hint:'This is the third surah in the Quran',quran:'Al Imran 103'},
    fr:{q:'Dans quelle sourate apparaît le verset « Tenez fermement au lien d\'Allah tous ensemble » ?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Maidah'],correct:1,hint:'C\'est la troisième sourate du Coran',quran:'Al Imran 103'}
  },
  {
    ar:{q:'ما الآية التي تصف المسلمين بأنهم خير أمة أخرجت للناس؟',opts:['البقرة ١٤٣','آل عمران ١١٠','النساء ٥٩','الأنفال ٦٠'],correct:1,hint:'هذه الآية في سورة آل عمران وتتحدث عن الأمر بالمعروف والنهي عن المنكر',quran:'آل عمران ١١٠'},
    en:{q:'Which verse describes Muslims as the best nation brought forth for people?',opts:['Al-Baqarah 143','Al Imran 110','An-Nisa 59','Al-Anfal 60'],correct:1,hint:'This verse is in Surah Al Imran and speaks of enjoining good and forbidding evil',quran:'Al Imran 110'},
    fr:{q:'Quel verset décrit les musulmans comme la meilleure communauté suscitée pour les gens ?',opts:['Al-Baqarah 143','Al Imran 110','An-Nisa 59','Al-Anfal 60'],correct:1,hint:'Ce verset est dans la Sourate Al Imran et parle d\'ordonner le bien et interdire le mal',quran:'Al Imran 110'}
  },
  {
    ar:{q:'من مؤلف كتاب "الدعوة الإسلامية في القرن الحالي"؟',opts:['سيد قطب','محمد الغزالي','يوسف القرضاوي','حسن البنا'],correct:1,hint:'هذا العالم المصري لُقِّب بأديب الدعوة',quran:'النحل ١٢٥'},
    en:{q:'Who is the author of "Islamic Dawah This Century"?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Hassan al-Banna'],correct:1,hint:'This Egyptian scholar was nicknamed "The Literary Preacher"',quran:'An-Nahl 125'},
    fr:{q:'Qui est l\'auteur de « La Da\'wa Islamique au Siècle Actuel » ?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Hassan al-Banna'],correct:1,hint:'Ce savant égyptien était surnommé « Le Littéraire de la Prédication »',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الحديث: "إن الله رفيق يحب ..."',opts:['القوة','الصبر','الرفق','العدل'],correct:2,hint:'هذا الحديث يتحدث عن منهج الدعوة اللطيف',quran:'النحل ١٢٥'},
    en:{q:'Complete the hadith: "Indeed, Allah is gentle and loves..."',opts:['Strength','Patience','Gentleness','Justice'],correct:2,hint:'This hadith talks about the gentle approach in dawah',quran:'An-Nahl 125'},
    fr:{q:'Complétez le hadith : « Allah est doux et aime... »',opts:['La force','La patience','La douceur','La justice'],correct:2,hint:'Ce hadith parle de l\'approche douce dans la da\'wa',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الآية التي تقول "لَا إِكْرَاهَ فِي الدِّينِ"؟',opts:['البقرة ٢٥٦','آل عمران ١٩','الكافرون ٦','يونس ٩٩'],correct:0,hint:'هذه الآية في سورة البقرة وتؤكد حرية الاعتقاد',quran:'البقرة ٢٥٦'},
    en:{q:'Which verse says "There is no compulsion in religion"?',opts:['Al-Baqarah 256','Al Imran 19','Al-Kafirun 6','Yunus 99'],correct:0,hint:'This verse is in Surah Al-Baqarah and affirms freedom of belief',quran:'Al-Baqarah 256'},
    fr:{q:'Quel verset dit « Nulle contrainte en religion » ?',opts:['Al-Baqarah 256','Al Imran 19','Al-Kafirun 6','Yunus 99'],correct:0,hint:'Ce verset est dans la Sourate Al-Baqarah et affirme la liberté de croyance',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'ما الوسيلة الأبلغ في الدعوة حسب الشيخ الغزالي؟',opts:['الخطب الطويلة','القدوة الحسنة','المال والهدايا','الكتب فقط'],correct:1,hint:'هذه الوسيلة لا تحتاج كلاماً بل سلوكاً',quran:'الأحزاب ٢١'},
    en:{q:'What is the most effective means of dawah according to Sheikh al-Ghazali?',opts:['Long sermons','Good example','Money and gifts','Books only'],correct:1,hint:'This method does not require words but behavior',quran:'Al-Ahzab 21'},
    fr:{q:'Quel est le moyen le plus efficace de da\'wa selon Sheikh al-Ghazali ?',opts:['Les longs sermons','Le bon exemple','L\'argent et les cadeaux','Les livres uniquement'],correct:1,hint:'Cette méthode ne nécessite pas de mots mais du comportement',quran:'Al-Ahzab 21'}
  },
  {
    ar:{q:'في أي سورة نجد "إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ"؟',opts:['مريم','الكهف','يوسف','الأنبياء'],correct:1,hint:'هذه السورة تحكي قصة أصحاب الكهف الشباب',quran:'الكهف ١٣'},
    en:{q:'In which surah do we find "Indeed, they were youths who believed in their Lord"?',opts:['Maryam','Al-Kahf','Yusuf','Al-Anbiya'],correct:1,hint:'This surah tells the story of the young people of the cave',quran:'Al-Kahf 13'},
    fr:{q:'Dans quelle sourate trouvons-nous « Ce sont des jeunes gens qui croyaient en leur Seigneur » ?',opts:['Maryam','Al-Kahf','Yusuf','Al-Anbiya'],correct:1,hint:'Cette sourate raconte l\'histoire des jeunes gens de la caverne',quran:'Al-Kahf 13'}
  },
  {
    ar:{q:'ما معنى أن الكلمة الطيبة صدقة؟',opts:['الكلام الحسن لا ثواب فيه','الكلام الحسن يُعتبر عمل خير كالصدقة','الصدقة أفضل من الكلام','الكلام بديل عن المال'],correct:1,hint:'هذا الحديث يبين أن الخير ليس محصوراً بالمال',quran:'إبراهيم ٢٤'},
    en:{q:'What does "A kind word is charity" mean?',opts:['Good speech has no reward','Good speech is considered a good deed like charity','Charity is better than speech','Speech replaces money'],correct:1,hint:'This hadith shows that goodness is not limited to money',quran:'Ibrahim 24'},
    fr:{q:'Que signifie « La bonne parole est une aumône » ?',opts:['La bonne parole n\'a pas de récompense','La bonne parole est considérée comme un bienfait comme l\'aumône','L\'aumône est meilleure que la parole','La parole remplace l\'argent'],correct:1,hint:'Ce hadith montre que le bien ne se limite pas à l\'argent',quran:'Ibrahim 24'}
  },
  {
    ar:{q:'ما الأمر الذي سيبلغ ما بلغ الليل والنهار حسب الحديث؟',opts:['المال','العلم','هذا الدين','الحرب'],correct:2,hint:'هذا الحديث يبشر بانتشار الإسلام في العالم كله',quran:'التوبة ٣٣'},
    en:{q:'What will reach everywhere that night and day reach, according to the hadith?',opts:['Wealth','Knowledge','This religion','War'],correct:2,hint:'This hadith gives glad tidings of Islam spreading throughout the world',quran:'At-Tawbah 33'},
    fr:{q:'Qu\'est-ce qui atteindra partout où atteignent la nuit et le jour, selon le hadith ?',opts:['La richesse','Le savoir','Cette religion','La guerre'],correct:2,hint:'Ce hadith annonce la bonne nouvelle de la propagation de l\'Islam dans le monde entier',quran:'At-Tawbah 33'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالتعاون على البر والتقوى؟',opts:['المائدة ٢','التوبة ٧١','الأنفال ٤٦','الحشر ٩'],correct:0,hint:'هذه الآية في سورة المائدة',quran:'المائدة ٢'},
    en:{q:'Which verse commands cooperation in righteousness and piety?',opts:['Al-Maidah 2','At-Tawbah 71','Al-Anfal 46','Al-Hashr 9'],correct:0,hint:'This verse is in Surah Al-Maidah',quran:'Al-Maidah 2'},
    fr:{q:'Quel verset ordonne la coopération dans la piété et la bienfaisance ?',opts:['Al-Maidah 2','At-Tawbah 71','Al-Anfal 46','Al-Hashr 9'],correct:0,hint:'Ce verset est dans la Sourate Al-Maidah',quran:'Al-Maidah 2'}
  },
  {
    ar:{q:'لماذا يعتبر الشيخ الغزالي إهمال الإعلام خطيراً؟',opts:['لأنه مضيعة للوقت','لأنه يترك الساحة لأعداء الأمة','لأنه حرام','لأنه غير مفيد'],correct:1,hint:'الإعلام سلاح مؤثر في العصر الحديث',quran:'الأنفال ٦٠'},
    en:{q:'Why does Sheikh al-Ghazali consider neglecting media dangerous?',opts:['Because it wastes time','Because it leaves the field to the enemies of the ummah','Because it is forbidden','Because it is useless'],correct:1,hint:'Media is an influential weapon in the modern age',quran:'Al-Anfal 60'},
    fr:{q:'Pourquoi Sheikh al-Ghazali considère-t-il la négligence des médias comme dangereuse ?',opts:['Parce que c\'est une perte de temps','Parce que cela laisse le terrain aux ennemis de la oumma','Parce que c\'est interdit','Parce que c\'est inutile'],correct:1,hint:'Les médias sont une arme influente à l\'ère moderne',quran:'Al-Anfal 60'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'من دعاء القنوت'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'O Allah, guide us among those You have guided, grant us health among those You have granted health — Qunoot dua'},
    fr:{label:'Dua pour la Guidée',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'Ô Allah, guide-nous parmi ceux que Tu as guidés et accorde-nous la santé — Dua du Qunoot'} },
  { ar:{label:'دعاء نشر العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'سورة طه ١١٤'},
    en:{label:'Dua for Spreading Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour Répandre le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us and grant us mercy — Al Imran 8'},
    fr:{label:'Dua pour la Constance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne laisse pas nos coeurs dévier après nous avoir guidés et accorde-nous Ta miséricorde — Al Imran 8'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets à Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, déverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء النصر',text:'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',tr:'الكهف ١٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',tr:'Our Lord, grant us mercy from Yourself and prepare for us guidance in our affair — Al-Kahf 10'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',tr:'Notre Seigneur, accorde-nous Ta miséricorde et prépare-nous la guidée — Al-Kahf 10'} },
  { ar:{label:'دعاء الفتح',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'الأعراف ٨٩'},
    en:{label:'Dua for Opening',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Our Lord, decide between us and our people in truth, and You are the best of those who decide — Al-Araf 89'},
    fr:{label:'Dua pour l\'Ouverture',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Notre Seigneur, tranche entre nous et notre peuple en toute vérité — Al-Araf 89'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'dawah-qarn-xp';
const BADGES_KEY = 'dawah-qarn-badges';
const READ_KEY = 'dawah-qarn-read';
const STREAK_KEY = 'dawah-qarn-streak';
const MODE_KEY = 'dawah-qarn-mode';
const QUIZ_BEST_KEY = 'dawah-qarn-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الدعوة الإسلامية في القرن الحالي» يتناول وسائل الدعوة وتحدياتها في العصر الحديث. يبيّن الشيخ الغزالي كيف يجب أن تتطور أساليب الدعوة لتواكب العصر مع الحفاظ على ثوابت الإسلام. يناقش دور الإعلام والتعليم والتقنية في نشر الإسلام.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الدعوة الإسلامية في القرن الحالي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal and fighting rigidity.',
      bookTitle: 'About the Book',
      bookDesc: '"Islamic Dawah This Century" addresses the methods and challenges of dawah in the modern age. Sheikh al-Ghazali shows how dawah methods must evolve to keep pace with the times while preserving the constants of Islam. He discusses the role of media, education, and technology in spreading Islam.',
      sourcesTitle: 'Sources',
      sources: ['"Islamic Dawah This Century" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"La Da\'wa Islamique au Siecle Actuel" aborde les methodes et les defis de la da\'wa a l\'ere moderne. Le Sheikh al-Ghazali montre comment les methodes de da\'wa doivent evoluer avec le temps tout en preservant les constantes de l\'Islam. Il discute du role des medias, de l\'education et de la technologie.',
      sourcesTitle: 'Sources',
      sources: ['"La Da\'wa Islamique au Siecle Actuel" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الدعوة الإسلامية في القرن الحالي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/dawah-fi-al-qarn'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Islamic Dawah This Century" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/dawah-fi-al-qarn'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"La Da\'wa Islamique au Siecle Actuel" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/dawah-fi-al-qarn'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ أدعية الداعية','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget the caller\'s duas','⭐ Complete all 20 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas du predicateur','⭐ Completez les 20 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
