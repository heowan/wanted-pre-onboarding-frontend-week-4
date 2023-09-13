# 원티드 프리온보딩 프론트엔드 12차 4주차 과제 - 개인

## 📚 과제

주어진 데이터를 기반으로 시계열 차트 만들기

## 🚀 실행 방법 및 프리뷰

```bash
$ npm install
$ npm start
```
### 구현 기능

- [x] 시계열 차트 만들기
  - [x] 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트 구현
- [x] 호버 기능 구현
    - [x] 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공
- [x] 필터링 기능 구현
    - [x] 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리
    - [ ] 특정 데이터 구역 클릭 시 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역 하이라이트 처리

  
### 배포 링크


🔗 [배포 링크](https://kaleidoscopic-blancmange-cad160.netlify.app/)


### 구현 영상

|            구현 영상          |
| :------------------------------: |
| <img width="800" alt="issueList_gif" src="https://github.com/heowan/wanted-pre-onboarding-frontend-week-4/assets/101536766/4fb91ab1-e8e8-46a3-839f-09bcf2d1947c" />|


## 📁 디렉토리 구조
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 chart
 ┃ ┃ ┣ 📜 Chart.style.tsx
 ┃ ┃ ┗ 📜 Chart.tsx
 ┃ ┗ 📂 filter
 ┃   ┣ 📜 filter.style.tsx
 ┃   ┗ 📜 filter.tsx
 ┣ 📂 constants
 ┃ ┗ 📜 constants.ts
 ┣ 📂 httpClient
 ┃ ┗ 📜 httpClient.ts
 ┣ 📜 App.tsx
 ┣ 📜 index.css
 ┣ 📜 index.tsx
 ┗ 📜 react-app-env.d.ts
 ```

## ✅ 컨벤션
### 브랜치 형식
    
    main
    |_dev
    	|_feat/a
    	|_feat/b
    	|_feat/c
    
### 커밋 메세지
- 💬
    
    | 종류  | 의미 |
    | --- | --- |
    | feat | 새로운 기능을 추가할 경우 |
    | fix | 버그를 고친 경우 |
    | docs | 문서를 수정한 경우 |
    | style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
    | refactor | 프로덕션 코드 리팩토링 |
    | chore | 기타 변경사항 |
    | test | test 관련한 코드의 추가, 수정한 경우 |
    | design | CSS 등 사용자 UI 디자인 변경 |
    | comment | 필요한 주석 추가 및 변경 |
    | rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
    | remove | 파일을 삭제하는 작업만 수행한 경우 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |



## 기술스택 

### Environment

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visual Studio code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> 

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library
<img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white"> 

### Deploy

<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"> 
