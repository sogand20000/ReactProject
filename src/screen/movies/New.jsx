import React, { useState, useEffect } from 'react'
import Input from '../../component/Input'
import Form from '../../component/Form'
import Select from '../../component/Select'
import { getGenres } from '../../services/genreService'
import { getMovies, saveMovie, getMovie } from '../../services/moviesService'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Button from '../../component/Button'
import Joi from 'joi'

let movie = {
  title: '',
  genreId: '',
  numberInStock: '',
  dailyRentalRate: '',
}
function New(props) {
  const [errors, setErrors] = useState('')
  const [title, setTitle] = useState('')
  const [movie, setMovie] = useState([])

  const [numberInStock, setNumberInStock] = useState(movie.numberInStock)
  const [rate, setRate] = useState(movie.rate)
  const [genres, setGenres] = useState([])
  const [genreId, setGenreId] = useState()

  const [genreName, setGenreName] = useState('')
  let params = useParams()
  let navigate = useNavigate()

  const getItems = async (id) => {
    const { data: item } = await getMovie(id)
    console.log('item', item.genre._id)
    // setMovie(item)
    //
    setTitle(item.title)
    setNumberInStock(item.numberInStock)
    setRate(item.dailyRentalRate)
    setGenreId(item.genre._id)
    setGenreName(item.genre.name)
  }
  const getGenreItem = async () => {
    const { data: item } = await getGenres()
    setGenres(item)
  }

  useEffect(() => {
    getGenreItem()
    if (params.id) {
      getItems(params.id)

      if (!movie) navigate('/NotFound')
      else {
        /*  console.log('====================================')
        console.log('movie', movie)
        console.log('====================================') */
        /* setTitle(movie.title)
        setNumberInStock(movie.numberInStock)
        setRate(movie.dailyRentalRate)
        console.log('movie.genre', movie.genre)
        setGenreId(movie.genre._id)
        setGenreName(movie.genre.name) */
      }
    }
  }, [])

  var schema = Joi.object().keys({
    Title: Joi.string().required(),
    NumberInStock: Joi.number().min(0).max(10).required(),
    Genre: Joi.required(),
    Rate: Joi.number().required(),
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // try {
    const { error } = schema.validate({
      Title: title,
      NumberInStock: numberInStock,
      Rate: rate,
      Genre: genres,
    })
    error ? setErrors(error.details[0].message) : setErrors('')
    if (error) setErrors(error.details[0].message)
    movie._id = params.id
    movie.title = title
    movie.genreId = genres
    movie.numberInStock = numberInStock
    movie.dailyRentalRate = rate
    console.log('====================================')
    console.log(movie)
    console.log('====================================')
    saveMovie(movie)
  }
  return (
    <Form onSubmit={handleSubmit} errors={errors}>
      <Input
        lable="Title"
        name="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Select
        lable="Genres"
        id="genres"
        value={genreId}
        data={genres}
        onChange={(e) => {
          setGenreId(e.target.value)
        }}
      ></Select>
      <Input
        lable="Number In Stock"
        name="NumberInStock"
        value={numberInStock}
        onChange={(e) => setNumberInStock(e.target.value)}
      ></Input>
      <Input
        lable="Rate"
        name="Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      ></Input>
      <Button lable="Save"></Button>
    </Form>
  )
}

export default New
