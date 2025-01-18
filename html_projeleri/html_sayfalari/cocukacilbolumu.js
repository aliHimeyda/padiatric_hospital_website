
  
  // Saat göstergesi için bir fonksiyon
  function updateClock() {
    const now = new Date(); // Şu anki tarih ve zaman
    const hours = String(now.getHours()).padStart(2, '0'); // Saat
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Dakika
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Saniye
    
    // Zamanı formatla
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // HTML etiketini güncelle
    document.querySelector(".saat_container").innerHTML = timeString;
}
// Saati hemen çalıştır ve her saniyede bir güncelle
setInterval(updateClock, 1000);
updateClock(); // Sayfa yüklendiğinde hemen göster


let sonraki = document.querySelector(".sonra");
let onceki = document.querySelector(".once");

sonraki.addEventListener("click", function() {
  // Bu kısım, sonraki sayfaya geçmek için yapılacak işlemlerin yer aldığı kısım.
  let kartlar = document.querySelectorAll(".karttanitim");
  document.querySelector(".slide").appendChild(kartlar[0]);
});
onceki.addEventListener("click", function() {
    // Bu kısım, sonraki sayfaya geçmek için yapılacak işlemlerin yer aldığı kısım.
    let kartlar = document.querySelectorAll(".karttanitim");
    document.querySelector(".slide").prepend(kartlar[kartlar.length - 1]);
  });
  // Otomatik olarak 3 saniyede bir sonraki karta geçiş
setInterval(() => {
    let kartlar = document.querySelectorAll(".karttanitim");
    document.querySelector(".slide").appendChild(kartlar[0]); // İlk kartı sona ekle
  }, 3500);








  function asistangirisyaptimi() {
    let asistangirisi = localStorage.getItem("asistangirisyaptimi");
    return asistangirisi;
}
 function doktorgirisyaptimi() {
    let doktorgirisi= localStorage.getItem("doktorgirisyaptimi");
    return doktorgirisi;
}


// giris bilgisi yoksa gezinmesi gereken etiketler ayarlama
const acil = document.querySelector(".acil");
const quiz = document.querySelector(".quiz");

function girisbilgileriYoksa(){
    let asistan=asistangirisyaptimi();
    let doktor=doktorgirisyaptimi();
    if (asistan == "false"&&doktor == "false") {
        acil.style.display="none";
        quiz.style.display="none";
    }
}
girisbilgileriYoksa();

function girisbilgisigostermek() {
    let asistan=asistangirisyaptimi();
    let doktor=doktorgirisyaptimi();
    if (asistan == "true"||doktor == "true") {
       const girisbilgisikapsayicisi=document.querySelector(".girisbilgisicontainer");
        girisbilgisikapsayicisi.style.display="flex";
       
    }
}
girisbilgisigostermek();

const cikisbutonu = document.querySelector(".cikisbutonu");

cikisbutonu.addEventListener("click",cikis);

function cikis() {
    //giris bilgiisi olmayacagi icin false atasin diye
    localStorage.setItem("asistangirisyaptimi",false);
    localStorage.setItem("doktorgirisyaptimi",false);
    //sayfayi yenilemek icin
    window.location.reload();
}

if (asistangirisyaptimi()=="true") {
    const girisyapanasistan = JSON.parse(localStorage.getItem("hangiasistangirisyapti"));
    console.log(girisyapanasistan);
    const parent = document.querySelector(".girisbilgimenusu");
    parent.style.display = "flex";
    const child = document.createElement("li");
    child.innerHTML = girisyapanasistan.ad_soyad + " <br>" + girisyapanasistan.email;
    parent.appendChild(child);
    const girisbilgisiresmi = document.querySelector(".bilgiresmi");
    girisbilgisiresmi.src = girisyapanasistan.asistanresmi; 
}

