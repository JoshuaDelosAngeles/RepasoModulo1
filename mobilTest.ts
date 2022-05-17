import { Mobile } from "./hoja2ejercicio3";

let Nokia3210 = new Mobile('nokia3210','3210','Nokia',16,'azul',false,3,400)
let iphone3G = new Mobile('iphone3g','3g','apple',32,'blanco',false,3,600)
let SamsungGalaxy10= new Mobile('SamsumGalaxi10','Galaxi10','Samsum',32,'negro',true,4,800)
let telefonos:Mobile[]=[Nokia3210,iphone3G,SamsungGalaxy10]

console.log(Nokia3210.print());
console.log(iphone3G.print());
console.log(SamsungGalaxy10.print());
Nokia3210.setIs5G(true)
Nokia3210.setCameraNumber(4)
console.log(Nokia3210.print());
console.log(telefonos);

