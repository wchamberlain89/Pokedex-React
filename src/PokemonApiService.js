import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2'

export const getByURL = (url) => {
  return axios.get(url).then(res => res.data)
}  

export const getAllGenerations = () => {
  return axios.get(`${baseURL}/generation`).then( res => res.data)
}

export const getGeneration = async (id) => {
  const generation = await axios.get(`${baseURL}/generation/${id}`)
  return generation.data
}

export const getPokemon = (id) => {
  return axios.get(`${baseURL}/pokemon/${id}`).then(res => res.data)
}

export const getSpeciesInfo = (id) => {
  return axios.get(`${baseURL}/pokemon-species/${id}`).then(res => res.data)
}

export const getAbilityInfo = (url) => {
  return axios.get(url).then(res => res.data)
}

export const getEvolutionChain = (url) => {
  return axios.get(url).then(res => res.data)
}

export const getPokemonHeroImage = (id) => {
  return axios.get(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`).then(res => res.data)
}

export default {
  getAllGenerations,
  getGeneration,
  getPokemon,
  getSpeciesInfo,
  getAbilityInfo,
  getEvolutionChain,
  getByURL,
  getPokemonHeroImage
}