function mostrarImagen(event)
const imagePreview = document.getElementById('img-preview');
const imagenUploeder = document.getElementById('img-uploeder');

imagenUploeder.addEventListener('change', async (e) =>{
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append('file', file);


  const res = await axios.post(CLOUDDINARY_URL, formData,{
    headers: {
      'Constent-Type': 'multupart/form-data'
    }
  });
  console.log(res);
  imagePreview.src = res.data.secure_url;

});
