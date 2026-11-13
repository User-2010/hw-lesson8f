
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header style={{
      backgroundColor: '#263F32',
      color: '#F5EBD5',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 3px 10px rgba(0,0,0,0.15)'
    }}>

      <h1 style={{
        fontSize: '26px',
        margin: 0,
        letterSpacing: '1px'
      }}>
        Ghibli World
      </h1>

      <nav style={{
        display: 'flex',
        gap: '25px'
      }}>
        <Link to="/" style={{
          color: '#F5EBD5',
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          Главная
        </Link>

        <Link to="/" style={{
          color: '#F5EBD5',
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          Фильмы
        </Link>
      </nav>

    </header>
  )
}
