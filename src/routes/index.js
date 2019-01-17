const { Router } = require('express');

const router = Router();

//MIDDLEWARES
const multer = require('../config/archivos').single('image');

//Routes
router.get( '/', ( req, res ) =>{
    res.render( 'index' );
});
  
router.post( '/upload', multer,( req, res ) => {
    multer(req, res, (err) => {
        console.log(req, err);
        // Everything went fine.
        res.send( 'uploaded' );
      });   
});

module.exports = router;