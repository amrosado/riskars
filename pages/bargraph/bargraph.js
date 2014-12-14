new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'bargraph',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
/*
  data: [
      { comorbidity: 'Peptic ulcer disease', coefficient: 0 },
      { comorbidity: 'Liver disease',  coefficient: -0.4255},
      { comorbidity: 'Hypertension, uncomplicated', coefficient: -0.4255 },
      { comorbidity: 'Psychosis', coefficient: -0.1126 },
      { comorbidity: 'AIDS/HIV', coefficient: -0.7350 },
      { comorbidity: 'Hypertension,complicated', coefficient: -0.7350 },
      { comorbidity: 'Hypothyroidism', coefficient: -0.6273 },
      { comorbidity: 'Cardiac arrhythmia', coefficient: -0.1555 },
      { comorbidity: 'Depression', coefficient: -0.2501 },
      { comorbidity: 'Neurological, other', coefficient: 1.7463 },
      { comorbidity: 'Lymphoma', coefficient: 1.6913 }
  ], */
data: [
  {
    "Comorbidity":"New York",
    "Coefficient":-0.425493091
  },
  {
    "Comorbidity":"Colorado",
    "Coefficient":0.077228413
  },
  {
    "Comorbidity":"Atlanta",
    "Coefficient":-0.11256534
  },
  {
    "Comorbidity":"Compton",
    "Coefficient":-0.735049467
  },
  {
    "Comorbidity":"California",
    "Coefficient":0
  },
  {
    "Comorbidity":"China",
    "Coefficient":0.627327171
  },
  {
    "Comorbidity":"Spain",
    "Coefficient":-0.155505255
  },
  {
    "Comorbidity":"France",
    "Coefficient":-0.250060439
  },
  {
    "Comorbidity":"Germany",
    "Coefficient":1.746332914
  },
  {
    "Comorbidity":"Lymphoma",
    "Coefficient":1.691251726
  },
  {
    "Comorbidity":"Nigeria",
    "Coefficient":-0.523086242
  },
  {
    "Comorbidity":"Zimbabwe",
    "Coefficient":-0.411224964
  },
  {
    "Comorbidity":"Greece",
    "Coefficient":0.641348796
  },
  {
    "Comorbidity":"Ohio",
    "Coefficient":0.918685179
  },
  {
    "Comorbidity":"New Josrey",
    "Coefficient":-0.176414644
  },
  {
    "Comorbidity":"Manhattan",
    "Coefficient":-0.36456906
  }
],
  // The name of the data record attribute that contains x-values.
  xkey: 'Comorbidity',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Coefficient'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Number of smokers']
});
