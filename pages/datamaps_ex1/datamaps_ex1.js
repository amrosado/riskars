
// var map = new Datamap({element: document.getElementById('map')});

    var map = new Datamap({
        data: {
          AL  : { fillKey: 'LOW', numberOfThings:2002},
          AK  : { fillKey: 'LOW', numberOfThings:2002},
          AZ  : { fillKey: 'LOW', numberOfThings:2002},
          AR  : { fillKey: 'LOW', numberOfThings:2002},
          CA  : { fillKey: 'HIGH', numberOfThings:2002},
          CO  : { fillKey: 'HIGH', numberOfThings:2002},
          CT  : { fillKey: 'LOW', numberOfThings:2002},
          DE  : { fillKey: 'LOW', numberOfThings:2002},
          FL  : { fillKey: 'MEDIUM', numberOfThings:2002},
          GA  : { fillKey: 'LOW', numberOfThings:2002},
          HI  : { fillKey: 'LOW', numberOfThings:2002},
          ID  : { fillKey: 'LOW', numberOfThings:2002},
          IL  : { fillKey: 'LOW', numberOfThings:2002},
          IN  : { fillKey: 'LOW', numberOfThings:2002},
          IA  : { fillKey: 'HIGH', numberOfThings:2002},
          KS  : { fillKey: 'LOW', numberOfThings:2002},
          KY  : { fillKey: 'HIGH', numberOfThings:2002},
          LA  : { fillKey: 'LOW', numberOfThings:2002},
          ME  : { fillKey: 'LOW', numberOfThings:2002},
          MD  : { fillKey: 'LOW', numberOfThings:2002},
          MA  : { fillKey: 'MEDIUM', numberOfThings:2002},
          MI  : { fillKey: 'LOW', numberOfThings:2002},
          MN  : { fillKey: 'LOW', numberOfThings:2002},
          MS  : { fillKey: 'LOW', numberOfThings:2002},
          MO  : { fillKey: 'LOW', numberOfThings:2002},
          MT  : { fillKey: 'HIGH', numberOfThings:2002},
          NE  : { fillKey: 'LOW', numberOfThings:2002},
          NV  : { fillKey: 'LOW', numberOfThings:2002},
          NH  : { fillKey: 'LOW', numberOfThings:2002},
          NJ  : { fillKey: 'MEDIUM', numberOfThings:2002},
          NM  : { fillKey: 'LOW', numberOfThings:2002},
          NY  : { fillKey: 'LOW', numberOfThings:2002},
          NC  : { fillKey: 'UNKNOWN', numberOfThings:2002},
          ND  : { fillKey: 'LOW', numberOfThings:2002},
          OH  : { fillKey: 'LOW', numberOfThings:2002},
          OK  : { fillKey: 'LOW', numberOfThings:2002},
          OR  : { fillKey: 'LOW', numberOfThings:2002},
          PA  : { fillKey: 'MEDIUM', numberOfThings:2002},
          RI  : { fillKey: 'LOW', numberOfThings:2002},
          SC  : { fillKey: 'LOW', numberOfThings:2002},
          SD  : { fillKey: 'HIGH', numberOfThings:2002},
          TN  : { fillKey: 'LOW', numberOfThings:2002},
          TX  : { fillKey: 'HIGH', numberOfThings:2002},
          UT  : { fillKey: 'LOW', numberOfThings:2002},
          VT  : { fillKey: 'LOW', numberOfThings:2002},
          VA  : { fillKey: 'MEDIUM', numberOfThings:2002},
          WA  : { fillKey: 'LOW', numberOfThings:2002},
          WV  : { fillKey: 'LOW', numberOfThings:2002},
          WI  : { fillKey: 'LOW', numberOfThings:2002},
          WY  : { fillKey: 'LOW', numberOfThings:2002}
        },
        element: document.getElementById('map'),
        fills: {
            HIGHEST: '#8c2d04',
            HIGH: '#d94801',
            MEDIUM: '#fd8d3c',            
            LOW: '#fdd0a2',
            LOWEST: '#fff5eb',
            UNKNOWN: 'rgb(0,0,0)',
            defaultFill: 'rgb(0,0,0)'
        },
        scope: 'usa',
        geographyConfig: {
            popupTemplate: function(geo, data) {
                return ['<div class="hoverinfo"><strong>',
                        'Number of assholes in ' + geo.properties.name,
                        ': ' + data.numberOfThings,
                        '</strong></div>'].join('');
            }
        }
    });

    //draw a legend for this map
    map.legend();