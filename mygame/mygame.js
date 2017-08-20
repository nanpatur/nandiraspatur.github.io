//PSEUDOCODE
//FUNGSI 'biodata':
//  INPUT dan SIMPAN karakter pada 'nama'
//  SIMPAN 'nama' diubah ke UpperCase pada 'namaBesar'
//  SIMPAN angka acak dibulatkan keatas pada 'mobil'
//  IF 'nama' sama dengan karakter kosong:
//    TAMPILKAN peringatan 'Silakan isi nama pembalapmu';
//  ELSE
//     SWITCH 'mobil':
//       CASE sama dengan 1 :
//         TAMPILKAN 'Selamat datang di INVISIBLE RACE CAR Pembalap 'namaBesar' Kamu menggunakan mobil Ferrari di balapan kali ini.'
//       ENDCASE
//       CASE sama dengan 2 :
//         TAMPILKAN 'Selamat datang di INVISIBLE RACE CAR Pembalap 'namaBesar' Kamu menggunakan mobil Mercedes di balapan kali ini.'
//       ENDCASE
//       CASE sama dengan 3 :
//         TAMPILKAN 'Selamat datang di INVISIBLE RACE CAR Pembalap 'namaBesar' Kamu menggunakan mobil Jaguar di balapan kali ini.'
//       ENDCASE
//       CASE sama dengan 4 :
//         TAMPILKAN 'Selamat datang di INVISIBLE RACE CAR Pembalap 'namaBesar' Kamu menggunakan mobil McLaren di balapan kali ini.'
//       ENDCASE
//       CASE sama dengan 5 :
//         TAMPILKAN 'Selamat datang di INVISIBLE RACE CAR Pembalap 'namaBesar' Kamu menggunakan mobil Porsche di balapan kali ini.'
//       ENDCASE
//     ENDSWITCH
//     TAMPILKAN tag input html SUBMIT 'Mulai Balapan'
//  ENDIF
//ENDFUNGSI
//SIMPAN angka acak dikali 10 dibulatkan keatas pada 'nomorMobil'
//SIMPAN angka acak dikali 10 dibulatkan keatas pada 'lineUp'
//SIMPAN 'nomorMobil' dikali angka acak dibulatkan keatas pada 'posisi'
//FUNGSI 'mulaiBalapan':
//  TAMPILKAN 'Balapan dimulai!!'
//  TAMPILKAN 'Kamu memulai balapan di posisi ke-' 'lineUp'
//  FOR setiap pertambahan 1 'i' dari 1 sampai dengan 10:
//    IF 'i' sama dengan 'posisi' lebih kecil dari 'lineUp':
//      TAMPILKAN 'Kamu menyusul pembalap lain!'
//    ELSE IF 'i' sama dengan 'posisi' lebih besar dari 'lineUp':
//      TAMPILKAN 'Kamu tertinggal oleh pembalap lain!'
//    ELSE IF 'posisi' dan 'lineUp' sama dengan 'i':
//      TAMPILKAN 'Kamu mempertahankan posisi'
//    ENDIF
//  ENDFOR
//  IF 'posisi' lebih kecil atau sama dengan 'lineUp':
//    TAMPILKAN 'Selamat, Kamu menyelesaikan Balapan di Posisi ke-' 'posisi'
//  ELSE IF 'posisi' lebih besar dari 'lineUp':
//    TAMPILKAN 'Sayang sekali, Kamu menyelesaikan Balapan di Posisi ke-' 'posisi'
//  ENDIF
//  TAMPILKAN tag input html SUBMIT 'Ulangi Balapan'
//ENDFUNGSI



function biodata(){
  var nama=document.getElementById('nama').value;
  var namaBesar=nama.toUpperCase();
  var mobil=Math.ceil(Math.random()*5);
  if(nama == ''){
    alert('Silakan isi nama pembalapmu ?')
  } else {
    switch(mobil){
      case 1: {document.getElementById('tampil').innerHTML='Selamat datang di INVISIBLE RACE CAR Pembalap <b>' +namaBesar+ '</b><br/> Kamu menggunakan mobil <b>Ferrari</b> di balapan kali ini.';
               break;
              }
      case 2: {document.getElementById('tampil').innerHTML='Selamat datang di INVISIBLE RACE CAR Pembalap <b>' +namaBesar+ '</b><br/> Kamu akan menggunakan mobil <b>Mercedes</b> di balapan kali ini.';
               break;
              }
      case 3: {document.getElementById('tampil').innerHTML='Selamat datang di INVISIBLE RACE CAR Pembalap <b>' +namaBesar+ '</b><br/> Kamu akan menggunakan mobil <b>Jaguar</b> di balapan kali ini.';
               break;
              }
      case 4: {document.getElementById('tampil').innerHTML='Selamat datang di INVISIBLE RACE CAR Pembalap <b>' +namaBesar+ '</b><br/> Kamu akan menggunakan mobil <b>McLaren</b> di balapan kali ini.';
               break;
              }
      case 5: {document.getElementById('tampil').innerHTML='Selamat datang di INVISIBLE RACE CAR Pembalap <b>' +namaBesar+ '</b><br/> Kamu akan menggunakan mobil <b>Posche</b> di balapan kali ini.';
               break;
              }
    }
    document.getElementById('tampil2').innerHTML='<input type="submit" value="Mulai Balapan" onclick="mulaiBalapan()" class="tombol">';
  }

}


var nomorMobil=Math.ceil(Math.random()*10);
var lineUp=Math.ceil(Math.random()*10);
var posisi=Math.ceil(nomorMobil * Math.random());

function mulaiBalapan(){

  document.getElementById('tampil').innerHTML='Balapan dimulai!!';
  document.getElementById('tampil2').innerHTML='Kamu memulai Balapan di posisi ke-' +lineUp;


  for(var index=1; index <= 10; index++){
    if(index == posisi < lineUp){
      document.getElementById('tampil3').innerHTML='Kamu menyusul pembalap lain!';
      break;
    } else if(index == posisi > lineUp){
      document.getElementById('tampil3').innerHTML='Kamu tertinggal oleh pembalap lain!';
      break;
    } else if(posisi && lineUp == index){
      document.getElementById('tampil3').innerHTML='Kamu mempertahankan posisi';
    }
  }

  if(posisi <= lineUp){
    document.getElementById('tampil4').innerHTML='Selamat, Kamu menyelesaikan Balapan di Posisi ke-' +posisi;
  } else {
    document.getElementById('tampil4').innerHTML='Sayang sekali, Kamu menyelesaikan Balapan di Posisi ke-' +posisi;
  }

  document.getElementById('tampil5').innerHTML='<form action="index.html"><input type="submit" value="Ulangi Balapan" class="tombol"></form>';
}
