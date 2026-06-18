import {
   BUMBLEBEETHEME,
   CARAMELLATTETHEME,
   COFFETHEME,
   CORPORATETHEME,
   CUPCAKETHEME,
   DARKTHEME,
   EMERALADTHEME,
   FORESTTHEME,
   LIGHTTHEME,
   LUXURYTHEME,
   VALENTINETHEME,
} from './Constants';

interface ThemesConfigType {
   name: string;
   activate: boolean;
}
export const ThemesConfig: ThemesConfigType[] = [
   { name: LIGHTTHEME, activate: true },
   { name: DARKTHEME, activate: true },
   { name: CUPCAKETHEME, activate: false },
   { name: BUMBLEBEETHEME, activate: false },
   { name: EMERALADTHEME, activate: false },
   { name: VALENTINETHEME, activate: true },
   { name: CORPORATETHEME, activate: false },
   { name: FORESTTHEME, activate: true },
   { name: LUXURYTHEME, activate: false },
   { name: COFFETHEME, activate: true },
   { name: CARAMELLATTETHEME, activate: false },
];
