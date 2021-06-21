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
        {K1:48.0479222, K2:8.1867135, audio:"./Audio/anfang.mp3", kontrolle:0},//Test sitzplatz
        {K1:48.048335, K2:8.1855334, audio:"./Audio/anfang.mp3", kontrolle:0},//start
        {K1:48.0487373, K2:8.185872, audio:"./Audio/anfang.mp3", kontrolle:0},//1rechts
        {K1:48.0481495, K2:8.1865537, audio:"./Audio/anfang.mp3",kontrolle:0},//1links
        {K1:48.0484819, K2:8.1843108, audio:"./Audio/anfang.mp3",kontrolle:0},//2rechts
        {K1:48.0484129, K2:8.1836601, audio:"./Audio/anfang.mp3",kontrolle:0},//2links
        {K1:48.0464615, K2:8.1935399, audio:"./Audio/anfang.mp3",kontrolle:0},//3rechts
        {K1:48.0464615, K2:8.1968946, audio:"./Audio/anfang.mp3",kontrolle:0},//3links
        ]
    }
}