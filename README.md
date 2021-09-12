# React + Tailwind + Webpack + SASS
安裝環境是最麻煩的

這是一個使用 create-react-app 打造的乾淨專案

使用的 package 版本都是目前最新的 所以不需要擔心 (目前日期 2021 09 12)
## Uasge

#### `npm start` 
透過 `webpack-dev-server` 運行，可在瀏覽器上輸入 [http://localhost:3000](http://localhost:3000) 瀏覽專案。

## npm script
在 `package.json` 裡面有三個 npm script

- `npm start`
用 webpack-dev-server 在瀏覽器開啟專案，詳情請看 config/webpack.dev.js
- `npm run build`
壓縮打包 詳情請看 config/webpack.prod.js
- `npm run pack`
輕量化打包 詳情請看 config/webpack.dev.js

## Package
* "@babel/core" : babel 核心
* "@babel/preset-env" : es6^ 轉換器
* "@babel/preset-react" : react 轉換器
* "autoprefixer" : 供應商前綴處理器
* "babel-loader" : webpack - babel loader
* "clean-webpack-plugin" : 清理上一次打包完的檔案 
* "css-loader" : webpack - css loader
* "css-minimizer-webpack-plugin" : css 打包最小化
* "html-webpack-plugin" : 打包時自動生成 html ，包含 css js 匯入
* "mini-css-extract-plugin" : 打包時匯出 css 成單一檔案
* "node-sass" : sass 
* "postcss" : tailwind 前置
* "postcss-import" : 這要幹嘛我有點忘了 反正重要
* "postcss-loader" : webpack - postcss loader
* "sass-loader" : webpack - sass loader
* "style-loader" : webpack - css loader
* "terser-webpack-plugin" : 最小化 js
* "webpack" : 打包工具 
* "webpack-cli" : 打包工具的指令
* "webpack-dev-server" : 運行專案
* "webpack-merge" : 結合不同的 webpack config
