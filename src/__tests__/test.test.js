import React from 'react';
import { render, screen, waitFor, fireEvent   } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom'; // Para las aserciones con jest-dom
import { Caratulas } from '../component/Caratulas';
import {Footer} from '../component/Footer'
import { Film } from '../component/Movies';
import { Navbar } from '../component/Navbar';
import { RecommendationsMovie } from '../component/Recommendations';
import { Search } from '../component/Search';
import { Films } from '../pages/Films';
import { GetData } from '../API/data';

test('renderiza correctamente la imagen y el título', () => {
  // Datos de prueba
  const imgUrl = 'https://example.com/image.jpg';
  const title = 'Título de la imagen';

  // Renderiza el componente
  render(<Caratulas imgUrl={imgUrl} title={title} />);

  // Busca la imagen en el DOM
  const imgElement = screen.getByRole('img', { name: title });
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', imgUrl);

});


test('renderiza correctamente footer y parrafo', () =>{
  render(<Footer/>)
  const pElement = screen.getByText('Derechos reservados');
  expect(pElement).toBeInTheDocument();

  // Verifica que el elemento de pie de página tenga la clase de estilo 'footer'
  const footerElement = screen.getByRole('footer');
  expect(footerElement).toHaveClass('footer');
})


test('renderiza correctamente las caratulas', () =>{
  const movies = [
    {
      id: 1,
      title: 'Pelicula 1',
      poster_path: '/ruta/a/pelicula1.jpg',
    },
    {
      id: 2,
      title: 'Pelicula 2',
      poster_path: '/ruta/a/pelicula2.jpg',
    },
  ];
  render(<Film movies={movies}/>)
  const imgElements = screen.getAllByRole('img');
  // Verifica que las imágenes de carátula tengan los atributos de src y alt adecuados
  movies.forEach((film, index) => {
    const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
    const title = film.title;

    expect(imgElements[index]).toHaveAttribute('src', imgUrl);
    expect(imgElements[index]).toHaveAttribute('alt', title);
  });
})


test('renderiza correctamente las opciones de navbar', ()=>{
  render(
  <MemoryRouter>
        <Navbar />
      </MemoryRouter>
      )
  
      const homeElement = screen.queryAllByText('Home');
      const filmsElement = screen.queryAllByText('Films');
      const seriesElement = screen.queryAllByText('Series');
    
      expect(homeElement.length).toBeGreaterThan(0);
      expect(filmsElement.length).toBeGreaterThan(0);
      expect(seriesElement.length).toBeGreaterThan(0);
})

test('renderiza correctamente la sección de recomendaciones con las películas proporcionadas', () => {
  const title = 'Recomendaciones';
  const movies = [
    {
      id: 1,
      title: 'Pelicula 1',
      poster_path: '/ruta/a/pelicula1.jpg',
    },
    {
      id: 2,
      title: 'Pelicula 2',
      poster_path: '/ruta/a/pelicula2.jpg',
    },
  ];

  render(<RecommendationsMovie title={title} movies={movies} />);

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const imgElements = screen.getAllByRole('img');

  movies.forEach((film, index) => {
    const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
    const filmTitle = film.title || film.name;

    expect(imgElements[index]).toHaveAttribute('src', imgUrl);
    expect(imgElements[index]).toHaveAttribute('alt', filmTitle);
  });
});

test('renderiza correctamente form y boton', () =>{
  render(<Search/>)
  const formElement= screen.getByRole('form');
  expect(formElement).toBeInTheDocument();

  
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveClass('btnSearch');
})



// Mock de GetData para simular su comportamiento
jest.mock('../API/data', () => ({
  GetData: jest.fn().mockResolvedValue({
    results: [
      { id: 1, title: 'Pelicula 1', poster_path: '/ruta/a/pelicula1.jpg' },
      { id: 2, title: 'Pelicula 2', poster_path: '/ruta/a/pelicula2.jpg' },
    ],
  }),
}));
describe('Films Component', () => {
  test('renderiza correctamente el componente Films', async () => {
    // Renderiza el componente Films
    render(
      <MemoryRouter>
        <Films />
      </MemoryRouter>
    );

  
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();

    // Verifica que el Search esté presente
    const searchElement = screen.getByRole('form');
    expect(searchElement).toBeInTheDocument();

    // Verifica que el Film esté presente (espera que se resuelva la carga de datos)
    await waitFor(() => {
      const filmElement = screen.getByRole('section');
      expect(filmElement).toBeInTheDocument();
    });

    // Simula una búsqueda
    const searchInput = screen.getByRole('input');
    searchInput.value = 'acción';
    fireEvent.change(searchInput, { target: { value: 'acción' } });
    fireEvent.submit(searchElement);

// Verifica que se haya llamado a GetData con la URL correcta al realizar la búsqueda
await waitFor(() => {
  expect(GetData).toHaveBeenCalledWith("https://api.themoviedb.org/3/movie/popular");
});
  });
});
