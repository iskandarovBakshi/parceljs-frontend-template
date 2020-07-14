const htmlVariables = {
  helloText: "Hello world 6",
  users: [1, 2, 3, 4],
  isDirector: false,
  red: true,
};

module.exports = {
  plugins: {
    "posthtml-include": {
      root: "./src",
    },
    "posthtml-expressions": {
      locals: htmlVariables,
    },
    "posthtml-beautify": {},
  },
};
