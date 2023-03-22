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
let map = L.map('map').setView([31.738655,-106.486865],13) //crea el mapa y pone una vista por defecto

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


/*var benito = L.marker([31.735348526187977,-106.47914950342735], {icon: greenIcon})

.bindPopup("<h2>Benito</h2><br><p>parametros fuera de lo establecido</p>")
.addTo(map);*/



//----------------------------------lista con las ubicaciones de las listas de ANAPRA OSMOSIS, POZOS HASTA EL 100 Y TANQUES ELEVADOS



//------------------------------------OSMOSIS
var anapra1 = L.marker([31.773639, -106.560361],  {icon: osmosisIcon},{                             
title: "osmosis anapra 1",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 1</h2> <br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

var km27 = L.marker([31.611132875975663, -106.52463316280141],  {icon: osmosisIcon},{                             
  title: "osmosis Km 27",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Centro de osmosis inversa Km 27</h2> <br><hr> cantidad actual de costales: 10</i>")
  .addTo(map);

var anapra2 = L.marker([31.767291, -106.553364],  {icon: osmosisIcon},{
title: "osmosis anapra 2",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 2</h2><br><hr>costales: 10</i>")
.addTo(map);

var anapra3 = L.marker([31.781083323926254, -106.56108919654338],  {icon: osmosisIcon},{
  title: "osmosis anapra 3",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Centro de osmosis inversa anapra 3</h2><br><hr>costales: 10</i>")
  .addTo(map);

  var anapra4 = L.marker([31.77534431298596, -106.56048261151615],  {icon: osmosisIcon},{
    title: "osmosis anapra 4",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Centro de osmosis inversa anapra 4</h2><br><hr>costales: 10</i>")
    .addTo(map);

var anapra5 = L.marker([31.764241, -106.573071],  {icon: osmosisIcon},{
title: "osmosis anapra 5",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Centro de osmosis inversa anapra 5</h2><br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

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
}).bindPopup("<i><h2>Pozo 97R </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo176 = L.marker([31.607794, -106.446303],  {icon: greenIcon},{
title: "pozo 176",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 176 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo177 = L.marker([31.607023, -106.434084],  {icon: greenIcon},{
title: "pozo 177",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 177 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo182 = L.marker([31.606925, -106.425593],  {icon: greenIcon},{
title: "pozo 182",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 182 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo185 = L.marker([31.606427, -106.417181],  {icon: greenIcon},{
title: "pozo 185",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 185 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo246 = L.marker([31.545062, -106.394383],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 246 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo240 = L.marker([31.551723, -106.353508],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 240 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

var pozo213 = L.marker([31.588443, -106.362718],  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 213 </h2><br><hr> gasto:introduccion de datos faltantes <br><hr> presion: datos faltantes</i>")
.addTo(map);

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
}).bindPopup("<i><h2>Osmosis inversa km 29 norte </h2><br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

var osmosiskm29s = L.marker([31.610967499597482, -106.55128861223942],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa km 29 sur </h2><br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

var osmosiskm29 = L.marker([31.610906033667177, -106.54313286938523],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa km 29</h2><br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

var osmosisbello = L.marker([31.613932330673126, -106.48921912787684],  {icon: osmosisIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Osmosis inversa Bello Horizonte</h2><br><hr> cantidad actual de costales: 10</i>")
.addTo(map);

var pozo186 = L.marker([31.606059, -106.409332], {icon: newIcon},  {icon: greenIcon},{
title: "pozo 246",
draggable:false,
opacity: 0.75
}).bindPopup("<iframe width='300' height='300' src='https://www.youtube.com/embed/IcvugJWPXz8' title='Transmisión en vivo Puente Internacional Paso del Norte (Sur)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>")
.addTo(map);

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
}).bindPopup("<i><h2>Pozo 1-RR</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo6 = L.marker([31.704730, -106.474421],  {icon: greenIcon},{
title: "Pozo 6",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 6</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo9R = L.marker([31.744306, -106.492446],  {icon: greenIcon},{
title: "Pozo 9-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 9-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo11R = L.marker([31.75390343454366, -106.43441463064642],  {icon: greenIcon},{
title: "Pozo 11-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 11-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo12 = L.marker([31.716431593240593, -106.47917583083671],  {icon: greenIcon},{
title: "Pozo 12",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 12</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo14R = L.marker([31.730256, -106.481836],  {icon: greenIcon},{
title: "Pozo 14-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 14-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo15R = L.marker([31.73161342745948, -106.47666749679247],  {icon: greenIcon},{
title: "Pozo 15-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 15-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo16R = L.marker([31.736261, -106.490814],  {icon: greenIcon},{
title: "Pozo 16-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 16-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo17R = L.marker([31.756471189793775, -106.44495681440239],  {icon: greenIcon},{
title: "Pozo 17-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 17-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo19R = L.marker([31.699067, -106.416710],  {icon: greenIcon},{
title: "Pozo 19-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 19-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo23R = L.marker([31.730145786385172, -106.44385743083637],  {icon: greenIcon},{
title: "Pozo 23-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 23-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo24R = L.marker([31.70708920719243, -106.3739902362628],  {icon: greenIcon},{
title: "Pozo 24-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 24-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo33R = L.marker([31.74411474976823, -106.45521649926873],  {icon: greenIcon},{
title: "Pozo 33-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 33-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo38 = L.marker([31.73762270441973, -106.43078095931355],  {icon: greenIcon},{
title: "Pozo 38",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 38</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo42R = L.marker([31.718603527164124, -106.43177213068138],  {icon: greenIcon},{
title: "Pozo 42-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 42-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo45 = L.marker([31.710994793395447, -106.45114135993622],  {icon: greenIcon},{
title: "Pozo 45",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 45</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo46R = L.marker([31.658118724934546, -106.43408670629216],  {icon: greenIcon},{
title: "Pozo 46-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 46-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo47R = L.marker([31.67115126684122, -106.37450886424874],  {icon: greenIcon},{
title: "Pozo 47-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 47-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo48 = L.marker([31.706096757866405, -106.4005431432752],  {icon: greenIcon},{
title: "Pozo 48",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 48</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo49R = L.marker([31.70568378653582, -106.46281354327758],  {icon: greenIcon},{
title: "Pozo 49-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 49-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo50R = L.marker([31.686360163103856, -106.43844772408981],  {icon: greenIcon},{
title: "Pozo 50-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 50-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo52R = L.marker([31.695651310465564, -106.46999486151732],  {icon: greenIcon},{
  title: "Pozo 52-R",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Pozo 52-R</h2><br><hr>Sin datos activos</i>")
  .addTo(map);

  var pozo54R = L.marker([31.670794863421996, -106.43256093660459],  {icon: greenIcon},{
title: "Pozo 54-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 54-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo56R = L.marker([31.685225642702356, -106.37109369260705],  {icon: greenIcon},{
title: "Pozo 56-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 56-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo58 = L.marker([31.74944495501541, -106.44770731021202],  {icon: greenIcon},{
title: "Pozo 58",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 58</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo59 = L.marker([31.70188014503644, -106.46940635788074],  {icon: greenIcon},{
title: "Pozo 59",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 59</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo60 = L.marker([31.71173732363992, -106.48298949581405],  {icon: greenIcon},{
title: "Pozo 60",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 60</h2><br><hr>Sin datos activos</i>")
.addTo(map); /* ESTE POZO NO SE ENCONTRO NI VERIFICÓ LA EXISTENCIA O UBICACION ACTUAL */

var pozo61R = L.marker([31.706930121232503, -106.44252268753246],  {icon: greenIcon},{
title: "Pozo 61-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 61-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo62R = L.marker([31.74507409473918, -106.48927092656668],  {icon: greenIcon},{
title: "Pozo 62-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 62-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo63R = L.marker([31.684663300082665, -106.46411250273958],  {icon: greenIcon},{
title: "Pozo 63-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 63-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo64 = L.marker([31.717196832074187, -106.46362443358245],  {icon: greenIcon},{
title: "Pozo 64",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 64</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo66 = L.marker([31.700493330154963, -106.45505439310674],  {icon: greenIcon},{
title: "Pozo 66",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 66</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo67R = L.marker([31.736542400788696, -106.41243279776576],  {icon: greenIcon},{
title: "Pozo 67-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 67-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo68R = L.marker([31.710900845236438, -106.41641501658212],  {icon: greenIcon},{
title: "Pozo 68-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 68-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);/*UBICACION NO CONFIRMADA*/

var pozo69R = L.marker([31.734835854568626, -106.39528494470939],  {icon: greenIcon},{
title: "Pozo 69-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 69-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo70R = L.marker([31.672696911036265, -106.44884766713365],  {icon: greenIcon},{
title: "Pozo 70-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 70-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo71R = L.marker([31.73104403553895, -106.42599711098742],  {icon: greenIcon},{
title: "Pozo 71-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 71-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo72 = L.marker([31.677152942139095, -106.46024287979952],  {icon: greenIcon},{
title: "Pozo 72-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 72-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo73R = L.marker([31.664958722855122, -106.42016385964833],  {icon: greenIcon},{
title: "Pozo 73-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 73-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo76 = L.marker([31.732689361383205, -106.40224363845749],  {icon: greenIcon},{
title: "Pozo 76",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 76</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo79R = L.marker([31.69607342614953, -106.37413863972532],  {icon: greenIcon},{
title: "Pozo 79-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 79-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo80AR = L.marker([31.66012875252823, -106.37937495891434],  {icon: greenIcon},{
title: "Pozo 80-AR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 80-AR</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo80B = L.marker([31.667710091074895, -106.41521163347278],  {icon: greenIcon},{
title: "Pozo 80-B",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 80-B</h2><br><hr>Sin datos activos</i>")
.addTo(map);

    var pozo81 = L.marker([31.69308466519405, -106.45609634177245],  {icon: greenIcon},{
title: "Pozo 81",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 81</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo82R = L.marker([31.67827754618632, -106.46721235199762],  {icon: greenIcon},{
title: "Pozo 82-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 82-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo84 = L.marker([31.69355729811299, -106.46688022705544],  {icon: greenIcon},{
title: "Pozo 84",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 84</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo86R = L.marker([31.683933792685337, -106.4535355977546],  {icon: greenIcon},{
title: "Pozo 86-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 86-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo87 = L.marker([31.679668892025898, -106.44872916591417],  {icon: greenIcon},{
title: "Pozo 87",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 87</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo90RRR = L.marker([31.66961970202313, -106.46304613202079],  {icon: greenIcon},{
title: "Pozo 90-RRR",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 90-RRR</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo92R = L.marker([31.667993455885636, -106.45158036642005],  {icon: greenIcon},{
title: "Pozo 92-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 92-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo93R = L.marker([31.66239035446025, -106.46120480925536],  {icon: greenIcon},{
title: "Pozo 93-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 93-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo94R = L.marker([31.650851104957795, -106.46500641494976],  {icon: greenIcon},{
title: "Pozo 94-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 94-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo95 = L.marker([31.658466779859904, -106.45007797739574],  {icon: greenIcon},{
title: "Pozo 95",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 95</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo96 = L.marker([31.649365570668017, -106.4532420156893],  {icon: greenIcon},{
title: "Pozo 96-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 96-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);


var pozo98R = L.marker([31.66628359433715, -106.43931634407527],  {icon: greenIcon},{
title: "Pozo 98-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 98-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo99R = L.marker([31.65555435652498, -106.44350278436937],  {icon: greenIcon},{
title: "Pozo 99-R",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 99-R</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozo100 = L.marker([31.665697539567283, -106.43002999811499],  {icon: greenIcon},{
title: "Pozo 100",
draggable:false,
opacity: 0.75
}).bindPopup("<i><h2>Pozo 100</h2><br><hr>Sin datos activos</i>")
.addTo(map);

var pozitos = L.layerGroup([pozo98R,pozo54R,pozo100]);



  










//-------------------------------TANQUES ELEVADOS-----------------------------------------

  var T10E = L.marker([31.59076082835226, -106.39254921835696],  {icon: tanqueElevadoIcon},{
    title: "Pozo 100",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Pozo 100</h2><br><hr>Capacidad: 250 m³</i>")
    .addTo(map)

var T11E = L.marker([31.590715592872005, -106.39150229074053],  {icon: tanqueElevadoIcon},{
  title: "Tanque 11-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 11-E</h2><br><hr>Capacidad: 250 m³</i>")
  .addTo(map)

var T7E = L.marker([31.621400251682335, -106.4505902890376],  {icon: tanqueElevadoIcon},{
  title: "Tanque 7-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 7-E</h2><br><hr>Capacidad: 100 m³</i>")
  .addTo(map)

var T17E = L.marker([31.59233411255656, -106.37395128046614],  {icon: tanqueElevadoIcon},{
  title: "Tanque 17-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 17-E</h2><br><hr>Capacidad: 450 m³</i>")
  .addTo(map)

var T19E = L.marker([31.625625369065833, -106.46153365896814],  {icon: tanqueElevadoIcon},{
  title: "Tanque 19-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 19-E</h2><br><hr>Capacidad: 300 m³</i>")
  .addTo(map)

var T21E = L.marker([31.609294448283965, -106.3901185726183],  {icon: tanqueElevadoIcon},{
  title: "Tanque 21-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 21-E</h2><br><hr>Capacidad: 450 m³</i>")
  .addTo(map)

var T22E = L.marker([31.65126167998589, -106.46548484640107],  {icon: tanqueElevadoIcon},{
  title: "Tanque 22-E",
  draggable:false,
  opacity: 0.75
  }).bindPopup("<i><h2>Tanque 22-E</h2><br><hr>Capacidad: 450 m³</i>")
  .addTo(map)

  var T23E = L.marker([31.59064362100411, -106.31932222683992],  {icon: tanqueElevadoIcon},{
    title: "Tanque 23-E",
    draggable:false,
    opacity: 0.75
    }).bindPopup("<i><h2>Tanque 23-E</h2><br><hr>Capacidad: 450 m³</i>")
    .addTo(map)

var poliJs = L.geojson(poli,{
  onEachFeature: popup
}).addTo(map);
//31.706096757866405, -106.4005431432752






