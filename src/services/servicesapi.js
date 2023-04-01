fetch('https://admin.naxa.com.np/api/services')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))