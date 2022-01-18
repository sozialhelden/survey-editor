import { Store } from "rdflib";
import * as React from "react";

export const RDFGraphContext = React.createContext<Store>(new Store());
