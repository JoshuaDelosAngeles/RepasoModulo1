import { Mobile } from "./hoja2";

let Nokia3210 = new Mobile('nokia3210','3210','Nokia',16,'azul',false,3,400)
let iphone3G = new Mobile('iphone3g','3g','apple',32,'blanco',false,3,600)
let SamsungGalaxy10= new Mobile('SamsungGalaxy10','Galaxi10','Samsum',32,'negro',true,4,800)
console.log(Nokia3210);
console.log(iphone3G);
console.log( SamsungGalaxy10);

Nokia3210.is5G = true;
Nokia3210.cameraNumber=4;
console.log(Nokia3210);
console.log(iphone3G);
console.log(SamsungGalaxy10);





