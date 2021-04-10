export type ContextAndValue<T> = [React.Context<T>, T];

const composeContexts = (
  contexts: ContextAndValue<any>[],
  children: React.ReactNode
) =>
  contexts.reduce(
    (acc: React.ReactNode, [Context, value]: ContextAndValue<any>) => {
      return <Context.Provider value={value}>{acc}</Context.Provider>;
    },
    children
  );

export default composeContexts;
