import React, { useEffect, useState } from 'react'
import { getMovies } from '../services/moviesService'
import { getGenres } from '../services/genreService'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../component/Pagination'
import MoviesTable from '../component/MoviesTable'
import SearchInput from './../component/SearchInput'
import _ from 'lodash'
import paginate from '../utils/paginate'
import Genre from '../screen/genre'
function Movies() {
  const [moveis, setMoveis] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [searchInput, setSearchInput] = useState('')
  const [genres, setGenres] = useState([])
  const [itemActive, setItemActive] = useState('')
  const [dataforSearch, setdataforSearch] = useState()
  const getItemsGenre = async () => {
    const { data } = await getGenres()
    const items = [{ _id: '', name: 'All Genres' }, ...data]
    setGenres(items)
  }
  const getItemsMovie = async () => {
    const { data } = await getMovies()

    setMoveis(data)
    setdataforSearch(data)

    return data
  }

  useEffect(() => {
    getItemsGenre()
    getItemsMovie()
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const filtered = itemActive
    ? moveis.filter((m) => m.genre._id === itemActive)
    : moveis
  const moviespaginate = paginate(filtered, currentPage, pageSize)
  const pagesCount = filtered?.length / pageSize
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  const handelSelectGenre = (genreItem) => {
    setItemActive(genreItem._id)
    setCurrentPage(1)
  }
  const handleSearch = (e) => {
    if (e.target.value) {
      const data = dataforSearch.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setMoveis(data)
    } else {
      setMoveis(dataforSearch)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <p>Showing {dataforSearch?.length} movies in the database.</p>
          <Col lg="2">
            <Genre
              Items={genres}
              ItemActive={itemActive}
              onSelectGenre={handelSelectGenre}
            ></Genre>
          </Col>
          <Col lg="8">
            <a className="btn btn-primary" href="/movies/New" role="button">
              New Movie
            </a>
            <SearchInput
              value={searchInput}
              onChange={handleSearch}
            ></SearchInput>
            <MoviesTable moviespaginate={moviespaginate}></MoviesTable>

            <Pagination
              itemsCount={filtered?.length}
              pagesCount={pagesCount}
              pages={pages}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            ></Pagination>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Movies
