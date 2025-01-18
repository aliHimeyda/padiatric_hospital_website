
  
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

const doktorsorulari = JSON.parse(localStorage.getItem("doktorsorulari"));
const doktorlar = JSON.parse(localStorage.getItem("doktorlar"));
// doktor resmi yakalamak icin dongu
for (let i = 0; i < doktorsorulari.length; i++) {
    for (let j = 0; j < doktorlar.length; j++) {
        if (doktorsorulari[i].ad_soyad == doktorlar[j].ad_soyad) { 


             // Ana kart div'i
            const kart = document.createElement("div");
            kart.classList.add("tanitimkarti");
        
            // Resim bölümü
            const resimKapsayici = document.createElement("div");
            resimKapsayici.classList.add("doktorresmikapsayicisi");
            const img = document.createElement("img");
            img.src = doktorlar[j].doktorresmi;
            resimKapsayici.appendChild(img);
        
            // Detaylar bölümü
            const detaylar = document.createElement("div");
            detaylar.classList.add("kartdetaylari");
        
            const isim = document.createElement("p");
            isim.classList.add("isim");
            isim.textContent = doktorsorulari[i].ad_soyad;
        
            const detayMetni = document.createElement("p");
            detayMetni.classList.add("detaylar");
        
            const mezuniyet = document.createElement("span");
            mezuniyet.style.fontWeight = "bold";
            mezuniyet.textContent = "Iletisim : ";
            detayMetni.appendChild(mezuniyet);
            detayMetni.appendChild(document.createTextNode(doktorsorulari[i].eposta));
            detayMetni.appendChild(document.createElement("br"));
        
            const deneyim = document.createElement("span");
            deneyim.style.fontWeight = "bold";
            deneyim.textContent = "Soru : ";
            detayMetni.appendChild(deneyim);
            detayMetni.appendChild(document.createTextNode(doktorsorulari[i].soru));
            detayMetni.appendChild(document.createElement("br"));
        
        
        
            detaylar.appendChild(isim);
            detaylar.appendChild(detayMetni);
        
            // Buton ekle
            const buton = document.createElement("button");
            buton.classList.add("kartbutonu");
            buton.textContent = "Yorum Paylas ";
            const yorumbuton = document.createElement("button");
            yorumbuton.classList.add("yorumlariyazbutonu");
            yorumbuton.textContent = "Yorumlari Sirala ";
        
            // Kart içerisine ekle
            kart.appendChild(resimKapsayici);
            kart.appendChild(detaylar);
            kart.appendChild(buton);
            kart.appendChild(yorumbuton);
            
            const container = document.querySelector(".quizcontainer");
            // Ana konteynere ekle
            container.appendChild(kart);
            

        
        }
        
    }
}
const buton = document.querySelectorAll(".kartbutonu");

buton.forEach((tiklananbuton , index) => {
    tiklananbuton.addEventListener("click", function() {
        const yorumPopup = document.querySelector(".containercevapkonum");
        yorumPopup.style.display = "flex";
        const cikisButonu = document.querySelector("#cikisbutonu");
        cikisButonu.addEventListener("click", function() {
            yorumPopup.style.display = "none";
        });
        let isimsoyisim;
        let yorum ; 
        const isimsoyisimgirdialani = document.querySelector(".input__field");
        const cevapgirdialani = document.querySelector("#cevapgirdialani");
        const girdionaybutonu = document.querySelector("#girdionayi");

        girdionaybutonu.addEventListener("click", function() {
        isimsoyisim=isimsoyisimgirdialani.value;
        yorum=cevapgirdialani.value;
        let yenibilgi ={ ad_soyad:isimsoyisim,cevap:yorum };

            
        let doktorsorulari = JSON.parse(localStorage.getItem("doktorsorulari"));

        console.log(doktorsorulari[index]); 
        doktorsorulari[index].cevabi.push(yenibilgi);
        console.log(doktorsorulari.cevabi);
        localStorage.setItem("doktorsorulari", JSON.stringify(doktorsorulari));



            
        });
    });
    
});

if (doktorgirisyaptimi()=="true") {
    const quizeklebutonu = document.querySelector(".quizeklebutonu");
    quizeklebutonu.style.display = "flex";
    
}

const quizeklebutonu = document.querySelector(".quizeklebutonu");

quizeklebutonu.addEventListener("click", function() {
    const quizekleformu = document.querySelector(".containercevapkonumyorumekleme");
    quizekleformu.style.display = "flex";
    const cikisButonu = document.querySelector("#quizeklecikisbutonu");
    cikisButonu.addEventListener("click", function() {
        quizekleformu.style.display = "none";
    });

const quizonay = document.querySelector("#quizgirdionayi");

quizonay.addEventListener("click", function() {
    const doktorlar=JSON.parse(localStorage.getItem("doktorlar"));
    const doktorsorulari= JSON.parse(localStorage.getItem("doktorsorulari"));
    
    
        let iletisim;
        const adsoyad = document.querySelector(".quizinput__field").value;
        const soru = document.querySelector("#quizgirdialani").value;
        for (let i = 0; i < doktorlar.length; i++) {
            if (doktorlar[i].ad_soyad==adsoyad) {
                iletisim=doktorlar[i].eposta;
            }
        }
        const yeniSoru = { ad_soyad:adsoyad,eposta: iletisim, soru: soru, cevabi: [] };
        doktorsorulari.push(yeniSoru);
        localStorage.setItem("doktorsorulari", JSON.stringify(doktorsorulari));
        window.location.href = "quiz.html";
});


});

const cevaplariyaz = document.querySelectorAll(".yorumlariyazbutonu");

cevaplariyaz.forEach((soru,index)=> {
    soru.addEventListener("click", nobetciasistanlarac);

function nobetciasistanlarac(e) {
    console.log("algilandi");
    e.preventDefault();
    const temizleme = document.querySelector(".asistanlarinnobeti");
    temizleme.innerHTML = "";
 const doktorsorulari= JSON.parse(localStorage.getItem("doktorsorulari"));
 const asistanlar= JSON.parse(localStorage.getItem("asistanlar"));
 for (let i = 0; i < doktorsorulari[index].cevabi.length; i++) {
   
    for (let j = 0; j <asistanlar.length; j++) {
        
            if (asistanlar[j].ad_soyad==doktorsorulari[index].cevabi[i].ad_soyad) {
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
            doktorImg.src = asistanlar[j].asistanresmi;

            doktorResimKapsayicisi.appendChild(doktorImg);

            // Doktor adı
            const doktorAdi = document.createElement("p");
            doktorAdi.textContent = asistanlar[j].ad_soyad;

            baslikDiv.appendChild(doktorResimKapsayicisi);
            baslikDiv.appendChild(doktorAdi);

            // Sorumlu detaylarını oluştur
            const sorumluDetaylariDiv = document.createElement("div");
            sorumluDetaylariDiv.className = "sorumludetaylari";

            // İç başlık
            const icBaslik = document.createElement("p");
            icBaslik.className = "icbaslik";
            icBaslik.textContent = "Cevap :";

            // Telefon numarası
            const telefonP = document.createElement("p");
            telefonP.innerHTML = doktorsorulari[index].cevabi[i].cevap;

           

            sorumluDetaylariDiv.appendChild(icBaslik);
            sorumluDetaylariDiv.appendChild(telefonP);

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

});





