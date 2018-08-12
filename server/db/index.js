const db = require('./db')
const Sequelize = require('sequelize');
// require each of your models here...
const Album = db.define('album', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  artworkUrl: {
  	type: Sequelize.STRING,
  	defaultValue: 'defult-album.jpg'
  }
})

const Artist = db.define('artist', {
    name: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
})

const Song = db.define('song', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  audioUrl: {type: Sequelize.STRING},
  genre: {type: Sequelize.STRING}
})

//albumId will appear on each Song
//each Album will have 'accessors' called 
//getSingle - that retrieves all Song objects from an Album - 
//and setSingle - that adds Song object into a column (array) of Singles
Album.hasMany(Song);
Artist.hasMany(Song);
Artist.hasMany(Album);
//artistId is inserted into Song when .setArtist() is used
Song.belongsTo(Artist);
Song.belongsTo(Album);
Album.belongsTo(Artist);



// ...and give them some nice associations here!

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
