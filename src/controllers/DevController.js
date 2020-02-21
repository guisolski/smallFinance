const axios = require('axios');
const Dev = require('../models/Dev');

const parserStringAsArray = require("../utils/parseStringAsArray");
//index, show, store, update, destroy

module.exports = {
    async index (request,response){
        const devs = await Dev.find();

        return response.json(devs);

    },
    async store (request, response){
        const { github_username, techs , latidude, longitude } = request.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio} = apiResponse.data;
        
            const techsA = parserStringAsArray(techs);
        
            const location =  {
                type : 'Point',
                coordinates : [longitude,latidude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio, 
                techs : techsA,
                location
            });
        }        
        return response.json(dev);
    }
}