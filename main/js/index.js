Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv', function(err, rows) {
    function unpack(rows, key) {
        console.log(rows);
        return rows.map(function(row) { return row[key]; });
    }
    console.log(unpack(rows, 'postal'));
    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'location'),
        z: unpack(rows, 'alcohol'),
        text: unpack(rows, 'location'),
        autocolorscale: true
    }];

    var layout = {
        title: 'Pure alcohol consumption<br>among adults (age 15+) in 2010',
        geo: {
            projection: {
                type: 'robinson'
            }
        
        }
    };
    Plotly.plot(myDiv, data, layout, { showLink: false });
});