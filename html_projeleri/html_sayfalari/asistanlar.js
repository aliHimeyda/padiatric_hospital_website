
  
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

const asistankartlariilksutun =document.querySelectorAll(".asistanin_ilk_sutunu");
const asistankartlariikincisutun = document.querySelectorAll(".asistanin_ikinci_sutunu");
const asistankartlaribirlesmis = [...asistankartlariilksutun, ...asistankartlariikincisutun];
const asistanlar = JSON.parse(localStorage.getItem("asistanlar"));

function yeniasistanbilgikartiolustur() {

    for (let i = 15; i < asistanlar.length; i++) {
         // Asistan kartını oluşturan ana div
    const asistanKarti = document.createElement("div");
    asistanKarti.className = "asistan_karti";

    // Resim kapsayıcısını oluşturma
    const resimKapsayicisi = document.createElement("div");
    resimKapsayicisi.className = "asistan_resim_kapsayicisi";

    const resim = document.createElement("img");
    resim.src = asistanlar[i].asistanresmi;
    resim.className = "asistanresmi";

    resimKapsayicisi.appendChild(resim);

    // Asistan bilgisi div'i oluşturma
    const asistanBilgisi = document.createElement("div");
    asistanBilgisi.className = "asistan_bilgisi";

    // H3 başlık
    const baslik = document.createElement("h3");
    baslik.textContent = asistanlar[i].ad_soyad;

    // Mezuniyet bilgisi paragrafı
    const mezuniyetBilgisi = document.createElement("p");
    mezuniyetBilgisi.innerHTML = asistanlar[i].hakkinda;

    // Detay butonu
    const detayButonu = document.createElement("button");
    detayButonu.id = "detaybutonu";

    const butonContainer = document.createElement("span");
    butonContainer.className = "butoncontainer";
    butonContainer.textContent = "Detay";

    detayButonu.appendChild(butonContainer);

    // İletişim bilgileri div'i
    const iletisimBilgileri = document.createElement("div");
    iletisimBilgileri.className = "iletisimbilgileri";
    iletisimBilgileri.style.display = "none";

    const telefon = document.createElement("p");
    telefon.textContent = "telefon no: "+asistanlar[i].telefon_no;

    const eposta = document.createElement("p");
    eposta.textContent = "e-posta adresi: "+asistanlar[i].eposta;

    const evAdresi = document.createElement("p");
    evAdresi.textContent = "ev adresi: "+asistanlar[i].ev_adresi;

    const linkedin = document.createElement("p");
    linkedin.textContent = "linked in: "+asistanlar[i].linkedin;

    iletisimBilgileri.appendChild(telefon);
    iletisimBilgileri.appendChild(eposta);
    iletisimBilgileri.appendChild(evAdresi);
    iletisimBilgileri.appendChild(linkedin);

    // Asistan bilgisi div'ine tüm alt elemanları ekleme
    asistanBilgisi.appendChild(baslik);
    asistanBilgisi.appendChild(mezuniyetBilgisi);
    asistanBilgisi.appendChild(detayButonu);
    asistanBilgisi.appendChild(iletisimBilgileri);

    // Asistan kartına tüm ana elemanları ekleme
    asistanKarti.appendChild(resimKapsayicisi);
    asistanKarti.appendChild(asistanBilgisi);

    // Oluşturulan asistan kartını bir container'a ekleme
        if (asistankartlaribirlesmis[0].length == asistankartlaribirlesmis[1].length) {
            asistankartlaribirlesmis[1].appendChild(asistanKarti);
        }
        else {
            asistankartlariikincisutun[0].appendChild(asistanKarti);
        }
    }
}
//yeni asistan eklendiyse 
if (asistanlar.length>15) {
    yeniasistanbilgikartiolustur();
}


const detaybutonu = document.querySelectorAll("#detaybutonu");
const detaypopup = document.querySelector(".detaykartininkonumkapsayicisi");
const detaypopupicerigi = document.querySelector(".detaykartininicerigi");
const iletisimbilgileri = document.querySelectorAll("#iletisimbilgileri");
//detay kartinn icindeki cocuklar {resim divi , p basligi , p ikinci yazilar ,iletisim yazilari}

detaybutonu.forEach((buton,index)=>{
    buton.addEventListener("click",popuplarisecmek);
    function popuplarisecmek() {
        detaypopup.style.display = "flex";
        if (index<8) {
            detaypopupicerigi.children[0].children[0].src = asistankartlaribirlesmis[0].children[index].children[0].children[0].src;
            detaypopupicerigi.children[1].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[0].textContent;
            detaypopupicerigi.children[2].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[1].textContent;
            detaypopupicerigi.children[3].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[3].children[0].textContent;
            detaypopupicerigi.children[4].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[3].children[1].textContent;
            detaypopupicerigi.children[5].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[3].children[2].textContent;
            detaypopupicerigi.children[6].innerHTML = asistankartlaribirlesmis[0].children[index].children[1].children[3].children[3].textContent;
        }
        else{
            detaypopupicerigi.children[0].children[0].src = asistankartlaribirlesmis[1].children[index-8].children[0].children[0].src;
            detaypopupicerigi.children[1].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[0].textContent;
            detaypopupicerigi.children[2].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[1].textContent;
            detaypopupicerigi.children[3].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[3].children[0].textContent;
            detaypopupicerigi.children[4].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[3].children[1].textContent;
            detaypopupicerigi.children[5].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[3].children[2].textContent;
            detaypopupicerigi.children[6].innerHTML = asistankartlaribirlesmis[1].children[index-8].children[1].children[3].children[3].textContent;
        }
        
    }
    

});

const popupkapatmabutonu =document.querySelector(".buton");
popupkapatmabutonu.addEventListener("click",popupkapatma);
function popupkapatma(){
    detaypopup.style.display = "none";
}