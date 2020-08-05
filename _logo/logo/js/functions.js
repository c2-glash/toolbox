// Mon projet par défaut
console.log('functions.js');

let writableSpace = document.getElementById("contentJS"); //  HTML tag where you should write
// use this function to write something to HTML
function writeThat(logHTML) {
    writableSpace.innerHTML += `<p>${logHTML}</p>`;
}

//// Générer un nombre aléatoire entier dans une intervalle
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//// Afficher un tableau JS en tableau HTML
// function getHTMLfromArray(anArray) {
function displayHTMLfromArray(anArray) {
    // On crée un tableau d'une seule ligne
    let HTMLArray = `
        <table>
            <tbody>
                <tr>
    `;

    // Pour chaque entrée dans le tableau, on crée une cellule
    for(let i = 0 ; i < anArray.length ; i++) {
        HTMLArray += `<td>${anArray[i]}</td>`;
    }

    // On referme la ligne, puis le tableau
    HTMLArray += `
                </tr>
            </tbody>
        </table>
        <hr>
    `;

    // Et on affiche ou renvoie le HTML
    // return HTMLArray;
    document.write(HTMLArray);
}

// /// On peut utiliser une ou plusieurs fonctions dans une boucle
// let cave = [
//     ['Grim blonde 1', 'Grim blonde 2', 'Grim blonde 5', 'Grim blonde 3', 'Grim blonde 4'],
//     ['Grim rouge', 'Grim rouge', 'Grim rouge', 'Grim rouge'],
//     ['Chouffe 1', 'Chouffe 5', 'Chouffe 3', 'La meilleure Chouffe', 'Chouffe 4'],
//     ['Skoll', 'Skoll', 'Skoll']
// ];

// for(let i = 0 ; i < cave.length ; i++) {
//     displayHTMLfromArray(cave[i]);
// }


//// Saisie d'un nombre obligatoire
function saisieNombreObligatoire() {
    // Première demande
    let saisie = window.prompt("Saisissez un nombre svpliz");
    let saisieConvertie = parseFloat(saisie);

    // Tant que c'est pas bon ou annulé..
    while(isNaN(saisieConvertie) && saisie != null) {
        // On redemande
        let saisie = window.prompt("Saisissez un nombre svpliz");
        saisieConvertie = parseFloat(saisie);
    }

    // Si l'utilisateur a bien saisi un nombre...
    if(!isNaN(saisieConvertie)) {
        // .. On l'affiche
        // document.write(`Vous avez saisi ${saisieConvertie}`);
        return saisieConvertie;
    }
    // Sinon (saisie == null) > L'utilisateur à annulé
    // else { // optimisation via return
        // document.write(`Vous avez annulé :'(`);
        return `Vous avez annulé :'(`;
    // }
}



//// Fonctions liées aux projet