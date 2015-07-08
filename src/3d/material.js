/**
* @module material
* @generate shader material for mesh
* @for p5
* @requires core
* @requires canvas
* @requires constants
*/

'use strict';

var p5 = require('../core/core');

/**
* [normal description]
* @return {[type]} [description]
*/
p5.prototype.normalMaterial = function(){

  var mId = 'testVert|normalFrag';

  if(!this._graphics.materialInHash(mId)){
    this._graphics.initShaders('testVert', 'normalFrag');
  }

  this._graphics.saveShaders(mId);

  return this;

};

/**
* [basic description]
* @param  {[type]} r [description]
* @param  {[type]} g [description]
* @param  {[type]} b [description]
* @param  {[type]} a [description]
* @return {[type]}   [description]
*/
p5.prototype.basicMaterial = function(r, g, b, a){

  r = r / 255 || 0.5;
  g = g / 255 || r;
  b = b / 255 || r;
  a = a || 1.0;

  var mId = 'testVert|basicFrag';

  if(!this._graphics.materialInHash(mId)){
    //@TODO: figure out how to do this
    // var sp = this._graphics.initShaders(
    // shaders.testVert, shaders.basicFrag, {
    //   uMaterialColor: [r, g, b, a]
    // });
    // sp.uMaterialColorLoc = gl.getUniformLocation(
    // shaderProgram, 'uMaterialColor' );
    //  gl.uniform4f( program.uMaterialColorLoc, 1.0, 1.0, 1.0, 1.0 );
    this._graphics.initShaders('testVert', 'basicFrag');
  }

  this._graphics.saveShaders(mId);

  return this;

};

module.exports = p5;