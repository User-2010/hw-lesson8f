
import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({ film }) => {
  return (
    <Link
      to={`/films/${film.id}`}
      style={{
        textDecoration: 'none',
        color: '#263F32'
      }}
    >
      <div style={{
        backgroundColor: '#F5EBD5',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        transition: 'transform 0.3s'
      }}>
        <img
          src={film.image}
          alt={film.title}
          style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover'
          }}
        />

        <div style={{ padding: '15px' }}>
          <h3 style={{
            margin: '0 0 10px',
            fontSize: '18px'
          }}>
            {film.title}
          </h3>

          <p style={{
            margin: 0,
            color: '#65745C'
          }}>
            {film.release_date}
          </p>
        </div>
      </div>
    </Link>
  )
}
