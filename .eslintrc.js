module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "no-console": "error",//禁止 console，這個很常在開發中大量使用，卻忘記消掉XD 
    "no-empty": "error",//禁止無意義的空白，可能會破壞排版，見仁見智啦
    "no-irregular-whitespace":"error",
    "semi":"off" //關掉 ; 檢查
  },
};