else if (doktorgirisyaptimi()=="true") {
    const girisyapandoktor = JSON.parse(localStorage.getItem("hangidoktorgirisyapti"));
    const girismenusuparenti = document.querySelector(".girisbilgimenusu");
    const girisbilgisichild = document.createElement("li");
    girisbilgisichild.innerHTML = girisyapandoktor.ad_soyad + " <br>" + girisyapandoktor.email;
    girismenusuparenti.appendChild(girisbilgisichild);
    const asistaneklemenusuparent = document.querySelector(".asistanlarmenusu");
    const asistaneklechild = document.createElement("li");
    asistaneklechild.innerHTML = "Asistan Ekle";
    asistaneklemenusuparent.appendChild(asistaneklechild);
    asistaneklechild.addEventListener("click", asistanEkle);
    function asistanEkle() {
        window.location.href = "asistanlar.html";
    }
}

const slider = document.querySelector(".slider");
const sliderbutonu =document.querySelector(".sliderbutonu");
sliderbutonu.addEventListener("click",slidercikart);
function slidercikart(e) {
    e.stopPropagation();
    e.preventDefault();
   slider.style.display = "flex";

   document.addEventListener("mouseover", sliderkapat);

   function sliderkapat(e) {
    e.stopPropagation();
       e.preventDefault();
       if (slider.style.display === "flex" && !slider.contains(e.target)) {
        console.log("kosulagirildi");
           slider.style.display = "none";
           slider.style.animation="slider 0.5s";
       }
   }
}

  


const hizmetler = document.querySelector("#hizmetler");

hizmetler.addEventListener("click", digerhizmetleriac);

function digerhizmetleriac(e) {
    e.preventDefault();
    const digerhizmetler = document.querySelector(".digerhizmetler");
    if (digerhizmetler.style.display === "none") {
        digerhizmetler.style.display = "flex";
    } else {
        digerhizmetler.style.display = "none";
    }
}
const sorumludoktorlar = document.querySelector("#sorumludoktorlar");


sorumludoktorlar.addEventListener("click", sorumludoktorlarac);

function sorumludoktorlarac(e) {
    e.preventDefault();
    const sorumludoktorlar = document.querySelector(".sorumludoktorlarkartikonumkapsayicisi");
    if (sorumludoktorlar.style.display === "none") {
        sorumludoktorlar.style.display = "flex";
    } else {
        sorumludoktorlar.style.display = "none";
    }
    const sorumludoktorlarikapat =document.querySelector(".buton");
    sorumludoktorlarikapat.addEventListener("click", sorumludoktorlarkapatma);
    function sorumludoktorlarkapatma() {
        sorumludoktorlar.style.display = "none";
    }
    
}


const nobetciasistanlar = document.querySelector("#nobetciasistanlar");
nobetciasistanlar.addEventListener("click", nobetciasistanlarac);

