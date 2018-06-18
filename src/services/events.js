import axios from 'axios'
import { getConfig } from './blogs'

const url = `${process.env.REACT_APP_BASEURL}/events`

const CREATED_NEW_USER = 'CREATED_NEW_USER'
const CREATED_NEW_BLOG = 'CREATED_NEW_BLOG'
const LIKED_BLOG = 'LIKED_BLOG'

export const createBlogEventObject = {
    type: CREATED_NEW_BLOG,
    description: 'created a new blog'
}

export const newUserEventObject = {
    type: CREATED_NEW_USER,
    description: 'joined Blogster'
}

export const likedBlogEventObject = {
    type: LIKED_BLOG,
    description: 'liked the blog'
}

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const postNewEvent = async (newEvent, token) => {
  let config;
  if (token) {
    config = getConfig(token)
  }
  const response = await axios.post(url, newEvent, config)
  return response.data
}

export default { getAll, postNewEvent }
