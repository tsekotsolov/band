let showHidePass = (event) => {
  let eye = event.target
  let field = eye.parentElement.parentElement.firstElementChild

  if (field.type === 'password') {
    field.type = 'text'
    eye.classList.remove('fa-eye')
    eye.classList.add('fa-eye-slash')
  } else {
    field.type = 'password'
    eye.classList.remove('fa-eye-slash')
    eye.classList.add('fa-eye')
  }
}

export default showHidePass
