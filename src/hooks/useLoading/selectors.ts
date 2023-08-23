export function isLoadingSelector(state: any) {
  return Object.keys(state.loading).reduce((rs, key) => {
    return rs || state?.loading[key] > 0;
  }, false) as boolean;
}
