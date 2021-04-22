import React from 'react'

function MovieDetail(props) {
    return (
        <div>
            Movie id is {props.match.params.id}
        </div>
    )
}

export default MovieDetail
