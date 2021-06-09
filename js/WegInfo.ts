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
        {K1:08787, K2:234567, audio:"./Audio/anfang.mp3"}
        ]
    }
}