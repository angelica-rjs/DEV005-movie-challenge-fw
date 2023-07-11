
export async function GetData(busqueda) {
  const url = `https://api.themoviedb.org/3/${busqueda}language=en`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNmY2UwZWEyZjYwYzRjN2IzZmRjOWI5YWJlNGVkMyIsInN1YiI6IjY0YTVhN2E3OGM0NGI5MDEwYzlkMmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSUspfJvX2fKXK_J8PRtLEsrm-dmaiOJaq2czy3WDxc'
    }
  });
  return await response.json();
}
