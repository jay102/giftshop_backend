const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

const setupMulter=()=>{
  cloudinary.config({
    cloud_name: 'dm0meolb4',
    api_key:'387897719827711',
    api_secret:'NWmAwgJJPKElxqlhu0AAASFF1sg'
  })

const storage = cloudinaryStorage({
  cloudinary : cloudinary,
  folder: 'image',
  allowedFormats:['jpg','png', 'gif'],
  transformation :  [{ width: 500, height: 500, crop: "limit" }]
})

const multerInit = multer({ storage: storage });
  return {
    multerInit,
  };

}
module.exports = setupMulter();