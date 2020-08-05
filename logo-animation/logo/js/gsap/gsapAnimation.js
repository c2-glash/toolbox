window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let timelineLogo = gsap.timeline();

timelineLogo.
            //marker pour appeler les animations "circleSpin" en sync
            addLabel("circleSpin") 
            .to("#logo .halfCircle", {duration: 3, ease: "power2.inOut", rotation: 1820}, "circleSpin")
            .to("#logo .halfCircle", {duration: 3, ease: "power2.inOut", rotation: 1820}, "circleSpin")
            //marker pour appeler les animations "circleSlide" en sync
            .addLabel("circleSlide")
            .to("#logoCircleBas", {duration: .5, ease: "power3.in", left: 50, opacity: 0, delay: .5}, "circleSlide")
            .to("#logoCircleHaut", {duration: .5, ease: "power3.in", right: 50, opacity: 0, delay: .5}, "circleSlide")
            //on dégage les demi-cercles
            .set(".halfCircle", { duration: 0, display: 'none'})
            //on passe le logo en haut a gauche
            .to("#logoCenter", {duration: 1, ease: "power2.inOut", left: 25, top: 0, width: 120, height: 120, delay: .5})
            //on passe le logo en relative block et taille du conteneur logo en auto pour pousser le contenu de la page vers le bas
            .set("#logoCenter", { duration: 0, display: 'block', position: 'relative', left:0})
            .set("#logo", { duration: 0, height: 'auto' })
            //on fond l'overlay en transparent et on le dégage.
            .to("#overBg", {duration: 1, ease: "power2.inOut", opacity: 0})
            .set("#overBg", { duration: 0, display: 'none', delay: 1})
;