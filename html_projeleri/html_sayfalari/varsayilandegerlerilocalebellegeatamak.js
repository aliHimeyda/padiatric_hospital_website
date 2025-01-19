


// kullandigim veri tabani 


if (localStorage.length==0) {
    let asistanlar =[
        {
            ad_soyad: "muhammet ihsan yilmaz",
            sifre: 9231,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan1.png",
            telefon_no: "+90 524 138 8402",
            eposta: "assistant1@yahoo.com",
            ev_adresi: "Adana, Turkey",
            linkedin: "https://linkedin.com/in/assistant1",
            hakkinda: "Marmara Üniversitesi Tıp Fakültesi mezunuyum, 2020 yılında mezun oldum.",
            pzt: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "08:00-15:30" },
            sal: null,
            car: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "18:00-20:00" },
            per: null,
            cum: null,
            cmt: { bolum: "cocuk yogun bakimi", saat: "23:00-23:59" },
            paz: null
        },
        {
            ad_soyad: "emir ozturk",
            sifre: 8136,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan2.png",
            telefon_no: "+90 546 238 2950",
            eposta: "assistant6@gmail.com",
            ev_adresi: "Gaziantep, Turkey",
            linkedin: "https://linkedin.com/in/assistant6",
            hakkinda: "Dokuz Eylül Üniversitesi Tıp Fakültesi mezunuyum, 2022 yılında mezun oldum.",
            pzt: { bolum: "cocuk yogun bakimi", saat: "23:00-23:59" },
            sal: null,
            car: { bolum: "cocuk acil", saat: "20:30-22:30" },
            per: { bolum: "cocuk yogun bakimi", saat: "11:00-17:00" },
            cum: null,
            cmt: { bolum: "cocuk acil", saat: "12:30-16:00" },
            paz: null
        },
        {
            ad_soyad: "ibrahim tamguc",
            sifre: 7420,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan3.png",
            telefon_no: "+90 518 986 8452",
            eposta: "assistant5@yahoo.com",
            ev_adresi: "Eskisehir, Turkey",
            linkedin: "https://linkedin.com/in/assistant5",
            hakkinda: "Ankara Üniversitesi Tıp Fakültesi mezunuyum, 2018 yılında mezun oldum.",
            pzt: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "08:00-15:30" },
            sal: null,
            car: { bolum: "cocuk acil", saat: "14:30-19:00" },
            per: null,
            cum: null,
            cmt: { bolum: "cocuk yogun bakimi", saat: "21:00-23:00" },
            paz: null
        },
        {
            ad_soyad: "mehmet kaya",
            sifre: 3894,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan4.png",
            telefon_no: "+90 581 390 8102",
            eposta: "assistant4@gmail.com",
            ev_adresi: "Izmir, Turkey",
            linkedin: "https://linkedin.com/in/assistant4",
            hakkinda: "Boğaziçi Üniversitesi Tıp Fakültesinden 2020 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk acil", saat: "12:00-18:00" },
            car: null,
            per: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "10:30-16:00" },
            cum: null,
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "08:00-13:30" }
        },
        {
            ad_soyad: "ahmet yilmaz",
            sifre: 6572,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan5.png",
            telefon_no: "+90 555 197 1782",
            eposta: "assistant3@yahoo.com",
            ev_adresi: "Eskisehir, Turkey",
            linkedin: "https://linkedin.com/in/assistant3",
            hakkinda: "Ankara Üniversitesi Tıp Fakültesi mezunuyum, 2018 yılında mezun oldum.",
            pzt: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "07:30-13:00" },
            sal: null,
            car: null,
            per: null,
            cum: { bolum: "cocuk acil", saat: "11:00-16:00" },
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "22:00-23:30" }
        },
        {
            ad_soyad: "yusuf demir",
            sifre: 1345,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan6.png",
            telefon_no: "+90 571 957 5833",
            eposta: "assistant2@outlook.com",
            ev_adresi: "Kayseri, Turkey",
            linkedin: "https://linkedin.com/in/assistant2",
            hakkinda: "Orta Doğu Teknik Üniversitesi Tıp Fakültesinden, 2017 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk yogun bakimi", saat: "08:00-15:00" },
            car: null,
            per: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "14:00-18:30" },
            cum: null,
            cmt: null,
            paz: { bolum: "cocuk acil", saat: "18:00-22:30" }
        }, {
            ad_soyad: "hasan celik",
            sifre: 9087,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan7.png",
            telefon_no: "+90 578 217 3569",
            eposta: "assistant11@yahoo.com",
            ev_adresi: "Trabzon, Turkey",
            linkedin: "https://linkedin.com/in/assistant11",
            hakkinda: "Hacettepe Üniversitesi Tıp Fakültesinden, 2019 yılında mezun oldum.",
            pzt: null,
            sal: null,
            car: { bolum: "cocuk acil", saat: "10:30-16:30" },
            per: null,
            cum: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "08:30-13:00" },
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "16:00-22:00" }
        },
        {
            ad_soyad: "ali sahin",
            sifre: 4203,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan8.png",
            telefon_no: "+90 599 524 8693",
            eposta: "assistant10@gmail.com",
            ev_adresi: "Ankara, Turkey",
            linkedin: "https://linkedin.com/in/assistant10",
            hakkinda: "Ege Üniversitesi Tıp Fakültesinden, 2016 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk acil", saat: "09:00-15:00" },
            car: null,
            per: null,
            cum: { bolum: "cocuk yogun bakimi", saat: "12:00-18:00" },
            cmt: null,
            paz: null
        },
        {
            ad_soyad: "yakup boz",
            sifre: 5619,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan9.png",
            telefon_no: "+90 532 119 4956",
            eposta: "assistant9@yahoo.com",
            ev_adresi: "Diyarbakir, Turkey",
            linkedin: "https://linkedin.com/in/assistant9",
            hakkinda: "Ege Üniversitesi Tıp Fakültesi mezunuyum, 2021 yılında mezun oldum.",
            pzt: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "10:00-14:30" },
            sal: null,
            car: { bolum: "cocuk acil", saat: "08:00-12:00" },
            per: null,
            cum: { bolum: "cocuk yogun bakimi", saat: "14:30-19:00" },
            cmt: null,
            paz: null
        },
        {
            ad_soyad: "emrullah kayacan",
            sifre: 5678,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan10.png",
            telefon_no: "+90 564 384 2837",
            eposta: "assistant8@gmail.com",
            ev_adresi: "Bursa, Turkey",
            linkedin: "https://linkedin.com/in/assistant8",
            hakkinda: "İstanbul Üniversitesi-Cerrahpaşa Tıp Fakültesi mezunuyum, 2019 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk acil", saat: "07:00-15:30" },
            car: null,
            per: null,
            cum: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "13:30-20:00" },
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "17:00-23:00" }
        },
        {
            ad_soyad: "yunus emre yulali",
            sifre: 1056,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan11.png",
            telefon_no: "+90 531 572 4465",
            eposta: "assistant7@outlook.com",
            ev_adresi: "Antalya, Turkey",
            linkedin: "https://linkedin.com/in/assistant7",
            hakkinda: "Hacettepe Üniversitesi Tıp Fakültesi mezunuyum, 2020 yılında mezun oldum.",
            pzt: null,
            sal: null,
            car: { bolum: "cocuk yogun bakimi", saat: "10:00-14:30" },
            per: null,
            cum: { bolum: "cocuk acil", saat: "08:30-13:30" },
            cmt: null,
            paz: null
        },
        {
            ad_soyad: "omer arslan",
            sifre: 2968,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan12.png",
            telefon_no: "+90 541 893 4562",
            eposta: "assistant15@outlook.com",
            ev_adresi: "Van, Turkey",
            linkedin: "https://linkedin.com/in/assistant15",
            hakkinda: "Marmara Üniversitesi Tıp Fakültesinden, 2021 yılında mezun oldum.",
            pzt: { bolum: "cocuk acil", saat: "09:00-12:00" },
            sal: null,
            car: null,
            per: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "13:00-16:30" },
            cum: null,
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "10:00-15:30" }
        },
        {
            ad_soyad: "emre kurt",
            sifre: 8734,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan13.png",
            telefon_no: "+90 515 754 8279",
            eposta: "assistant14@yahoo.com",
            ev_adresi: "Konya, Turkey",
            linkedin: "https://linkedin.com/in/assistant14",
            hakkinda: "Dokuz Eylül Üniversitesi Tıp Fakültesinden, 2015 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "07:00-14:30" },
            car: null,
            per: null,
            cum: { bolum: "cocuk acil", saat: "12:00-17:00" },
            cmt: null,
            paz: null
        },
        {
            ad_soyad: "furkan aksoy",
            sifre: 7391,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan14.png",
            telefon_no: "+90 529 973 1624",
            eposta: "assistant13@gmail.com",
            ev_adresi: "Mersin, Turkey",
            linkedin: "https://linkedin.com/in/assistant13",
            hakkinda: "Yıldız Teknik Üniversitesi Tıp Fakültesinden, 2020 yılında mezun oldum.",
            pzt: { bolum: "cocuk yogun bakimi", saat: "10:30-14:00" },
            sal: null,
            car: null,
            per: null,
            cum: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "12:00-16:00" },
            cmt: null,
            paz: null
        },
        {
            ad_soyad: "cenk aydin",
            sifre: 4827,
            asistanresmi: "/html_projeleri/asistan_resimleri/asistan15.png",
            telefon_no: "+90 535 432 9081",
            eposta: "assistant12@outlook.com",
            ev_adresi: "Samsun, Turkey",
            linkedin: "https://linkedin.com/in/assistant12",
            hakkinda: "Ankara Üniversitesi Tıp Fakültesinden, 2018 yılında mezun oldum.",
            pzt: null,
            sal: { bolum: "cocuk hematolojisi ve onkolojisi", saat: "09:30-14:00" },
            car: null,
            per: null,
            cum: { bolum: "cocuk acil", saat: "11:00-16:30" },
            cmt: null,
            paz: { bolum: "cocuk yogun bakimi", saat: "17:00-23:00" }
        }
    ];
    
    //varsayilan doktorlar
     let doktorlar = [
        {ad_soyad: "Kerem Aksoy", sifre: "9231", doktorresmi: "/html_projeleri/doktor_resimleri/doktor6.png",
            sorumluoldugubolum: "cocuk acil", telefon_no: "+90 545 324 7563", eposta: "doctor1@gmail.com",
            ofis: "cocuk yoğun bakımı bölümü No: 1104", linkedin: "https://linkedin.com/in/doctor1"
        },
        {ad_soyad: "Burak Aydin", sifre: "8136", doktorresmi: "/html_projeleri/doktor_resimleri/doktor5.png",
            sorumluoldugubolum: "cocuk acil", telefon_no: "+90 534 678 1234", eposta: "doctor2@outlook.com",
            ofis: "cocuk Hematolojisi ve Onkolojisi bölümü No: 1202", linkedin: "https://linkedin.com/in/doctor2"
        },
        {ad_soyad: "Murat Ozcan", sifre: "7420", doktorresmi: "/html_projeleri/doktor_resimleri/doktor4.png",
            sorumluoldugubolum: "cocuk yogun bakimi", telefon_no: "+90 545 324 7563", eposta: "doctor1@gmail.com",
            ofis: "cocuk yogun bakım bolumu No: 1104", linkedin: "https://linkedin.com/in/doctor1"
        },
        {ad_soyad: "Mustafa Demir", sifre: "3894", doktorresmi: "/html_projeleri/doktor_resimleri/doktor3.png",
            sorumluoldugubolum: "cocuk yogun bakimi", telefon_no: "+90 555 789 4561", eposta: "doctor3@yahoo.com",
            ofis: "cocuk yogun bakım bolumu No: 1103", linkedin: "https://linkedin.com/in/doctor3"
        },
        {ad_soyad: "Ahmet Yildirim", sifre: "6572", doktorresmi: "/html_projeleri/doktor_resimleri/doktor2.png",
            sorumluoldugubolum: "cocuk hematolojisi ve onkolojisi", telefon_no: "+90 533 222 3334", eposta: "doctor4@gmail.com",
            ofis: "cocuk acil bolumu No: 1205", linkedin: "https://linkedin.com/in/doctor4"
        },
        {ad_soyad: "Mehmet Kaya", sifre: "1345", doktorresmi: "/html_projeleri/doktor_resimleri/doktor1.png",
            sorumluoldugubolum: "cocuk hematolojisi ve onkolojisi", telefon_no: "+90 511 987 6543", eposta: "doctor5@outlook.com",
            ofis: "cocuk acil bolumu No: 1202", linkedin: "https://linkedin.com/in/doctor5"
        }
    ];
    
    
    
    let gelenrandevular =[
        { ad_soyad: "Mehmet Aslan", tc: "32543534", yas: "10", hastalik: "ates" },
        { ad_soyad: "Ayşe Demir", tc: "65748392", yas: "15", hastalik: "nezle" },
        { ad_soyad: "Ali Yıldız", tc: "98347562", yas: "8", hastalik: "grip" },
        { ad_soyad: "Zeynep Çelik", tc: "24358976", yas: "12", hastalik: "bogaz agrisi" },
        { ad_soyad: "Hüseyin Kaya", tc: "45389276", yas: "16", hastalik: "ates" },
        { ad_soyad: "Emine Şahin", tc: "34268792", yas: "9", hastalik: "kulak agrisi" },
        { ad_soyad: "Ahmet Güneş", tc: "87654321", yas: "11", hastalik: "nezle" },
        { ad_soyad: "Fatma Özkan", tc: "32485976", yas: "14", hastalik: "ates" },
        { ad_soyad: "Cem Karaca", tc: "45327896", yas: "13", hastalik: "migren" },
        { ad_soyad: "Zehra Aydın", tc: "24378945", yas: "10", hastalik: "grip" }
    ];
    let acilcocukyatakbilgisi =[
        [{ad_soyad:"ali mehmet",tc: "342234324",yas:"14",hastalik:"grip"},{ad_soyad:"ayse mehmet",tc: "342234324",yas:"13",hastalik:"grip"},{ad_soyad:"ekrem mehmet",tc: "342234324",yas:"12",hastalik:"grip"}],
        [  { ad_soyad: "Fatma Yılmaz", tc: "421123334", yas: "23", hastalik: "nezle" },
            { ad_soyad: "Hüseyin Kaya", tc: "298765432", yas: "45", hastalik: "bronşit" },
            { ad_soyad: "Emine Çelik", tc: "349128765", yas: "29", hastalik: "astım" }],
        [{ ad_soyad: "Cem Karaca", tc: "123456789", yas: "32", hastalik: "migren" },
            { ad_soyad: "Ahmet Güneş", tc: "876543210", yas: "54", hastalik: "hipertansiyon" },
            { ad_soyad: "Zehra Demir", tc: "908712345", yas: "18", hastalik: "grip" }]
    ];
    let cocukyogunbakimyatakbilgisi =[
        [{ad_soyad:"ali mehmet",tc: "342234324",yas:"14",hastalik:"grip"},{ad_soyad:"ayse mehmet",tc: "342234324",yas:"13",hastalik:"grip"},{ad_soyad:"ekrem mehmet",tc: "342234324",yas:"12",hastalik:"grip"}],
        [  { ad_soyad: "Fatma Yılmaz", tc: "421123334", yas: "23", hastalik: "nezle" },
            { ad_soyad: "Hüseyin Kaya", tc: "298765432", yas: "45", hastalik: "bronşit" },
            { ad_soyad: "Emine Çelik", tc: "349128765", yas: "29", hastalik: "astım" }],
        [{ ad_soyad: "Cem Karaca", tc: "123456789", yas: "32", hastalik: "migren" },
            { ad_soyad: "Ahmet Güneş", tc: "876543210", yas: "54", hastalik: "hipertansiyon" },
            { ad_soyad: "Zehra Demir", tc: "908712345", yas: "18", hastalik: "grip" }]
    ];
    let cocukhematolojisiveonkolojisiyatakbilgisi =[
        [{ad_soyad:"ali mehmet",tc: "342234324",yas:"14",hastalik:"grip"},{ad_soyad:"ayse mehmet",tc: "342234324",yas:"13",hastalik:"grip"},{ad_soyad:"ekrem mehmet",tc: "342234324",yas:"12",hastalik:"grip"}],
        [  { ad_soyad: "Fatma Yılmaz", tc: "421123334", yas: "23", hastalik: "nezle" },
            { ad_soyad: "Hüseyin Kaya", tc: "298765432", yas: "45", hastalik: "bronşit" },
            { ad_soyad: "Emine Çelik", tc: "349128765", yas: "29", hastalik: "astım" }],
        [{ ad_soyad: "Cem Karaca", tc: "123456789", yas: "32", hastalik: "migren" },
            { ad_soyad: "Ahmet Güneş", tc: "876543210", yas: "54", hastalik: "hipertansiyon" },
            { ad_soyad: "Zehra Demir", tc: "908712345", yas: "18", hastalik: "grip" }]
    ];
    
    
    
    const durumlar = [
        {
            ad_soyad: "yunus emre yulali",
            telefon_no: "+90 531 572 4465",
            durumresmi: "./acildurumelementleri/acildurumresmi1.png",
            durum: "Pediatri bölümü girişinde bir hasta yakınında panik atak durumu var. Yardım lütfen!",
            konum:"Pediatri bölümü girişinde",
            tarih:"02.12.2024 12:00"
        },
        {
            ad_soyad: "yakup boz",
            telefon_no: "+90 532 119 4956",
            durumresmi: "./acildurumelementleri/acildurumresmi2.png",
            durum: "Acil serviste ciddi bir trafik kazası hastası var. Ekibin yardımı gerekiyor.",
            konum:"Acil serviste",
            tarih:"02.12.2024 12:00"
        },
        {
            ad_soyad: "furkan aksoy",
            telefon_no: "+90 529 973 1624",
            durumresmi: "./acildurumelementleri/acildurumresmi3.png",
            durum: "Bir çocuk hastada bilinç kaybı yaşandı, hızlı destek gerek!",
            konum:"Bir çocuk hastada",
            tarih:"02.12.2024 12:00"
        },
        {
            ad_soyad: "hasan celik",
            telefon_no: "+90 578 217 3569",
            durumresmi: "./acildurumelementleri/acildurumresmi3.png",
            durum: "Yoğun bakım cihazlarından biri arızalandı, hızlı çözüm için teknik ekip desteği lazım.",
            konum:"Yoğun bakım bolumu",
            tarih:"02.12.2024 12:00"
    
        },
        {
            ad_soyad: "ibrahim tamguc",
            telefon_no: "+90 518 986 8452",
            durumresmi: "./acildurumelementleri/acildurumresmi3.png",
            durum: "Pediatri bölümü girişinde bir hasta yakınında panik atak durumu var. Yardım lütfen!",
            konum:"Pediatri bölümü girişinde",
            tarih:"02.12.2024 12:00"
        },
        {
            ad_soyad: "mehmet kaya",
            telefon_no: "+90 581 390 8102",
            durumresmi: "./acildurumelementleri/acildurumresmi3.png",
            durum: "Acil serviste ciddi bir trafik kazası hastası var. Ekibin yardımı gerekiyor.",
            konum: "acil girisinde",
            tarih:"02.12.2024 12:00"
        },
        {
            ad_soyad: "omer arslan",
            telefon_no: "+90 541 893 4562",
            durumresmi: "./acildurumelementleri/acildurumresmi3.png",
            durum: "Bir çocuk hastada bilinç kaybı yaşandı, hızlı destek gerek!",
            konum: "acil girisinde",
            tarih:"02.12.2024 12:00"
        }
        ];
    
    
    
        let doktorsorulari = [
            {ad_soyad: "Kerem Aksoy", eposta: "doctor1@gmail.com", soru: "Yeni keşfedilen Covid-19 hastalığı yüksek ateş ve ölümcül öksürük belirtileri gösteriyor. Bununla ilgili görüşleriniz nelerdir?", cevabi:[ {ad_soyad: "emrullah kayacan", cevap: "Antibiyotiklerin aşırı kullanımını önlemek amacıyla hastalarda erken tanı yöntemlerinin etkinliği artırılmalıdır."}]},
            {ad_soyad: "Burak Aydin", eposta: "doctor2@outlook.com", soru: "İleri düzey pnömoni hastalarının oksijen tedavisine direnci gözlemleniyor. Bu durum için alternatif bir çözüm öneriniz var mı?", cevabi:[ {ad_soyad: "furkan aksoy", cevap: "Dirençli hastalarda yüksek akışlı oksijen desteği ve non-invaziv ventilasyon yöntemleri faydalı olabilir."}]},
            {ad_soyad: "Murat Ozcan", eposta: "doctor1@gmail.com", soru: "Nadir görülen bir sendromda hasta tüm antibiyotiklere karşı direnç gösteriyor. Tedavi sürecinde nasıl bir yol izlersiniz?", cevabi:[ {ad_soyad: "yunus emre yulali", cevap: "Oksijen tedavisine direnç gösteren hastalarda hiperbarik oksijen terapisi gibi alternatif tedavi seçenekleri değerlendirilebilir."}]},
            {ad_soyad: "Mustafa Demir", eposta: "doctor3@yahoo.com", soru: "Pandemi sonrası çocuklarda sık görülen anksiyete ve stres bozukluklarının azaltılması için nasıl bir program önerirsiniz?", cevabi:[ {ad_soyad: "hasan celik", cevap: "Bu durum için akciğer rehabilitasyon programları ve destekleyici ilaçlarla semptom kontrolü sağlanabilir."}]},
            {ad_soyad: "Ahmet Yildirim", eposta: "doctor4@gmail.com", soru: "Yeni doğanlarda sık karşılaşılan solunum sıkıntılarının temel nedeni sizce ne olabilir?", cevabi:[ {ad_soyad: "furkan aksoy", cevap: "Dirençli hastalarda yüksek akışlı oksijen desteği ve non-invaziv ventilasyon yöntemleri faydalı olabilir."}]},
            {ad_soyad: "Mehmet Kaya", eposta: "doctor5@outlook.com", soru: "Bazı hastalarda gizemli nörolojik belirtiler (hafıza kaybı, titreme) fark edildi. Tanı ve çözüm öneriniz nedir?", cevabi:[ {ad_soyad: "furkan aksoy", cevap: "Antibiyotik direnci gelişen hastalarda probiyotik destekli tedaviler ve yeni nesil antibiyotik çalışmaları üzerinde yoğunlaşılmalıdır."}]}
        ];
    
    
    
        localStorage.setItem("doktorsorulari", JSON.stringify(doktorsorulari));
        localStorage.setItem("durumlar", JSON.stringify(durumlar));
    localStorage.setItem("gelenrandevular",JSON.stringify(gelenrandevular));
    localStorage.setItem("acilcocukyatakbilgisi",JSON.stringify(acilcocukyatakbilgisi));
    localStorage.setItem("cocukyogunbakimyatakbilgisi",JSON.stringify(cocukyogunbakimyatakbilgisi));
    localStorage.setItem("cocukhematolojisiveonkolojisiyatakbilgisi",JSON.stringify(cocukhematolojisiveonkolojisiyatakbilgisi));
    
    
        //giris karti kontrol kodlari
    
    localStorage.setItem("asistanlar",JSON.stringify(asistanlar));
    localStorage.setItem("doktorlar",JSON.stringify(doktorlar));
    
    localStorage.setItem("doktorgirisyaptimi",false);
    localStorage.setItem("asistangirisyaptimi",false);
    
}

