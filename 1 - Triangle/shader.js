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

createShader = function(gl, triangleVertexCode, triangleFragmentCode) {
    const vertexShader = compileShader(gl, triangleVertexCode, gl.VERTEX_SHADER), fragmentShader = compileShader(gl, triangleFragmentCode, gl.FRAGMENT_SHADER);
    const glProgram = gl.createProgram();

    gl.attachShader(glProgram, vertexShader);
    gl.attachShader(glProgram, fragmentShader);
    gl.linkProgram(glProgram);

    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
        alert("Falha ao criar o shader program.");
        return;
    }

    gl.useProgram(glProgram);
    gl.program = glProgram;
}
