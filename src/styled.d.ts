import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        color:{
            silver:string;
            white:string;
            white2:string;
            white3:string;
            black:string;
            pupleHeart:string;
            pupleHeart2:string;
        },
        fontSize:{
            s:string;
            m:string;
            l:string;
            xl:string;
            xxl:string;
        }
    }
}