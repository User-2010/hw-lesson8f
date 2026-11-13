
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getMovieById } from '../api/moviesApi'

export const MovieDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['film', id],
        queryFn: () => getMovieById(id)
    })

    if (isLoading) {
        return (
            <div style={{
                backgroundColor: '#F5EBD5',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#263F32',
                fontSize: '24px'
            }}>
                Загрузка...
            </div>
        )
    }

    if (isError) {
        return <div style={{ padding: '30px', color: '#9B3D32' }}>
            Ошибка при загрузке фильма
        </div>
    }

    return (
        <div style={{
            backgroundColor: '#F5EBD5',
            minHeight: '100vh',
            paddingBottom: '40px',
            color: '#263F32'
        }}>

            {/* Баннер */}
            <img
                src={data.movie_banner}
                alt={data.title}
                style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover'
                }}
            />

            {/* Информация о фильме */}
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '35px 25px'
            }}>

                <h1 style={{
                    fontSize: '36px',
                    marginBottom: '10px'
                }}>
                    {data.title}
                </h1>

                <h2 style={{
                    fontSize: '22px',
                    color: '#65745C',
                    fontWeight: 'normal'
                }}>
                    {data.original_title}
                </h2>

                <p style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    marginTop: '25px'
                }}>
                    {data.description}
                </p>

                <div style={{
                    backgroundColor: '#E8DFC5',
                    padding: '25px',
                    borderRadius: '15px',
                    marginTop: '25px',
                    lineHeight: '2'
                }}>
                    <p><strong>Режиссёр:</strong> {data.director}</p>
                    <p><strong>Продюсер:</strong> {data.producer}</p>
                    <p><strong>Год выхода:</strong> {data.release_date}</p>
                    <p><strong>Длительность:</strong> {data.running_time} мин.</p>
                    <p><strong>Рейтинг:</strong> {data.rt_score}</p>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    style={{
                        marginTop: '30px',
                        backgroundColor: '#263F32',
                        color: '#F5EBD5',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '13px 28px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    ← Назад
                </button>

            </div>
        </div>
    )
}
