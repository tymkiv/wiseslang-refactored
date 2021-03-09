precision highp float;
attribute vec3 aPosition;
uniform vec2 uResolution;
void main() {
  gl_PointSize = max(2.0, min(10.0, aPosition.z));
  gl_Position = vec4(
    ( aPosition.x / uResolution.x * 2.0) - 1.0, 
    (-aPosition.y / uResolution.y * 2.0) + 1.0, 
    0.0,
    1.0
  );
}