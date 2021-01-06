const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

// Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi

let courseAverage = [];
function dersOrtalamasi() {
    for (let satir = 1; satir < notes[0].length; satir++) {
        notToplami = 0
        for (let sutun = 0; sutun < notes.length; sutun++) {
            notToplami = notToplami + notes[sutun][satir];
        }
        Ortalama = notToplami / notes.length
        courseAverage.push(Ortalama)
    }
    return;
}
console.log(dersOrtalamasi(), "math average:", courseAverage[0], "german average:", courseAverage[1], "English average:", courseAverage[2], "geography average:", courseAverage[3])

// Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi

const desired_score = 70;
let yetmisAlanlar = []
function istenenPuan() {
    for (let sutun = 0; sutun < notes.length; sutun++) {
        for (let satir = 1; satir < notes.length; satir++) {
            if (desired_score < notes[sutun][satir]) {
                yetmisAlanlar.push(notes[sutun][0])
                break;
            }
        }
    }
    return;
}
console.log("Students who score above 70 p.:", istenenPuan(), yetmisAlanlar)

// Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi

const mathAverage = courseAverage[0]
const germanAverage = courseAverage[1]
const englishAverage = courseAverage[2]
const geographyaverage = courseAverage[3]
let successfulStudentsMath = []
let successfulStudentsGerman = []
let successfulStudentsEnglish = []
let successfulStudentsGeography = []

for (let sutun = 0; sutun < notes.length; sutun++) {
    if (notes[sutun][1] > mathAverage) {
        successfulStudentsMath.push(notes[sutun][0]);
    }
    if (notes[sutun][2] > germanAverage) {
        successfulStudentsGerman.push(notes[sutun][0]);
    }
    if (notes[sutun][3] > englishAverage) {
        successfulStudentsEnglish.push(notes[sutun][0]);
    }
    if (notes[sutun][4] > geographyaverage) {
        successfulStudentsGeography.push(notes[sutun][0]);
    }
}

console.log("On average in mathematics:", successfulStudentsMath)
console.log("On average in german:", successfulStudentsGerman)
console.log("On average in english:", successfulStudentsEnglish)
console.log("On average in geography:", successfulStudentsGeography)

// Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
// Sinifin en kötü oldugu dersi gostermesi

let enKotucourseAverage = 100;
let enIyicourseAverage = 0;
let enKotuDers = "";
let enIyiDers = "";

for (let sayac = 0; sayac < courseAverage.length; sayac++) {
    if (enIyicourseAverage < courseAverage[sayac]) {
        enIyicourseAverage = courseAverage[sayac];
    }
    if (enKotucourseAverage > courseAverage[sayac]) {
        enKotucourseAverage = courseAverage[sayac];
    }
}

if (enIyicourseAverage === mathAverage) {
    enIyiDers = "Math";
} else if (enIyicourseAverage === germanAverage) {
    enIyiDers = "German";
} else if (enIyicourseAverage === englishAverage) {
    enIyiDers = "English";
} else {
    enIyiDers = "Geography";
}

if (enKotucourseAverage === mathAverage) {
    enKotuDers = "Math";
} else if (enKotucourseAverage === germanAverage) {
    enKotuDers = "German";
} else if (enKotucourseAverage === englishAverage) {
    enKotuDers = "English";
} else {
    enKotuDers = "Geography";
}

console.log("The best lesson:", enIyiDers);
console.log("The worst lesson:", enKotuDers);

// Tüm derslerin en iyi ögrencilerini bulmasi

let matematiktenEnYüksekPuanAlan = "";
let matematikPuani = 0;
let almancadanEnYüksekPuanAlan = "";
let almancaPuani = 0;
let ingilizcedenEnYüksekPuanAlan = "";
let ingilizcePuani = 0;
let CografyadanEnYüksekPuanAlan = "";
let cografyaPuani = 0;

for (let sutun = 0; sutun < notes.length; sutun++) {

    if (notes[sutun][1] > matematikPuani) {
        matematikPuani = notes[sutun][1];
        matematiktenEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][2] > almancaPuani) {
        almancaPuani = notes[sutun][2];
        almancadanEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][3] > ingilizcePuani) {
        ingilizcePuani = notes[sutun][3];
        ingilizcedenEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][4] > cografyaPuani) {
        cografyaPuani = notes[sutun][4];
        CografyadanEnYüksekPuanAlan = notes[sutun][0];
    }
}

console.log("the most successful student in math:", matematiktenEnYüksekPuanAlan)
console.log("the most successful student in german:", almancadanEnYüksekPuanAlan)
console.log("the most successful student in english:", ingilizcedenEnYüksekPuanAlan)
console.log("the most successful student in geography:", CografyadanEnYüksekPuanAlan)