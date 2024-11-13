let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2); // 화면 중간에 물체 생성
}

function draw() {
  background(220);

  let gravity = createVector(0, 0.1); // 중력 벡터
  mover.applyForce(gravity); // 중력 힘 적용
}