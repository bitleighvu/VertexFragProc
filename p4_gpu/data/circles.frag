// Fragment shader

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_LIGHT_SHADER

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() {

  // x = rsin(theta)
  // y = rcos(theta)
  float r = 0.1;
  vec2 center1 = vec2(0.9, 0.5); // 1, 0
  vec2 center2 = vec2(0.783, 0.783);
  vec2 center3 = vec2(0.5, 0.9); // 0 ,1
  vec2 center4 = vec2(0.217, 0.783);
  vec2 center5 = vec2(0.1, 0.5); // -1, 0
  vec2 center6 = vec2(0.217, 0.217);
  vec2 center7 = vec2(0.5, 0.1); // 0, -1
  vec2 center8 = vec2(0.783, 0.217);

  if (sqrt(pow(center1.x - vertTexCoord.s, 2) + pow(center1.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 1);
  } else if (sqrt(pow(center2.x - vertTexCoord.s, 2) + pow(center2.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.8875);
  } else if (sqrt(pow(center3.x - vertTexCoord.s, 2) + pow(center3.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.775);
  } else if (sqrt(pow(center4.x - vertTexCoord.s, 2) + pow(center4.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.6625);
  } else if (sqrt(pow(center5.x - vertTexCoord.s, 2) + pow(center5.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.55);
  } else if (sqrt(pow(center6.x - vertTexCoord.s, 2) + pow(center6.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.4375);
  } else if (sqrt(pow(center7.x - vertTexCoord.s, 2) + pow(center7.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.325);
  } else if (sqrt(pow(center8.x - vertTexCoord.s, 2) + pow(center8.y - vertTexCoord.t, 2)) < r) {
      gl_FragColor = vec4(0, 1.0, 1.0, 0.2125);
  } else {
      gl_FragColor = vec4(0, 1.0, 1.0, 0);
  }
}
