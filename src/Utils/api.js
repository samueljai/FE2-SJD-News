import axios from 'axios'

const BASE_URL = 'https://sjd-news.herokuapp.com/api'

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
}

export const getArticles = async (topic, page, sort_by, asc_order) => {
  const url = topic ? `/topics/${topic}/articles` : '/articles'
  const { data } = await axios.get(`${BASE_URL}${url}?p=${page}&&sort_by=${sort_by}&&sort_ascending=${asc_order}`);
  return data.articles;
}

export const getArticleById = async (article_id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
}

export const getCommentsByArticleId = async (article_id, page) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments?p=${page}`);
  return data.comments;
}

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
}

export const getUserByUsername = async (username) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
}

export const addNewTopic = async (slug, description) => {
  const { data } = await axios.post(`${BASE_URL}/topics`, {
    slug,
    description
  });
  console.log('new topic: ', data)
  return data.topic;
}

export const addNewArticle = async (topic, title, body, username) => {
  const { data } = await axios.post(`${BASE_URL}/topics/${topic}/articles`, {
    title,
    body,
    username
  })
  console.log('new article: ', data)
  return data.article
};