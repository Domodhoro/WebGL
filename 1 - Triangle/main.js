const triangleVertexCode = "" +
"attribute vec4 vertexCoords;\n" +
"attribute vec4 colorCoords;\n" +
"varying highp vec4 Color;\n" +
"void main() {\n" +
"   gl_Position = vertexCoords;\n" +
"   Color = colorCoords;\n" +
"}\0";

const triangleFragmentCode = "" +
"varying highp vec4 Color;\n" +
"void main() {\n" +
"   gl_FragColor = Color;\n" +
"}\0";

main = function() {
    const canvas = document.getElementById("canvas"), gl = canvas.getContext("webgl");

    if (!gl) {
        alert("Falha ao iniciar contexto WebGL.");

        return;
    }

    new Shader(gl, triangleVertexCode, triangleFragmentCode);

    const vertex_coords = [
        0.0, 0.5, 0.0,
       -0.5,-0.5, 0.0,
        0.5,-0.5, 0.0
    ];

    const color_coords = [
        1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 0.0, 1.0
    ];

    const vertex = new Float32Array(vertex_coords), color = new Float32Array(color_coords);
    const triangle = new Triangle(gl, vertex, color);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, triangle.getVertex());
}
