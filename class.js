class Mover {
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
    
    update() {
            this.velocity.add(this.acceleration); // 가속도를 속도에 더함
            this.position.add(this.velocity); // 속도를 위치에 더함
            this.acceleration.mult(0); // 프레임마다 가속도를 초기화 (속도가 계속 누적되지 않도록)
    }
    show() {
            fill(0);
            ellipse(this.position.x, this.position.y, 20, 20); // 물체를 원으로 표시
    }
      }
