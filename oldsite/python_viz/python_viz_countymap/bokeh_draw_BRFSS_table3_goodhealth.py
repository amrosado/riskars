year = 2013
table_name = 'table3_selfreport_good_health'
d_for_this_table = d_feature_county_percentage[table_name]


import sys
import os

sys.path.append('../bokeh/')

from bokeh.sampledata import us_states, us_counties
from bokeh.plotting import *

us_states = us_states.data.copy()
us_counties = us_counties.data.copy()
#unemployment = unemployment.data


## make a dictionary to map county name to "tuples" keys
l_tuple_keys = us_counties.keys()
l_county_names = []
for tuple_key in l_tuple_keys:
    county_name_for_this_tuple_key = us_counties[tuple_key]['name']
    l_county_names.append(county_name_for_this_tuple_key)
d_county_tuple_key = dict(zip(l_county_names, l_tuple_keys))
d_tuple_key_county = dict(zip(l_tuple_keys, l_county_names))



del us_states['HI']
del us_states['AK']

state_xs = [us_states[code]['lons'] for code in us_states]
state_ys = [us_states[code]['lats'] for code in us_states]

county_xs=[us_counties[code]['lons'] for code in us_counties if us_counties[code]['state'] not in ['ak', 'hi', 'pr', 'gu', 'vi', 'mp', 'as']]
county_ys=[us_counties[code]['lats'] for code in us_counties if us_counties[code]['state'] not in ['ak', 'hi', 'pr', 'gu', 'vi', 'mp', 'as']]

colors = ["#F1EEF6", "#D4B9DA", "#C994C7", "#DF65B0", "#DD1C77", "#980043"]

county_colors = []
for county_id in us_counties:
    county_name = d_tuple_key_county[county_id]
    if us_counties[county_id]['state'] in ['ak', 'hi', 'pr', 'gu', 'vi', 'mp', 'as']:
        continue
    try:
        rate = d_for_this_table[county_name]
#        rate = unemployment[county_id]
        idx = min(int(rate/2), 5)
        county_colors.append(colors[idx])
    except KeyError:
        county_colors.append("black")

output_file(table_name + ".html", title="Percentage: " + table_name )

hold()

patches(county_xs, county_ys, fill_color=county_colors, fill_alpha=0.7,
        line_color="white", line_width=0.5, plot_width=1100, plot_height=700,
        title= "Percentage: " + table_name + ", year " + str(year))
patches(state_xs, state_ys, fill_alpha=0.0, line_color="#884444",
        line_width=2, name="choropleth")

show()