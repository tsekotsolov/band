
let cloudinaryWidget = () => {
  window.cloudinary.openUploadWidget({cloud_name: 'tsekotsolov', upload_preset: 'omtbnllk', theme: 'white'},
    function (error, result) { console.log(error, result) })
}

export default cloudinaryWidget
