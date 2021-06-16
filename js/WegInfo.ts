namespace Medieninstallationen {
   export interface KonstruktionsWege {
        [key:string] : Wege[];
    }

    export interface Wege {
        K1: number;
        K2:number;
        audio:string;
    }

    export let Wanderweg: KonstruktionsWege = {
        "Kuenstler":[
        {K1:48.0478775, K2:8.1867209, audio:"./Audio/anfang.mp3"}
        ]
    }
}