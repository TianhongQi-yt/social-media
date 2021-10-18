const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://inslike-socialmedia.herokuapp.com/";

module.exports = baseUrl;
