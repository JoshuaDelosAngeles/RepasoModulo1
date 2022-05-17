export class Mobile 
{
    private name :string;
    private model : string;
    private trademark:string;
    private sdSize : number;
    private color : string;
    private is5G: boolean;
    private cameraNumber: number ;
    private price : number ;

constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number){
  
    this. name = name
    this. model = model
    this. trademark =trademark
    this. sdSize = sdSize
    this .color =color
    this. is5G = is5G
    this. cameraNumber = cameraNumber
    this. price = price
}
print():string{
return (`The characteristics of the mobile name are: \n Name: ${this.name} \n Model: ${this.model} \n Trademark: ${this.trademark} \n SD Size (GB): ${this.sdSize} \n Color: ${this.color} \n Is 5g?: ${this.is5G} \n Number of Cameras: ${this.cameraNumber} `)
    }

public getName(){
    return this.name
}
public getModel(){
    return this.model
}
public getTrademark(){
    return this.trademark
}
public getSdSize(){
    return this.sdSize
}
public getColor(){
    return this.color
}
public getIs5G(){
    return this.is5G
}
public getCameraNumber(){
    return this.cameraNumber
}
public getPrice(){
    return this.price
}
public setName(newname:string){
    return this.name = newname
}
public setModel(newmodel:string){
    return this.model=newmodel
}
public setTrademark(newtrademark:string){
    return this.trademark=newtrademark
}
public setSdSize(newsdsize:number){
    return this.sdSize=newsdsize
}
public setColor(newcolor:string){
return this.color=newcolor
}
public setIs5G(newis5g:boolean){
    return this.is5G=newis5g
}
public setCameraNumber(newcameranum:number){
    return this.cameraNumber=newcameranum
}
public setPrice(newprice:number){
    return this.price=newprice
}
}
