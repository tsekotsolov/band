let createFormObj = (event) => {
  let fieldName = event.target.dataset.name
  let fieldValue = event.target.value
  let inputDataObj = {}
  inputDataObj[fieldName] = fieldValue

  return inputDataObj
}
export default createFormObj
