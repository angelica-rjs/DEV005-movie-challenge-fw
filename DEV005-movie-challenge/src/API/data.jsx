export async function GetData(url) {
  const apiUrl = `https://api.themoviedb.org/3/${url}`;
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  });
  return await response.json();
}

export async function GetDataSearchMovie(searchText) {
  const apiKey = '083fce0ea2f60c4c7b3fdc9b9abe4ed3';
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchText}`;
 
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  });
  return await response.json();
}

export async function GetDataSearchTv(searchText) {
  const apiKey = '083fce0ea2f60c4c7b3fdc9b9abe4ed3';
  const apiUrl = `https://api.themoviedb.org/3/search/tv?query=${searchText}`;
 
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  });
  return await response.json();
}
'trending/movie/day?language=en-US'
'https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=YOUR_API_KEY'

export async function GetDataRecomendatios(recomendatios) {
  const apiKey = '083fce0ea2f60c4c7b3fdc9b9abe4ed3';
  const apiUrl = `https://api.themoviedb.org/3/${recomendatios}&api_key=YOUR_API_KEY`;
 
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  });
  return await response.json();
}