const { LocalStorage } = require('node-localstorage');

// Créer une instance de LocalStorage
const localStorage = new LocalStorage('./scratch');

// Ajouter un élément dans le local storage
localStorage.setItem('username', 'mezzi');

// Récupérer un élément du local storage
const username = localStorage.getItem('username');
console.log(`Username: ${username}`);

// Supprimer un élément du local storage
localStorage.removeItem('username');

// Vérifier si l'élément a été supprimé
const deletedUsername = localStorage.getItem('username');
console.log(`Deleted Username: ${deletedUsername}`); // devrait être null ou undefined
