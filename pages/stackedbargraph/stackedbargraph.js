// Use Morris.Bar
Morris.Bar({
  element: 'graph',
  data: [
    {x: '2007', y: 3, z: 6, a: 9, b: 4},
    {x: '2008', y: 2, z: null, a: 5, b:4 },
    {x: '2009', y: 2, z: 6, a: 14, b: 3},
    {x: '2010', y: 2, z: 8, a: 34, b: 5},
    {x: '2011', y: 3, z: 6, a: 9, b: 4},
    {x: '2012', y: 2, z: null, a: 5, b:4 },
    {x: '2013', y: 2, z: 6, a: 14, b: 3},
    {x: '2014', y: 2, z: 8, a: 34, b: 5}
  ],
  xkey: 'x',
  ykeys: ['y', 'z', 'a', 'b'],
  labels: ['Chinese', 'Mexican', 'Black', 'White'],
  stacked: true
});