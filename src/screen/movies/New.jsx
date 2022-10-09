import React, { useState, useEffect } from 'react'
import Input from '../../component/Input'
import Form from '../../component/Form'
import Select from '../../component/Select'
import { getGenres } from '../../services/fakeGenreService'
import {
  getMovies,
  saveMovie,
  getMovie,
} from '../../services/fakeMoviesService'
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
  const [numberInStock, setNumberInStock] = useState(movie.numberInStock)
  const [rate, setRate] = useState(movie.rate)
  const [genre, setGenre] = useState('')
  const [genreName, setGenreName] = useState('')

  let params = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      movie = getMovie(params.id)
      if (!movie) navigate('/NotFound')
      else {
        setTitle(movie.title)
        setNumberInStock(movie.numberInStock)
        setRate(movie.dailyRentalRate)
        setGenre(movie.genre._id)
        setGenreName(movie.genre.name)
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
      Genre: genre,
    })
    error ? setErrors(error.details[0].message) : setErrors('')
    if (error) setErrors(error.details[0].message)

    movie.title = title
    movie.genreId = genre
    movie.numberInStock = numberInStock
    movie.dailyRentalRate = rate

    const id = saveMovie(movie)
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
        value={genre}
        data={getGenres()}
        onChange={(e) => {
          setGenre(e.target.value)
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
