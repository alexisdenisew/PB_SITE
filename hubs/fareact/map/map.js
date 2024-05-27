// Initialize the map and set its view to NYC coordinates
var mymap = L.map('mapid').setView([40.7128, -74.0060], 10);

// Add a tile layer to the map (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Fetch City Council Districts data from the Socrata Open Data API
fetch('https://data.cityofnewyork.us/resource/s2hu-y8ab.json')
    .then(response => response.json())
    .then(data => {
        // Convert JSON data to GeoJSON format
        var geojsonData = {
            type: "FeatureCollection",
            features: data.map(item => ({
                type: "Feature",
                properties: item,
                geometry: typeof item.the_geom === 'string' ? JSON.parse(item.the_geom) : item.the_geom
            }))
        };

        // Add GeoJSON layer to the map
        L.geoJSON(geojsonData, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    // Update information on your site based on the clicked district
                    updateDistrictInfo(feature.properties.coun_dist);
                });
            }
        }).addTo(mymap);
    });

// Other stuff honestly

function updateDistrictInfo(districtNumber) {
    // Update the HTML content with the district number
    document.getElementById('district').innerText = districtNumber;

    // Update the HTML content with the council person's number
    document.getElementById('phoneNumber').innerText = "hi";
    
    // Update the HTML content with the council person's name
    var councilPersonName = districtRecipientMap[districtNumber];
    document.getElementById('councilPerson').innerText = councilPersonName || 'Unknown';

    updateEmailContent();
}
