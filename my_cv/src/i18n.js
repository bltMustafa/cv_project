import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      Student: "Öğrenci",
      DETAILS: "BİLGİLER",
      PROFILE: "PROFİL",
      EDUCATION: "EĞİTİM",
      EXPERINCE: "DENEYİM",
      SKILLS: "YETENEKLER",
      LANGUAGES: "DİLLER",
      PROFIL_INFO:
        "Profesyonel gelişimim ve kariyer hedeflerim doğrultusunda şirketinizde staj yapma arzusu içindeyim. Dört yıldır edindiğim yazılım geliştirme deneyimimle birlikte, çözüm odaklı bir yaklaşıma ve sıkı bir öğrenme isteğine sahibim. Sizinle birlikte çalışmak, şirket kültürünüze uyum sağlamak ve ekip başarısına katkıda bulunmak için sabırsızlanıyorum",
      SCHOOL_INFO:
        "Mehmet Akif Ersoy Üniversitesi, Bilgisayar Sistemleri ve Teknolojileri, Burdur",
      DATE_INFO: "EYLÜL 2020 - GÜNÜMÜZ",
      HIGH_SCHOOL_INFO: "Özel Ses Anadolu Lisesi, İskenderun",
      HIGH_SCHOOL_DATE_INFO: "HAZİRAN 2015 - HAZİRAN 2019",
      PROJECT_ONE: "Kişisel Kütüphane Uygulaması",
      PROJECT_ONE_DESCRIPTION:
        'Kullanıcıların okuduğu ve okumak istediği kitapları takip edebildiği bir "Kütüphanem" uygulaması.Kullanıcılar kitapları başlık, yazar veya türüne göre arayabilir, favori kitap listelerine ekleyebilir.',
      PROJECT_TWO: "Yemek Tarifi Arama Uygulaması",
      PROJECT_TWO_DESCRIPTION:
        "Kullanıcıların tercih ettikleri yemekleri kolayca bulabildikleri ve bu yemeklerin tariflerini görüntüleyebildikleri interaktif bir web site uygulaması",
      PROJECT_THREE: "Görev Takip Uygulaması",
      PROJECT_THREE_DESCRIPTION:
        "Kullanıcıların günlük olarak kaydettikleri görevleri ekleyebildikleri, silebildikleri ve güncelleyebildikleri bir görev takip uygulaması.Bu uygulama, kullanıcılara günlük işlerini düzenleme ve takip etme konusunda esneklik sunar. Kullanıcılar, yeni görevler ekleyebilir, var olan görevleri silebilir veya güncelleyebilir, böylece günlük görevlerini daha etkili bir şekilde yönetebilirler.",
      ENGLISH: "İNGİLİZCE",
      TURKISH: "TÜRKÇE",
    },
  },
  en: {
    translation: {
      Öğrenci: "Student",
      BİLGİLER: "DETAILS",
      PROFİL: "PROFILE",
      EĞİTİM: "EDUCATION",
      DENEYİM: "EXPERINCE",
      YETENEKLER: "SKILLS",
      DİLLER: "LANGUAGES",
      PROFIL_INFO:
        "Based on my professional development and career goals, I am eager to undertake an internship at your company. With four years of software development experience, I possess a solution-oriented approach and a strong desire for continuous learning. I am excited about the prospect of working with you, adapting to your company culture, and contributing to the success of the team.",
      SCHOOL_INFO:
        "Mehmet Akif Ersoy University, Computer Systems and Technologies, Burdur",
      DATE_INFO: "SEPTEMBER 2020 - PRESENT",
      HIGH_SCHOOL_INFO: "Private Ses Anatolian High School, İskenderun",
      HIGH_SCHOOL_DATE_INFO: "JULY 2015 - JULY 2019",
      PROJECT_ONE: "Personal Library Application",
      PROJECT_ONE_DESCRIPTION:
        "A 'My Library' application where users can track the books they have read and want to read. Users can search for books by title, author, or genre, and add them to their favorite book lists",
      PROJECT_TWO: "Recipe Search Application",
      PROJECT_TWO_DESCRIPTION:
        " An interactive web application where users can easily find their preferred dishes and view the recipes for those dishes",
      PROJECT_THREE: "Task Tracking Application",
      PROJECT_THREE_DESCRIPTION:
        " A task tracking application where users can add, delete, and update tasks they record on a daily basis. This application provides users with flexibility in organizing and tracking their daily tasks. Users can add new tasks, delete or update existing ones, allowing them to manage their daily tasks more effectively",
      İNGİLİZCE: "ENGLISH",
      TÜRKÇE: "TURKISH",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources,
});

export default i18n;
