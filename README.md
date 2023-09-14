<h1>Wanted Front-End Internship Mission[1]</h1>

# 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
[![react-markdown](https://img.shields.io/badge/react--markdown-00bfff?style=for-the-badge&logo=react&logoColor=white)](https://github.com/uiwjs/react-markdown-preview)
[![Octokit](https://img.shields.io/badge/Octokit-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/octokit/octokit.js)

# 주요기능

### open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - api 요청으로 받아온 응답 데이터를 util/sortingComments.ts 유틸함수를 통해서 정렬

### 다섯번째 셀마다 광고 이미지 출력

  1. 광고 이미지 컴포넌트 선언 : AdBanner.tsx
  2. IssueCardWRapper 컴포넌트에서 조건에 맞는 index 값에 따라 AdBanner 컴포넌트 노출

### 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(Infinite scroll)

  https://github.com/tjswo2292/wanted-internship-1/assets/55657931/48f96bb4-630c-462a-913e-bb512b874cfa

  1. 현재 스크롤 높이를 계산해주는 useScroll 커스텀 훅 선언
  2. IssueListSection에서 useEffect hook을 통해 스크롤 높이가 끝 지점인지 판단
  3. 끝지점일시에 page state (+1)
  4. api 호출 함수의 parameter에 page state 전달
  5. page 값을 가지고 몇 페이지의 데이터를 호출할 것인지 판단

### 데이터 요청 중 로딩 표시

https://github.com/tjswo2292/wanted-internship-1/assets/55657931/0867a273-8cc9-41a5-863b-eb03696ec59b

- IssueListSection 데이터 로딩
- Infinite scroll 데이터 로딩

# 커밋 메세지

| Commit Type | Format                                               |
| ----------- | ---------------------------------------------------- |
| feat        | 새로운 기능 추가                                     |
| bug         | 버그 수정                                            |
| docs        | 문서수정                                             |
| design      | 사용자 UI 디자인 변경(CSS 등)                        |
| refactor    | 코드 리팩토링                                        |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등) |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                    |
| remove      | 파일을 삭제만 한 경우                                |
