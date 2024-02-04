import PropTypes from 'prop-types'

function InputFilter({ types, value, onChange }) {
    return <>
       <div className="form-field" >
        <label htmlFor="">Filter by type</label>
        <select id="pokemonSelect" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">All types</option>
            {types.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
            })}
        </select>
       </div>
    </>
}

InputFilter.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default InputFilter