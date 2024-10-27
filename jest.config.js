export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    'babel-jest': {
      useESM: true,
    },
  },
};
