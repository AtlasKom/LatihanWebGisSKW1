var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_1.png" /> Clipped'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Clipped_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Clipped_1];
lyr_Clipped_1.set('fieldAliases', {'namobj': 'namobj', 'remark': 'remark', 'ftype': 'ftype', 'kecamatan': 'kecamatan', 'desa': 'desa', 'kabupaten': 'kabupaten', 'ID': 'ID', 'nama': 'nama', });
lyr_Clipped_1.set('fieldImages', {'namobj': 'TextEdit', 'remark': 'TextEdit', 'ftype': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'kabupaten': 'TextEdit', 'ID': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_1.set('fieldLabels', {'namobj': 'hidden field', 'remark': 'no label', 'ftype': 'hidden field', 'kecamatan': 'no label', 'desa': 'no label', 'kabupaten': 'no label', 'ID': 'no label', 'nama': 'no label', });
lyr_Clipped_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});