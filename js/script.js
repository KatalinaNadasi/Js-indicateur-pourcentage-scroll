const bar = document.querySelector('.bar');

addEventListener("scroll", function (){
  console.log(`
    Taille page: ${document.body.scrollHeight}
    Taille affichage: ${innerHeight}
    Position scroll: ${pageYOffset}
    `);
});
