const Joi= require('joi')
module.exports= {
   post (req,res,next){
      const schema = {
         title: Joi.string().required(),
         artist: Joi.string().required(),
         album: Joi.string().required(),
         albumImageUrl: Joi.string(),
         genre: Joi.string().required(),
         youtubeId: Joi.string(),
         lyrics: Joi.string().required(),
         tab:  Joi.string()
		}
		const {error, value} = Joi.validate(req.body.schema)
		if (error) {
			switch(error.details[0].context.key){
				case 'title':
					res.status(400).send({
						error: 'You must provide a Title!'
					})
					break
				case 'artist': 
					res.status(400).send({
						error: 'You must provide an Artist!'
					})
					break
				case 'album': 
					res.status(400).send({
						error: 'You must provide an Album!'
					})
					break
				case 'genre': 
					res.status(400).send({
						error: 'You must provide a Genre!'
					})
					break
				case 'lyrics': 
					res.status(400).send({
						error: 'You must provide Lyrics!'
					})
					break
				default:
					res.status(400).send({
						error:'invalid song info'
					})
			}
		}else{
			next()
		}
	}
}