import ContentType from "./ContentType";

const content: ContentType = {
    congratulation: {
        congrats: "تهانينا",
        error: "للأسف، حدث خطأ ما",
        link: "العودة إلى الطرود"
      },
      shipment: {
        error: "لم يتم تحديد أي معلومات شحن بعد.",
        name: "الاسم الكامل",
        sender: {
          BM: "الاسم الكامل أو اسم الشركة",
          RAN: ""
        },
        phone: "رقم الهاتف",
        province: "الولاية",
        city: "المدينة",
        postalCode: "الرمز البريدي",
        addresses: "العناوين"
      },
      switch: "مرحبًا"
};

export default content;
