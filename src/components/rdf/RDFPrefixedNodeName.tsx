import { replaceURIWithPrefix } from "../../lib/rdf/namespaces";

export default function RDFPrefixedNodeName({
  name,
  contextPrefix,
}: {
  name: string;
  contextPrefix: string;
}) {
  const [prefix, suffix] = replaceURIWithPrefix(name).split(":");
  return (
    <>
      {prefix !== contextPrefix && (
        <span style={{ fontWeight: 300 }}>{prefix}:</span>
      )}
      <span style={{ fontWeight: 600 }}>{suffix}</span>
    </>
  );
}
