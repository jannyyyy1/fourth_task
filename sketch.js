let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2); // 화면 중간에 물체 생성
}

function draw() {
  background(220);

  let gravity = createVector(0, 0.1); // 중력 벡터
  mover.applyForce(gravity); // 중력 힘 적용

  mover.applyBoundaryForce();  // 벽 경계에 가까워지면 반발력 적용

  if (mouseIsPressed) { // 마우스를 클릭하는 동안
    let wind = createVector(0, -0.1); // 바람 힘 (위로 올라감)
    mover.applyForce(wind); // 바람 힘 적용
  }

  mover.update();
  mover.show();
}
