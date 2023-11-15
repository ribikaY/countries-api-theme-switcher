export interface Country{
    name: {
      common: string;
      official: string;
      nativeName?: string;  
    };
    tld:string[];
    currencies:any;
    capital:string[];
    altSpellings:string[];
    region:string;
    subregion:string;
    languages:any;
    flags:{
        png:string;
        svg:string;
    };
    borders:string[];
    population:number;
    [key: string]: any | undefined; // String index signature for dynamic property names
}