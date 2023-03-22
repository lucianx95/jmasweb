/*var geojsonFeature = {
  "type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [31.773639, -106.560372]
  }
};*/
var map = L.map('map').setView([31.738655,-106.486865],13) //crea el mapa y pone una vista por defecto

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location') .addEventListener('change',function(e){  //permite enfocar lo que este en la lista
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
});
	
  document.getElementById('osmosis') .addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
});

document.getElementById('elevado') .addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
});

document.getElementById('superficial') .addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
});

document.getElementById('rebombeo') .addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
});

var tanqueSuperficialIcon = new L.Icon({
    iconUrl: 'tanquecito.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [45, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -38],
    shadowSize: [0,0]
  });

  var rebIcon = new L.Icon({
    iconUrl: 'marcador azul.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [45, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -38],
    shadowSize: [0,0]
  });


var greenIcon = new L.Icon({                                                                    //cambia el icono que se ve en el mapa
  iconUrl: 'marcador verde.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});

var newIcon = new L.Icon({
  iconUrl: 'marcador.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});

var tanqueElevadoIcon = new L.Icon({
  iconUrl: 'elevado.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});

var osmosisIcon = new L.Icon({
  iconUrl: 'marcador rojo.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});

var bateriaIcon = new L.Icon({
  iconUrl: 'marcador bateria.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});

var bateriaIconb = new L.Icon({
  iconUrl: 'marcador bateriab.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -38],
  shadowSize: [0,0]
});


/*var benito = L.marker([31.735348526187977,-106.47914950342735], {icon: greenIcon})

.bindPopup("<h2>Benito</h2><br><p>parametros fuera de lo establecido</p>")
.addTo(map);*/



//----------------------------------lista con las ubicaciones de las listas de ANAPRA OSMOSIS, POZOS HASTA EL 100 Y TANQUES ELEVADOS



//------------------------------------OSMOSIS
var anapra1 = L.marker([31.773639, -106.560361],  {icon: osmosisIcon},{                             
title: "osmosis anapra 1",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 1</h2> <br><hr> cantidad actual de costales: 10</i>");

var km27 = L.marker([31.611132875975663, -106.52463316280141],  {icon: osmosisIcon},{                             
  title: "osmosis Km 27",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Centro de osmosis inversa Km 27</h2> <br><hr> cantidad actual de costales: 10</i>");

var anapra2 = L.marker([31.767291, -106.553364],  {icon: osmosisIcon},{
title: "osmosis anapra 2",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 2</h2><br><hr>costales: 10</i>");

var anapra3 = L.marker([31.781083323926254, -106.56108919654338],  {icon: osmosisIcon},{
  title: "osmosis anapra 3",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Centro de osmosis inversa anapra 3</h2><br><hr>costales: 10</i>");

  var anapra4 = L.marker([31.77534431298596, -106.56048261151615],  {icon: osmosisIcon},{
    title: "osmosis anapra 4",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Centro de osmosis inversa anapra 4</h2><br><hr>costales: 10</i>");
    
var anapra5 = L.marker([31.764241, -106.573071],  {icon: osmosisIcon},{
title: "osmosis anapra 5",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 5</h2><br><hr> cantidad actual de costales: 10</i>");

/*var pozor22 = L.marker([31.745746,-106.510436],  {icon: greenIcon},{
title: "pozo r22",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo R22<br>Tanque 10</h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);*/

var pozor97R = L.marker([31.643275, -106.455608],  {icon: greenIcon},{
title: "pozo 97R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 97R </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo176 = L.marker([31.607794, -106.446303],  {icon: greenIcon},{
title: "pozo 176",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 176 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo5RCH = L.marker([31.74882201266625, -106.47438639753499],  {icon: greenIcon},{
  title: "pozo 5-R_CH",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 5-R_CH </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");


var pozo177 = L.marker([31.607023, -106.434084],  {icon: greenIcon},{
title: "pozo 177",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 177 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo182 = L.marker([31.606925, -106.425593],  {icon: greenIcon},{
title: "pozo 182",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 182 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo185 = L.marker([31.606427, -106.417181],  {icon: greenIcon},{
title: "pozo 185",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 185 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo246 = L.marker([31.545062, -106.394383],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 246 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

var pozo240 = L.marker([31.551723, -106.353508],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 240 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");


var pozo55R = L.marker([31.744772926626947, -106.48527540572634],  {icon: greenIcon},{
  title: "pozo 55-R",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 55-R </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");


var pozo213 = L.marker([31.588443, -106.362718],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 213 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>");

/*var pozo14 = L.marker([31.730203, -106.481904],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 14 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);*/

var osmosiskm29n = L.marker([31.616096, -106.544700],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa km 29 norte </h2><br><hr> cantidad actual de costales: 10</i>");

var osmosiskm29s = L.marker([31.610967499597482, -106.55128861223942],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa km 29 sur </h2><br><hr> cantidad actual de costales: 10</i>");

var osmosiskm29 = L.marker([31.610906033667177, -106.54313286938523],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa km 29</h2><br><hr> cantidad actual de costales: 10</i>");

var osmosisbello = L.marker([31.613932330673126, -106.48921912787684],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa Bello Horizonte</h2><br><hr> cantidad actual de costales: 10</i>");

var pozo186 = L.marker([31.606059, -106.409332], {icon: newIcon},  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<iframe width='300' height='300' src='https://www.youtube.com/embed/IcvugJWPXz8' title='Transmisión en vivo Puente Internacional Paso del Norte (Sur)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>");

/*var r56 = L.marker([31.775423, -106.524207],  {icon: greenIcon},{
  title: "Rebombeo 56",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Rebombeo 56</h2><br><hr>Sin datos activos</i>")
  .addTo(map);

  var r55 = L.marker([31.771239, -106.524624],  {icon: greenIcon},{
    title: "Rebombeo 55",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Rebombeo 55</h2><br><hr>Sin datos activos</i>")
    .addTo(map);*/

var pozo1RR = L.marker([31.751802, -106.425542],  {icon: greenIcon},{
title: "Pozo 1-RR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 1-RR</h2><br><hr>Sin datos activos</i>");

var pozo6 = L.marker([31.704730, -106.474421],  {icon: greenIcon},{
title: "Pozo 6",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 6</h2><br><hr>Sin datos activos</i>");

var pozo9R = L.marker([31.744306, -106.492446],  {icon: greenIcon},{
title: "Pozo 9-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 9-R</h2><br><hr>Sin datos activos</i>");

var pozo11R = L.marker([31.75390343454366, -106.43441463064642],  {icon: greenIcon},{
title: "Pozo 11-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 11-R</h2><br><hr>Sin datos activos</i>");

var pozo12 = L.marker([31.716431593240593, -106.47917583083671],  {icon: greenIcon},{
title: "Pozo 12",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 12</h2><br><hr>Sin datos activos</i>");

var pozo14R = L.marker([31.730256, -106.481836],  {icon: greenIcon},{
title: "Pozo 14-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 14-R</h2><br><hr>Sin datos activos</i>");

var pozo15R = L.marker([31.73161342745948, -106.47666749679247],  {icon: greenIcon},{
title: "Pozo 15-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 15-R</h2><br><hr>Sin datos activos</i>");

var pozo16R = L.marker([31.736261, -106.490814],  {icon: greenIcon},{
title: "Pozo 16-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 16-R</h2><br><hr>Sin datos activos</i>");

var pozo17R = L.marker([31.756471189793775, -106.44495681440239],  {icon: greenIcon},{
title: "Pozo 17-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 17-R</h2><br><hr>Sin datos activos</i>");

var pozo19R = L.marker([31.699067, -106.416710],  {icon: greenIcon},{
title: "Pozo 19-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 19-R</h2><br><hr>Sin datos activos</i>");

var pozo23R = L.marker([31.730145786385172, -106.44385743083637],  {icon: greenIcon},{
title: "Pozo 23-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 23-R</h2><br><hr>Sin datos activos</i>");

var pozo24R = L.marker([31.70708920719243, -106.3739902362628],  {icon: greenIcon},{
title: "Pozo 24-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 24-R</h2><br><hr>Sin datos activos</i>");

var pozo33R = L.marker([31.74411474976823, -106.45521649926873],  {icon: greenIcon},{
title: "Pozo 33-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 33-R</h2><br><hr>Sin datos activos</i>");

var pozo38 = L.marker([31.73762270441973, -106.43078095931355],  {icon: greenIcon},{
title: "Pozo 38",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 38</h2><br><hr>Sin datos activos</i>");

var pozo42R = L.marker([31.718603527164124, -106.43177213068138],  {icon: greenIcon},{
title: "Pozo 42-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 42-R</h2><br><hr>Sin datos activos</i>");

var pozo45 = L.marker([31.710994793395447, -106.45114135993622],  {icon: greenIcon},{
title: "Pozo 45",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 45</h2><br><hr>Sin datos activos</i>");

var pozo46R = L.marker([31.658118724934546, -106.43408670629216],  {icon: greenIcon},{
title: "Pozo 46-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 46-R</h2><br><hr>Sin datos activos</i>");

var pozo47R = L.marker([31.67115126684122, -106.37450886424874],  {icon: greenIcon},{
title: "Pozo 47-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 47-R</h2><br><hr>Sin datos activos</i>");

var pozo48 = L.marker([31.706096757866405, -106.4005431432752],  {icon: greenIcon},{
title: "Pozo 48",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 48</h2><br><hr>Sin datos activos</i>");

var pozo49R = L.marker([31.70568378653582, -106.46281354327758],  {icon: greenIcon},{
title: "Pozo 49-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 49-R</h2><br><hr>Sin datos activos</i>");

var pozo50R = L.marker([31.686360163103856, -106.43844772408981],  {icon: greenIcon},{
title: "Pozo 50-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 50-R</h2><br><hr>Sin datos activos</i>");

var pozo52R = L.marker([31.695651310465564, -106.46999486151732],  {icon: greenIcon},{
  title: "Pozo 52-R",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 52-R</h2><br><hr>Sin datos activos</i>");

  var pozo54R = L.marker([31.670794863421996, -106.43256093660459],  {icon: greenIcon},{
title: "Pozo 54-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 54-R</h2><br><hr>Sin datos activos</i>");

var pozo56R = L.marker([31.685225642702356, -106.37109369260705],  {icon: greenIcon},{
title: "Pozo 56-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 56-R</h2><br><hr>Sin datos activos</i>");

var pozo58 = L.marker([31.74944495501541, -106.44770731021202],  {icon: greenIcon},{
title: "Pozo 58",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 58</h2><br><hr>Sin datos activos</i>");

var pozo59 = L.marker([31.70188014503644, -106.46940635788074],  {icon: greenIcon},{
title: "Pozo 59",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 59</h2><br><hr>Sin datos activos</i>");

var pozo60 = L.marker([31.71173732363992, -106.48298949581405],  {icon: greenIcon},{
title: "Pozo 60",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 60</h2><br><hr>Sin datos activos</i>");
var pozo61R = L.marker([31.706930121232503, -106.44252268753246],  {icon: greenIcon},{
title: "Pozo 61-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 61-R</h2><br><hr>Sin datos activos</i>");

var pozo62R = L.marker([31.74507409473918, -106.48927092656668],  {icon: greenIcon},{
title: "Pozo 62-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 62-R</h2><br><hr>Sin datos activos</i>");

var pozo63R = L.marker([31.684663300082665, -106.46411250273958],  {icon: greenIcon},{
title: "Pozo 63-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 63-R</h2><br><hr>Sin datos activos</i>");

var pozo64 = L.marker([31.717196832074187, -106.46362443358245],  {icon: greenIcon},{
title: "Pozo 64",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 64</h2><br><hr>Sin datos activos</i>");

var pozo66 = L.marker([31.700493330154963, -106.45505439310674],  {icon: greenIcon},{
title: "Pozo 66",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 66</h2><br><hr>Sin datos activos</i>");

var pozo67R = L.marker([31.736542400788696, -106.41243279776576],  {icon: greenIcon},{
title: "Pozo 67-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 67-R</h2><br><hr>Sin datos activos</i>");

var pozo68R = L.marker([31.710900845236438, -106.41641501658212],  {icon: greenIcon},{
title: "Pozo 68-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 68-R</h2><br><hr>Sin datos activos</i>");

var pozo69R = L.marker([31.734835854568626, -106.39528494470939],  {icon: greenIcon},{
title: "Pozo 69-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 69-R</h2><br><hr>Sin datos activos</i>");

var pozo70R = L.marker([31.672696911036265, -106.44884766713365],  {icon: greenIcon},{
title: "Pozo 70-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 70-R</h2><br><hr>Sin datos activos</i>");

var pozo71R = L.marker([31.73104403553895, -106.42599711098742],  {icon: greenIcon},{
title: "Pozo 71-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 71-R</h2><br><hr>Sin datos activos</i>");

var pozo72 = L.marker([31.677152942139095, -106.46024287979952],  {icon: greenIcon},{
title: "Pozo 72-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 72-R</h2><br><hr>Sin datos activos</i>");

var pozo73R = L.marker([31.664958722855122, -106.42016385964833],  {icon: greenIcon},{
title: "Pozo 73-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 73-R</h2><br><hr>Sin datos activos</i>");

var pozo76 = L.marker([31.732689361383205, -106.40224363845749],  {icon: greenIcon},{
title: "Pozo 76",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 76</h2><br><hr>Sin datos activos</i>");

var pozo79R = L.marker([31.69607342614953, -106.37413863972532],  {icon: greenIcon},{
title: "Pozo 79-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 79-R</h2><br><hr>Sin datos activos</i>");

var pozo80AR = L.marker([31.66012875252823, -106.37937495891434],  {icon: greenIcon},{
title: "Pozo 80-AR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 80-AR</h2><br><hr>Sin datos activos</i>");

var pozo80B = L.marker([31.667710091074895, -106.41521163347278],  {icon: greenIcon},{
title: "Pozo 80-B",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 80-B</h2><br><hr>Sin datos activos</i>");

    var pozo81 = L.marker([31.69308466519405, -106.45609634177245],  {icon: greenIcon},{
title: "Pozo 81",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 81</h2><br><hr>Sin datos activos</i>");

var pozo82R = L.marker([31.67827754618632, -106.46721235199762],  {icon: greenIcon},{
title: "Pozo 82-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 82-R</h2><br><hr>Sin datos activos</i>");

var pozo84 = L.marker([31.69355729811299, -106.46688022705544],  {icon: greenIcon},{
title: "Pozo 84",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 84</h2><br><hr>Sin datos activos</i>");

var pozo86R = L.marker([31.683933792685337, -106.4535355977546],  {icon: greenIcon},{
title: "Pozo 86-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 86-R</h2><br><hr>Sin datos activos</i>");

var pozo87 = L.marker([31.679668892025898, -106.44872916591417],  {icon: greenIcon},{
title: "Pozo 87",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 87</h2><br><hr>Sin datos activos</i>");

var pozo90RRR = L.marker([31.66961970202313, -106.46304613202079],  {icon: greenIcon},{
title: "Pozo 90-RRR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 90-RRR</h2><br><hr>Sin datos activos</i>");

var pozo91R = L.marker([31.677498448323067, -106.47462541031099],  {icon: greenIcon},{
  title: "Pozo 91-R",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 91-R</h2><br><hr>Sin datos activos</i>");

var pozo92R = L.marker([31.667993455885636, -106.45158036642005],  {icon: greenIcon},{
title: "Pozo 92-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 92-R</h2><br><hr>Sin datos activos</i>");

var pozo93R = L.marker([31.66239035446025, -106.46120480925536],  {icon: greenIcon},{
title: "Pozo 93-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 93-R</h2><br><hr>Sin datos activos</i>");

var pozo94R = L.marker([31.650851104957795, -106.46500641494976],  {icon: greenIcon},{
title: "Pozo 94-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 94-R</h2><br><hr>Sin datos activos</i>");

var pozo95 = L.marker([31.658466779859904, -106.45007797739574],  {icon: greenIcon},{
title: "Pozo 95",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 95</h2><br><hr>Sin datos activos</i>");

var pozo96 = L.marker([31.649365570668017, -106.4532420156893],  {icon: greenIcon},{
title: "Pozo 96-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 96-R</h2><br><hr>Sin datos activos</i>");


var pozo98R = L.marker([31.66628359433715, -106.43931634407527],  {icon: greenIcon},{
title: "Pozo 98-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 98-R</h2><br><hr>Sin datos activos</i>");

var pozo99R = L.marker([31.65555435652498, -106.44350278436937],  {icon: greenIcon},{
title: "Pozo 99-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 99-R</h2><br><hr>Sin datos activos</i>");

var pozo100 = L.marker([31.665697539567283, -106.43002999811499],  {icon: greenIcon},{
title: "Pozo 100",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 100</h2><br><hr>Sin datos activos</i>");








var pozo104 = L.marker([31.64923735823351, -106.42343513790499],  {icon: greenIcon},{
title: "Pozo 104",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 104</h2><br><hr>Sin datos activos</i>")

var pozo106 = L.marker([31.753275718647636, -106.44354098888921],  {icon: greenIcon},{
title: "Pozo 106",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 106</h2><br><hr>Sin datos activos</i>")


var pozo110 = L.marker([31.749311528518884, -106.4410545572254],  {icon: greenIcon},{
title: "Pozo 110",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 110</h2><br><hr>Sin datos activos</i>")

var pozo111 = L.marker([31.747977750045656, -106.41933891842955],  {icon: greenIcon},{
title: "Pozo 111",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 111</h2><br><hr>Sin datos activos</i>")

var pozo115 = L.marker([31.674351501117474, -106.39529133075207],  {icon: bateriaIconb},{
title: "Pozo 115",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 115</h2><br><hr>Sin datos activos</i>")

var pozo120 = L.marker([31.695352851227653, -106.40096362723669],  {icon: bateriaIcon},{
title: "Pozo 120",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 120</h2><br><hr>Miembro activo de la Bateria A</i>")

var pozo121 = L.marker([31.697843397110884, -106.40753817330594],  {icon: bateriaIcon},{
title: "Pozo 121",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 121</h2><br><hr>Miembro activo de la Bateria A</i>")

var pozo122 = L.marker([31.70242129762256, -106.41353024425509],  {icon: bateriaIcon},{
title: "Pozo 122",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 122</h2><br><hr>Miembro activo de la Bateria A</i>")
          
var pozo123 = L.marker([31.706568431671503, -106.42197689242218],  {icon: bateriaIcon},{
title: "Pozo 123",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 123</h2><br><hr>Miembro activo de la Bateria A</i>")

var pozo124 = L.marker([31.70130899683977, -106.4030218579358],  {icon: bateriaIcon},{
title: "Pozo 124",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 124</h2><br><hr>Miembro activo de la Bateria A</i>")

var pozo129 = L.marker([31.68898476332398, -106.38743684775238],  {icon: bateriaIcon},{
  title: "Pozo 129",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 129</h2><br><hr>Miembro activo de la Bateria A</i>")

  var pozo163 = L.marker([31.69096648089365, -106.41727789423076],  {icon: bateriaIcon},{
    title: "Pozo 163",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Pozo 163</h2><br><hr>Miembro activo de la Bateria A</i>")

    var pozo124 = L.marker([31.70130899683977, -106.4030218579358],  {icon: bateriaIcon},{
      title: "Pozo 124",
      draggable:false,
      opacity: 0.75
      }).bindPopup("<i><h2>Pozo 124</h2><br><hr>Miembro activo de la Bateria A</i>")

      var pozo124 = L.marker([31.70130899683977, -106.4030218579358],  {icon: bateriaIcon},{
        title: "Pozo 124",
        draggable:false,
        opacity: 0.75
        }).bindPopup("<i><h2>Pozo 124</h2><br><hr>Miembro activo de la Bateria A</i>")


  










//-------------------------------TANQUES ELEVADOS-----------------------------------------

  var T10E = L.marker([31.59076082835226, -106.39254921835696],  {icon: tanqueElevadoIcon},{
    title: "Pozo 100",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Pozo 100</h2><br><hr>Capacidad: 250 m³</i>");


var T11E = L.marker([31.590715592872005, -106.39150229074053],  {icon: tanqueElevadoIcon},{
  title: "Tanque 11-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 11-E</h2><br><hr>Capacidad: 250 m³</i>");


var T7E = L.marker([31.621400251682335, -106.4505902890376],  {icon: tanqueElevadoIcon},{
  title: "Tanque 7-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 7-E</h2><br><hr>Capacidad: 100 m³</i>");


var T17E = L.marker([31.59233411255656, -106.37395128046614],  {icon: tanqueElevadoIcon},{
  title: "Tanque 17-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 17-E</h2><br><hr>Capacidad: 450 m³</i>");


var T19E = L.marker([31.625625369065833, -106.46153365896814],  {icon: tanqueElevadoIcon},{
  title: "Tanque 19-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 19-E</h2><br><hr>Capacidad: 300 m³</i>");


var T21E = L.marker([31.609294448283965, -106.3901185726183],  {icon: tanqueElevadoIcon},{
  title: "Tanque 21-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 21-E</h2><br><hr>Capacidad: 450 m³</i>");


var T22E = L.marker([31.65126167998589, -106.46548484640107],  {icon: tanqueElevadoIcon},{
  title: "Tanque 22-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 22-E</h2><br><hr>Capacidad: 450 m³</i>");


  var T23E = L.marker([31.59064362100411, -106.31932222683992],  {icon: tanqueElevadoIcon},{
    title: "Tanque 23-E",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Tanque 23-E</h2><br><hr>Capacidad: 450 m³</i>");
    
    
    
    
    
    
    //--------------------------------------------------------TANQUES SUPERFICIALES


var T1 = L.marker([31.73132616156359, -106.49592863831066],  {icon: tanqueSuperficialIcon},{
title: "Tanque 1",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 1</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T3 = L.marker([31.731272551415287, -106.49566578185247],  {icon: tanqueSuperficialIcon},{
title: "Tanque 3",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 3</h2><br><hr>Capacidad: 2,500 m³ <hr> Material: Concreto</i>");

var T4 = L.marker([31.70374307040392, -106.47171088343975],  {icon: tanqueSuperficialIcon},{
title: "Tanque 4",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 4</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T5 = L.marker([31.703840764430115, -106.4718576097197],  {icon: tanqueSuperficialIcon},{
title: "Tanque 5",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 5</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T6 = L.marker([31.704109422471607, -106.4722276151213],  {icon: tanqueSuperficialIcon},{
title: "Tanque 6",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 6</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T8 = L.marker([31.718408005291348, -106.49954806448584],  {icon: tanqueSuperficialIcon},{
title: "Tanque 8",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 8</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T10 = L.marker([31.74583322574508, -106.5102528576119],  {icon: tanqueSuperficialIcon},{
title: "Tanque 10",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 10</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T11 = L.marker([31.695225179916537, -106.48263139493906],  {icon: tanqueSuperficialIcon},{
title: "Tanque 11",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 11</h2><br><hr>Capacidad: 1,000 m³ <hr> Material: Concreto</i>");

var T12 = L.marker([31.682288704731278, -106.48805152607355],  {icon: tanqueSuperficialIcon},{
title: "Tanque 12",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 12</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Concreto</i>");

var T13 = L.marker([31.666735805976277, -106.43858428267876],  {icon: tanqueSuperficialIcon},{
title: "Tanque 13",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 13</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Concreto</i>");

var T15R = L.marker([31.70783865238496, -106.50341581265864],  {icon: tanqueSuperficialIcon},{
title: "Tanque 15-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 15-R</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T16 = L.marker([31.729908385402926, -106.5083522235055],  {icon: tanqueSuperficialIcon},{
title: "Tanque 16",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 16</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T17 = L.marker([31.705400364858136, -106.48814067272687],  {icon: tanqueSuperficialIcon},{
title: "Tanque 17",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 17</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T19 = L.marker([31.716175668905027, -106.51163620452922],  {icon: tanqueSuperficialIcon},{
title: "Tanque 19",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 19</h2><br><hr>Capacidad: 1,000 m³ <hr> Material: Concreto</i>");

var T20 = L.marker([31.75120409361768, -106.51967504445413],  {icon: tanqueSuperficialIcon},{
title: "Tanque 20",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 20</h2><br><hr>Capacidad: 1,000 m³ <hr> Material: Concreto</i>");

var T21 = L.marker([31.71158315078912, -106.457996430167],  {icon: tanqueSuperficialIcon},{
title: "Tanque 21",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 21 (sin confirmar) </h2><br><hr>Capacidad: 100 m³ <hr> Material: Concreto</i>");

var T22 = L.marker([31.671090199427265, -106.48057748434103],  {icon: tanqueSuperficialIcon},{
title: "Tanque 22",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 22</h2><br><hr>Capacidad: 2,000 m³ <hr> Material: Concreto</i>");

var T23 = L.marker([31.677822317205145, -106.467970775165],  {icon: tanqueSuperficialIcon},{
title: "Tanque 23",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 23 (sin confirmar)</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Concreto</i>");

var T24 = L.marker([31.666735805976277, -106.43858428267876],  {icon: tanqueSuperficialIcon},{
title: "Tanque 24",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 24 (no encontrado)</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T25R = L.marker([31.731164717755146, -106.52720624616879],  {icon: tanqueSuperficialIcon},{
title: "Tanque 25-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 25-R</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T25RR = L.marker([31.731213235752126, -106.52755447846548],  {icon: tanqueSuperficialIcon},{
title: "Tanque 25-RR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 25-RR</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T26 = L.marker([31.636375351732003, -106.3936538221314],  {icon: tanqueSuperficialIcon},{
title: "Tanque 26",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 26</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Concreto</i>");

var T36 = L.marker([31.705186133172962, -106.49618276670998],  {icon: tanqueSuperficialIcon},{
title: "Tanque 36",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 36</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T39 = L.marker([31.75455829938385, -106.52557882475195],  {icon: tanqueSuperficialIcon},{
title: "Tanque 39",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 39</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T40 = L.marker([31.769788188617106, -106.57489895160722],  {icon: tanqueSuperficialIcon},{
title: "Tanque 40",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 40</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T41 = L.marker([31.621751685480547, -106.4507080201696],  {icon: tanqueSuperficialIcon},{
title: "Tanque 41",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 41</h2><br><hr>Capacidad: 560 m³ <hr> Material: Concreto</i>");

var T42 = L.marker([31.651228985253795, -106.46531303345863],  {icon: tanqueSuperficialIcon},{
title: "Tanque 42",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 42</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T43 = L.marker([31.590565187078333, -106.31931672425453],  {icon: tanqueSuperficialIcon},{
title: "Tanque 43",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 43</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T44 = L.marker([31.611331497650976, -106.45438871749766],  {icon: tanqueSuperficialIcon},{
title: "Tanque 44",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 44</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T45 = L.marker([31.591504610012898, -106.37368208342936],  {icon: tanqueSuperficialIcon},{
title: "Tanque 45",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 45</h2><br><hr>Capacidad: 3,000 m³ <hr> Material: Acero</i>");

var T46 = L.marker([31.695448465358155, -106.36731848891925],  {icon: tanqueSuperficialIcon},{
title: "Tanque 46",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 46</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Acero</i>");

var T47 = L.marker([31.573381176197646, -106.3914718341568],  {icon: tanqueSuperficialIcon},{
title: "Tanque 47",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 47</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Acero</i>");

var T48 = L.marker([31.731181732626442, -106.54337586568978],  {icon: tanqueSuperficialIcon},{
title: "Tanque 48",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Tanque 48</h2><br><hr>Capacidad: 5,000 m³ <hr> Material: Acero</i>");











//----------------------------------------REBOMBEO-----------------------------------------------












var reb1 = L.marker([31.718453537898718, -106.49975922920781],  {icon: rebIcon},{
title: "Rebombeo 1",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 1</h2><br><hr>Datos pendientes</i>");

var reb1a = L.marker([31.71834867111558, -106.49979905797582],  {icon: rebIcon},{
title: "Rebombeo 1-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 1-A</h2><br><hr>Datos Pendientes</i>");

var reb1b = L.marker([31.718222830819208, -106.49986354264786],  {icon: rebIcon},{
title: "Rebombeo 1-B",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 1-B</h2><br><hr>Datos Pendientes</i>");

var reb2 = L.marker([31.73125256837385, -106.49611804926501],  {icon: rebIcon},{
title: "Rebombeo 2",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 2</h2><br><hr>Datos Pendientes</i>");

var reb2a = L.marker([31.73121834910666, -106.49627093516418],  {icon: rebIcon},{
title: "Rebombeo 2-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 2-A</h2><br><hr>Datos Pendientes</i>");

var reb4 = L.marker([31.6953366690701, -106.48290249921128],  {icon: rebIcon},{
title: "Rebombeo 4",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 4</h2><br><hr>Datos Pendientes</i>");

var reb18 = L.marker([31.73122975553047, -106.49558428972233],  {icon: rebIcon},{
  title: "Rebombeo 18",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Rebombeo 18</h2><br><hr>Datos Pendientes</i>");

var reb4a = L.marker([31.69541251464946, -106.48296129405931],  {icon: rebIcon},{
title: "Rebombeo 4-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 4-A</h2><br><hr>Datos Pendientes</i>");

var reb7 = L.marker([31.712664486738362, -106.46584097205124],  {icon: rebIcon},{
title: "Rebombeo 7",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 7</h2><br><hr>Datos Pendientes</i>");

var reb9 = L.marker([31.713641864961065, -106.49109643902348],  {icon: rebIcon},{
title: "Rebombeo 9",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 9</h2><br><hr>Datos Pendientes</i>");

var reb10 = L.marker([31.70873364166349, -106.51181098778451],  {icon: rebIcon},{
title: "Rebombeo 10",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 10</h2><br><hr>Datos Pendientes</i>");

var reb10a = L.marker([31.708632099802827, -106.51198801356249],  {icon: rebIcon},{
title: "Rebombeo 10-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 10-A</h2><br><hr>Datos Pendientes</i>");

var reb14 = L.marker([31.696265108787056, -106.47574578445077],  {icon: rebIcon},{
title: "Rebombeo 14",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 14</h2><br><hr>Datos Pendientes</i>");

var reb15 = L.marker([31.696179528308093, -106.4757994286259],  {icon: rebIcon},{
title: "Rebombeo 15",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 15</h2><br><hr>Datos Pendientes</i>");

var reb16 = L.marker([31.69614187287234, -106.47585977832296],  {icon: rebIcon},{
title: "Rebombeo 16",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 16</h2><br><hr>Datos Pendientes</i>");

var reb17 = L.marker([31.69604830475369, -106.47596974888198],  {icon: rebIcon},{
title: "Rebombeo 17",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 17</h2><br><hr>Datos Pendientes</i>");

var reb21 = L.marker([31.712286162582316, -106.50123632472356],  {icon: rebIcon},{
title: "Rebombeo 21",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 21</h2><br><hr>Datos Pendientes</i>");

var reb24 = L.marker([31.678275906346983, -106.46756950734955],  {icon: rebIcon},{
title: "Rebombeo 24",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 24</h2><br><hr>Datos Pendientes</i>");

var reb26 = L.marker([31.65097582844878, -106.46504005316206],  {icon: rebIcon},{
title: "Rebombeo 26",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 26</h2><br><hr>Datos Pendientes</i>");

var reb27 = L.marker([31.651039759659156, -106.46515270592985],  {icon: rebIcon},{
title: "Rebombeo 27",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 27</h2><br><hr>Datos Pendientes</i>");

var reb28 = L.marker([31.651078575015433, -106.46521171452252],  {icon: rebIcon},{
title: "Rebombeo 28",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 28</h2><br><hr>Datos Pendientes</i>");

var reb29 = L.marker([31.65116990520154, -106.46506687524963],  {icon: rebIcon},{
title: "Rebombeo 29",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 29</h2><br><hr>Datos Pendientes</i>");

var reb31 = L.marker([31.705404441243775, -106.48897619879934],  {icon: rebIcon},{
title: "Rebombeo 31",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 31</h2><br><hr>Datos Pendientes</i>");

var reb34 = L.marker([31.622893525892202, -106.45040631754316],  {icon: rebIcon},{
title: "Rebombeo 34",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 34</h2><br><hr>Datos Pendientes</i>");

var reb35 = L.marker([31.65110891538045, -106.46470847338941],  {icon: rebIcon},{
title: "Rebombeo 35",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 35</h2><br><hr>Datos Pendientes</i>");

var reb36 = L.marker([31.682602748522445, -106.48801223773978],  {icon: rebIcon},{
title: "Rebombeo 36",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 36</h2><br><hr>Datos Pendientes</i>");

var reb36a = L.marker([31.682405057309584, -106.48830319204481],  {icon: rebIcon},{
title: "Rebombeo 36-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 36-A</h2><br><hr>Datos Pendientes</i>");

var reb37 = L.marker([31.636490605701937, -106.39368178791266],  {icon: rebIcon},{
title: "Rebombeo 37",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 37</h2><br><hr>Datos Pendientes</i>");

var reb39 = L.marker([31.611182388191416, -106.45459736291801],  {icon: rebIcon},{
title: "Rebombeo 39",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 39</h2><br><hr>Datos Pendientes</i>");

var reb41 = L.marker([31.591475029150622, -106.3731751395553],  {icon: rebIcon},{
title: "Rebombeo 41",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 41</h2><br><hr>Datos Pendientes</i>");

var reb42 = L.marker([31.591423406065257, -106.37295505013539],  {icon: rebIcon},{
title: "Rebombeo 42",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 42</h2><br><hr>Datos Pendientes</i>");

var reb49 = L.marker([31.66374352654679, -106.47967907211206],  {icon: rebIcon},{
title: "Rebombeo 49",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 49 (no verificado)</h2><br><hr>Datos Pendientes</i>");

var reb50 = L.marker([31.69587884856306, -106.36714250374017],  {icon: rebIcon},{
title: "Rebombeo 50",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 50</h2><br><hr>Datos Pendientes</i>");

var reb50a = L.marker([31.695708781680537, -106.36720448168302],  {icon: rebIcon},{
title: "Rebombeo 50-A",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 50-A</h2><br><hr>Datos Pendientes</i>");

var reb52 = L.marker([31.66374352654679, -106.47967907211206],  {icon: rebIcon},{
title: "Rebombeo 52",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 52 (no Encontrado)</h2><br><hr>Datos Pendientes</i>");

var reb53 = L.marker([31.66374352654679, -106.47967907211206],  {icon: rebIcon},{
title: "Rebombeo 53",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 53 (no Encontrado)</h2><br><hr>Datos Pendientes</i>");

var reb55 = L.marker([31.771639745581123, -106.52418241771463],  {icon: rebIcon},{
title: "Rebombeo 55",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 55 (no verificado)</h2><br><hr>Datos Pendientes</i>");

var reb56 = L.marker([31.77544856018132, -106.52424089225869],  {icon: rebIcon},{
title: "Rebombeo 56",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Rebombeo 56</h2><br><hr>Datos Pendientes</i>");
    
    
    

    var grupoPozos = L.layerGroup([pozo1RR,pozo6,pozo5RCH,pozo6,pozo9R,
      pozo11R,pozo12,pozo14R,pozo15R,pozo16R,pozo17R,pozo19R,
      pozo23R,pozo24R,
      pozo33R,pozo38,
      pozo42R,pozo45,pozo46R,pozo47R,pozo48,pozo49R,
      pozo50R,pozo52R,pozo54R,pozo55R,pozo56R,pozo58,pozo59,
      pozo60,pozo61R,pozo62R,pozo63R,pozo64,pozo66,pozo67R,pozo68R,pozo69R,
      pozo70R,pozo71R,pozo72,pozo73R,pozo76,pozo79R,
      pozo80AR,pozo80B,pozo81,pozo82R,pozo84,pozo86R,pozo87,
      pozo90RRR,pozo91R,pozo92R,pozo93R,pozo94R,pozo95,pozo96,pozor97R,pozo98R,pozo99R,
      pozo100,

      pozo104,pozo106,pozo110,
      pozo111
      
    ]);

    var grupoBateriaA = L.layerGroup([pozo120,pozo121,pozo122,pozo123,pozo124,pozo129,pozo163]);
    var grupoBateriaB = L.layerGroup([pozo115]);


    var grupoOsmosis = L.layerGroup([anapra1,anapra2,anapra3,anapra4,anapra5,osmosisbello,osmosiskm29,osmosiskm29n,osmosiskm29s,km27]);
    
    var grupoTanques = L.layerGroup([T10E,T11E,T17E,T19E,T21E,T22E,T23E,T7E]);
    
    var grupoTanquesSup = L.layerGroup([T1,T3,T4,T5,T6,T10,T11,T12,T13,T15R,T16,T17,T19,T20,T21,T22,T23,T24,T25R,T25RR,T26,T36,T39,T40,T41,T42,T43,T44,T45,T46,T47,T48]);

    var grupoRebombeo = L.layerGroup([reb1,reb1a,reb1b,reb2,reb2a,reb4,reb4a,reb7,reb9,
      reb10,reb10a,reb14,reb15,reb16,reb17,reb18,
      reb21,reb24,reb26,reb27,reb28,reb29,
    reb31,reb34,reb35,reb36,reb36a,reb37,reb39,
    reb41,reb42,reb49,
    reb50,reb50a,reb52,reb53,reb55,reb56,//reb57
    ]);

//---------------------------------------------------------------------------------------------------------------------------------------------
    var baseMaps = {
      "Mapa Base": osmBase,
      /*"Catastro": catastroBase*/
  };
  
  var grupo = {
      "pozos": grupoPozos,
      "osmosis(anapra y km)": grupoOsmosis,
      "Tanques Elevados": grupoTanques,
      "Tanques Superficiales": grupoTanquesSup,
      "Rebombeo": grupoRebombeo,
      "Bateria A": grupoBateriaA,
      "Bateria B": grupoBateriaB
  };

  L.control.layers(baseMaps, grupo,{
    position: 'topleft', // 'topright', 'bottomleft', 'bottomright'
    collapsed: false // true
  }).addTo(map);





