import axios from 'axios'

const BASE_URL = 'https://sjd-news.herokuapp.com/api'

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
}

export const getArticles = async (topic) => {
  const url = topic ? `/topics/${topic}/articles` : '/articles'
  const { data } = await axios.get(`${BASE_URL}${url}`);
  return data.articles;
}

export const getArticleById = async (article_id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
}

export const getCommentsByArticleId = async (article_id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`);
  return data.comments;
}

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
}