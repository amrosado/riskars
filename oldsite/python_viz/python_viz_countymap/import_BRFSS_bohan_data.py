## import data from tables:

input_dir = '../../data/BRFSS/bohan_copy_from_site/2013/'
filename_tsv_input = input_dir + 'table3_selfreport_good_health.tsv'



##import the data

import sys
import os
import pandas as pd

#dictionary for all features for all counties:
d_feature_county_percentage = dict()


#name of the tsv file, without the .tsv
tsv_file_name_prefix = file_tsv_input.rsplit('/', 1)[-1].rsplit('.',1)[0]

d_feature_county_percentage[tsv_file_name_prefix] = dict()

### import the file
df_tsv_input = pd.read_csv(filename_tsv_input, delimiter="\t")
l_county_firstname = df_tsv_input['County']
l_county_firstname = [x.split("County")[0].strip() for x in l_county_firstname]
df_tsv_input['COUNTY_FIRSTNAME'] = l_county_firstname

#add a key for the county name, and add the percentage
for i in range(len(df_tsv_input)):
	this_county_firstname = df_tsv_input.iloc[i].COUNTY_FIRSTNAME
	d_feature_county_percentage[tsv_file_name_prefix][this_county_firstname] = df_tsv_input.iloc[i]['%']
