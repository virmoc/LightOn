class Lampa{
    constructor(elem, index){
        this.elem = elem; 
        this.allapot=false;
        this.index = index;
        this.setSzin();
        //Eseménykezelők

        //ha rákattintunk az elemre
        //állapotot meg kell változtatni
        //mehívni setSzint
        

        this.elem.on("click", ()=>{
            console.log(this);// nyíl függvény esetén a this az obj-re mutat
            this.setAllapot();
            //this.allapot =! this.allapot;
            //this.setSzin();
            this.KattintasTrigger();//ezzel váltjuk ki az eseményt
        });
        
    }
    setAllapot(){
        this.allapot =! this.allapot;
        this.setSzin();
    }

    setSzin(){
        if(this.allapot){
        this.elem.css("background-color", "green");
        }else{
            this.elem.css("background-color", "orange");
        }
    }
    //saját esemény definiálása
    KattintasTrigger(){
        //let esemeny = new Event("lampaFelkapcsolEsemény");
        let esemeny = new CustomEvent("lampaFelkapcsolEsemeny",{detail:this.index});//ehezz tudunk adatot csatolni
        //úgy hozzuk létre az eseményt hogy az is megmondjuk hogy melyik objektum váltotta ki
        //console.log("esemény kiváltása");
        window.dispatchEvent(esemeny);// ez azért kell h a js.-ben lássuk
    }



}