import  React , {useState, useEffect} from  "react" ;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));