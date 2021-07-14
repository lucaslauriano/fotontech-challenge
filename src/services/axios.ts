import axios from "axios";
const url = "https://www.googleapis.com/books/v1/";

export const api = axios.create({
  baseURL: url,
});