function nobetciasistanlarac(e) {
    e.preventDefault();
    const temizleme = document.querySelector(".asistanlarinnobeti");
    temizleme.innerHTML = "";
 const asistanlar= JSON.parse(localStorage.getItem("asistanlar"));
 for (let i = 0; i < asistanlar.length; i++) {
    let gunler = [
        { gun: "Pzt", deger: asistanlar[i].pzt },
        { gun: "Sal", deger: asistanlar[i].sal },
        { gun: "Çar", deger: asistanlar[i].car },
        { gun: "Per", deger: asistanlar[i].per },
        { gun: "Cum", deger: asistanlar[i].cum },
        { gun: "Cmt", deger: asistanlar[i].cmt },
        { gun: "Paz", deger: asistanlar[i].paz }
    ];
    for (let j = 0; j <7; j++) {
        if (gunler[j].deger == null) {
            continue;
        }
        else if (gunler[j].deger.bolum=="cocuk acil") {
                    // Ana kapsayıcıyı seçin veya oluşturun
            const container = document.createElement("div");
            container.className = "sorumlukartkapsayicisi";

            // Kart divini oluştur
            const kartDiv = document.createElement("div");
            kartDiv.className = "kart";

            // Başlık kısmını oluştur
            const baslikDiv = document.createElement("div");
            baslikDiv.className = "baslik";

            // Doktor resim kapsayıcısını oluştur
            const doktorResimKapsayicisi = document.createElement("div");
            doktorResimKapsayicisi.className = "doktorresmikapsayicisi";

            const doktorImg = document.createElement("img");
            doktorImg.src = asistanlar[i].asistanresmi;

            doktorResimKapsayicisi.appendChild(doktorImg);

            // Doktor adı
            const doktorAdi = document.createElement("p");
            doktorAdi.textContent = asistanlar[i].ad_soyad;
            const doktorsaati = document.createElement("p");
            doktorsaati.innerHTML = "saat: "+gunler[j].deger.saat;

            baslikDiv.appendChild(doktorResimKapsayicisi);
            baslikDiv.appendChild(doktorAdi);
            baslikDiv.appendChild(doktorsaati);

            // Sorumlu detaylarını oluştur
            const sorumluDetaylariDiv = document.createElement("div");
            sorumluDetaylariDiv.className = "sorumludetaylari";

            // İç başlık
            const icBaslik = document.createElement("p");
            icBaslik.className = "icbaslik";
            icBaslik.textContent = "Iletisim:";

            // Telefon numarası
            const telefonP = document.createElement("p");
            telefonP.innerHTML = asistanlar[i].telefon_no;

            // E-posta adresi
            const emailP = document.createElement("p");
            emailP.innerHTML = asistanlar[i].eposta;

            // Ofis bilgisi
            const ofisP = document.createElement("p");
            ofisP.innerHTML = "saat: "+gunler[j].deger.saat;

            // LinkedIn bilgisi
            const linkedinP = document.createElement("p");
            linkedinP.innerHTML = asistanlar[i].linkedin;

            sorumluDetaylariDiv.appendChild(icBaslik);
            sorumluDetaylariDiv.appendChild(telefonP);
            sorumluDetaylariDiv.appendChild(emailP);
            sorumluDetaylariDiv.appendChild(ofisP);
            sorumluDetaylariDiv.appendChild(linkedinP);

            // Kart divine eklemeleri yap
            kartDiv.appendChild(baslikDiv);
            kartDiv.appendChild(sorumluDetaylariDiv);

            // Border ekle
            const kartBorder = document.createElement("div");
            kartBorder.className = "kart-border";

            // Ana kapsayıcıya tüm yapıyı ekle
            container.appendChild(kartDiv);
            container.appendChild(kartBorder);

            // Bu yapıyı DOM'a ekle (örneğin, body'ye)
            const kapsayici = document.querySelector(".asistanlarinnobeti");
            kapsayici.appendChild(container);
            const sonrakikapsayici = document.querySelector("#nobettutanasistanlaricerigi");
            sonrakikapsayici.appendChild(kapsayici);
            const konumkapsayici = document.querySelector("#nobettutanasistanlar");
            konumkapsayici.appendChild(sonrakikapsayici);
        }
        
    }

   
    
 }
 const nobetciasistanlar = document.querySelector("#nobettutanasistanlar");
 nobetciasistanlar.style.display = "flex";
 const nobetciasistanlarikapat =document.querySelector("#asistanbuton");
 nobetciasistanlarikapat.addEventListener("click", nobetciasistanlarkapatma);
 function nobetciasistanlarkapatma() {
 nobetciasistanlar.style.display = "none";}
}


const gelenrandevusecimi = document.querySelector("#gelenrandevular");

