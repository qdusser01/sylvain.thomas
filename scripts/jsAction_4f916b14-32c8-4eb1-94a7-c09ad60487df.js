// Déclaration d'une fonction pour mettre les nombres avec 2 digits
function gerer2digits(nombre) {
     if (nombre < 10)
    {
        nombre = "0"+nombre;
    }
  return nombre;
}

// Récupération de la catégorie de l'animal'
var categorieAnimal = context.variableManager.getValue("nomCategorie");
if (categorieAnimal == null) {
        context.fail("Aucune catégorie trouvée");
}

// Récupération du code l'animal'
var animalAchete = context.variableManager.getValue("itemId_rand");
if (animalAchete == null) {
        context.fail("Aucun animal trouvé");
}

//R2cupération de la date
var timestampAjout = new Date();

var formatheuresMinutes=gerer2digits(timestampAjout.getHours())+":"+gerer2digits(timestampAjout.getMinutes());
var formatDate = timestampAjout.getDate()+"/"+gerer2digits(timestampAjout.getMonth()+1)+"/"+timestampAjout.getFullYear() ;

logger.debug("L'animal "+animalAchete+" de la categorie "+categorieAnimal+" a été acheté le "+formatDate+" à "+formatheuresMinutes);