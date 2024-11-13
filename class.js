class Mover {
    constructor(x, y) {
      this.position = createVector(x, y); // 위치 벡터
      this.velocity = createVector(2, 2); // 속도 벡터
    }

    applyForce(force) {
        this.velocity.add(force); // 힘을 속도에 더함
      }
}