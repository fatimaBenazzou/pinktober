import ContentType from "./ContentType";

const content: ContentType = {
    congratulation: {
        congrats: "Félicitations",
        error: "Malheureusement, une erreur s'est produite",
        link: "Retourner aux colis",
    },
    shipment: {
        error: "Aucune information d'expédition n'a encore été sélectionnée.",
        name: "Nom complet",
        sender: {
            BM: "Nom de l'entreprise",
            RAN: "Nom d'attention du destinataire",
        },
        phone: "Numéro de téléphone",
        province: "Province",
        city: "Ville",
        postalCode: "Code postal",
        addresses: "Adresses",
    },
    switch: "Bienvenue",
};

export default content;
