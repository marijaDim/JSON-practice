// // promenljiva u kojoj sam smestila podatke o studentu u vidu stringa JSON; i konvertovana u JS objekat

// var student= `{
//     "ime":"marija",
//     "prezime":"dimitrijevic",
//     "broj indeksa": "123/18",
//     "godina indeksa": 2018
// }`;
// console.log(typeof student, student);

// var studentJs=JSON.parse(student);
// console.log(studentJs);

// // vrednosti objekta, menjanje i brisanje istih

// let vrednostIme=studentJs.ime;
// vrednostIme="natasa";
// console.log(vrednostIme);
// delete vrednostIme;

//ispis svih svojstva objekta
// for (x in studentJs){

//     document.getElementById("studenti").innerHTML+= studentJs[x] + "<br>";
// }
//ispis ime i prezime
// for (x in studentJs){

//     document.getElementById("studenti").innerHTML = studentJs.ime +" "+ studentJs.prezime;
// }


// promenljiva u kojoj sam smestila podatke o studentu u vidu JS objekta; i konvertovala u u JSON

// var studentJS= {
//     ime: "ana",
//     prezime:"antic",
//     brojIndeksa: "321/19",
//     godinaIndeksa: 2019
// }
// console.log(studentJS, typeof studentJS);
// var studentJson=JSON.stringify(studentJS);
// console.log(studentJson);

// for (x in studentJson){

//     document.getElementById("studenti").innerHTML+= studentJson[x];
// }


//kreiram JSON koji cuva podatke o vise studenata, proverila ispravnost, i cuvam u vidu JS objekta

var studentiJS = [{
    ime: "Marko",
    prezime: "Markovic",
    brojIndeksa: "123/22",
    godinaIndeksa: 2022
}, {
    ime: "Pera",
    prezime: "Peric",
    brojIndeksa: "456/19",
    godinaIndeksa: 2019
}];

// Istampati u formi liste sve studente u bloku sa id="studenti"

function listaSt() {
    var ispis = "<ul>";

    studentiJS.forEach(student => {
        ispis += `<li>${student["ime"]} ${student["prezime"]}</li>`
    });

    ispis += "</ul>";

    document.getElementById("studenti").innerHTML = ispis;
}

listaSt();

// Pretraziti kreirani niz studenata po godiniIndeksa

document.getElementById("btnPretrazi").addEventListener("click", pretrazi);

function pretrazi() {
    var godinaIndeksa = document.getElementById("pretraga").value;

    if (godinaIndeksa === "") {
        listaSt();
    } else if (!isNaN(godinaIndeksa)) {
        godinaIndeksa = document.getElementById("pretraga").value;

        var ispis = "<ul>";
        studentiJS.forEach(student => {
            if (student["godinaIndeksa"] == godinaIndeksa) {
                ispis += `<li>${student["ime"]} ${student["prezime"]}</li>`
            }
        });
        ispis += "</ul>";

        document.getElementById("studenti").innerHTML = ispis;
    } else {
        document.getElementById("studenti").innerHTML = "Unesite godinu u ispravnom formatu (yyyy)";
    }
}

// Kreirati JSON sa podacima o knjigama: naziv, godina izdanja, izdavac i ime i prezime autora

var knjigeString = `[{
    "naziv": "Web dizajn",
    "godinaIzdanja": 2021,
    "izdavac": "Code",
    "autori":  [{
        "ime": "Milos",
        "prezime": "Mikic"
    },{
        "ime": "Pera",
        "prezime": "Peric"
    }]
},{
    "naziv": "Front end developer 2021",
    "godinaIzdanja": 2021,
    "izdavac": "Code Comtrade",
    "autori":  [{
        "ime": "Mika",
        "prezime": "Mikic"
    }]
}]`;

var knjigeJSON = JSON.parse(knjigeString);


