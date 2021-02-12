fetch('https://www.hebcal.com/converter?cfg=json&hy=5749&hm=Kislev&hd=25&h2g=1')
  .then(response => response.json())
  .then(data => console.log(data)); 