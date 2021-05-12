// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()

let obj = {
    nom : "blablabli",
    prenom : "mounitaaa", 
    age : 28,
    taille : "160 cm",
};
console.log(obj.age);

// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let perso2 = {
    nom : "bifidus",
    prenom : "georges-alain",
    age : 21,
    taille : "246 cm",
};
console.log(perso2);

let perso3 = {};
console.log(perso3);

// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez
perso3 = {
    nom : obj.nom,
    age : perso2.age,
    taille : prompt("entrez une taille"),
};
console.log(perso3);