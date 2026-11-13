
import React from 'react'
import { getMovies } from '../api/moviesApi'
import { useQuery } from '@tanstack/react-query'
import { MovieCard } from '../components/MovieCard'

export const HomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: getMovies
  })

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка при загрузке фильмов</div>
  }

  return (
    <section style={{
      backgroundColor: '#F5EBD5',
      minHeight: '100vh',
      padding: '30px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '25px'
    }}>
      {data?.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </section>
  )
}
