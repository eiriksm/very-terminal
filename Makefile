install:
		cd node_modules/NodObjC/node_modules/ref && nw-gyp rebuild --target=0.8.6 --arch=ia32
		cd node_modules/NodObjC/node_modules/ffi &&	nw-gyp rebuild --target=0.8.6 --arch=ia32
