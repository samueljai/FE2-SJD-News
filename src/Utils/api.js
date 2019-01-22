import axios from 'axios'

const BASE_URL = 'https://sjd-news.herokuapp.com/api'

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
}

export const getArticles = async (slug) => {
  const url = slug ? `/topics/${slug}/articles` : '/articles'
  const { data } = await axios.get(`${BASE_URL}${url}`);
  return data.articles;

}

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
}