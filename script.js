function changeLanguage(language) {
    var content = {
        en: {
            schoolName: '78-School Namangan, Davlatobod',
            navAbout: 'About Us',
            navNews: 'News',
            navContact: 'Contact',
            aboutTitle: 'About Us',
            aboutText: 'Welcome to 78-School Namangan, located in Davlatobod. We are committed to providing quality education to our students, empowering them for future success.',
            newsTitle: 'Latest News',
            newsItemTitle1: 'Scientific Program Launched',
            newsItemText1: 'We are excited to announce a new scientific program aimed at encouraging students to actively participate in STEM education.',
            newsItemTitle2: 'Upcoming Sports Events',
            newsItemText2: 'Sports Day is coming! Our students are preparing to participate in various competitions.',
            contactTitle: 'Contact Us',
            address: 'Address: <a href="https://maps.google.com/?q=40.97403188208962,71.62402351375569" target="_blank">Davlatobod, Namangan</a>',
            email: 'Email: 78school@example.com',
            phone: 'Phone: +998-94-948-0542'
        },
        ru: {
            schoolName: '78-я школа Наманган, Давлатобод',
            navAbout: 'О нас',
            navNews: 'Новости',
            navContact: 'Контакт',
            aboutTitle: 'О нас',
            aboutText: 'Добро пожаловать в 78-ю школу Намангана, расположенную в Давлатободе. Мы стремимся предоставить качественное образование нашим ученикам, готовя их к успеху в будущем.',
            newsTitle: 'Последние новости',
            newsItemTitle1: 'Запущена научная программа',
            newsItemText1: 'Мы рады объявить о запуске новой научной программы, направленной на поощрение учащихся к активному участию в STEM-образовании.',
            newsItemTitle2: 'Предстоящие спортивные мероприятия',
            newsItemText2: 'Спортивный день приближается! Наши ученики готовятся к участию в различных соревнованиях.',
            contactTitle: 'Связаться с нами',
            address: 'Адрес: <a href="https://maps.google.com/?q=40.97403188208962,71.62402351375569" target="_blank">Давлатобод, Наманган</a>',
            email: 'Электронная почта: 78school@example.com',
            phone: 'Телефон: +998-94-948-0542'
        },
        uz: {
            schoolName: '78-Sonli Maktab Namangan, Davlatobod',
            navAbout: 'Biz haqimizda',
            navNews: 'Yangiliklar',
            navContact: 'Aloqa',
            aboutTitle: 'Biz haqimizda',
            aboutText: 'Davlatobodda joylashgan Namangan 78-sonli umumiy o\'rta ta\'lim maktabiga xush kelibsiz. Biz o\'quvchilarimizga sifatli ta\'lim berishni maqsad qilganmiz va ularni kelajakdagi muvaffaqiyatlarga tayyorlaymiz.',
            newsTitle: 'So\'nggi yangiliklar',
            newsItemTitle1: 'Ilmiy dastur ishga tushirildi',
            newsItemText1: 'Biz yangi ilmiy dasturini e\'lon qilamiz, u o\'quvchilarni STEM yo\'nalishida faol ishtirok etishga undaydi.',
            newsItemTitle2: 'Bo\'lajak sport tadbirlari',
            newsItemText2: 'Sport kuni yaqinlashmoqda! O\'quvchilarimiz turli musobaqalarda ishtirok etishga tayyorlanmoqda.',
            contactTitle: 'Biz bilan bog\'laning',
            address: 'Manzil: <a href="https://maps.google.com/?q=40.97403188208962,71.62402351375569" target="_blank">Davlatobod, Namangan</a>',
            email: 'Email: 78school@example.com',
            phone: 'Telefon: +998-94-948-0542'
        }
    };

    document.getElementById('school-name').innerHTML = content[language].schoolName;
    document.getElementById('nav-about').innerHTML = content[language].navAbout;
    document.getElementById('nav-news').innerHTML = content[language].navNews;
    document.getElementById('nav-contact').innerHTML = content[language].navContact;
    document.getElementById('about-title').innerHTML = content[language].aboutTitle;
    document.getElementById('about-text').innerHTML = content[language].aboutText;
    document.getElementById('news-title').innerHTML = content[language].newsTitle;
    document.getElementById('news-item-title-1').innerHTML = content[language].newsItemTitle1;
    document.getElementById('news-item-text-1').innerHTML = content[language].newsItemText1;
    document.getElementById('news-item-title-2').innerHTML = content[language].newsItemTitle2;
    document.getElementById('news-item-text-2').innerHTML = content[language].newsItemText2;
    document.getElementById('contact-title').innerHTML = content[language].contactTitle;
    document.getElementById('address').innerHTML = content[language].address;
    document.getElementById('email').innerHTML = content[language].email;
    document.getElementById('phone').innerHTML = content[language].phone;
}
// Get the test mode button
const testModeButton = document.getElementById('test-mode-button');

// Toggle animation on click
testModeButton.addEventListener('click', () => {
    if (testModeButton.style.animationPlayState === 'paused') {
        testModeButton.style.animationPlayState = 'running';
    } else {
        testModeButton.style.animationPlayState = 'paused';
    }
});
