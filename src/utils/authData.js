
const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_Bys2jjSNm'
const APP_SECRET = '743e4c43c38c44a5803c29562b635de6'
const AUTH_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic ' + btoa(APP_KEY + ':' + APP_SECRET)
}

const MASTERKEY = '3cb812ca74604fe6a350cea44a2a0cef'
const AUTH_MASTER = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic ' + btoa(MASTERKEY + ':' + APP_SECRET)
}

let authData = {
  BASE_URL,
  APP_KEY,
  APP_SECRET,
  AUTH_HEADERS,
  MASTERKEY,
  AUTH_MASTER
}

export default authData
