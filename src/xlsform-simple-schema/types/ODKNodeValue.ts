import { ODKNode } from "./ODKNode";

export type SingleODKNodeValue =
  | string
  | number
  | boolean
  | Date
  | undefined
  | ODKNode;

/**
 * The result of evaluating a node. Can be the result of a calculation, a literal answer value, or
 * a list of results if the result is not for a single node, but for a list of nodes ('nodeset').
 */
type ODKNodeValue = SingleODKNodeValue | SingleODKNodeValue[];

export default ODKNodeValue;
