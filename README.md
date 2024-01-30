# 아날로그 시계

현재 시간을 표현하는 시계와 툴팁으로 이루어진 정적 웹 사이트입니다.  
Demo: [https://analog-clock.wejesh.com](https://analog-clock.wejesh.com)

### 기술 스택

[Create React App](https://github.com)를 사용해 이 프로젝트를 초기화했습니다.  
상태 관리 라이브러리로 [Recoil](https://recoil.com)을 사용합니다.

### 컴포넌트 구조

- `<App>`
  - `<Clock>`: 시계의 Base 컴포넌트
    - `<ClockHand.Hour>`: 시침 컴포넌트
    - `<ClockHand.Minute>`: 분침 컴포넌트
    - `<ClockHand.Second>`: 초침 컴포넌트
  - `<Portal>`: 툴팁을 감싸는 컴포넌트
    - `<Tooltip>`: 툴팁 컴포넌트

Dot Notation으로 시침, 분침, 초침을 구분해 재사용성과 가독성을 높이고자 했습니다.

### 상태 관리

- 현재 시간에 대한 상태  
  초침까지 렌더링하므로 초침 컴포넌트에서 상태를 업데이트합니다.
  - `atom`
    - 현재 시간
  - `selector`
    - 시, 분, 초 각각 표현하는 숫자
    - `HH:mm:ss` 포맷으로 표현한 문자열
- 툴팁 렌더링에 필요한 상태  
  시계 컴포넌트에서 시계에 마우스를 hover할 때 마우스의 좌표를 기반으로 상태를 업데이트합니다.
  - `atom`
    - 툴팁의 위치
