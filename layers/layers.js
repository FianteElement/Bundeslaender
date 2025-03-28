var wms_layers = [];

var format_AUT_Bundeslandgrenzenaufgelst_0 = new ol.format.GeoJSON();
var features_AUT_Bundeslandgrenzenaufgelst_0 = format_AUT_Bundeslandgrenzenaufgelst_0.readFeatures(json_AUT_Bundeslandgrenzenaufgelst_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUT_Bundeslandgrenzenaufgelst_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUT_Bundeslandgrenzenaufgelst_0.addFeatures(features_AUT_Bundeslandgrenzenaufgelst_0);
var lyr_AUT_Bundeslandgrenzenaufgelst_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AUT_Bundeslandgrenzenaufgelst_0, 
                style: style_AUT_Bundeslandgrenzenaufgelst_0,
                popuplayertitle: 'AUT_Bundeslandgrenzen — aufgelst',
                interactive: true,
                title: '<img src="styles/legend/AUT_Bundeslandgrenzenaufgelst_0.png" /> AUT_Bundeslandgrenzen — aufgelst'
            });

lyr_AUT_Bundeslandgrenzenaufgelst_0.setVisible(true);
var layersList = [lyr_AUT_Bundeslandgrenzenaufgelst_0];
lyr_AUT_Bundeslandgrenzenaufgelst_0.set('fieldAliases', {'fid': 'fid', 'ST_KZ': 'ST_KZ', 'FL': 'FL', 'MERIDIAN': 'MERIDIAN', 'GKZ': 'GKZ', 'BKZ': 'BKZ', 'FA_NR': 'FA_NR', 'BL_KZ': 'BL_KZ', 'KG_NR': 'KG_NR', 'KG': 'KG', 'PG': 'PG', 'PB': 'PB', 'FA': 'FA', 'GB_KZ': 'GB_KZ', 'GB': 'GB', 'VA_NR': 'VA_NR', 'VA': 'VA', 'BL': 'BL', 'ST': 'ST', });
lyr_AUT_Bundeslandgrenzenaufgelst_0.set('fieldImages', {'fid': '', 'ST_KZ': '', 'FL': '', 'MERIDIAN': '', 'GKZ': '', 'BKZ': '', 'FA_NR': '', 'BL_KZ': '', 'KG_NR': '', 'KG': '', 'PG': '', 'PB': '', 'FA': '', 'GB_KZ': '', 'GB': '', 'VA_NR': '', 'VA': '', 'BL': '', 'ST': '', });
lyr_AUT_Bundeslandgrenzenaufgelst_0.set('fieldLabels', {'fid': 'no label', 'ST_KZ': 'no label', 'FL': 'no label', 'MERIDIAN': 'no label', 'GKZ': 'no label', 'BKZ': 'no label', 'FA_NR': 'no label', 'BL_KZ': 'no label', 'KG_NR': 'no label', 'KG': 'no label', 'PG': 'no label', 'PB': 'no label', 'FA': 'no label', 'GB_KZ': 'no label', 'GB': 'no label', 'VA_NR': 'no label', 'VA': 'no label', 'BL': 'no label', 'ST': 'no label', });
lyr_AUT_Bundeslandgrenzenaufgelst_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});