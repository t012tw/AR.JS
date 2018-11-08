var stock,pinobj;

function initTP() {
	let loader = new THREE.TextureLoader();
	loader.crossOrigin = '';

	///////////////////////////////////////////////////////////////////////
	/*let loader = new THREE.TextureLoader();
	loader.crossOrigin = '';*/

	// create an array with six textures for a cool cube
	let matArray = [];
	sideTex = loader.load('https://i.imgur.com/DrvlmNW.jpg');
	sideTex.repeat.set(1, 1 / 3)
	backTex = loader.load('https://i.imgur.com/DrvlmNW.jpg');
	alphaTex = loader.load('https://i.imgur.com/vKVYXuF.png');
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

	stock = new THREE.Object3D();
	pinobj = new THREE.Object3D();
	
	let box = new THREE.Mesh(new THREE.BoxGeometry(26, 3, 26), DiceBlueMaterial);
	stock.add(box);

	var cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	var cy2 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	var cy3 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	var cy4 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2, 32, 2, false), new THREE.MeshPhongMaterial({
	map: backTex,
	side: THREE.BackSide
	}))
	stock.add(cyl,cy2,cy3,cy4)
	cyl.position.set(-7.5,0.5,-7.5);
	cy2.position.set(7.5,0.5,-7.5);
	cy3.position.set(7.5,0.5,7.5);
	cy4.position.set(-7.5,0.5,7.5);
	var pin1 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 4, 32, 2, false), new THREE.MeshPhongMaterial({
	map: sideTex,
	side: THREE.DoubleSide
	}))
	var pin2 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 4, 32, 2, false), new THREE.MeshPhongMaterial({
	map: sideTex,
	side: THREE.DoubleSide
	}))
	var pin3 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 4, 32, 2, false), new THREE.MeshPhongMaterial({
	map: sideTex,
	side: THREE.DoubleSide
	}))
	var pin4 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 4, 32, 2, false), new THREE.MeshPhongMaterial({
	map: sideTex,
	side: THREE.DoubleSide
	}))
	pinobj.add(pin1);
	pinobj.add(pin2);
	pinobj.add(pin3);
	pinobj.add(pin4);
	pin1.position.set(-7.5,2.5,-7.5);
	pin2.position.set(7.5,2.5,-7.5);
	pin3.position.set(7.5,2.5,7.5);
	pin4.position.set(-7.5,2.5,7.5);
}

function returnTP(){
	return  stock;
}
function returnPIN(){
	return  pinobj;
}