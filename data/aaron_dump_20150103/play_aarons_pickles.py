# play with the pickles
## pickles sample for brfss data
## input: filename for the pickle that got scraped with amrosado script
## 
## files written to disk: output JSON with questions and numbers per state

#this is the pickle 
pickle_filename = 'brfssData1996.pickle'
output_filename = 'processed_brfssData1996.json'

import os
import sys
import pickle
from collections import OrderedDict
import numpy as np
import json

l_raw_brfssData = pickle.load( open( pickle_filename, "rb" ) )

###############
d_question_data = OrderedDict()
for idx in range(len(l_raw_brfssData)):
	d_this_entry = l_raw_brfssData[idx]
	s_this_questionEntry_string = d_this_entry['question']
	s_this_questionEntry_key = d_this_entry['displayData'][0]['dataInfo']['qkey']
	s_this_questionEntry_statename = d_this_entry['displayData'][0]['dataInfo']['state']
	if s_this_questionEntry_key not in d_question_data:
		d_question_data[s_this_questionEntry_key] = dict()
		d_question_data[s_this_questionEntry_key]['question'] = s_this_questionEntry_string
		d_question_data[s_this_questionEntry_key]['answers_choices'] = d_this_entry['displayData'][0]['data'][0]['tableData'][0]
		d_question_data[s_this_questionEntry_key]['answers_by_state'] = OrderedDict()
	d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename] = OrderedDict()

	for idx_choices in range(1, len(d_this_entry['displayData'][0]['data'][0]['tableData'][0])): #loop thru possible answer choices
		this_choice_name = d_this_entry['displayData'][0]['data'][0]['tableData'][0][idx_choices]
		this_choice_percentage_answer = d_this_entry['displayData'][0]['data'][0]['tableData'][1][0][idx_choices][0]
		
		try:
			this_choice_percentage_answer = float(this_choice_percentage_answer)
			this_choice_sampleSize = float(this_choice_sampleSize)
		except:
			this_choice_percentage_answer = np.nan
			this_choice_sampleSize = np.nan
		
		d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename][this_choice_name] = OrderedDict()
		d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename][this_choice_name]['percentage'] = this_choice_percentage_answer
		if len(d_this_entry['displayData'][0]['data'][0]['tableData'][1][0][idx_choices]) == 3:
			this_choice_sampleSize = d_this_entry['displayData'][0]['data'][0]['tableData'][1][0][idx_choices][2]
			try:
				d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename][this_choice_name]['n'] = float(this_choice_sampleSize)
			except:
				d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename][this_choice_name]['n'] = np.nan
		else:
			d_question_data[s_this_questionEntry_key]['answers_by_state'][s_this_questionEntry_statename][this_choice_name]['n'] = np.nan
###############

with open(output_filename, 'w') as outfile:
	#json.dump(d_question_data, outfile)
	json.dump(d_question_data, outfile,sort_keys=False, indent=4, separators=(',', ': '))