gelenrandevusecimi.addEventListener("click", gelenrandevularac);
function gelenrandevularac(e) {
    e.preventDefault();
    const temizleme = document.querySelector("#gelenrandevularicerigi");
    temizleme.innerHTML = "";
    console.log("olayalgilandi");
    let gelenrandevular = JSON.parse(localStorage.getItem("gelenrandevular"));
    for (let i = 0; i < gelenrandevular.length; i++) {
                // Container elemanını seç
            const container = document.querySelector("#gelenrandevularicerigi");
           

            // Ana kart divini oluştur
            const card = document.createElement('div');
            card.className = 'gelenrandevukartikapsayicisi';

            // Kullanıcı resmi için div ve SVG ekle
            const userImageDiv = document.createElement('div');
            userImageDiv.className = 'kullaniciresmi';
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 448 512');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute(
                'd',
                'M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z'
            );
            svg.appendChild(path);
            userImageDiv.appendChild(svg);

            // Kullanıcı bilgilerini içeren paragrafı oluştur
            const userInfo = document.createElement('p');
            userInfo.className = 'kullaniciismi';
            const userNameText = document.createTextNode(gelenrandevular[i].ad_soyad);
            const userRoleSpan = document.createElement('span');
            userRoleSpan.innerHTML ="TC No: "+ gelenrandevular[i].tc+ "<br>"+"Yas: "+ gelenrandevular[i].yas +"<br>"+"Hastalik: "+gelenrandevular[i].hastalik;

            userInfo.appendChild(userNameText);
            userInfo.appendChild(userRoleSpan);

            // Kabul ve reddet alanını oluştur
            const actionArea = document.createElement('div');
            actionArea.className = 'kabulredalani';

            const actionWrapper = document.createElement('div');
            actionWrapper.className = 'kabulredkapsayicisi';

            // Kabul seçimi
            const acceptChoice = document.createElement('div');
            acceptChoice.className = 'kabulredsecimi';
            const acceptLabel = document.createElement('label');
            acceptLabel.className = 'checkBox';
            const acceptInput = document.createElement('input');
            acceptInput.setAttribute('id', 'ch1');
            acceptInput.setAttribute('type', 'checkbox');
            const acceptTransition = document.createElement('div');
            acceptTransition.className = 'kabultransition';
            const acceptText = document.createElement('span');
            acceptText.textContent = 'Kabulet';

            acceptLabel.appendChild(acceptInput);
            acceptLabel.appendChild(acceptTransition);
            acceptChoice.appendChild(acceptLabel);
            acceptChoice.appendChild(acceptText);

            // Reddet seçimi
            const rejectChoice = document.createElement('div');
            rejectChoice.className = 'kabulredsecimi';
            const rejectLabel = document.createElement('label');
            rejectLabel.className = 'checkBox';
            const rejectInput = document.createElement('input');
            rejectInput.setAttribute('id', 'ch2');
            rejectInput.setAttribute('type', 'checkbox');
            const rejectTransition = document.createElement('div');
            rejectTransition.className = 'redtransition';
            const rejectText = document.createElement('span');
            rejectText.textContent = 'Reddet';

            rejectLabel.appendChild(rejectInput);
            rejectLabel.appendChild(rejectTransition);
            rejectChoice.appendChild(rejectLabel);
            rejectChoice.appendChild(rejectText);

            // Kabul ve reddet seçimlerini wrapper'a ekle
            actionWrapper.appendChild(acceptChoice);
            actionWrapper.appendChild(rejectChoice);

            // Wrapper'ı ana action alanına ekle
            actionArea.appendChild(actionWrapper);

            // Tüm elemanları ana karta ekle
            card.appendChild(userImageDiv);
            card.appendChild(userInfo);
            card.appendChild(actionArea);

            // Kartı container'a ekle
            container.appendChild(card);
            console.log(i);
        }
        const gelenrandevukartikapsayicisi = document.querySelector("#gelenkullanicirandevukonumu");
        gelenrandevukartikapsayicisi.style.display = "flex";
        const nobetciasistanlarikapat =document.querySelector("#randevubutonu");
        nobetciasistanlarikapat.addEventListener("click", nobetciasistanlarkapatma);
        function nobetciasistanlarkapatma() {
            gelenrandevukartikapsayicisi.style.display = "none";}
            const randevukabulet = document.querySelectorAll("#ch1");
            const randevureddet = document.querySelectorAll("#ch2");
            randevukabulet.forEach((olay)=>{
                olay.addEventListener("click", function() {
                    setTimeout(function(){
                        const kapsayici = document.querySelector("#gelenrandevularicerigi");
                        console.log(olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim());
                        for (let i = 0; i < gelenrandevular.length; i++) {
                            if (gelenrandevular[i].ad_soyad==olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim()) {
                               console.log("kabuledilecek olan bulundu");
                              let kabuledilenler = JSON.parse(localStorage.getItem("acilcocukyatakbilgisi"));
                              if (kabuledilenler[0].length<5) {
                                console.log("ilk oda bos");
                                kabuledilenler[0].push(gelenrandevular[i]);
                                localStorage.setItem("acilcocukyatakbilgisi", JSON.stringify(kabuledilenler));
                                 console.log("kabul edildi , eklenip guncellendi");
                                 gelenrandevular.splice(i,1);
                                 console.log("randevu silindi");
                                 localStorage.setItem("gelenrandevular", JSON.stringify(gelenrandevular));
                                 console.log("bellek guncellendi");
                                 kapsayici.removeChild(olay.closest(".gelenrandevukartikapsayicisi"));
                                 console.log("kabuledildi");
                                 break;
                              }
                              else  if (kabuledilenler[1].length<5) {
                                console.log("ikinci oda bos");
                                kabuledilenler[1].push(gelenrandevular[i]);
                                localStorage.setItem("acilcocukyatakbilgisi", JSON.stringify(kabuledilenler));
                                 console.log("kabul edildi , eklenip guncellendi");
                                 gelenrandevular.splice(i,1);
                                 console.log("randevu silindi");
                                 localStorage.setItem("gelenrandevular", JSON.stringify(gelenrandevular));
                                 console.log("bellek guncellendi");
                                 kapsayici.removeChild(olay.closest(".gelenrandevukartikapsayicisi"));
                                 console.log("kabuledildi");
                                 break;
                              }
                              else  if (kabuledilenler[2].length<5) {
                                console.log("ucuncu oda bos");
                                kabuledilenler[2].push(gelenrandevular[i]);
                                localStorage.setItem("acilcocukyatakbilgisi", JSON.stringify(kabuledilenler));
                                 console.log("kabul edildi , eklenip guncellendi");
                                 gelenrandevular.splice(i,1);
                                 console.log("randevu silindi");
                                 localStorage.setItem("gelenrandevular", JSON.stringify(gelenrandevular));
                                 console.log("bellek guncellendi");
                                 kapsayici.removeChild(olay.closest(".gelenrandevukartikapsayicisi"));
                                 console.log("kabuledildi");
                                 break;
                              }
                              else{
                                alert("bos oda yok !!!!");
                                console.log("kabul edilemez");
                                break;
                              }
                            
                            }
                            
                        }
                        
                    },2000);
                    
                });
            });
            
            randevureddet.forEach((olay)=>{
                olay.addEventListener("click", function() {
                    setTimeout(function(){
                        const kapsayici = document.querySelector("#gelenrandevularicerigi");
                        console.log(olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim());
                        for (let i = 0; i < gelenrandevular.length; i++) {
                            if (gelenrandevular[i].ad_soyad==olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim()) {
                               console.log("silenecek olan bulundu");
                                gelenrandevular.splice(i,1);
                               console.log("silindi");
                               localStorage.setItem("gelenrandevular", JSON.stringify(gelenrandevular));
                               console.log("bellek guncellendi");
   
                               break;
                            }
                            
                        }
                        kapsayici.removeChild(olay.closest(".gelenrandevukartikapsayicisi"));

                        console.log("Reddedildi");
                    },2000);
                   

                });
            });

}

