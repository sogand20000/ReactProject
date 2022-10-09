import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
function MovieForm(props) {
  let location = useLocation()
  let navigate = useNavigate()
  let params = useParams()
  console.log(params.id)
  return (
    <div>
      {params.id}
      <button
        onClick={() => navigate('/Movies')}
        className="btn btn-primary btn-sm"
      >
        back
      </button>
    </div>
  )
}

export default MovieForm
