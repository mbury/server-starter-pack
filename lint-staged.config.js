module.exports = {
  linters: {
    '**/*.+(js|json|less|css|ts|tsx|md)': [
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
