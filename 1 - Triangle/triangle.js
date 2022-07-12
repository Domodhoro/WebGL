class Triangle {
	constructor(gl, vertex, color) {
		this.vertex = vertex;
		this.color = color;

	    const vertexBuffer = gl.createBuffer(), colorBuffer = gl.createBuffer();
	    const vertexCoords = gl.getAttribLocation(gl.program, 'vertexCoords'), colorCoords = gl.getAttribLocation(gl.program, 'colorCoords');

	    this.setup(gl, vertexBuffer, vertexCoords, colorBuffer, colorCoords);
	}

	getVertex = function() {
		return this.vertex.length / 3;
	}

	setup = function(gl, vertexBuffer, vertexCoords, colorBuffer, colorCoords) {
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, this.vertex, gl.STATIC_DRAW);
	    gl.vertexAttribPointer(vertexCoords, 3, gl.FLOAT, false, 0, 0);
	    gl.enableVertexAttribArray(vertexCoords);

	    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, this.color, gl.STATIC_DRAW);
	    gl.vertexAttribPointer(colorCoords, 3, gl.FLOAT, false, 0, 0);
	    gl.enableVertexAttribArray(colorCoords);
	}
}
