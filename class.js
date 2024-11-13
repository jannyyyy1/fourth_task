class mover {
    constructor(x, y) {
      this.position = createVector(x, y); // 위치 벡터
      this.velocity = createVector(2, 2); // 속도 벡터
      this.acceleration = createVector(0, 0); // 가속도 벡터 초기화
      this.mass = 1; // 물체의 질량
    }

    applyForce(force) {
        this.velocity.add(force); // 힘을 속도에 더함
        let f = force.copy(); // 힘을 복사
        f.div(this.mass); // 질량으로 나누어 가속도 계산
        this.acceleration.add(f); // 가속도에 추가
        }
      }
