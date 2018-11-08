var mesh,meshobj;
var pointLight;
var FitBobj;

function buildside1() {//左側邊到缺口前
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-10.53915662650602, -2.25, 0),
    new THREE.Vector3(-1.05, -2.25, 0),
    new THREE.Vector3(-1.05, 2.25, 0),
    new THREE.Vector3(-9.969879518072289, 2.25, 0)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(0, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildside2() {//右側邊到缺口前
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(1.05, -2.25, 0),
    new THREE.Vector3(10.53915662650602, -2.25, 0),
    new THREE.Vector3(9.969879518072289, 2.25, 0),
    new THREE.Vector3(1.05, 2.25, 0)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(0, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildtop() {//上底
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(9.969879518072289, 2.25, -1.05),
    new THREE.Vector3(-9.969879518072289, 2.25, -1.05),
    new THREE.Vector3(9.969879518072289, 2.25, 1.05),
    new THREE.Vector3(-9.969879518072289, 2.25, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}


function buildhole1() {//左邊
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-1.05, -2.25, -1.05),
    new THREE.Vector3(-1.05, 0.05, -1.05),
    new THREE.Vector3(-1.05, -2.25, 1.05),
    new THREE.Vector3(-1.05, 0.05, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildhole2() {//右邊
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(1.05, -2.25, -1.05),
    new THREE.Vector3(1.05, 0.05, -1.05),
    new THREE.Vector3(1.05, -2.25, 1.05),
    new THREE.Vector3(1.05, 0.05, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildhole3() {//前面
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-1.05, -0.05, 1.05),
    new THREE.Vector3(-1.05, 2.25, 1.05),
    new THREE.Vector3(1.05, -0.05, 1.05),
    new THREE.Vector3(1.05, 2.25, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildhole4() {//後面
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-1.05, -0.05, -1.05),
    new THREE.Vector3(-1.05, 2.25, -1.05),
    new THREE.Vector3(1.05, -0.05, -1.05),
    new THREE.Vector3(1.05, 2.25, -1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildhole5() {//下面
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-1.05, -0.05, -1.05),
    new THREE.Vector3(-1.05, -0.05, 1.05),
    new THREE.Vector3(1.05, -0.05, -1.05),
    new THREE.Vector3(1.05, -0.05, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildbottom() {//左邊下底到左缺口
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-1.05, -2.25, -1.05),
    new THREE.Vector3(-10.53915662650602, -2.25, -1.05),
	new THREE.Vector3(-1.05, -2.25, 1.05),
    new THREE.Vector3(-10.53915662650602, -2.25, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function buildbottom2() {//右邊下底到左缺口
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(1.05, -2.25, -1.05),
    new THREE.Vector3(10.53915662650602, -2.25, -1.05),
	new THREE.Vector3(1.05, -2.25, 1.05),
    new THREE.Vector3(10.53915662650602, -2.25, 1.05)
  );

  geometry.faces.push( new THREE.Face3(0, 1, 2) );
  geometry.faces.push( new THREE.Face3(1, 2, 3) );

  st0 = new THREE.Vector2(0, 0);
  st1 = new THREE.Vector2(1, 0);
  st2 = new THREE.Vector2(2/3, 1);
  st3 = new THREE.Vector2(1/3, 1);
  
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function initBH() {
		//////////////////////////////////////////////////////////////////////
	let loader = new THREE.TextureLoader();
	loader.crossOrigin = '';
	let matArray = [];
	sideTex = loader.load('https://i.imgur.com/DrvlmNW.jpg');
	sideTex.repeat.set(1, 1 / 3)
	backTex = loader.load('https://i.imgur.com/DrvlmNW.jpg');
	alphaTex = loader.load('https://i.imgur.com/7vUtTGh.png');
	//alphaTex = loader.load('https://i.imgur.com/31y2M5c.png');

	matArray.push(new THREE.MeshPhongMaterial({
	map: sideTex // px 
	
	}));
	matArray.push(new THREE.MeshPhongMaterial({
	map: sideTex //nx
	}));
	matArray.push(new THREE.MeshPhongMaterial({
	map: backTex, // py
	alphaMap: alphaTex,
	transparent: true
	}));
	matArray.push(new THREE.MeshPhongMaterial({
	map: backTex //ny
	}));
	matArray.push(new THREE.MeshPhongMaterial({
	map: sideTex //pz
	}));
	matArray.push(new THREE.MeshPhongMaterial({
	map: sideTex //nz
	}));
	var DiceBlueMaterial = new THREE.MultiMaterial(matArray);
	//////////////////////////////////////////////////////////////////////
	FitBobj = new THREE.Object3D();
	meshobjA = new THREE.Object3D();

	var geometryA = new THREE.BoxGeometry(5.9, 41.83076021302984, 3);

	mesh = new THREE.Mesh(geometryA, DiceBlueMaterial);
	meshobjA.add(mesh);

	let a = 1/Math.tan(Math.PI/2.174175625075492)
	localX = new THREE.Vector3(1,0,0)
	localY = new THREE.Vector3(a, 1, 0)
	localZ = new THREE.Vector3(0,0,1)
	mesh.matrix.makeBasis (localX, localY, localZ);
	mesh.matrixAutoUpdate = false;
	meshobjA.position.set(-12.825,20.75,0)
	
	var cy = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	meshobjA.add(cy);
	cy.position.set(2.265,19.91538010651492,0);
	
	let meshobj2 = new THREE.Object3D();
	let mesh2 = mesh.clone();
	meshobj2.add(mesh2);
	meshobj2.rotation.y = Math.PI;
	a = 1/Math.tan(Math.PI/2.174175625075492);
	localX = new THREE.Vector3(1,0,0)
	localY = new THREE.Vector3(a, 1, 0)
	localZ = new THREE.Vector3(0,0,1)
	mesh2.matrix.makeBasis (localX, localY, localZ);
	mesh2.matrixAutoUpdate = false;
	meshobj2.position.set(12.825,20.75,0)
	
	var cy2 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	meshobj2.add(cy2);
	cy2.position.set(2.265,19.91538010651492,0);
	
	FitBobj.add(meshobjA,meshobj2);
	//////////////////////////////////////////////////////////////////////
	//中間梯形
	texture = loader.load('https://i.imgur.com/DrvlmNW.jpg');
	var material = new THREE.MeshBasicMaterial({
	map: texture,
	side: THREE.DoubleSide
	});
	var mid1 = new THREE.Mesh (buildside1(), new THREE.MeshPhongMaterial({
	map: texture,
	side: THREE.DoubleSide
	}));
	mid1.position.set(0,17.75,1.05);
	var mid2 = mid1.clone();
	mid2.position.set(0,17.75,-1.05);
	
	var mid3 = new THREE.Mesh (buildside2(), new THREE.MeshPhongMaterial({
	map: texture,
	side: THREE.DoubleSide
	}));
	mid3.position.set(0,17.75,1.05);
	var mid4 = mid3.clone();
	mid4.position.set(0,17.75,-1.05);
	
	var top = new THREE.Mesh (buildtop(), material);
	top.position.set(0,17.75,0);
	
	var hole1 = new THREE.Mesh (buildhole1(), material);
	hole1.position.set(0,17.75,0);
	
	var hole2 = new THREE.Mesh (buildhole2(), material);
	hole2.position.set(0,17.75,0);
	
	var hole3 = new THREE.Mesh (buildhole3(), material);
	hole3.position.set(0,17.75,0);
	
	var hole4 = new THREE.Mesh (buildhole4(), material);
	hole4.position.set(0,17.75,0);
	
	var hole5 = new THREE.Mesh (buildhole5(), material);
	hole5.position.set(0,17.75,0);
	
	var bottom = new THREE.Mesh (buildbottom(), material);
	bottom.position.set(0,17.75,0);
	
	var bottom2 = new THREE.Mesh (buildbottom2(), material);
	bottom2.position.set(0,17.75,0);
	
	FitBobj.add(mid1,mid2,mid3,mid4,top,hole1,hole2,hole3,hole4,hole5,bottom,bottom2);
}


function returnBH(){
	return  FitBobj;
}