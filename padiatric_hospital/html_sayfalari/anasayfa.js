
  
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



//varsayilan asistanlar


 function asistangirisyaptimi() {
    let asistangirisi = localStorage.getItem("asistangirisyaptimi");
    return asistangirisi;
}
 function doktorgirisyaptimi() {
    let doktorgirisi= localStorage.getItem("doktorgirisyaptimi");
    return doktorgirisi;
}

const giriskarti = document.querySelector(".giriskartikonumkapsayicisi");
const giriskartikapatmabutonu = document.querySelector(".kapatmabutonu");
giriskartikapatmabutonu.addEventListener("click",giriskartikapatma);

window.addEventListener("load",giriskartfonksyonu);

function giriskartikapatma(){
    giriskarti.style.display="none";
    localStorage.setItem("asistangirisyaptimi",false);
    localStorage.setItem("doktorgirisyaptimi",false);
}
function giriskartfonksyonu(){
    let asistan=asistangirisyaptimi();
    let doktor=doktorgirisyaptimi();
    if (asistan == "false"&&doktor == "false") {
        giriskarti.style.display="flex";
    }
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
