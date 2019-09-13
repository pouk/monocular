// fragment shaders don't have a default precision so we need to pick one.
// mediump is a good default
precision mediump float;

uniform sampler2D texture;

varying vec2 uv;

void main () {
  // gl_FragColor is a special variable a fragment shader should set
  gl_FragColor = texture2D(texture, uv);
}
