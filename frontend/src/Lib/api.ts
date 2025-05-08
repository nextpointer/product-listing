import axios from 'axios'

const API = axios.create({
  baseURL: '/api',
})

export const fetchProducts = async (search: string) => {
  const response = await API.get(`/products?search=${search}`)
  return response.data
}

export const fetchProductById = async (id: string) => {
  const response = await API.get(`/products/${id}`)
  return response.data
}