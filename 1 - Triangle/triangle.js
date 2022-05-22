class Triangle
{
	constructor(gl, vertex, color)
	{
		this.vertex = vertex;

	    const vertexBuffer = gl.createBuffer();
	    const colorBuffer = gl.createBuffer();

	    const vertexCoords = gl.getAttribLocation(gl.program, 'vertexCoords');
	    const colorCoords = gl.getAttribLocation(gl.program, 'colorCoords');

	    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, this.vertex, gl.STATIC_DRAW);
	    gl.vertexAttribPointer(vertexCoords, 3, gl.FLOAT, false, 0, 0);
	    gl.enableVertexAttribArray(vertexCoords);

	    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, color, gl.STATIC_DRAW);
	    gl.vertexAttribPointer(colorCoords, 3, gl.FLOAT, false, 0, 0);
	    gl.enableVertexAttribArray(colorCoords);
	}

	getVertex = function()
	{
		return this.vertex.length / 3;
	}
}
