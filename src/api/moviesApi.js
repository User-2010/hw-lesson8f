import axios from 'axios'

export const getMovies = async () => {
    const response = await axios.get('https://ghibliapi.vercel.app/films')
    return response.data
}
export const getMovieById = async (id) => {
    const response = await axios.get(`https://ghibliapi.vercel.app/films/${id}`)
    return response.data
}
