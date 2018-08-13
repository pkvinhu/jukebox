const router = require('express').Router()
const { Artist, Album, Song } = require('../db');


// connect your API routes here!


// router.get('/albums', (req, res, next)=> {
//   Album.findAll()
//   .then((albums)=>{res.send(albums)})
// })

router.get('/albums', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist]
    });
  res.json(albums);
  } catch(err) {
    next(err);
  }
});

router.get('/albums/:albumId', async (req, res, next) => {
  //TODO: research a way to use findById with an include statement
  try {
    const album = await Album.findOne({
      where: { id: req.params.albumId },
      include: [Artist, Song]
    });
    res.json(album);
  } catch(err) {
    next(err)
  }
})



// router.get('/artists/:artistid',(req, res, next)=> {
//   if (!req.params.artistid){
//     Artist.findAll()
//     .then((artists)=>{res.send(artists)})
//   }

//   else {
//     Artist.findById(req.params.artistid, {
//   	  include: [ Album, Song ]
//     })
//     .then((artist)=>{res.send(artist)});
//   }
// })

module.exports = router
