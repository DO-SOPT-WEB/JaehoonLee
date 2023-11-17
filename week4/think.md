### 로딩 / 에러 처리를 하는 방법에는 어떤 것들이 있을까?

### Loading

- 데이터를 불러오기 전 loading state를 true로 두고 데이터를 불러오고 나서 false로 변경한다. loading state가 true 이면 early return으로 loading 페이지를 띄운다.

### Error

- try catch 문의 catch에서 error를 발견하고 핸들링 해준다.

### 두개를 하나의 방법으로 처리

- suspense와 error boundary를 사용해서 loading 페이지와 에러 페이지를 띄운다.

### 패칭 라이브러리란 무엇이고 어떤 것들이 있을까?

서버와 클라이언트 간의 비동기 작업을 관리해주는 라이브러리이다.

서버상태를 관리한다고 생각할 수 있다.

서버의 상태를 클라이언트에 저장하지 않아도 된다.

SWR과 React Query가 있다.

### 패칭 라이브러리를 쓰는 이유는 무엇일까?

- 상태관리 라이브러리에서 비동기 로직을 제거하여
- 선언적으로 프로그래밍 할 수 있음(장황하지 않은 코드)
- 동일한 API 요청이 여러 번 호출될 경우 한 번만 실행 (캐싱)
- 데이터가 dirty 해진 경우 적절한 시점에 알아서 업데이트 (refresh)
- Global State와 Server State의 관심사를 분리
