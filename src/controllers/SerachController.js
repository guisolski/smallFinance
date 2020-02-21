const Dev  = require("../models/Dev");
const parserStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index (request,response){
        // buscar todos os devs num raio de 10 km
        // Filtrar por tecnologias
        const {latitude, longitude, techs} = request.query();
        const techsA = parserStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsA
            },
            location:{
                $near: {
                    $geometry:{
                        type : "Point",
                        coordinates: [longitude,latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return response.json(devs);

    }
}