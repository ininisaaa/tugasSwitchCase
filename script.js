let nilai = prompt("Masukan nilai :", 0);
let hasil ="";

switch(true){
case nilai <= 100 && nilai >= 91:
    hasil = " Nilai Anda adalah A";
    break;

case nilai <= 90 && nilai >=81:
    hasil = "Nilai Anda adalah B"
    break;

case nilai <= 80 && nilai >=71:
    hasil = "Nilai Anda adalah C";
    break;

case nilai <= 70 && nilai >=61:
    hasil = "Nilai Anda adalah D";
    break;
case nilai <= 60 && nilai >= 0:
    hasil = "Nilai Anda adalah F";
    break;
default:
    document.write("Nilai Anda tidak ada");

}
document.write(hasil);