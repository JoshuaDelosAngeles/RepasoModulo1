import {Mobile} from "./hoja2ejercicio3";
import {MobileLibrary} from "./mobiLibrary"




let nokia3210: Mobile = new Mobile("Nokia", "Nokia 3210", 'nokia', 0, "Gris", false, 0, 40);
let iPhone3G: Mobile = new Mobile("IPhone", "iPhone3G", "Apple", 128, "Negro", false, 1, 200);
let samsungGalaxy10: Mobile = new Mobile("Samsung", "Galaxy 10", "Samsung", 256, "Negro", true, 4, 400)
let mobilesStock:Mobile[] = [nokia3210,iPhone3G,samsungGalaxy10]
let armobiles : MobileLibrary= new MobileLibrary('Tienda','Madrid',mobilesStock,2000)
 console.log(armobiles.getLocation());
 console.log(armobiles.getName());;
 console.log(armobiles.getTotalPrice());
 
 
 


