ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([120.197445, 22.985975, 120.202085, 22.988516]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_1 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_park_3 = new ol.format.GeoJSON();
var features_park_3 = format_park_3.readFeatures(json_park_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_3.addFeatures(features_park_3);cluster_park_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_park_3
});
var lyr_park_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_park_3, 
                style: style_park_3,
                interactive: true,
                title: '<img src="styles/legend/park_3.png" /> park公園'
            });
var format_bridge_4 = new ol.format.GeoJSON();
var features_bridge_4 = format_bridge_4.readFeatures(json_bridge_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bridge_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bridge_4.addFeatures(features_bridge_4);cluster_bridge_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_bridge_4
});
var lyr_bridge_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_bridge_4, 
                style: style_bridge_4,
                interactive: true,
                title: '<img src="styles/legend/bridge_4.png" /> bridge橋'
            });
var format_underpass_5 = new ol.format.GeoJSON();
var features_underpass_5 = format_underpass_5.readFeatures(json_underpass_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_underpass_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_underpass_5.addFeatures(features_underpass_5);cluster_underpass_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_underpass_5
});
var lyr_underpass_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_underpass_5, 
                style: style_underpass_5,
                interactive: true,
                title: '<img src="styles/legend/underpass_5.png" /> underpass地下道'
            });
var format_toilet_6 = new ol.format.GeoJSON();
var features_toilet_6 = format_toilet_6.readFeatures(json_toilet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_toilet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toilet_6.addFeatures(features_toilet_6);cluster_toilet_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_toilet_6
});
var lyr_toilet_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_toilet_6, 
                style: style_toilet_6,
                interactive: true,
                title: '<img src="styles/legend/toilet_6.png" /> toilet公廁'
            });
var format_toiletheatmap_7 = new ol.format.GeoJSON();
var features_toiletheatmap_7 = format_toiletheatmap_7.readFeatures(json_toiletheatmap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_toiletheatmap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toiletheatmap_7.addFeatures(features_toiletheatmap_7);
var lyr_toiletheatmap_7 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_toiletheatmap_7, 
                radius: 10 * 2,
                gradient: ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'],
                blur: 15,
                shadow: 250,
                title: 'toilet(heatmap)公廁(熱點)'
            });
var format_bus_8 = new ol.format.GeoJSON();
var features_bus_8 = format_bus_8.readFeatures(json_bus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bus_8.addFeatures(features_bus_8);
var lyr_bus_8 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_bus_8, 
                radius: 10 * 2,
                gradient: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
                blur: 15,
                shadow: 250,
                title: 'bus公車'
            });
var format_church_9 = new ol.format.GeoJSON();
var features_church_9 = format_church_9.readFeatures(json_church_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_church_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_church_9.addFeatures(features_church_9);
var lyr_church_9 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_church_9, 
                radius: 10 * 2,
                gradient: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                blur: 15,
                shadow: 250,
                title: 'church教堂'
            });
var format_temple_10 = new ol.format.GeoJSON();
var features_temple_10 = format_temple_10.readFeatures(json_temple_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_temple_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temple_10.addFeatures(features_temple_10);
var lyr_temple_10 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_temple_10, 
                radius: 10 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'temple寺廟'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoads_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_park_3.setVisible(true);lyr_bridge_4.setVisible(true);lyr_underpass_5.setVisible(true);lyr_toilet_6.setVisible(true);lyr_toiletheatmap_7.setVisible(true);lyr_bus_8.setVisible(true);lyr_church_9.setVisible(true);lyr_temple_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoads_1,lyr_OSMStandard_2,lyr_park_3,lyr_bridge_4,lyr_underpass_5,lyr_toilet_6,lyr_toiletheatmap_7,lyr_bus_8,lyr_church_9,lyr_temple_10];
