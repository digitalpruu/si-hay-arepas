const title = "Si hay arepas Y tamales aguachiquenses";
const email = "espinosaropero@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en probar los productos de ${title} y me gustaría recibir más información sobre sus tamales aguachiquenses y arepas. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3104793478";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Si hay arepas Y Tamales Aguachiquenses, es su destino para disfrutar de auténticos tamales aguachiquenses y arepa rellenas de queso y jamón . Con una pasión por la comida tradicional ,nos dedicamos a ofrecer productos que destacan por su sabor auténtico y calidad . Nuestros tamales son elaborados siguiendo recetas tradicionales que preservan el sabor genuino de esta deliciosa comida . Utilizamos  ingredientes frescos y técnicas cuidadosas para garantizar que cada tamal y arepa sea un verdadero deleite para el paladar . Además de nuestros tamales aguachiquenses, ofrecemos arepas rellenas de queso y jamón,  perfectas para complementar cualquier comida o disfrutar como un bocadillo sabroso. Cada producto está hecho con amor y dedicación para asegurar que cada bocado sea una experiencia memorable. En Si hay arepas Y Tamales Aguachiquenses, estamos comprometidos a brindarles una experiencia culinaria auténtica que resalte lo mejor de la tradición y el sabor.         ¡Ven y disfruta nuestros productos, porque Sí, hay arepas y tamales aguachiquenses! "
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Sí, hay arepas y tamales aguachiquenses",
            p2: "Sabores auténticos que conquistan el paladar",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/yanith.espinosaropero.3?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
