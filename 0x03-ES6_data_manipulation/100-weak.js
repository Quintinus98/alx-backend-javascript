export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  if (!weakMap.has(endpointArg)) {
    weakMap.set(endpointArg, 0);
  }
  weakMap.set(endpointArg, weakMap.get(endpointArg) + 1);
  if (weakMap.get(endpointArg) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
