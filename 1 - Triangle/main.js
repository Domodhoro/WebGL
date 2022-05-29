const triangleVertexCode = "" +
    "attribute vec4 vertexCoords;\n" +
    "attribute vec4 colorCoords;\n" +
    "varying highp vec4 Color;\n" +
    "void main()" +
    "{\n" +
    "   gl_Position = vertexCoords;\n" +
    "   Color = colorCoords;\n" +
    "}\0";

const triangleFragmentCode = "" +
    "varying highp vec4 Color;\n" +
    "void main()" +
    "{\n" +
    "   gl_FragColor = Color;\n" +
    "}\0";

main = function() {
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
        alert("Falha ao iniciar contexto WebGL.");
        return;
    }

    if (!createShader(gl, triangleVertexCode, triangleFragmentCode)) {
        alert('Falha ao criar o shader program.');
        return;
    }

    const vertex = new Float32Array([
        0.0, 0.5, 0.0,
       -0.5,-0.5, 0.0,
        0.5,-0.5, 0.0
    ]);

    const color = new Float32Array([
        1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 0.0, 1.0
    ]);

    const triangle = new Triangle(gl, vertex, color);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, triangle.getVertex());
}
