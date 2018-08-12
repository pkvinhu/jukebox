const router = require('express').Router()
const { Artist, Album, Song } = require('../db');


// connect your API routes here!


// router.get('/albums', (req, res, next)=> {
//   Album.findAll()
//   .then((albums)=>{res.send(albums)})
// })

router.get('/albums/:albumid',(req, res, next)=> {
  
  if (!req.params.albumid){
    Album.findAll()
    .then((albums)=>{res.send(albums)})
  }

  else {
    Album.findById(req.params.albumid, {
  	  include: [ Artist, Song ]
    })
    .then((album)=>{res.send(album)});
  }

})

router.get('/artists/:artistid',(req, res, next)=> {
  if (!req.params.artistid){
    Artist.findAll()
    .then((artists)=>{res.send(artists)})
  }

  else {
    Artist.findById(req.params.artistid, {
  	  include: [ Album, Song ]
    })
    .then((artist)=>{res.send(artist)});
  }
})

module.exports = router
