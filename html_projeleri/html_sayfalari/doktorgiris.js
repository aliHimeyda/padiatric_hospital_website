const doktorisimsoyisim = document.getElementById("isimsoyisim");
const doktoremailadresi = document.getElementById("email");
const doktorsifresi= document.getElementById("sifre");
const formbutonu = document.querySelector(".buton");
formbutonu.addEventListener("click", doktorGirisFormuKontrol);

function doktorGirisFormuKontrol(event){
    event.preventDefault();
    const doktorlar=JSON.parse(localStorage.getItem("doktorlar"));
    console.log(doktorlar);
    for (let i = 0; i < doktorlar.length; i++) {
        const element = doktorlar[i];
        console.log(element);
        if( doktorisimsoyisim.value == element.ad_soyad && doktorsifresi.value == element.sifre){
            localStorage.setItem("doktorgirisyaptimi",true);
            localStorage.setItem("asistangirisyaptimi",false);
            const girisyapandoktor ={
                ad_soyad: element.ad_soyad,
                email: doktoremailadresi.value,
                sifre: element.sifre
            };
            localStorage.setItem("hangidoktorgirisyapti",JSON.stringify(girisyapandoktor));
            localStorage.setItem("hangiasistangirisyapti",null);
            window.location.href = "ana_sayfa.html";
          
        }
    }
}