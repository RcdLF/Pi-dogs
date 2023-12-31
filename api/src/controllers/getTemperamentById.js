const { Dog, Temperament, Dog_temperament } = require("../db");

const getTemperamentById = async (id) => {
    try {

      if(id === 'All'){
        return Dog.findAll({ include: [Temperament] });
      }

  const temperament = await Temperament.findByPk(id, {
    include: {
      model: Dog ,
      through : {
        model : Dog_temperament
      }
    },
  });
  
  return temperament;
} catch(error) {
    throw new Error(error)
}
};

module.exports = getTemperamentById;
