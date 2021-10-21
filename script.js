$(function(){
    //a szülő elem és a sablon elem meghatározása
    const szuloElem=$("article");
    const sablonElem=$(".lampa");
    //a sablon elem clonozása és a szülő elemhez csatolása
    //const ujElem=sablonElem.clone().appendTo(szuloElem);
    //console.log(ujElem);
    //a példányosítás
    const meret=9;
    const lampaTomb = [];
    

    for (let index = 0; index < meret; index++)  {
            const ujElem=sablonElem.clone().appendTo(szuloElem);
            
            const lampa = new Lampa(ujElem, index);
            //az objektumokat beletesszük egy tömbe
            lampaTomb.push(lampa);
            
        }


    
    sablonElem.remove();
    console.log(lampaTomb);

    //feliratkozás az eseményre
    $(window).on("lampaFelkapcsolEsemeny", (esemeny)=>{
        console.log(esemeny.detail);
            let elemID= esemeny.detail;
            let meret = 3;
            //szomszedos elem:
            if(elemID > meret -1){
                lampaTomb[elemID - meret].setAllapot(); 
            }
            if(elemID < meret * meret - meret){
                lampaTomb[elemID + meret].setAllapot(); 
            }
            if(elemID % meret !== 0){
                lampaTomb[elemID - 1].setAllapot(); 
            }
            
            
            if(elemID % meret !== meret -1){
                lampaTomb[elemID + 1].setAllapot(); 
            }
                        


    });
});