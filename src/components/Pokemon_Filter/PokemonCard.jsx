import PropTypes from 'prop-types'

function PokemonCard({ data }) {

    const { image_url, name, types } = data

    return <div className="card">
        <img src={image_url} alt="" />
        <h3 className="title">{name}</h3>
        <p className="description">({types.join(", ")})</p>
    </div>
}

PokemonCard.propTypes = {
    data: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default PokemonCard