import * as RDFLib from "rdflib";
import rdfStore from "./rdfStore";

const rdfFetcher = new RDFLib.Fetcher(rdfStore);
export default rdfFetcher;

// fetcher.nowOrWhenFetched(url, function(ok, body, xhr) {
//     if (!ok) {
//         console.log("Oops, something happened and couldn't fetch data");
//     } else {
//         // do something with the data in the store (see below)
//     }
// })

export function rdfFetch(uri: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    rdfFetcher.nowOrWhenFetched(uri, function (ok, errorMessage, response) {
      if (!ok) {
        reject(new Error(errorMessage));
        return;
      }
      resolve(response);
    });
  });
}
