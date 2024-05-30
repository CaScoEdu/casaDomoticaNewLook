
function commuta(id_img) {

    const IMG = document.getElementById(id_img);
    let testoAlternativo = IMG.alt;

    const TESTO_LUCE_SPENTA = "OFF";
    const TESTO_LUCE_ACCESA = "ON";

    if (testoAlternativo == TESTO_LUCE_SPENTA) 
        testoAlternativo = TESTO_LUCE_ACCESA;

    else 
        testoAlternativo = TESTO_LUCE_SPENTA;

    IMG.src = "img/lightBulb_" + testoAlternativo + ".png";
    IMG.alt = testoAlternativo;
    IMG.title = id_img + " " + testoAlternativo;
}