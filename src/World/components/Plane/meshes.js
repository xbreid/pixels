import { Mesh } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes(el) {
  const geometries = createGeometries(el);
  const materials = createMaterials();

  const plane = new Mesh(geometries.plane, materials.shader);

  return {
    plane,
  };
}

export { createMeshes }