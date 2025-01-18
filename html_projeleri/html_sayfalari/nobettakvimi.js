
  
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


const asistanlar = JSON.parse(localStorage.getItem("asistanlar"));
if (asistanlar.length>15) {
    for (let i = 15; i < asistanlar.length; i++) {
            
            //yeni eklenen asistan icin yeni nobet karti olustur
            const container = document.createElement("div");
            container.className = "asistantakvimkapsayicisi";
        
            // Asistan bilgisi bölümü
            const asistanBilgisi = document.createElement("div");
            asistanBilgisi.className = "asistanbilgisi";
        
            const asistanResmi = document.createElement("div");
            asistanResmi.className = "asistanresmi";
        
            const asistanImg = document.createElement("img");
            asistanImg.src = asistanlar[i].asistanresmi;
            asistanResmi.appendChild(asistanImg);
        
            const asistanAdi = document.createElement("p");
            asistanAdi.style.fontWeight = "bold";
            asistanAdi.style.fontFamily = "serif";
            asistanAdi.style.fontSize = "1.5em";
            asistanAdi.textContent = asistanlar[i].ad_soyad;
        
            asistanBilgisi.appendChild(asistanResmi);
            asistanBilgisi.appendChild(asistanAdi);
        
            // Günler bölümü
            const gunlerKapsayici = document.createElement("div");
            gunlerKapsayici.className = "gunlerkapsayicisi";
        
            const gunler = document.createElement("div");
            gunler.className = "gunler";
        
            // Gün bilgileri
            const gunBilgileri = {
                Pzt: asistanlar[i].pzt,
                Sal: asistanlar[i].sal,
                Çar: asistanlar[i].car,
                Per: asistanlar[i].per,
                Cum: asistanlar[i].cum,
                Cmt: asistanlar[i].cmt,
                Paz: asistanlar[i].paz
            };
        
            Object.entries(gunBilgileri).forEach(([gunAdi, bilgi]) => {
                const gun = document.createElement("div");
                gun.className = "gun";
        
                const gunBaslik = document.createElement("p");
                gunBaslik.style.margin = "0";
                gunBaslik.textContent = gunAdi;
        
                const detayliBilgi = document.createElement("div");
                detayliBilgi.className = "detaylibilgi";
        
                if (bilgi.bolum && bilgi.saat) {
                    const bolumBilgi = document.createElement("p");
                    bolumBilgi.style.margin = "0";
                    bolumBilgi.innerHTML = `<span style="font-weight: bold;">Bölüm:</span> ${bilgi.bolum}`;
                    detayliBilgi.appendChild(bolumBilgi);
        
                    const saatBilgi = document.createElement("p");
                    saatBilgi.style.margin = "0";
                    saatBilgi.textContent = bilgi.saat;
                    detayliBilgi.appendChild(saatBilgi);
                } else {
                    const bosBilgi = document.createElement("p");
                    bosBilgi.style.margin = "0";
                    bosBilgi.textContent = "Boş";
                    detayliBilgi.appendChild(bosBilgi);
                }
        
                gun.appendChild(gunBaslik);
                gun.appendChild(detayliBilgi);
                gunler.appendChild(gun);
            });
        
            gunlerKapsayici.appendChild(gunler);
        
            // Yazdır butonu
            const buton = document.createElement("button");
            buton.className = "buton";
        
            const simge = document.createElement("div");
            simge.className = "simge";
        
            const ikon = document.createElement("i");
            ikon.className = "fa-regular fa-pen-to-square";
            ikon.style.color = "white";
            ikon.style.fontWeight = "bold";
            simge.appendChild(ikon);
        
            const yazi = document.createElement("div");
            yazi.className = "yazi";
            yazi.textContent = "Yazdır";
        
            buton.appendChild(simge);
            buton.appendChild(yazi);
        
            gunlerKapsayici.appendChild(buton);
        
            // Tüm parçaları birleştir
            let takvimkapsayicisi = document.querySelector(".takvimkapsayicisi");
            container.appendChild(asistanBilgisi);
            container.appendChild(gunlerKapsayici);
            takvimkapsayicisi.appendChild(container);
           
        
    }
  
}

const gunler =document.querySelectorAll(".gun");


    gunler.forEach((gun)=>{
        gun.addEventListener("click",gunbilgisi);
        function gunbilgisi() {
            gun.children[1].style.display = "flex";
            gun.addEventListener("mouseout",gunbilgisikapat);
                function gunbilgisikapat() {
                    gun.children[1].style.display = "none";
                }
        }
    });
    const detaykartininicerigi = document.querySelector(".karticerigi");
    const kapatmak = document.querySelector(".kapatmabutonu");
    kapatmak.addEventListener("click",kapat);
    const nobetbilgisicekmek = document.querySelectorAll(".asistantakvimkapsayicisi");
    const detaykarti = document.querySelector(".detayyazisikartinkonumkapsayicisi");
    const detayyazdirbutonu = document.querySelectorAll(".buton");
    detayyazdirbutonu.forEach((buton,index)=>{
        buton.addEventListener("click",detayyazdir);
        function detayyazdir() {
            
            detaykarti.style.display = "flex";
            detaykartininicerigi.children[1].children[0].children[0].src = nobetbilgisicekmek[index].children[0].children[0].children[0].src;
            detaykartininicerigi.children[1].children[1].innerHTML = nobetbilgisicekmek[index].children[0].children[1].innerHTML;
            detaykartininicerigi.children[2].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[0].children[1].innerHTML;
            detaykartininicerigi.children[3].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[1].children[1].innerHTML;
            detaykartininicerigi.children[4].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[2].children[1].innerHTML;
            detaykartininicerigi.children[5].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[3].children[1].innerHTML;
            detaykartininicerigi.children[6].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[4].children[1].innerHTML;
            detaykartininicerigi.children[7].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[5].children[1].innerHTML;
            detaykartininicerigi.children[8].children[1].innerHTML = nobetbilgisicekmek[index].children[1].children[0].children[6].children[1].innerHTML;
        }
    });
    function kapat() {
        detaykarti.style.display = "none";
    }
    
   

