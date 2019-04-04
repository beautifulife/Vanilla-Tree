# Tree View
![vanilla-tree](https://user-images.githubusercontent.com/41249563/55575851-d7217000-574a-11e9-9d21-5d7dc48f3207.gif)

폴더/파일 구조를 웹으로 표현해내는 과제입니다.

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

## Features

1. 어플리케이션 구동 시 초기 구조를 형성
2. 각 폴더 내 파일을 생성할 수 있는 버튼
3. 파일을 더블 클릭할 경우, 폴더로 변경
4. 파일이나 폴더를 생성할 경우, `/app/data.js`에서 가져온 객체(`TREE_DATA`)에도 정보를 수정/추가


## Things to do

1. CSS 디자인
2. 파일, 폴더의 이름을 수정할 수 있도록 변경