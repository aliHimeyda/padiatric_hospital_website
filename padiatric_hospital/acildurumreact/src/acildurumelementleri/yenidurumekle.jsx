import React, { useState } from "react";
import "../index.css";
function Yenidurumekle() {

  
  const [imageSrc, setImageSrc] = useState(""); // Resim URL'sini tutacak state
  const [isimsoyisim,isimsoyisimguncelle]=useState("");
  const [telefonno, telefonnoguncelle]=useState("");
  const [durum, durumguncelle]=useState("");
  const [konum, konumguncelle]=useState("");

  // Dosya yükleme işlemini yöneten fonksiyon
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Kullanıcının yüklediği dosya
    if (file) {
      const reader = new FileReader();

      // Dosya okuma işlemi tamamlandığında
      reader.onload = () => {
        localStorage.setItem("yuklenenresim",reader.result);
        setImageSrc(reader.result); // Resmin URL'sini state'e atar
      };

      reader.readAsDataURL(file);
      // Dosyayı Base64 formatında okur
     
    }
    
  };
  function bilgilerikaydet(event){
    event.preventDefault(); // Form'un gönderilmesini engellemek için

      let tarihbilgisi =new Date();
      let yil =tarihbilgisi.getFullYear();
      let ay = tarihbilgisi.getMonth() ;
      let gun = tarihbilgisi.getDay();
      let saat = tarihbilgisi.getHours();
      let dakika = tarihbilgisi.getSeconds();
      let zaman =`${yil}-${ay}-${gun} ${saat}:${dakika}`;
  
      let yenidurum = {
        ad_soyad: isimsoyisim,
        telefon_no: telefonno,
        durum: durum,
        konum: konum,
        durum_resim: localStorage.getItem("yuklenenresim"),
        tarih:zaman
      };
      let durumlar = JSON.parse(localStorage.getItem("durumlar"));
      durumlar.push(yenidurum);
      localStorage.setItem("durumlar", JSON.stringify(durumlar));
      console.log("basariyla eklendi");
      window.location.reload();
  }
  
  return (
    <div className="yenidurum">
        <form className="form" action="">
          <div className="formresimalani">
            <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} />
            <div id="preview">
              <img
                id="previewImage"
                src={imageSrc}
                style={{ display: "flex" }}
              />
            </div>
          </div>
          <div className="kisiselbilgiler">
            <div className="girdialani">
              <input
                required=""
                autoComplete="off"
                type="text"
                name="isimsoyisim"
                id="isimsoyisim"
                onChange={(e) => isimsoyisimguncelle(e.target.value)}
              />
              <label>isim soyisim</label>
            </div>
            <div className="girdialani" >
              <input
                required=""
                autoComplete="off"
                type="text"
                name="isimsoyisim"
                onChange={(e) => telefonnoguncelle(e.target.value)}
                id="hakkinizda"
              />
              <label>telefon numarasi</label>
            </div>
            <div className="girdialani" >
              <input
                required=""
                autoComplete="off"
                type="text"
                name="isimsoyisim"
                onChange={(e) => durumguncelle(e.target.value)}
                id="hakkinizda"
              />
              <label>durum</label>
            </div>
            <div className="girdialani" >
              <input
                required=""
                autoComplete="off"
                type="text"
                name="isimsoyisim"
                onChange={(e) => konumguncelle(e.target.value)}
                id="hakkinizda"
              />
              <label>konum bilgisi</label>
            </div>
          </div>
         
          <div className="butonalani">
            <button className="buton" onClick={bilgilerikaydet}>olustur</button>
          </div>
          
        </form>
      </div>
  );
}

export default Yenidurumekle;
