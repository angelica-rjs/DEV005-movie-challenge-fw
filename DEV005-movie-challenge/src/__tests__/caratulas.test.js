import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para las aserciones con jest-dom
import { Caratulas } from '../component/Caratulas';
import {Footer} from '../component/Footer'
import { Film } from '../component/Movies';
import { Navbar } from '../component/Navbar';

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
  render(<Navbar/>)
  spamElemente1 = screen.getAllByText('HOME')
  spamElemente2 = screen.getAllByText('Films')
  spamElemente3 = screen.getAllByText('Series')

  expect(spamElemente1).toBeInTheDocument();
  expect(spamElemente2).toBeInTheDocument();
  expect(spamElemente3).toBeInTheDocument();
})

