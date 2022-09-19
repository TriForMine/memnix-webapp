import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'

export const baseUrl = 'https://api.memnix.app/v1'
export const api = axios.create({
  baseURL: baseUrl,
})

export async function loginUser(email: string, password: string) {
  try {
    const { data } = await api.post('/login', {
      email: email,
      password: password,
    })

    setCookie('token', data['token'])
    return true
  } catch (e: any) {
    return false
  }
}

export async function registerUser(
  email: string,
  password: string,
  username: string
) {
  try {
    await api.post('/register', {
      email: email,
      password: password,
      username: username,
    })

    return true
  } catch (e: any) {
    return false
  }
}

export async function user() {
  const token = getCookie('token')
  if (!token) {
    return false
  }
  try {
    const { data } = await api.get('/user?refresh=true', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return data['success']
  } catch (e: any) {
    return false
  }
}

export async function getUser() {
  const token = getCookie('token')
  if (!token) {
    return {}
  }
  try {
    const { data } = await api.get('/user', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return data['user']
  } catch (e: any) {
    return {}
  }
}

export async function resetPassword(email: string) {
  try {
    await api.post('/users/resetpassword', {
      email: email,
    })
    return true
  } catch (e: any) {
    return false
  }
}

export async function resetPasswordConfirmation(
  email: string,
  code: string,
  password: string
) {
  try {
    const { data } = await api.post('/users/confirmpassword', {
      email: email,
      code: code,
      password: password,
    })
    return data['success']
  } catch (e: any) {
    return false
  }
}
