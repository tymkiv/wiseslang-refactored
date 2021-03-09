import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';

export default class Canvas {
  constructor(container) {
    this.container = container;

    this.canvas = document.createElement('canvas');
    this.gl = this.canvas.getContext('webgl', {
      alpha: true,
      stencil: false,
      antialias: false,
      depth: false,
    });
    if (!this.gl) return false;

    this.container.appendChild(this.canvas);

    this.vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(this.vertexShader, vertex);
    this.gl.compileShader(this.vertexShader);
    
    this.fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(this.fragmentShader, fragment);
    this.gl.compileShader(this.fragmentShader);

    this.program = this.gl.createProgram();

    this.gl.attachShader(this.program, this.vertexShader);
    this.gl.attachShader(this.program, this.fragmentShader);
    this.gl.linkProgram(this.program);
    this.gl.useProgram(this.program);

    this.uResolution = this.gl.getUniformLocation(this.program, 'uResolution');
    this.gl.enableVertexAttribArray(this.uResolution);

    // additive blending "lighter"
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
    this.gl.enable(this.gl.BLEND);

    // create position buffer
    this.aPosition = this.gl.getAttribLocation(this.program, 'aPosition');
    this.gl.enableVertexAttribArray(this.aPosition);
    this.positionBuffer = this.gl.createBuffer();
    
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  draw(posArray, count) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.vertexAttribPointer(this.aPosition, 3, this.gl.FLOAT, false, 0, 0);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, posArray, this.gl.DYNAMIC_DRAW);
    this.gl.drawArrays(this.gl.GL_POINTS, 0, count);
  }

  resize() {
    this.width = this.container.clientWidth * window.devicePixelRatio;
    this.height = this.container.clientHeight * window.devicePixelRatio;
    this.canvas.style.width = `${this.container.clientWidth}px`;
    this.canvas.style.height = `${this.container.clientHeight}px`;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    
    
    this.gl.uniform2f(this.uResolution, this.width, this.height);
    this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight,
    );
  }
}