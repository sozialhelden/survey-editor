import { Patch } from "immer";

export function mergeCommands<T>(
  ops: [nextState: T, patches: Patch[], inversePatches: Patch[]][]
) {
  return ops.reduce((prev, current, _index) => [
    current[0],
    prev[1].concat(current[1]),
    prev[2].concat(current[2]),
  ]);
}
