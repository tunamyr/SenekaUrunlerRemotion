import { Series } from "remotion";
import { Intro } from "./components/Intro";
import { ProductSlide } from "./components/ProductSlide";
import { Outro } from "./components/Outro";

export const MyComposition = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={300}>
        <Intro />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <ProductSlide
          title="Seneka EBDYS"
          description="Belgelerin oluşturulmasından arşivlenmesine kadar tüm süreçleri yönetebileceğiniz bir platform."
          color="bg-[#F5F3FF]"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <ProductSlide
          title="Onaylarım"
          logo="/onaylarim-logo.png"
          description="İmza gerektiren süreçlerinizi yasal olarak geçerli e-imza ile gerçekleştirin. Kağıt, posta ve zamandan tasarruf edin."
          color="bg-[#F5F3FF]"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <ProductSlide
          title="primeAPI"
          titleColor="#0284C7"
          description="Karmaşık ve kullanımı zor SDK'lar ile uğraşmadan, sadece API kullanarak mevcut uygulamalarınızda yasal geçerli e-imza ve mobil imza atılmasını sağlayabilirsiniz."
          color="bg-[#F5F3FF]"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <ProductSlide
          title="SignHub"
          titleColor="#FB923C"
          description={"Kendi kullanıcı arayüzlerinizi geliştirmeye gerek duymadan, 1 gün içerisinde mevcut sisteminizde e-imza atılmaya başlansın.\n\nİmzalanacak belgeler otomatik olarak ilgili kişilere gönderilsin, belgeler imzalansın, siz imzalanmış belgeyi indirin."}
          color="bg-[#F5F3FF]"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <ProductSlide
          title="Onaylarım SSO"
          titleColor="#C026D3"
          description="Parolasız SSO ile kullanıcılarınızı saniyeler içinde güvenle oturum açtırın. 5070 sayılı Kanuna uygun, KVKK ile uyumlu süreç tasarımı."
          color="bg-[#F5F3FF]"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300}>
        <Outro />
      </Series.Sequence>
    </Series>
  );
};
