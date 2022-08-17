function tabla() {
  $.ajax({
    url: '../php/get-information.php',
    tipe: 'POST',
    success: function (res) {
      var js = JSON.parse(res);
      var data = 0;
      var cantidad=0;
      const id=[];
      for (var i = 0; i < js.length; i++) {
        var dato = js[i].monto;
        data += parseFloat(dato);
        id.push(js[i].id_client);
        cantidad++;
      }
      var code = '$<span class="number" data-number="' + data + '"></span>';
      $('#total_raised').html(code);
      var code1 = '<span class="number" data-number="'+cantidad+'"></span>';
      $('#number_donations').html(code1);

      let contador=id.filter((valor,indice,arreglo)=>{
        return arreglo.indexOf(valor)==indice;
      })


      var code2 = '<span class="number" data-number="'+(contador.length/cantidad)*100+'"></span>%';
      $('#ratio_donations').html(code2);
      console.log(data);
    }
  });
}
function getNameURLWeb() {
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  return sPage;
}
function carrusel() {
  var xx_nombre_pagina = getNameURLWeb();
  $.ajax({
    url: '../php/get-items.php',
    tipe: 'POST',
    success: function (res) {
      var js = JSON.parse(res);
      var data='';
      var contrev=js.length-1;
      for (var i = 0; i < js.length; i++) {
        
        if (xx_nombre_pagina=='blog.html') {
          if (i>0 && i<=9) {
            data =js[i].html+data; 
            console.log(xx_nombre_pagina)
            data=data.replace('col-md-6 col-lg-3 py-3 wow fadeInUp', 'col-md-6 col-lg-4 py-3');
          }
        }else if (xx_nombre_pagina=='blog1.html') {
          if (i>9 && i<=18) {
            console.log(xx_nombre_pagina)
            data =js[i].html+data; 
            data=data.replace('col-md-6 col-lg-3 py-3 wow fadeInUp', 'col-md-6 col-lg-4 py-3');
          }
        }else if (xx_nombre_pagina=='blog2.html') {
          if (i>20 && i<=30) {
            data =js[i].html+data; 
            data=data.replace('col-md-6 col-lg-3 py-3 wow fadeInUp', 'col-md-6 col-lg-4 py-3');
          }
        }else if(xx_nombre_pagina=='index.html'){
          data =js[contrev].html+data;
          if (i==3) {
            break;
          }
        }
        contrev--;
      }
      var html =document.getElementById("container-card").innerHTML;
      //data=data.replace('col-md-6 col-lg-3 py-3 wow fadeInUp', 'col-md-6 col-lg-4 py-3');
      $('#container-card').html(data+html);
    }
  });
}




/*var origin_country=document.getElementById("country");
    var temp=origin.innerHTML;
    
    var temp_country=origin_country.innerHTML;
    var region = ['Azuay',
                  'Bolívar',
                  'Cañar',
                  'Carchi',
                  'Chimborazo',
                  'Cotopaxi',
                  'El Oro',
                  'Esmeraldas',
                  'Galápagos',
                  'Guayas',
                  'Imbabura',
                  'Loja',
                  'Los Ríos',
                  'Manabí',
                  'Morona-Santiago',
                  'Napo',
                  'Orellana',
                  'Pastaza',
                  'Pichincha',
                  'Santa Elena',
                  'Santo Domingo de los Tsáchilas',
                  'Sucumbíos',
                  'Tungurahua',
                  'Zamora-Chinchipe'];
    var codigo='';
    region.forEach(function (elemento, indice, array) {
      codigo+='<option value="'+indice+1+'">'+elemento+'</option><div class="dropdown-divider"></div>'
    });
  document.getElementById("country").innerHTML=temp_country+codigo;*/
