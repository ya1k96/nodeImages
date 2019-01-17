const multer = require('multer');
const path = require('path'); 

const storage = multer.diskStorage( {
  destination: path.join( __dirname + '../../public/uploads'),
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
} );
//Limitamos el tamaño del archivo a 200 Kbs
module.exports = multer(
  { storage, 
    limits: { fileSize: 200000 },
    fileFilter: ( req, file, callback ) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test( file.mimetype );
      const extName = filetypes.test( path.extname( file.originalname ) );

      if( mimetype && extName ){
        return callback(null, true);
      }
      callback("El archivo debe ser una extension soportada");
    }
   });
