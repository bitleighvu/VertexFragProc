// Fragment shader

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXLIGHT_SHADER

// set by host code
uniform float time;

// Set in Processing
uniform sampler2D texture;

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() {

 float xstep = 1.0 / textureSize(texture, 0).x;
 float ystep = 1.0 / textureSize(texture, 0).y;

 vec4 color = texture2D(texture, vertTexCoord.xy);

 vec2 tc0 = vertTexCoord.st + vec2(-xstep, -ystep);
 vec2 tc1 = vertTexCoord.st + vec2(0.0, -ystep);
 vec2 tc2 = vertTexCoord.st + vec2(-xstep, 0.0);
 vec2 tc3 = vertTexCoord.st + vec2(xstep, 0.0);
 vec2 tc4 = vertTexCoord.st + vec2(0.0, ystep);
 vec2 tc5 = vertTexCoord.st + vec2(xstep, ystep);

 vec4 col0 = texture2D(texture, tc0);
 vec4 col1 = texture2D(texture, tc1);
 vec4 col2 = texture2D(texture, tc2);
 vec4 col3 = texture2D(texture, tc3);
 vec4 col4 = texture2D(texture, tc4);
 vec4 col5 = texture2D(texture, tc5);

 color = col0 + col1 + col2 - (col3 + col4 + col5);
 float intensity = (color.r + color.g + color.b) / 3 + 0.5;

 if (vertTexCoord.s < time) {
   gl_FragColor = vec4(intensity, intensity, intensity, 1.0) * vertColor;
 } else {
   float diffuse = clamp(dot (vertNormal, vertLightDir),0.0,1.0);
   vec4 diffuse_color = texture2D(texture, vertTexCoord.xy);
   gl_FragColor = vec4(diffuse * diffuse_color.rgb, 1.0);
 }
}
