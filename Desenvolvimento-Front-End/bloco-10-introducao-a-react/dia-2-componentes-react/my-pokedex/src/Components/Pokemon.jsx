import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <h1>Nome do pokemon: {name} </h1>
        <p>Tipo do pokemon: {type}</p>
        <p>
          Peso Médio: {averageWeight.value} Unidade: {averageWeight.measurementUnit}
        </p>
        <img src={image} alt='Imagem do pokemon' />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
