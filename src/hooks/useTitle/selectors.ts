export const currentTitleSelector = (state: any) => {
  return state?.titles?.length > 0 ? state?.titles?.[0] : '';
};
