// Vertex shader

// Our shader uses both processing's texture and light variables
#define PROCESSING_TEXLIGHT_SHADER

// Set automatically by Processing
uniform mat4 transform;
uniform mat3 normalMatrix;
uniform vec3 lightNormal;
uniform mat4 texMatrix;
uniform sampler2D texture;

// Come from the geometry/material of the object
attribute vec4 vertex;
attribute vec4 color;
attribute vec3 normal;
attribute vec2 texCoord;

// These values will be sent to the fragment shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;
varying vec4 vertTexCoordR;
varying vec4 vertTexCoordL;

void main() {
  vertTexCoord = texMatrix * vec4(texCoord, 1.0, 1.0);
  vec4 color = texture2D(texture, vertTexCoord.st);

  float intensity = (color.r + color.g + color.b) / 3.0;
  float scale = 100.0;
  vec4 norm = vec4(normal * intensity * scale, 0);

  vec4 pos = vertex;
  vertColor = color;
  gl_Position = transform * (pos + norm);
}
