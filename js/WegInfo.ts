namespace Medieninstallationen {
   export interface KonstruktionsWege {
        [key:string] : Wege[];
    }

    export interface Wege {
        K1: number;
        K2:number;
        audio:string;
        kontrolle:number;
    }

    export let Wanderweg: KonstruktionsWege = {
        "Kuenstler":[
        {K1:48.047806, K2:8.186788, audio:"./Audio/anfang.mp3", kontrolle:0},//Test sitzplatz
        {K1:48.048141, K2:8.185686, audio:"./Audio/anfang.mp3", kontrolle:0},
        {K1:48.046929, K2:8.184645, audio:"./Audio/anfang.mp3",kontrolle:0},
        {K1:48.046757, K2:8.184945, audio:"./Audio/anfang.mp3",kontrolle:0},
        {K1:48.047697, K2:8.182177, audio:"./Audio/anfang.mp3",kontrolle:0},
        {K1:48.047575, K2:8.181909, audio:"./Audio/anfang.mp3",kontrolle:0}
        ]
    }
}