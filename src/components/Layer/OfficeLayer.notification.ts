/*
Taken from https://github.com/OfficeDev/office-ui-fabric-react and slightly modified

License:
    Office UI Fabric React
    Copyright (c) Microsoft Corporation
    All rights reserved.
    MIT License
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    Note: Usage of the fonts and icons referenced in Office UI Fabric is subject to the terms listed at http://aka.ms/fabric-assets-license
*/

import {Vue} from "vue-property-decorator";

const layersByHostId: { [hostId: string]: Vue[] } = {};

let defaultHostSelector: string | undefined;

/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
export function registerLayer(hostId: string, layer: Vue) {
  if (!layersByHostId[hostId]) {
    layersByHostId[hostId] = [];
  }

  layersByHostId[hostId].push(layer);
}

/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
export function unregisterLayer(hostId: string, layer: Vue) {
  if (layersByHostId[hostId]) {
    const idx = layersByHostId[hostId].indexOf(layer);
    if (idx >= 0) {
      layersByHostId[hostId].splice(idx, 1);
      if (layersByHostId[hostId].length === 0) {
        delete layersByHostId[hostId];
      }
    }
  }
}

/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
export function notifyHostChanged(id: string) {
  if (layersByHostId[id]) {
    layersByHostId[id].forEach(layer => layer.$forceUpdate());
  }
}

/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
export function setDefaultTarget(selector?: string) {
  defaultHostSelector = selector;
}

/**
 * Get the default target selector when determining a host
 */
export function getDefaultTarget(): string | undefined {
  return defaultHostSelector;
}
