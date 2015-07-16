// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    "theme": "light",
    dataProvider: {
        map: "worldLow",
        zoomLevel: 3.5,
        zoomLongitude: -20.1341,
        zoomLatitude: 49.1712,

        lines: [{
            latitudes: [51.5002, 51.359206],
            longitudes: [-0.1262, -0.190442]
        }, {
            latitudes: [51.5002, 52.363618],
            longitudes: [-0.1262, 4.897327]
        }, {
            latitudes: [51.5002, 40.717558],
            longitudes: [-0.1262, -74.005108]
        }, {
            latitudes: [51.5002, 39.894823],
            longitudes: [-0.1262, 116.356888]
        }, {
            latitudes: [51.5002, -33.880855],
            longitudes: [-0.1262, 151.120377]
        }, {
            latitudes: [51.5002, 39.715308],
            longitudes: [-0.1262, -84.214325]
        }, {
            latitudes: [51.5002, 38.018573],
            longitudes: [-0.1262, -78.488560]
        }, {
            latitudes: [51.5002, 51.743971],
            longitudes: [-0.1262, -1.229439]
        }, {
            latitudes: [51.5002, 51.320297],
            longitudes: [-0.1262, -0.560904]
        }, {
            latitudes: [51.5002, 41.857719],
            longitudes: [-0.1262, -87.687721]
        }],
        images: [{
            id: "london",
            svgPath: targetSVG,
            title: "London",
            latitude: 51.5002,
            longitude: -0.1262,
            scale: 1
        }, {
            svgPath: targetSVG,
            title: "Beijing",
            latitude: 39.894823,
            longitude: 116.356888,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Sydnei",
            latitude: -33.880855,
            longitude: 151.120377,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "New York",
            latitude: 40.43,
            longitude: -74,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Amsterdam",
            latitude: 52.350375,
            longitude: 4.877586,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Sutton",
            latitude: 51.359197,
            longitude: -0.190348,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Oxford",
            latitude: 51.752523,
            longitude: -1.248064,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Charlottesville VA",
            latitude: 38.013933,
            longitude: -78.483925,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Miamisburg OH",
            latitude: 39.637869,
            longitude: -84.286766,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Woking",
            latitude: 51.317033,
            longitude: -0.558286,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Chicago IL",
            latitude: 41.857719,
            longitude: -87.687721,
            scale: 0.5
        }]
    },
     
    areasSettings: {
      unlistedAreasColor: "#FFCC00",
       unlistedAreasAlpha:0.9
    },
     
    imagesSettings: {
        color: "#CC0000",
        rollOverColor: "#CC0000",
        selectedColor: "#000000"
    },

    linesSettings: {
        arc: -0.7, // this makes lines curved. Use value from -1 to 1
        arrow: "middle",
        color: "#CC0000",
        alpha: 0.4,
        arrowAlpha: 1,
        arrowSize: 4
    },

    backgroundZoomsToTop: true,
    linesAboveImages: true
});
jQuery('.chart-input').off().on('input change',function() {
	var property	= jQuery(this).data('property');
	var target		= map.linesSettings;
  
    target[property] = this.value; 
  
	map.validateNow();
});