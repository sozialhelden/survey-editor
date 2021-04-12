import { Store } from "rdflib";
import React from "react";

export const RDFGraphContext = React.createContext<Store>(new Store());
