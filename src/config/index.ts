const config = {
  PORT: process.env.PORT || 5000,
  IS_NODE: (typeof process !== 'undefined' && typeof require !== 'undefined'),
  DOMAIN_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://emirutter.herokuapp.com',
};

export default config;
