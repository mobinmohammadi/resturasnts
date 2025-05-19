
const DataAllCities = [

    {
      "id": 1,
      "name": "آذربایجان شرقی",
      "capital": "تبریز",
      "fenglish": "east-azerbaijan",
      "cities": [
        {"id": 1, "name": "تبریز"},
        {"id": 2, "name": "مراغه"},
        {"id": 3, "name": "مرند"},
        {"id": 4, "name": "اهر"},
        {"id": 5, "name": "میانه"},
        {"id": 6, "name": "بناب"},
        {"id": 7, "name": "اسکو"},
        {"id": 8, "name": "آذرشهر"},
        {"id": 9, "name": "شبستر"}
      ]
    },
    {
      "id": 2,
      "name": "آذربایجان غربی",
      "capital": "ارومیه",
      "fenglish": "west-azerbaijan",
      "cities": [
        {"id": 10, "name": "ارومیه"},
        {"id": 11, "name": "خوی"},
        {"id": 12, "name": "ماکو"},
        {"id": 13, "name": "مهاباد"},
        {"id": 14, "name": "سلماس"},
        {"id": 15, "name": "پیرانشهر"},
        {"id": 16, "name": "شاهین‌دژ"},
        {"id": 17, "name": "تکاب"}
      ]
    },
    {
      "id": 3,
      "name": "اردبیل",
      "capital": "اردبیل",
      "fenglish": "ardabil",
      "cities": [
        {"id": 18, "name": "اردبیل"},
        {"id": 19, "name": "پارس‌آباد"},
        {"id": 20, "name": "خلخال"},
        {"id": 21, "name": "مشکین‌شهر"},
        {"id": 22, "name": "گرمی"},
        {"id": 23, "name": "نیر"},
        {"id": 24, "name": "نمین"}
      ]
    },
    {
      "id": 4,
      "name": "اصفهان",
      "capital": "اصفهان",
      "fenglish": "esfahan",
      "cities": [
        {"id": 25, "name": "اصفهان"},
        {"id": 26, "name": "کاشان"},
        {"id": 27, "name": "خمینی‌شهر"},
        {"id": 28, "name": "شاهین‌شهر"},
        {"id": 29, "name": "نجف‌آباد"},
        {"id": 30, "name": "اردستان"},
        {"id": 31, "name": "گلپایگان"},
        {"id": 32, "name": "نائین"}
      ]
    },
    {
      "id": 5,
      "name": "البرز",
      "capital": "کرج",
      "fenglish": "alborz",
      "cities": [
        {"id": 33, "name": "کرج"},
        {"id": 34, "name": "هشتگرد"},
        {"id": 35, "name": "نظرآباد"},
        {"id": 36, "name": "طالقان"},
        {"id": 37, "name": "اشتهارد"},
        {"id": 38, "name": "فردیس"},
        {"id": 39, "name": "ماهدشت"}
      ]
    },
    {
      "id": 6,
      "name": "ایلام",
      "capital": "ایلام",
      "fenglish": "ilam",
      "cities": [
        {"id": 40, "name": "ایلام"},
        {"id": 41, "name": "ایوان"},
        {"id": 42, "name": "دهلران"},
        {"id": 43, "name": "مهران"},
        {"id": 44, "name": "دره‌شهر"},
        {"id": 45, "name": "آبدانان"}
      ]
    },
    {
      "id": 7,
      "name": "بوشهر",
      "capital": "بوشهر",
      "fenglish": "bushehr",
      "cities": [
        {"id": 46, "name": "بوشهر"},
        {"id": 47, "name": "برازجان"},
        {"id": 48, "name": "خارک"},
        {"id": 49, "name": "گناوه"},
        {"id": 50, "name": "دیلم"},
        {"id": 51, "name": "کنگان"},
        {"id": 52, "name": "جم"}
      ]
    },
    {
      "id": 8,
      "name": "تهران",
      "capital": "تهران",
      "fenglish": "tehran",
      "cities": [
        {"id": 53, "name": "تهران"},
        {"id": 54, "name": "اسلام‌شهر"},
        {"id": 55, "name": "شهریار"},
        {"id": 56, "name": "پاکدشت"},
        {"id": 57, "name": "ورامین"},
        {"id": 58, "name": "رباط‌کریم"},
        {"id": 59, "name": "قدس"},
        {"id": 60, "name": "ملارد"}
      ]
    },
    {
      "id": 9,
      "name": "چهارمحال و بختیاری",
      "capital": "شهرکرد",
      "fenglish": "chaharmahal-bakhtiari",
      "cities": [
        {"id": 61, "name": "شهرکرد"},
        {"id": 62, "name": "بروجن"},
        {"id": 63, "name": "فرخ‌شهر"},
        {"id": 64, "name": "لردگان"},
        {"id": 65, "name": "اردل"},
        {"id": 66, "name": "سامان"}
      ]
    },
    {
      "id": 10,
      "name": "خراسان جنوبی",
      "capital": "بیرجند",
      "fenglish": "south-khorasan",
      "cities": [
        {"id": 67, "name": "بیرجند"},
        {"id": 68, "name": "قائن"},
        {"id": 69, "name": "فردوس"},
        {"id": 70, "name": "نهبندان"},
        {"id": 71, "name": "سربیشه"},
        {"id": 72, "name": "درمیان"}
      ]
    },
    {
      "id": 11,
      "name": "خراسان رضوی",
      "capital": "مشهد",
      "fenglish": "razavi-khorasan",
      "cities": [
        {"id": 73, "name": "مشهد"},
        {"id": 74, "name": "نیشابور"},
        {"id": 75, "name": "سبزوار"},
        {"id": 76, "name": "تربت‌حیدریه"},
        {"id": 77, "name": "قوچان"},
        {"id": 78, "name": "کاشمر"},
        {"id": 79, "name": "گناباد"}
      ]
    },
    {
      "id": 12,
      "name": "خراسان شمالی",
      "capital": "بجنورد",
      "fenglish": "north-khorasan",
      "cities": [
        {"id": 80, "name": "بجنورد"},
        {"id": 81, "name": "شیروان"},
        {"id": 82, "name": "اسفراین"},
        {"id": 83, "name": "فاروج"},
        {"id": 84, "name": "مانه و سملقان"}
      ]
    },
    {
      "id": 13,
      "name": "خوزستان",
      "capital": "اهواز",
      "fenglish": "khuzestan",
      "cities": [
        {"id": 85, "name": "اهواز"},
        {"id": 86, "name": "دزفول"},
        {"id": 87, "name": "آبادان"},
        {"id": 88, "name": "خرمشهر"},
        {"id": 89, "name": "بهبهان"},
        {"id": 90, "name": "مسجدسلیمان"},
        {"id": 91, "name": "شوش"},
        {"id": 92, "name": "اندیمشک"}
      ]
    },
    {
      "id": 14,
      "name": "زنجان",
      "capital": "زنجان",
      "fenglish": "zanjan",
      "cities": [
        {"id": 93, "name": "زنجان"},
        {"id": 94, "name": "ابهر"},
        {"id": 95, "name": "خدابنده"},
        {"id": 96, "name": "خرمدره"},
        {"id": 97, "name": "ماهنشان"}
      ]
    },
    {
      "id": 15,
      "name": "سمنان",
      "capital": "سمنان",
      "fenglish": "semnan",
      "cities": [
        {"id": 98, "name": "سمنان"},
        {"id": 99, "name": "شاهرود"},
        {"id": 100, "name": "دامغان"},
        {"id": 101, "name": "گرمسار"},
        {"id": 102, "name": "مهدی‌شهر"}
      ]
    },
    {
      "id": 16,
      "name": "سیستان و بلوچستان",
      "capital": "زاهدان",
      "fenglish": "sistan-baluchestan",
      "cities": [
        {"id": 103, "name": "زاهدان"},
        {"id": 104, "name": "زابل"},
        {"id": 105, "name": "چابهار"},
        {"id": 106, "name": "ایرانشهر"},
        {"id": 107, "name": "خاش"},
        {"id": 108, "name": "سراوان"}
      ]
    },
    {
      "id": 17,
      "name": "فارس",
      "capital": "شیراز",
      "fenglish": "fars",
      "cities": [
        {"id": 109, "name": "شیراز"},
        {"id": 110, "name": "مرودشت"},
        {"id": 111, "name": "جهرم"},
        {"id": 112, "name": "کازرون"},
        {"id": 113, "name": "فسا"},
        {"id": 114, "name": "داراب"},
        {"id": 115, "name": "لار"},
        {"id": 116, "name": "نی‌ریز"}
      ]
    },
    {
      "id": 18,
      "name": "قزوین",
      "capital": "قزوین",
      "fenglish": "qazvin",
      "cities": [
        {"id": 117, "name": "قزوین"},
        {"id": 118, "name": "تاکستان"},
        {"id": 119, "name": "آبیک"},
        {"id": 120, "name": "البرز"},
        {"id": 121, "name": "بویین‌زهرا"}
      ]
    },
    {
      "id": 19,
      "name": "قم",
      "capital": "قم",
      "fenglish": "qom",
      "cities": [
        {"id": 122, "name": "قم"},
        {"id": 123, "name": "جعفریه"},
        {"id": 124, "name": "دستجرد"},
        {"id": 125, "name": "سلفچگان"}
      ]
    },
    {
      "id": 20,
      "name": "کردستان",
      "capital": "سنندج",
      "fenglish": "kurdistan",
      "cities": [
        {"id": 126, "name": "سنندج"},
        {"id": 127, "name": "سقز"},
        {"id": 128, "name": "مریوان"},
        {"id": 129, "name": "بانه"},
        {"id": 130, "name": "قروه"},
        {"id": 131, "name": "بیجار"}
      ]
    },
    {
      "id": 21,
      "name": "کرمان",
      "capital": "کرمان",
      "fenglish": "kerman",
      "cities": [
        {"id": 132, "name": "کرمان"},
        {"id": 133, "name": "رفسنجان"},
        {"id": 134, "name": "سیرجان"},
        {"id": 135, "name": "بم"},
        {"id": 136, "name": "جیرفت"},
        {"id": 137, "name": "زرند"},
        {"id": 138, "name": "کهنوج"}
      ]
    },
    {
      "id": 22,
      "name": "کرمانشاه",
      "capital": "کرمانشاه",
      "fenglish": "kermanshah",
      "cities": [
        {"id": 139, "name": "کرمانشاه"},
        {"id": 140, "name": "اسلام‌آباد غرب"},
        {"id": 141, "name": "پاوه"},
        {"id": 142, "name": "کنگاور"},
        {"id": 143, "name": "سنقر"},
        {"id": 144, "name": "جوانرود"}
      ]
    },
]

    export default {DataAllCities}