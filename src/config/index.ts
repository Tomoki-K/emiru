const config = {
  IS_NODE: (typeof process !== 'undefined' && typeof require !== 'undefined'),
  DOMAIN_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://foo.com',
};

export default config;