const hastadagilimi =document.querySelector("#hastadagilimi");

hastadagilimi.addEventListener("click", hastadagilimiac);

function hastadagilimiac(e) {
    e.preventDefault();
    const temizleme = document.querySelectorAll(".yatakbilgiicerigi");
    temizleme[0].innerHTML = "";
    temizleme[1].innerHTML = "";
    temizleme[2].innerHTML = "";
    
    let hastabilgileri = JSON.parse(localStorage.getItem("acilcocukyatakbilgisi"));
    for (let i = 0; i < hastabilgileri.length; i++) {
            let bilgiler = hastabilgileri[i];
            let bosyatak =0;
             // Container elemanını seç
             const anakapsayici =document.querySelector(".hastaneyatakbilgisiicerigi");
             const container = anakapsayici.children[i+1].children[1];
        for (let j = 0; j < 5; j++) {
                 
                 if (bilgiler[j]==null) {
                    bosyatak++;
                }
                else{
                     // Ana kart divini oluştur
                     const card = document.createElement('div');
                     card.className = 'gelenrandevukartikapsayicisi';
 
                     // Kullanıcı resmi için div ve SVG ekle
                     const userImageDiv = document.createElement('div');
                     userImageDiv.className = 'kullaniciresmi';
                     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                     svg.setAttribute('viewBox', '0 0 448 512');
                     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                     path.setAttribute(
                         'd',
                         'M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z'
                     );
                     svg.appendChild(path);
                     userImageDiv.appendChild(svg);
 
                     // Kullanıcı bilgilerini içeren paragrafı oluştur
                     const userInfo = document.createElement('p');
                     userInfo.className = 'kullaniciismi';
                     const userNameText = document.createTextNode(bilgiler[j].ad_soyad);
                     const userRoleSpan = document.createElement('span');
                     userRoleSpan.innerHTML ="TC No: "+ bilgiler[j].tc+ "<br>"+"Yas: "+ bilgiler[j].yas +"<br>"+"Hastalik: "+bilgiler[j].hastalik;
 
                     userInfo.appendChild(userNameText);
                     userInfo.appendChild(userRoleSpan);
 
                     // Kabul ve reddet alanını oluştur
                     const actionArea = document.createElement('div');
                     actionArea.className = 'kabulredalani';
 
                     const actionWrapper = document.createElement('div');
                     actionWrapper.className = 'kabulredkapsayicisi';
 
                     // Kabul seçimi
                     const acceptChoice = document.createElement('div');
                     acceptChoice.className = 'kabulredsecimi';
                     const acceptLabel = document.createElement('label');
                     acceptLabel.className = 'checkBox';
                     const acceptInput = document.createElement('input');
                     acceptInput.setAttribute('id', 'ch1');
                     acceptInput.setAttribute('type', 'checkbox');
                     const acceptTransition = document.createElement('div');
                     acceptTransition.className = 'kabultransition';
                     const acceptText = document.createElement('span');
                     acceptText.textContent = 'islemi bitir';
 
                     acceptLabel.appendChild(acceptInput);
                     acceptLabel.appendChild(acceptTransition);
                     acceptChoice.appendChild(acceptLabel);
                     acceptChoice.appendChild(acceptText);
 
                     
                     // Kabul ve reddet seçimlerini wrapper'a ekle
                     actionWrapper.appendChild(acceptChoice);
 
                     // Wrapper'ı ana action alanına ekle
                     actionArea.appendChild(actionWrapper);
 
                     // Tüm elemanları ana karta ekle
                     card.appendChild(userImageDiv);
                     card.appendChild(userInfo);
                     card.appendChild(actionArea);
 
                     // Kartı container'a ekle
                     container.appendChild(card);
                     console.log(i);
                }
                   
                    
            }
            const bosyatakbilgisi = anakapsayici.children[i+1].children[0].children[1];
            bosyatakbilgisi.textContent = "Bos Yatak: "+bosyatak + "/5";
  
    }
    const hastadagilimiacmmak = document.querySelector(".hastaneyatakbilgisikonumkapsayicisi");
    hastadagilimiacmmak.style.display = "flex";
    let bosyatak =2;
    const hastaislemibitirmek = document.querySelectorAll("#ch1");
    hastaislemibitirmek.forEach((olay)=>{
        olay.addEventListener("click", function() {
            console.log("olay algilandi");
            setTimeout(function(){
                const hastabilgikarti = document.querySelectorAll(".gelenrandevukartikapsayicisi");
                const kapsayici = document.querySelectorAll(".yatakbilgiicerigi");
                
                console.log(olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim());
                for (let i = 0; i < hastabilgileri.length; i++) {
                    let bilgiler = hastabilgileri[i];
                    
                    
                    for (let j = 0; j < bilgiler.length; j++) {
                        
                       if (bilgiler[j].ad_soyad ==olay.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.textContent.trim()) {
                        console.log("silenecek olan bulundu");
                        bilgiler.splice(j,1);
                       console.log("silindi");
                       localStorage.setItem("acilcocukyatakbilgisi", JSON.stringify(hastabilgileri));
                       console.log("bellek guncellendi");
                       kapsayici[i].removeChild(kapsayici[i].children[j]);
                       console.log("Reddedildi");
                       ++bosyatak;
                       break;
                       }
                    }
                  console.log(i)
                  const bosyatakbilgisi = kapsayici[i].parentElement.children[0].children[1];
                  bosyatakbilgisi.textContent = "Bos Yatak: "+ bosyatak + "/5";
                }
               
               
            },2000);
           

        });
    });
    
    const hastadagilimikapatmak = document.querySelector("#hastadagilimbutonu");
    hastadagilimikapatmak.addEventListener("click", function() {
        hastadagilimiacmmak.style.display = "none";
    });


}

