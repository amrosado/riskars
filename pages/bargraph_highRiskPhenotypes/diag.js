new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'diag',
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
    "Diagnosis":"Hypertension",
    "Weight":0.250
  },
  {
    "Diagnosis":"Disorders of lipoid metabolism",
    "Weight":0.239
  },
  {
    "Diagnosis":"Ischemic heart disease",
    "Weight":0.224
  },
  {
    "Diagnosis":"Diabetes mellitus, type 2 ",
    "Weight":0.159
  },
  {
    "Diagnosis":"Atrial fibrillation and flutter",
    "Weight":0.129
  }
],
  // The name of the data record attribute that contains x-values.
  xkey: 'Diagnosis',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Weight'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Relative weight:'],
  gridTextSize :30,
  gridTextColor: "black"
});
