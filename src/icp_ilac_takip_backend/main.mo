import Array "mo:base/Array";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Time "mo:base/Time";

actor IlacTakipSistemi {

  type Ilac = {
    barkod: Text;
    duraklar: [Durak];
  };

  type Durak = {
    id: Text;
    konum: Text;
    zaman: Time.Time;
    islemci: Text;
  };

  private var ilaclar = HashMap.HashMap<Text, Ilac>(0, Text.equal, Text.hash);
  private var duraklar = HashMap.HashMap<Text, Durak>(0, Text.equal, Text.hash);

  // İlaç ekleme
  public func ilacEkle(barkod: Text) : async () {
    if (ilaclar.get(barkod) != null) {
      // İlaç zaten var, hata döndür
      return;
    };
    let yeniIlac : Ilac = {
      barkod = barkod;
      duraklar = [];
    };
    ilaclar.put(barkod, yeniIlac);
  };

  // Durak ekleme
  public func durakEkle(id: Text, konum: Text, islemci: Text) : async () {
    if (duraklar.get(id) != null) {
      // Durak zaten var, hata döndür
      return;
    };
    let yeniDurak : Durak = {
      id = id;
      konum = konum;
      zaman = Time.now();
      islemci = islemci;
    };
    duraklar.put(id, yeniDurak);
  };

  // İlaç için durak ekleme
  public func ilacDurakKaydet(barkod: Text, durakId: Text) : async () {
    switch (ilaclar.get(barkod)) {
      case (null) {
        // İlaç bulunamadı, hata döndür
        return;
      };
      case (?ilac) {
        switch (duraklar.get(durakId)) {
          case (null) {
            // Durak bulunamadı, hata döndür
            return;
          };
          case (?durak) {
            let guncelDuraklar = Array.append<Durak>(ilac.duraklar, [durak]);
            let guncelIlac : Ilac = {
              barkod = ilac.barkod;
              duraklar = guncelDuraklar;
            };
            ilaclar.put(barkod, guncelIlac);
          };
        };
      };
    };
  };

  // İlaç bilgilerini getirme
  public query func ilacBilgisiGetir(barkod: Text) : async ?Ilac {
    ilaclar.get(barkod)
  };

  // Tüm ilaçları listeleme
  public query func tumIlaclariListele() : async [Ilac] {
    Iter.toArray(ilaclar.vals())
  };
  
  // Tüm durakları listeleme
  public query func tumDuraklariListele() : async [Durak] {
    Iter.toArray(duraklar.vals())
  };
}
 