import { ODKNode } from './ODKNode';

export type SingleODKNodeValue = string | number | boolean | Date | undefined | ODKNode;

type ODKNodeValue = SingleODKNodeValue | SingleODKNodeValue[];

export default ODKNodeValue;
