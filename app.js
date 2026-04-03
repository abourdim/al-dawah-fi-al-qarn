/* الدعوة الإسلامية في القرن الحالي — ISLAMIC DAWAH THIS CENTURY — app.js v1.0 */
/* Based on "Al-Dawah al-Islamiyyah fi al-Qarn al-Hali" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الدعوة الإسلامية في القرن الحالي',
    splashSub: 'وسائل الدعوة وتحدياتها في العصر الحديث',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النحل ١٦: ١٢٥',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الدعوة',
    cardsDesc: '١٥ بطاقة عن وسائل الدعوة الحديثة — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالماً؟',
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
      '١٥ بطاقة عن وسائل الدعوة في العصر الحديث',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Islamic Dawah This Century',
    splashSub: 'Modern methods and challenges of Islamic outreach',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nahl 16:125',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Dawah Cards',
    cardsDesc: '15 cards on modern dawah methods — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic dawah — 4 choices per question',
    progressTitle: 'My Dawah Journey',
    progressDesc: 'Your progress and achievements in the dawah journey',
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
      '15 cards on modern dawah methods and challenges',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'La Dawah Islamique au Siecle Actuel',
    splashSub: 'Methodes modernes et defis de la predication islamique',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nahl 16:125',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Dawah',
    cardsDesc: '15 cartes sur les methodes modernes de dawah — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la dawah islamique — 4 choix par question',
    progressTitle: 'Mon Parcours de Dawah',
    progressDesc: 'Vos progres et realisations dans le parcours de la dawah',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Predicateur',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes sur les methodes modernes de dawah',
      'Quiz "Qui Veut Devenir Savant ?" avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 DAWAH CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🌟',
    ar:{title:'الدعوة بالحكمة',desc:'الدعوة الناجحة تبدأ بالحكمة. ليس كل حق يُقال في كل مكان وزمان. الداعية الحكيم يختار الوقت والمكان والأسلوب المناسب. الشيخ الغزالي يؤكد أن الحكمة في الدعوة تعني فهم نفسية المخاطب ومراعاة ظروفه والتدرج معه.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'يسروا ولا تعسروا وبشروا ولا تنفروا — متفق عليه',action:'عندما تنصح أحداً اليوم، اختر الوقت المناسب والكلمة اللطيفة',young:'عندما تريد نصح صديقك، اختر الوقت المناسب وتكلم بلطف! 🌟'},
    en:{title:'Dawah with Wisdom',desc:'Successful dawah starts with wisdom. Not every truth should be said at every time and place. A wise caller chooses the right time, place, and approach. Sheikh al-Ghazali emphasizes that wisdom in dawah means understanding the audience and being gradual.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Make things easy and do not make them hard, give glad tidings and do not drive people away — Agreed upon',action:'When advising someone today, choose the right time and gentle words',young:'When you want to advise a friend, pick the right time and speak kindly! 🌟'},
    fr:{title:'Dawah avec Sagesse',desc:'La dawah reussie commence par la sagesse. Toute verite ne se dit pas en tout temps et lieu. Le predicateur sage choisit le bon moment, lieu et approche. Sheikh al-Ghazali souligne que la sagesse signifie comprendre l\'auditoire et etre progressif.',verse:'Invite au sentier de ton Seigneur avec sagesse et bonne exhortation',verseRef:'An-Nahl 125',hadith:'Facilitez et ne rendez pas les choses difficiles, annoncez la bonne nouvelle et ne repoussez pas les gens — Unanimement reconnu',action:'Quand vous conseillez quelqu\'un aujourd\'hui, choisissez le bon moment et des mots doux',young:'Quand tu veux conseiller un ami, choisis le bon moment et parle gentiment ! 🌟'}
  },
  {
    id:2, emoji:'📱',
    ar:{title:'استخدام الإعلام الحديث',desc:'وسائل الإعلام الحديثة أدوات قوية للدعوة. التلفزيون والإنترنت ووسائل التواصل تصل إلى ملايين الناس. الشيخ الغزالي يدعو إلى إتقان هذه الوسائل وعدم تركها لمن يسيء استخدامها. الداعية اليوم يحتاج أن يتعلم لغة العصر.',verse:'وَمَا أَرْسَلْنَا مِنْ رَسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ',verseRef:'إبراهيم ٤',hadith:'بلغوا عني ولو آية — رواه البخاري',action:'شارك رسالة إيجابية عن الإسلام على وسائل التواصل الاجتماعي اليوم',young:'استخدم الإنترنت لنشر الخير! شارك قصة جميلة عن الإسلام مع أصدقائك 📱'},
    en:{title:'Using Modern Media',desc:'Modern media are powerful tools for dawah. Television, internet, and social media reach millions. Sheikh al-Ghazali calls for mastering these tools and not leaving them to those who misuse them. Today\'s caller needs to learn the language of the era.',verse:'And We did not send any messenger except in the language of his people to make things clear for them',verseRef:'Ibrahim 4',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Share a positive message about Islam on social media today',young:'Use the internet to spread goodness! Share a beautiful story about Islam with your friends 📱'},
    fr:{title:'Utiliser les Medias Modernes',desc:'Les medias modernes sont des outils puissants pour la dawah. La television, l\'Internet et les reseaux sociaux atteignent des millions de personnes. Sheikh al-Ghazali appelle a maitriser ces outils et a ne pas les laisser a ceux qui en abusent.',verse:'Et Nous n\'avons envoye de messager qu\'avec la langue de son peuple pour leur expliquer',verseRef:'Ibrahim 4',hadith:'Transmettez de moi, ne serait-ce qu\'un verset — Bukhari',action:'Partagez un message positif sur l\'Islam sur les reseaux sociaux aujourd\'hui',young:'Utilise Internet pour repandre le bien ! Partage une belle histoire sur l\'Islam avec tes amis 📱'}
  },
  {
    id:3, emoji:'🎓',
    ar:{title:'إصلاح التعليم',desc:'التعليم هو عمود الدعوة. المدارس والجامعات تشكّل عقول الأجيال. الشيخ الغزالي يطالب بإصلاح المناهج لتجمع بين العلم الشرعي والعلم الحديث. المسلم المتعلم يدعو بعلمه وسلوكه لا بجهله وتخلفه.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم يجمع بين علوم الدين والدنيا',young:'تعلم شيئاً جديداً كل يوم! العلم يجعلك قوياً ومفيداً للناس 🎓'},
    en:{title:'Education Reform',desc:'Education is the pillar of dawah. Schools and universities shape the minds of generations. Sheikh al-Ghazali demands reforming curricula to combine religious and modern knowledge. An educated Muslim calls through knowledge and behavior, not ignorance.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today that combines religious and worldly knowledge',young:'Learn something new every day! Knowledge makes you strong and helpful to people 🎓'},
    fr:{title:'Reforme de l\'Education',desc:'L\'education est le pilier de la dawah. Les ecoles et universites faconnent les esprits des generations. Sheikh al-Ghazali demande de reformer les programmes pour combiner les connaissances religieuses et modernes.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'Quiconque suit un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Apprenez quelque chose de nouveau aujourd\'hui qui combine savoir religieux et moderne',young:'Apprends quelque chose de nouveau chaque jour ! Le savoir te rend fort et utile aux gens 🎓'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'الحوار بين الأديان',desc:'الحوار مع أتباع الديانات الأخرى ضرورة في العصر الحديث. الشيخ الغزالي يرى أن الحوار يزيل سوء الفهم ويبني جسور الثقة. الداعية الناجح يستمع قبل أن يتكلم ويحترم الآخر قبل أن يطالبه بالاحترام.',verse:'قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَى كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ',verseRef:'آل عمران ٦٤',hadith:'ادعُ إلى سبيل ربك بالحكمة والموعظة الحسنة — متفق عليه',action:'تحاور اليوم مع شخص مختلف عنك بأدب واحترام — استمع أولاً ثم تكلم',young:'تحدث مع الجميع باحترام! استمع لهم أولاً ثم شارك أفكارك بلطف 🤝'},
    en:{title:'Interfaith Dialogue',desc:'Dialogue with followers of other religions is a necessity in the modern era. Sheikh al-Ghazali sees that dialogue removes misunderstandings and builds bridges of trust. A successful caller listens before speaking and respects others before demanding respect.',verse:'Say: O People of the Book, come to a word that is equitable between us and you',verseRef:'Al Imran 64',hadith:'Invite to the way of your Lord with wisdom and good instruction — Agreed upon',action:'Have a respectful conversation with someone different from you today — listen first, then speak',young:'Talk to everyone with respect! Listen to them first, then share your ideas kindly 🤝'},
    fr:{title:'Dialogue Interreligieux',desc:'Le dialogue avec les adeptes d\'autres religions est une necessite a l\'ere moderne. Sheikh al-Ghazali voit que le dialogue elimine les malentendus et construit des ponts de confiance.',verse:'Dis : O Gens du Livre, venez a une parole commune entre nous et vous',verseRef:'Al Imran 64',hadith:'Invite au sentier de ton Seigneur avec sagesse et bonne exhortation — Unanimement reconnu',action:'Ayez une conversation respectueuse avec quelqu\'un de different aujourd\'hui — ecoutez d\'abord',young:'Parle a tout le monde avec respect ! Ecoute-les d\'abord, puis partage tes idees gentiment 🤝'}
  },
  {
    id:5, emoji:'💻',
    ar:{title:'التكنولوجيا في خدمة الدعوة',desc:'التكنولوجيا سلاح ذو حدين: إما أن نستخدمها للخير أو نتركها للشر. التطبيقات والمواقع والبودكاست وسائل عصرية للدعوة. الشيخ الغزالي يؤكد أن المسلمين يجب أن يكونوا في مقدمة من يستخدم التكنولوجيا لنشر الخير.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه — رواه الطبراني',action:'استخدم تطبيقاً أو موقعاً لتعلم شيء عن الإسلام وشاركه مع صديق',young:'استخدم التكنولوجيا لتعلم الخير! هناك تطبيقات رائعة لتعلم القرآن والأذكار 💻'},
    en:{title:'Technology for Dawah',desc:'Technology is a double-edged sword: either we use it for good or leave it for evil. Apps, websites, and podcasts are modern dawah tools. Sheikh al-Ghazali emphasizes that Muslims must be at the forefront of using technology to spread goodness.',verse:'And prepare against them whatever you are able of power',verseRef:'Al-Anfal 60',hadith:'Allah loves that when one of you does a task, they perfect it — Tabarani',action:'Use an app or website to learn something about Islam and share it with a friend',young:'Use technology to learn good things! There are amazing apps to learn the Quran and daily prayers 💻'},
    fr:{title:'Technologie pour la Dawah',desc:'La technologie est une arme a double tranchant : soit nous l\'utilisons pour le bien, soit nous la laissons au mal. Les applications, sites web et podcasts sont des outils modernes de dawah.',verse:'Et preparez contre eux tout ce que vous pouvez de force',verseRef:'Al-Anfal 60',hadith:'Allah aime que lorsque l\'un de vous fait un travail, il le fasse parfaitement — Tabarani',action:'Utilisez une application pour apprendre quelque chose sur l\'Islam et partagez-le avec un ami',young:'Utilise la technologie pour apprendre le bien ! Il y a des applications geniales pour le Coran et les invocations 💻'}
  },
  {
    id:6, emoji:'🧑‍🤝‍🧑',
    ar:{title:'الوصول إلى الشباب',desc:'الشباب هم عماد الأمة ومستقبلها. الداعية الناجح يتحدث بلغة الشباب ويفهم تحدياتهم ويقدم الإسلام بطريقة تناسب عصرهم. الشيخ الغزالي يحذر من إهمال الشباب لأن من يفقدهم يفقد المستقبل.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُمْ بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',verseRef:'الكهف ١٣',hadith:'ما من شاب يدع لذة من لذات الدنيا لله إلا أبدله الله خيراً منها — أثر',action:'تواصل مع شاب اليوم وشاركه فكرة إسلامية بأسلوب عصري ومحبب',young:'أنت مهم جداً! الشباب هم أبطال المستقبل — تعلم وكن قدوة لأصدقائك 🧑‍🤝‍🧑'},
    en:{title:'Reaching Youth',desc:'Youth are the backbone and future of the Ummah. A successful caller speaks the language of youth, understands their challenges, and presents Islam in a way that suits their era. Sheikh al-Ghazali warns against neglecting youth because losing them means losing the future.',verse:'We relate to you their story in truth. Indeed, they were youths who believed in their Lord, and We increased them in guidance',verseRef:'Al-Kahf 13',hadith:'Any young person who gives up a worldly pleasure for the sake of Allah, Allah replaces it with something better — narration',action:'Connect with a young person today and share an Islamic idea in a modern and appealing way',young:'You are very important! Youth are the heroes of the future — learn and be a role model for your friends 🧑‍🤝‍🧑'},
    fr:{title:'Atteindre les Jeunes',desc:'Les jeunes sont l\'epine dorsale et l\'avenir de la Oumma. Un predicateur reussi parle la langue des jeunes et comprend leurs defis. Sheikh al-Ghazali avertit contre la negligence des jeunes car les perdre signifie perdre l\'avenir.',verse:'Nous te racontons leur histoire en verite. Ce sont des jeunes qui croyaient en leur Seigneur, et Nous les avons guides davantage',verseRef:'Al-Kahf 13',hadith:'Tout jeune qui renonce a un plaisir mondain pour Allah, Allah le remplace par quelque chose de meilleur — narration',action:'Connectez-vous avec un jeune aujourd\'hui et partagez une idee islamique de maniere moderne',young:'Tu es tres important ! Les jeunes sont les heros du futur — apprends et sois un modele pour tes amis 🧑‍🤝‍🧑'}
  },
  {
    id:7, emoji:'🌍',
    ar:{title:'الإسلام العالمي',desc:'الإسلام دين عالمي لكل البشر في كل زمان ومكان. الدعوة يجب أن تتخطى الحدود الجغرافية واللغوية. الشيخ الغزالي يدعو إلى ترجمة معاني القرآن والكتب الإسلامية إلى كل اللغات وتقديم الإسلام كرسالة إنسانية عالمية.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِلنَّاسِ بَشِيرًا وَنَذِيرًا',verseRef:'سبأ ٢٨',hadith:'إن هذا الدين يسر ولن يشاد الدين أحد إلا غلبه — رواه البخاري',action:'تعلم كيف تشرح مبدأ إسلامياً بلغة أخرى وشاركه مع شخص غير عربي',young:'الإسلام لكل الناس في العالم! تعلم كيف تشرح الإسلام لأصدقائك بكل اللغات 🌍'},
    en:{title:'Global Islam',desc:'Islam is a universal religion for all humanity in every time and place. Dawah must transcend geographic and linguistic borders. Sheikh al-Ghazali calls for translating the meanings of the Quran and Islamic books into all languages and presenting Islam as a universal human message.',verse:'And We have not sent you except comprehensively to all mankind as a bringer of good tidings and a warner',verseRef:'Saba 28',hadith:'This religion is easy, and no one makes religion hard except that it overcomes them — Bukhari',action:'Learn to explain an Islamic principle in another language and share it with a non-Arab friend',young:'Islam is for everyone in the world! Learn how to explain Islam to your friends in all languages 🌍'},
    fr:{title:'Islam Mondial',desc:'L\'Islam est une religion universelle pour toute l\'humanite en tout temps et lieu. La dawah doit transcender les frontieres geographiques et linguistiques. Sheikh al-Ghazali appelle a traduire les significations du Coran dans toutes les langues.',verse:'Et Nous ne t\'avons envoye qu\'en tant qu\'annonciateur et avertisseur pour l\'ensemble des gens',verseRef:'Saba 28',hadith:'Cette religion est facile, et personne ne la rend difficile sans qu\'elle le domine — Bukhari',action:'Apprenez a expliquer un principe islamique dans une autre langue et partagez-le',young:'L\'Islam est pour tout le monde ! Apprends a expliquer l\'Islam a tes amis dans toutes les langues 🌍'}
  },
  {
    id:8, emoji:'🎨',
    ar:{title:'إحياء الثقافة الإسلامية',desc:'الثقافة الإسلامية غنية بالفنون والعلوم والآداب. الشيخ الغزالي يدعو إلى إحياء هذا التراث وتقديمه بشكل عصري. الخط العربي والعمارة الإسلامية والموسيقى والشعر كلها أدوات للدعوة من خلال الجمال.',verse:'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ',verseRef:'حديث رواه مسلم',hadith:'إن الله كتب الإحسان على كل شيء — رواه مسلم',action:'اكتشف فناً إسلامياً اليوم: خط عربي أو عمارة أو شعر — وشاركه مع غيرك',young:'الفن الإسلامي جميل جداً! اكتشف الخط العربي والزخرفة الإسلامية الرائعة 🎨'},
    en:{title:'Islamic Culture Revival',desc:'Islamic culture is rich with arts, sciences, and literature. Sheikh al-Ghazali calls for reviving this heritage and presenting it in a modern way. Arabic calligraphy, Islamic architecture, music, and poetry are all tools for dawah through beauty.',verse:'Indeed, Allah is Beautiful and loves beauty',verseRef:'Hadith narrated by Muslim',hadith:'Allah has prescribed excellence in all things — Muslim',action:'Discover an Islamic art form today: calligraphy, architecture, or poetry — and share it',young:'Islamic art is so beautiful! Discover Arabic calligraphy and amazing Islamic patterns 🎨'},
    fr:{title:'Renouveau de la Culture Islamique',desc:'La culture islamique est riche en arts, sciences et litterature. Sheikh al-Ghazali appelle a raviver ce patrimoine et a le presenter de maniere moderne. La calligraphie arabe, l\'architecture islamique, la musique et la poesie sont des outils de dawah par la beaute.',verse:'Certes, Allah est Beau et aime la beaute',verseRef:'Hadith rapporte par Muslim',hadith:'Allah a prescrit l\'excellence en toute chose — Muslim',action:'Decouvrez une forme d\'art islamique aujourd\'hui : calligraphie, architecture ou poesie',young:'L\'art islamique est si beau ! Decouvre la calligraphie arabe et les magnifiques motifs islamiques 🎨'}
  },
  {
    id:9, emoji:'🪞',
    ar:{title:'الدعوة بالقدوة',desc:'أفضل دعوة هي أن تكون قدوة حسنة. الناس يتأثرون بما يرون أكثر مما يسمعون. الشيخ الغزالي يؤكد أن سلوك المسلم هو أقوى دعوة. من أراد أن يدعو غيره فليبدأ بنفسه أولاً.',verse:'أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنْسَوْنَ أَنْفُسَكُمْ',verseRef:'البقرة ٤٤',hadith:'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه — متفق عليه',action:'كن قدوة اليوم: طبّق ما تقوله — فأفعالك أبلغ من كلماتك',young:'كن قدوة! أفعالك الطيبة تُلهم الآخرين أكثر من ألف كلمة 🪞'},
    en:{title:'Dawah by Example',desc:'The best dawah is being a good role model. People are influenced by what they see more than what they hear. Sheikh al-Ghazali emphasizes that a Muslim\'s behavior is the strongest dawah. Whoever wants to call others should start with themselves first.',verse:'Do you order people to righteousness and forget yourselves?',verseRef:'Al-Baqarah 44',hadith:'None of you truly believes until they love for their brother what they love for themselves — Agreed upon',action:'Be a role model today: practice what you preach — your actions speak louder than words',young:'Be a role model! Your good actions inspire others more than a thousand words 🪞'},
    fr:{title:'Dawah par l\'Exemple',desc:'La meilleure dawah est d\'etre un bon modele. Les gens sont influences par ce qu\'ils voient plus que par ce qu\'ils entendent. Sheikh al-Ghazali souligne que le comportement du musulman est la plus forte dawah.',verse:'Ordonnez-vous la bonte aux gens et vous oubliez vous-memes ?',verseRef:'Al-Baqarah 44',hadith:'Aucun de vous ne croit veritablement tant qu\'il n\'aime pas pour son frere ce qu\'il aime pour lui-meme — Unanimement reconnu',action:'Soyez un modele aujourd\'hui : pratiquez ce que vous prechez — vos actions parlent plus fort',young:'Sois un modele ! Tes bonnes actions inspirent les autres plus que mille mots 🪞'}
  },
  {
    id:10, emoji:'🕌',
    ar:{title:'تطوير المسجد',desc:'المسجد ليس مكاناً للصلاة فقط بل مركز حضاري متكامل. الشيخ الغزالي يدعو إلى تحديث دور المسجد ليشمل التعليم والثقافة والرياضة والخدمات الاجتماعية. المسجد في عهد النبي ﷺ كان مدرسة ومحكمة ومركزاً اجتماعياً.',verse:'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ',verseRef:'التوبة ١٨',hadith:'من بنى لله مسجداً بنى الله له بيتاً في الجنة — متفق عليه',action:'شارك في نشاط مسجدك اليوم: درس أو حلقة أو عمل تطوعي',young:'المسجد مكان رائع للتعلم والصلاة والصداقة — زُره اليوم وشارك في نشاط! 🕌'},
    en:{title:'Mosque Modernization',desc:'A mosque is not just a place for prayer but a complete civilizational center. Sheikh al-Ghazali calls for modernizing the role of mosques to include education, culture, sports, and social services. The mosque in the Prophet\'s time was a school, court, and social center.',verse:'The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day',verseRef:'At-Tawbah 18',hadith:'Whoever builds a mosque for Allah, Allah builds a house for them in Paradise — Agreed upon',action:'Participate in a mosque activity today: a class, circle, or volunteer work',young:'The mosque is an amazing place for learning, prayer, and friendship — visit it today! 🕌'},
    fr:{title:'Modernisation des Mosquees',desc:'La mosquee n\'est pas seulement un lieu de priere mais un centre civilisationnel complet. Sheikh al-Ghazali appelle a moderniser le role des mosquees pour inclure l\'education, la culture, le sport et les services sociaux.',verse:'Les mosquees d\'Allah ne sont entretenues que par ceux qui croient en Allah et au Jour Dernier',verseRef:'At-Tawbah 18',hadith:'Quiconque construit une mosquee pour Allah, Allah lui construit une maison au Paradis — Unanimement reconnu',action:'Participez a une activite de la mosquee aujourd\'hui : un cours, un cercle ou du benevolat',young:'La mosquee est un endroit genial pour apprendre, prier et se faire des amis — visite-la aujourd\'hui ! 🕌'}
  },
  {
    id:11, emoji:'🗣️',
    ar:{title:'فن التواصل',desc:'الداعية الناجح يتقن فن التواصل. يستمع أكثر مما يتكلم، ويستخدم لغة بسيطة وواضحة، ويراعي مشاعر المخاطب. الشيخ الغزالي يرى أن كثيراً من الدعاة يفشلون لأنهم يتكلمون عن أنفسهم لا عن هموم الناس.',verse:'فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنْتَ لَهُمْ وَلَوْ كُنْتَ فَظًّا غَلِيظَ الْقَلْبِ لَانْفَضُّوا مِنْ حَوْلِكَ',verseRef:'آل عمران ١٥٩',hadith:'من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت — متفق عليه',action:'استمع لشخص اليوم بإنصات كامل قبل أن ترد — التواصل يبدأ بالاستماع',young:'استمع جيداً قبل أن تتكلم! التواصل الجيد يبدأ بالإنصات 🗣️'},
    en:{title:'Art of Communication',desc:'A successful caller masters the art of communication. They listen more than they speak, use simple and clear language, and consider the feelings of their audience. Sheikh al-Ghazali sees that many callers fail because they talk about themselves, not people\'s concerns.',verse:'So by mercy from Allah you were lenient with them. And if you had been harsh and hard-hearted, they would have dispersed from around you',verseRef:'Al Imran 159',hadith:'Whoever believes in Allah and the Last Day, let them speak good or be silent — Agreed upon',action:'Listen to someone today with full attention before responding — communication starts with listening',young:'Listen well before you speak! Good communication starts with listening 🗣️'},
    fr:{title:'Art de la Communication',desc:'Un predicateur reussi maitrise l\'art de la communication. Il ecoute plus qu\'il ne parle, utilise un langage simple et clair, et considere les sentiments de son auditoire.',verse:'C\'est par une misericorde d\'Allah que tu as ete doux envers eux. Si tu avais ete dur et au coeur rude, ils se seraient disperses autour de toi',verseRef:'Al Imran 159',hadith:'Quiconque croit en Allah et au Jour Dernier, qu\'il dise du bien ou se taise — Unanimement reconnu',action:'Ecoutez quelqu\'un aujourd\'hui avec toute votre attention avant de repondre',young:'Ecoute bien avant de parler ! La bonne communication commence par l\'ecoute 🗣️'}
  },
  {
    id:12, emoji:'💎',
    ar:{title:'الإخلاص في الدعوة',desc:'الإخلاص لله هو شرط قبول الدعوة. الداعية المخلص لا يبحث عن الشهرة ولا المال ولا الجاه. الشيخ الغزالي يحذر من الرياء في الدعوة لأنه يفسد العمل كله. النية الصافية تصنع المعجزات.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى — متفق عليه',action:'راجع نيتك اليوم في كل عمل خير تقوم به — هل هو لله وحده؟',young:'افعل الخير لأن الله يحبه! النية الطيبة تجعل كل عمل جميلاً 💎'},
    en:{title:'Sincerity in Dawah',desc:'Sincerity to Allah is a condition for accepting dawah. A sincere caller does not seek fame, money, or status. Sheikh al-Ghazali warns against showing off in dawah because it corrupts all work. Pure intention creates miracles.',verse:'And they were not commanded except to worship Allah, being sincere to Him in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions, and each person will have but what they intended — Agreed upon',action:'Check your intention today in every good deed you do — is it for Allah alone?',young:'Do good because Allah loves it! A good intention makes every deed beautiful 💎'},
    fr:{title:'Sincerite dans la Dawah',desc:'La sincerite envers Allah est une condition d\'acceptation de la dawah. Un predicateur sincere ne cherche ni gloire, ni argent, ni statut. Sheikh al-Ghazali met en garde contre l\'ostentation dans la dawah car elle corrompt tout le travail.',verse:'Et ils ne recurent d\'ordre que d\'adorer Allah, Lui vouant un culte sincere',verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions, et chacun n\'a que ce qu\'il a eu l\'intention de faire — Unanimement reconnu',action:'Verifiez votre intention aujourd\'hui dans chaque bonne action — est-ce pour Allah seul ?',young:'Fais le bien parce qu\'Allah l\'aime ! Une bonne intention rend chaque action belle 💎'}
  },
  {
    id:13, emoji:'🌱',
    ar:{title:'الصبر في الدعوة',desc:'الدعوة طريق طويل يحتاج إلى صبر ومثابرة. كل الأنبياء صبروا على أقوامهم سنوات طويلة. الشيخ الغزالي يذكّر بأن النبي نوح دعا قومه ٩٥٠ سنة ولم ييأس. الصبر في الدعوة ليس ضعفاً بل هو قوة المؤمن.',verse:'فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ',verseRef:'الأحقاف ٣٥',hadith:'ما أُعطي أحد عطاءً خيراً وأوسع من الصبر — متفق عليه',action:'اصبر اليوم على شيء صعب ولا تستعجل النتائج — الصبر مفتاح النجاح',young:'الصبر قوة خارقة! لا تستعجل — الأشياء الجميلة تحتاج وقتاً 🌱'},
    en:{title:'Patience in Dawah',desc:'Dawah is a long road that needs patience and perseverance. All prophets were patient with their people for many years. Sheikh al-Ghazali reminds that Prophet Noah called his people for 950 years and never despaired. Patience in dawah is not weakness but the strength of the believer.',verse:'So be patient as those of determination among the messengers were patient',verseRef:'Al-Ahqaf 35',hadith:'No one has been given a gift better and more comprehensive than patience — Agreed upon',action:'Be patient with something difficult today and do not rush for results — patience is the key to success',young:'Patience is a superpower! Do not rush — beautiful things take time 🌱'},
    fr:{title:'Patience dans la Dawah',desc:'La dawah est un long chemin qui necessite patience et perseverance. Tous les prophetes ont ete patients avec leurs peuples pendant de longues annees. Sheikh al-Ghazali rappelle que le Prophete Noe a appele son peuple pendant 950 ans sans desesperer.',verse:'Sois patient comme l\'ont ete les messagers doues de determination',verseRef:'Al-Ahqaf 35',hadith:'Personne n\'a recu de don meilleur et plus vaste que la patience — Unanimement reconnu',action:'Soyez patient avec quelque chose de difficile aujourd\'hui et ne vous precipitez pas — la patience est la cle du succes',young:'La patience est un super-pouvoir ! Ne te precipite pas — les belles choses prennent du temps 🌱'}
  },
  {
    id:14, emoji:'🏛️',
    ar:{title:'بناء المؤسسات',desc:'الدعوة الفردية مهمة لكن لا تكفي. نحتاج إلى مؤسسات قوية: مدارس ومستشفيات ومراكز ثقافية وجمعيات خيرية. الشيخ الغزالي يرى أن المسلمين بحاجة إلى العمل المؤسسي المنظم لا العمل الفردي العشوائي.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'شارك في عمل مؤسسي اليوم: جمعية خيرية أو مركز تعليمي أو مشروع تطوعي',young:'العمل الجماعي أقوى! شارك أصدقاءك في مشروع خيري ممتع 🏛️'},
    en:{title:'Building Institutions',desc:'Individual dawah is important but not enough. We need strong institutions: schools, hospitals, cultural centers, and charities. Sheikh al-Ghazali sees that Muslims need organized institutional work, not random individual efforts.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Maidah 2',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Participate in institutional work today: a charity, educational center, or volunteer project',young:'Teamwork is stronger! Join your friends in a fun charity project 🏛️'},
    fr:{title:'Construction d\'Institutions',desc:'La dawah individuelle est importante mais ne suffit pas. Nous avons besoin d\'institutions fortes : ecoles, hopitaux, centres culturels et associations caritatives. Sheikh al-Ghazali voit que les musulmans ont besoin de travail institutionnel organise.',verse:'Et cooperez dans la bonte et la piete',verseRef:'Al-Maidah 2',hadith:'La main d\'Allah est avec la communaute — Tirmidhi',action:'Participez a un travail institutionnel aujourd\'hui : une association caritative ou un projet benevole',young:'Le travail d\'equipe est plus fort ! Rejoins tes amis dans un projet caritatif amusant 🏛️'}
  },
  {
    id:15, emoji:'🔮',
    ar:{title:'مستقبل الدعوة',desc:'مستقبل الدعوة مشرق رغم التحديات. الشيخ الغزالي متفائل بأن الإسلام سينتشر بقوة الحق لا بقوة السلاح. التاريخ يثبت أن الإسلام ينمو في كل عصر. على الدعاة أن يستعدوا للمستقبل بالعلم والأخلاق والتكنولوجيا.',verse:'هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ',verseRef:'التوبة ٣٣',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'خطط لمشروع دعوي مستقبلي يستفيد من التكنولوجيا والعلم الحديث',young:'المستقبل مشرق! تعلم واستعد لتكون داعية المستقبل 🔮'},
    en:{title:'Future of Dawah',desc:'The future of dawah is bright despite challenges. Sheikh al-Ghazali is optimistic that Islam will spread through the power of truth, not the power of weapons. History proves that Islam grows in every era. Callers must prepare for the future with knowledge, morals, and technology.',verse:'It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion',verseRef:'At-Tawbah 33',hadith:'There will always remain a group from my Ummah victorious upon the truth — Muslim',action:'Plan a future dawah project that uses technology and modern knowledge',young:'The future is bright! Learn and prepare to be a caller of the future 🔮'},
    fr:{title:'Avenir de la Dawah',desc:'L\'avenir de la dawah est radieux malgre les defis. Sheikh al-Ghazali est optimiste que l\'Islam se repandra par la force de la verite, pas par la force des armes. L\'histoire prouve que l\'Islam grandit a chaque epoque.',verse:'C\'est Lui qui a envoye Son messager avec la guidance et la religion de verite pour la faire prevaloir sur toute religion',verseRef:'At-Tawbah 33',hadith:'Il restera toujours un groupe de ma Oumma victorieux sur la verite — Muslim',action:'Planifiez un futur projet de dawah qui utilise la technologie et les connaissances modernes',young:'L\'avenir est radieux ! Apprends et prepare-toi a etre un predicateur du futur 🔮'}
  }
];

// ═══════════════ QUIZ DATA (10 questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "ادْعُ إِلَى سَبِيلِ رَبِّكَ بِ..."',opts:['القوة والشدة','الحكمة والموعظة الحسنة','المال والهدايا','السيف والقتال'],correct:1,hint:'هذه الآية في سورة النحل',quran:'النحل ١٢٥'},
    en:{q:'Complete the verse: "Invite to the way of your Lord with..."',opts:['Force and severity','Wisdom and good instruction','Money and gifts','Sword and fighting'],correct:1,hint:'This verse is in Surah An-Nahl',quran:'An-Nahl 125'},
    fr:{q:'Completez le verset : "Invite au sentier de ton Seigneur avec..."',opts:['Force et severite','Sagesse et bonne exhortation','Argent et cadeaux','Epee et combat'],correct:1,hint:'Ce verset est dans la Sourate An-Nahl',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الحديث الذي يأمر بتبليغ الدعوة حتى لو بالقليل؟',opts:['بلغوا عني ولو آية','الدين النصيحة','يسروا ولا تعسروا','الراحمون يرحمهم الرحمن'],correct:0,hint:'هذا الحديث يشجع كل مسلم على نقل ولو شيء قليل',quran:'البقرة ٤٤'},
    en:{q:'Which hadith commands conveying the message even if little?',opts:['Convey from me even if a single verse','Religion is sincere advice','Make things easy','The merciful are shown mercy'],correct:0,hint:'This hadith encourages every Muslim to convey even a little',quran:'Al-Baqarah 44'},
    fr:{q:'Quel hadith ordonne de transmettre le message meme si c\'est peu ?',opts:['Transmettez de moi ne serait-ce qu\'un verset','La religion est le bon conseil','Facilitez les choses','Les misericordieux recoivent la misericorde'],correct:0,hint:'Ce hadith encourage chaque musulman a transmettre meme un peu',quran:'Al-Baqarah 44'}
  },
  {
    ar:{q:'ما أول كلمة نزلت في القرآن الكريم؟',opts:['قل','بسم','اقرأ','الحمد'],correct:2,hint:'هذه الكلمة تدل على أهمية العلم في الإسلام',quran:'العلق ١'},
    en:{q:'What was the first word revealed in the Quran?',opts:['Say','In the name','Read','Praise'],correct:2,hint:'This word indicates the importance of knowledge in Islam',quran:'Al-Alaq 1'},
    fr:{q:'Quel fut le premier mot revele dans le Coran ?',opts:['Dis','Au nom','Lis','Louange'],correct:2,hint:'Ce mot indique l\'importance du savoir en Islam',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'أكمل الحديث: "إنما الأعمال ب..."',opts:['الصبر','النتائج','النيات','الأقوال'],correct:2,hint:'هذا الحديث عن الإخلاص في العمل',quran:'البينة ٥'},
    en:{q:'Complete the hadith: "Actions are but by..."',opts:['Patience','Results','Intentions','Words'],correct:2,hint:'This hadith is about sincerity in deeds',quran:'Al-Bayyinah 5'},
    fr:{q:'Completez le hadith : "Les actes ne valent que par les..."',opts:['La patience','Les resultats','Les intentions','Les paroles'],correct:2,hint:'Ce hadith parle de la sincerite dans les actes',quran:'Al-Bayyinah 5'}
  },
  {
    ar:{q:'كم سنة دعا النبي نوح قومه إلى الإيمان؟',opts:['١٠٠ سنة','٥٠٠ سنة','٩٥٠ سنة','٣٠٠ سنة'],correct:2,hint:'هذا النبي صبر أطول فترة في الدعوة',quran:'العنكبوت ١٤'},
    en:{q:'How many years did Prophet Noah call his people to faith?',opts:['100 years','500 years','950 years','300 years'],correct:2,hint:'This prophet was patient the longest in dawah',quran:'Al-Ankabut 14'},
    fr:{q:'Combien d\'annees le Prophete Noe a-t-il appele son peuple a la foi ?',opts:['100 ans','500 ans','950 ans','300 ans'],correct:2,hint:'Ce prophete a ete le plus patient dans la dawah',quran:'Al-Ankabut 14'}
  },
  {
    ar:{q:'أكمل الآية: "فَبِمَا رَحْمَةٍ مِنَ اللَّهِ ..." لهم',opts:['قسوت عليهم','لنت لهم','أعرضت عنهم','غضبت عليهم'],correct:1,hint:'هذه الآية تصف أسلوب النبي ﷺ في التعامل',quran:'آل عمران ١٥٩'},
    en:{q:'Complete the verse: "So by mercy from Allah, you were ... with them"',opts:['Harsh with them','Lenient with them','Turned away from them','Angry with them'],correct:1,hint:'This verse describes the Prophet\'s approach in dealing with people',quran:'Al Imran 159'},
    fr:{q:'Completez le verset : "C\'est par une misericorde d\'Allah que tu as ete ... envers eux"',opts:['Dur envers eux','Doux envers eux','Detourne d\'eux','En colere envers eux'],correct:1,hint:'Ce verset decrit l\'approche du Prophete',quran:'Al Imran 159'}
  },
  {
    ar:{q:'أكمل الحديث: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب ل..."',opts:['دينه','ماله','نفسه','عائلته'],correct:2,hint:'هذا الحديث عن حب الخير للآخرين',quran:'البقرة ٤٤'},
    en:{q:'Complete the hadith: "None of you truly believes until they love for their brother what they love for..."',opts:['Their religion','Their wealth','Themselves','Their family'],correct:2,hint:'This hadith is about wanting good for others',quran:'Al-Baqarah 44'},
    fr:{q:'Completez le hadith : "Aucun de vous ne croit veritablement tant qu\'il n\'aime pour son frere ce qu\'il aime pour..."',opts:['Sa religion','Sa richesse','Lui-meme','Sa famille'],correct:2,hint:'Ce hadith parle de vouloir du bien pour les autres',quran:'Al-Baqarah 44'}
  },
  {
    ar:{q:'ما الآية التي تؤكد أن الإسلام رسالة عالمية لكل الناس؟',opts:['وما أرسلناك إلا رحمة للعالمين','وما أرسلناك إلا كافة للناس','إنا أنزلناه قرآناً عربياً','ادع إلى سبيل ربك'],correct:1,hint:'هذه الآية في سورة سبأ',quran:'سبأ ٢٨'},
    en:{q:'Which verse confirms that Islam is a universal message for all people?',opts:['We sent you only as a mercy to the worlds','We sent you to all of mankind','We revealed it as an Arabic Quran','Invite to the way of your Lord'],correct:1,hint:'This verse is in Surah Saba',quran:'Saba 28'},
    fr:{q:'Quel verset confirme que l\'Islam est un message universel pour tous les peuples ?',opts:['Nous t\'avons envoye comme misericorde pour les mondes','Nous t\'avons envoye pour l\'ensemble des gens','Nous l\'avons revele en Coran arabe','Invite au sentier de ton Seigneur'],correct:1,hint:'Ce verset est dans la Sourate Saba',quran:'Saba 28'}
  },
  {
    ar:{q:'من هو مؤلف كتاب "الدعوة الإسلامية في القرن الحالي"؟',opts:['سيد قطب','يوسف القرضاوي','محمد الغزالي','حسن البنا'],correct:2,hint:'هذا العالم المصري لُقب بأديب الدعوة',quran:'النحل ١٢٥'},
    en:{q:'Who is the author of "Islamic Dawah in the Current Century"?',opts:['Sayyid Qutb','Yusuf al-Qaradawi','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'This Egyptian scholar was nicknamed "The Literary Preacher"',quran:'An-Nahl 125'},
    fr:{q:'Qui est l\'auteur de "La Dawah Islamique au Siecle Actuel" ?',opts:['Sayyid Qutb','Yusuf al-Qaradawi','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'Ce savant egyptien etait surnomme "Le Litteraire de la Predication"',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الآية: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَ..."',opts:['العدل','التقوى','الإحسان','الصبر'],correct:1,hint:'هذه الآية تدعو إلى التعاون على الخير',quran:'المائدة ٢'},
    en:{q:'Complete the verse: "And cooperate in righteousness and..."',opts:['Justice','Piety','Excellence','Patience'],correct:1,hint:'This verse calls for cooperation in goodness',quran:'Al-Maidah 2'},
    fr:{q:'Completez le verset : "Et cooperez dans la bonte et..."',opts:['La justice','La piete','L\'excellence','La patience'],correct:1,hint:'Ce verset appelle a la cooperation dans le bien',quran:'Al-Maidah 2'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'دعاء القنوت'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide us among those You have guided — Qunut dua'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide-nous parmi ceux que Tu as guides — Dua du Qunut'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الإخلاص',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'دعاء مأثور'},
    en:{label:'Dua for Sincerity',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'O Allah, make all my deeds righteous and make them purely for Your sake'},
    fr:{label:'Dua pour la Sincerite',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'O Allah, fais que toutes mes actions soient bonnes et purement pour Toi'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, deverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'طه ٢٥-٢٦'},
    en:{label:'Dua for Success',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand for me my chest and ease for me my task — Taha 25-26'},
    fr:{label:'Dua pour le Succes',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache — Taha 25-26'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'رواه البخاري ومسلم'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'O Allah, place light in my heart and light in my tongue — Bukhari and Muslim'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'O Allah, mets de la lumiere dans mon coeur et dans ma langue — Bukhari et Muslim'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'dawah-qarn-xp';
const BADGES_KEY = 'dawah-qarn-badges';
const READ_KEY = 'dawah-qarn-read';
const STREAK_KEY = 'dawah-qarn-streak';
const MODE_KEY = 'dawah-qarn-mode';
const QUIZ_BEST_KEY = 'dawah-qarn-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabCards').textContent = t.tabCards;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('cardsTitle').textContent = t.cardsTitle;
  document.getElementById('cardsDesc').textContent = t.cardsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() { const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang]; document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`; document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join(''); }

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id); return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body"><div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>
          <div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div>
          <div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
      </div></div>
    </div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() { const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden'); if (quizState.current >= QUIZ.length) { showQuizResult(); return; } const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1; container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`; }

function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }

function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() { const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20); let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; } document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden'); result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`; result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false; }

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() { const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100); document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`; }
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«الدعوة الإسلامية في القرن الحالي» كتاب يتناول تحديات الدعوة في العصر الحديث ووسائلها المتجددة. يدعو الشيخ الغزالي إلى تطوير أساليب الدعوة واستخدام الإعلام والتعليم والحوار لنشر رسالة الإسلام.', sourcesTitle:'المصادر', sources:['كتاب "الدعوة الإسلامية في القرن الحالي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Islamic Dawah in the Current Century" discusses the challenges of dawah in the modern era and its renewed methods. Sheikh al-Ghazali calls for developing dawah approaches using media, education, and dialogue to spread Islam\'s message.', sourcesTitle:'Sources', sources:['"Islamic Dawah in the Current Century" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"La Dawah Islamique au Siecle Actuel" discute des defis de la dawah a l\'ere moderne et de ses methodes renouvelees. Sheikh al-Ghazali appelle a developper les approches de la dawah en utilisant les medias, l\'education et le dialogue.', sourcesTitle:'Sources', sources:['"La Dawah Islamique au Siecle Actuel" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "الدعوة الإسلامية في القرن الحالي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/dawah-qarn'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Islamic Dawah in the Current Century" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/dawah-qarn'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"La Dawah Islamique au Siecle Actuel" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/dawah-qarn'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() { const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالتوفيق في الدعوة','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for dawah success','⭐ Complete all 15 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour le succes de la dawah','⭐ Completez les 15 cartes pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
