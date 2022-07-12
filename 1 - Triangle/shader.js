class Shader {
    constructor(gl, triangleVertexCode, triangleFragmentCode) {
        this.gl = gl;
        this.triangleVertexCode = triangleVertexCode;
        this.triangleFragmentCode = triangleFragmentCode;

        const vertexShader = this.compileShader(this.gl, this.triangleVertexCode, this.gl.VERTEX_SHADER);
        const fragmentShader = this.compileShader(this.gl, this.triangleFragmentCode, this.gl.FRAGMENT_SHADER);
        const glProgram = this.gl.createProgram();

        this.gl.attachShader(glProgram, vertexShader);
        this.gl.attachShader(glProgram, fragmentShader);
        this.gl.linkProgram(glProgram);

        if (!this.gl.getProgramParameter(glProgram, this.gl.LINK_STATUS)) {
            alert("Falha ao criar o shader program.");

            return;
        }

        this.gl.useProgram(glProgram);
        this.gl.program = glProgram;
    }

    compileShader = function(gl, code, type) {
        var shader = gl.createShader(type);

        gl.shaderSource(shader, code);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("Erro ao compilar: " + gl.getShaderInfoLog(shader));

            return;
        }

        return shader;
    }
}
