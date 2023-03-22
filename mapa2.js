L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


var polygon = L.polygon([
  [31.738354456447446, -106.48570508106957],
  [31.738771608931124, -106.48574804489992],
  [31.738945168170215, -106.48756326673212],
  [31.738424489477378, -106.48776376460707],
  [31.738494522454385, -106.48737350981474],
  [31.738354456447446, -106.48570508106957]
]);
var multilinea = L.polyline(polygon,
 {smoothFactor: 1}).addTo(map);

/*var circulo = L.circle([31.738354617617524, -106.48476593864699],{
color:'yellow',
}).addTo(map);*/

var osmosis = [
[[31.773639, -106.560361],
 [31.769788188617106, -106.57489895160722]],
[[31.769788188617106, -106.57489895160722],
 [31.767291, -106.553364]],
[[31.769788188617106, -106.57489895160722],
 [31.781083323926254, -106.56108919654338]],
[[31.769788188617106, -106.57489895160722],
 [31.77534431298596, -106.56048261151615]],
[[31.769788188617106, -106.57489895160722],
 [31.764241, -106.573071]]
    ];
    
    var polyline = L.polyline(osmosis, {color: 'purple'});


    var baseMaps = {
      "Mapa Base": osmBase,
      /*"Catastro": catastroBase*/
  };


    var conexionAnapra = L.layerGroup([polyline]);

    var lineas = {
      'lineas': conexionAnapra
  };

  L.control.layers(baseMaps,lineas,{
    position: 'topleft', // 'topright', 'bottomleft', 'bottomright'
    collapsed: false // true
  }).addTo(map);



  var conexionBat = [//lineas de las baterias a el punto de conexion
    [[31.695352851227653, -106.40096362723669],//120
     [31.6926121676473, -106.42431410369377]],//
    [[31.697843397110884, -106.40753817330594],//121
     [31.6926121676473, -106.42431410369377]],//
    [[31.70242129762256, -106.41353024425509],//122
     [31.6926121676473, -106.42431410369377]],//
    [[31.706568431671503, -106.42197689242218],//123
     [31.6926121676473, -106.42431410369377]],//
    [[31.70130899683977, -106.4030218579358],//124
     [31.6926121676473, -106.42431410369377]],//
     [[31.68898476332398, -106.38743684775238],//129
     [31.6926121676473, -106.42431410369377]],//
     [[31.69096648089365, -106.41727789423076],//163
     [31.6926121676473, -106.42431410369377]],//
     //linea de el punto de conexion a el rebombeo 14
     [[31.696265108787056, -106.47574578445077],//Rebombeo 14
     [31.6926121676473, -106.42431410369377]],//punto de conexion
     //linea de R14 a T17
     [[31.696265108787056, -106.47574578445077],//Rebombeo14
     [31.705400364858136, -106.48814067272687]]//Tanque 17

        ];

        var conecte = L.polyline(conexionBat,{color: "red"});

        var line = L.layerGroup([conecte]);

        var lineas2 = {
          "lineas": conecte
        };
    
      L.control.layers(baseMaps,lineas2,{
        position: 'topleft', // 'topright', 'bottomleft', 'bottomright'
        collapsed: false // true
      }).addTo(map);
  // punto de conexion 31.6926121676473, -106.42431410369377  
  // rebombeo 14 31.696265108787056, -106.47574578445077  
  //pozo 120 31.695352851227653, -106.40096362723669
  //pozo 121 31.697843397110884, -106.40753817330594
  //pozo 122 31.70242129762256, -106.41353024425509
  //pozo 123-R 31.706568431671503, -106.42197689242218
  //pozo 124 31.70130899683977, -106.4030218579358
  //pozo 129 31.68898476332398, -106.38743684775238
  //pozo 163 31.69096648089365, -106.41727789423076