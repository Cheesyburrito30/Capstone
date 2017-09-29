module.exports =(sequelize, DataTypes) => {
	const Song = sequelize.define('Song', {
		title: DataTypes.STRING,
			artist: DataTypes.STRING,
            album: DataTypes.STRING,
            albumImageUrl: DataTypes.STRING,
            youtubeId: DataTypes.STRING,
            //These are a lot of characters, and STRING is 255 char limit, so we set to TEXT
            lyrics: DataTypes.TEXT,
            tab: DataTypes.TEXT
    })
    return Song 
}