lyr_park_3.set('fieldAliases', {'編號': '編號', '公園名稱': '公園名稱', '里別': '里別', '面積': '面積', '類別': '類別', '座落位置': '座落位置', '使用分區': '使用分區', '所在轄區': '所在轄區', 'X座標': 'X座標', 'Y座標': 'Y座標', });
lyr_bridge_4.set('fieldAliases', {'橋梁名稱': '橋梁名稱', '管理機關': '管理機關', '路線': '路線', '是否為跨河橋': '是否為跨河橋', '座標': '座標', 'x': 'x', 'y': 'y', });
lyr_underpass_5.set('fieldAliases', {'編號': '編號', '地下道名稱': '地下道名稱', '所在區鄉': '所在區鄉', '道路等級': '道路等級', '路線': '路線', '竣工年': '竣工年', '竣工月': '竣工月', '橋梁總長[公尺]': '橋梁總長[公尺]', '最大淨寬[公尺]': '最大淨寬[公尺]', '最小淨寬[公尺]': '最小淨寬[公尺]', '跨越物體': '跨越物體', '總車[軌]道數': '總車[軌]道數', '總橋孔數': '總橋孔數', '結構型式': '結構型式', 'X座標': 'X座標', 'Y座標': 'Y座標', });
lyr_toilet_6.set('fieldAliases', {'id': 'id', '公廁編號': '公廁編號', '公廁名稱': '公廁名稱', '緯度': '緯度', '經度': '經度', '建檔類別': '建檔類別', '區': '區', 'pubtol_id': 'pubtol_id', 'pubtol_公廁名稱': 'pubtol_公廁名稱', 'pubtol_最新公廁級別': 'pubtol_最新公廁級別', 'pubtol_建檔類別': 'pubtol_建檔類別', 'pubtol_區': 'pubtol_區', });
lyr_park_3.set('fieldImages', {'編號': 'Range', '公園名稱': 'TextEdit', '里別': 'TextEdit', '面積': 'TextEdit', '類別': 'TextEdit', '座落位置': 'TextEdit', '使用分區': 'TextEdit', '所在轄區': 'TextEdit', 'X座標': 'TextEdit', 'Y座標': 'TextEdit', });
lyr_bridge_4.set('fieldImages', {'橋梁名稱': 'TextEdit', '管理機關': 'TextEdit', '路線': 'TextEdit', '是否為跨河橋': 'TextEdit', '座標': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_underpass_5.set('fieldImages', {'編號': 'Range', '地下道名稱': 'TextEdit', '所在區鄉': 'TextEdit', '道路等級': 'TextEdit', '路線': 'TextEdit', '竣工年': 'TextEdit', '竣工月': 'TextEdit', '橋梁總長[公尺]': 'TextEdit', '最大淨寬[公尺]': 'TextEdit', '最小淨寬[公尺]': 'TextEdit', '跨越物體': 'TextEdit', '總車[軌]道數': 'Range', '總橋孔數': 'Range', '結構型式': 'TextEdit', 'X座標': 'TextEdit', 'Y座標': 'TextEdit', });
lyr_toilet_6.set('fieldImages', {'id': 'Range', '公廁編號': 'TextEdit', '公廁名稱': 'TextEdit', '緯度': 'TextEdit', '經度': 'TextEdit', '建檔類別': 'TextEdit', '區': 'TextEdit', 'pubtol_id': 'TextEdit', 'pubtol_公廁名稱': 'TextEdit', 'pubtol_最新公廁級別': 'TextEdit', 'pubtol_建檔類別': 'TextEdit', 'pubtol_區': 'TextEdit', });
lyr_park_3.set('fieldLabels', {'編號': 'no label', '公園名稱': 'header label', '里別': 'header label', '面積': 'header label', '類別': 'no label', '座落位置': 'header label', '使用分區': 'header label', '所在轄區': 'no label', 'X座標': 'no label', 'Y座標': 'no label', });
lyr_bridge_4.set('fieldLabels', {'橋梁名稱': 'header label', '管理機關': 'no label', '路線': 'header label', '是否為跨河橋': 'header label', '座標': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_underpass_5.set('fieldLabels', {'編號': 'no label', '地下道名稱': 'header label', '所在區鄉': 'header label', '道路等級': 'header label', '路線': 'no label', '竣工年': 'no label', '竣工月': 'no label', '橋梁總長[公尺]': 'header label', '最大淨寬[公尺]': 'header label', '最小淨寬[公尺]': 'header label', '跨越物體': 'header label', '總車[軌]道數': 'no label', '總橋孔數': 'no label', '結構型式': 'no label', 'X座標': 'no label', 'Y座標': 'no label', });
lyr_toilet_6.set('fieldLabels', {'id': 'no label', '公廁編號': 'no label', '公廁名稱': 'header label', '緯度': 'no label', '經度': 'no label', '建檔類別': 'no label', '區': 'header label', 'pubtol_id': 'no label', 'pubtol_公廁名稱': 'no label', 'pubtol_最新公廁級別': 'header label', 'pubtol_建檔類別': 'no label', 'pubtol_區': 'no label', });
lyr_toilet_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});