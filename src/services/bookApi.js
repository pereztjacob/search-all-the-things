const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = 'AIzaSyC15YhYq4uguEcPkzx7byzQQjKxiljDbuo';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic }, page = 1, pageSize = 20) {
  let nextPage;
  page == 1 ? nextPage = page : nextPage = (page - 1) * pageSize;
  const url = `${BASE_URL}${topic}&maxResults=${pageSize}&startIndex=${nextPage}&orderBy=newest&key=${API_KEY}`;
  console.log(url);
  return get(url);
}