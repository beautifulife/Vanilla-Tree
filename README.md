# Tree View

## Setup

Install dependencies

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn dev (or npm run dev)
# visit http://localhost:8080
```
**작업은 `/app/index.js`에만 하세요.**

## TODO

1. 초기 구동시에는 `/app/data.js`를 이용하여 초기 구조를 형성해야 합니다.
2. 각 폴더에는 파일을 생성할 수 있는 버튼이 있어야 합니다.
3. 파일을 더블 클릭할 경우, 폴더로 변경됩니다.
4. 파일이나 폴더를 생성할 경우, `/app/data.js`에서 가져온 객체(`TREE_DATA`)에도 정보를 수정/추가해야 합니다.
5. 리포지토리에 첨부된 `TreeView.mp4` 동영상을 참고하세요.

![Tree View](/tree-view.gif)

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
