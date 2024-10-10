// // declaración de arrays
//             //   0       1         2 
// let frutas = ["Mango","Fresas","Bananos"];
// //Mostrar datos
// document.write("fruta: "+frutas[2]+ "<br>")
// //recorrer datos de un array
// for (let x = 0; x < frutas.length; x++){
//     document.write("fruta -->"+frutas[x]+"<br>");
// }
// // declaracion de objetos 
// let verduras = {
//     //clave : valor
//     v1 : "Tomate",
//     v2 : "Cebolla",
//     v3 : "Zanahoria"
// };
// //mostrar datos
// document.write("verdura: "+ verduras.v2 + "<br>")
// //recorrer un objeto 
// for(let clave in verduras){
//     document.write("verdura -->"+verduras[clave]+"<br>")
// }

//sancocho de datos
// let sancocho = [
//     "texto",
//     true,
//     9890,
//     function (){
//         return "hola 😊";
//     },
//     ["sancocho 1", 666, false],
//     {
//         s1  : "sancocho 2",
//         s2  : 777

//     }
// ];
// //mostrar datos
// document.write("dato: "+ sancocho[0] + "<br>");
// document.write("dato: "+ sancocho[1] + "<br>");
// document.write("dato: "+ sancocho[2] + "<br>");
// document.write("dato: "+ sancocho[3]() + "<br>");
// document.write("dato: "+ sancocho[4][1] + "<br>");
// document.write("dato: "+ sancocho[5].s2 + "<br>");

//sancocho de datos con objeto
// let sancocho2 = {
//     s1 : "texto",
//     s2 : 9898,
//     s3 : false,
//     s4 : function () {
//         return "Hola😊";
//     },
//     s5 : ["sancho 1", 9020, true],
//     s6 : {
//         ss1 : "sancocho 2",
//         ss2 : 646446
//     }
// };
//mostrar datos
// document.write("dato: "+ sancocho2.s1 + "<br>");
// document.write("dato: "+ sancocho2.s2 + "<br>");
// document.write("dato: "+ sancocho2.s3 + "<br>");
// document.write("dato: "+ sancocho2.s4() + "<br>");
// document.write("dato: "+ sancocho2.s5[1] + "<br>");
// document.write("dato: "+ sancocho2.s6.ss1 + "<br>");

//otras formas de declarar objetos
// let verduras = {
//     v1 : "Tomate",
//     "v2" : "Cebolla",
//     23 : "Zanahoria"
// };
// document.write("dato: "+ verduras[23] + "<br>");

//algunos metodos de los arrays
let frutas = ["Sandia","Mango","Banano","Uva"];
//propiedad
//length -> indica cuantos datos hay en el arrays
document.write("frutas: "+frutas+"<br>");
document.write("Total frutas; "+frutas.length+"<br>");
// metodo puhs() -> agregar un dati al array en la ultima
// posicion
frutas.push("Manzana");
document.write("frutas: "+frutas+"<br>");
//metodo pop() -> eliminar el ultimo dato del array
frutas.pop();
document.write("frutas: "+frutas+"<br>");
document.write("Toral frutas: "+frutas.length+"<br>");
//metodo shift() -> eliminar el primer dato del array
frutas.shift();
document.write("frutas: "+frutas+"<br>");
document.write("Total frutas: "+frutas.length+"<br>");
//metodo unshift() -> agregar un dato al array en la primera posicion
frutas.unshift("Kiwi");
document.write("frutas: "+frutas+"<br>");
document.write("Total frutas: "+frutas.length+"<br>");
//metodo ciclo forEach() -> es un ciclo integrado en los arrays 
frutas.forEach(function( fruta, pos ){
    document.write(fruta+"<------>"+pos+"<br>");
});
//metodo slide() -> selecionas datos especificos
let frutaSeleccionadas = frutas.slice(2,3);
document.write("frutas: "+frutaSeleccionadas+"<br>")



//metodo splice() -> elimina o remplaza un dato de la lista 
let frutaEliminada = frutas.splice(2,0,"");
document.write("frutas: "+frutas+"<br>");