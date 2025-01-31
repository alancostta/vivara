export const ELEMENTS = {
  SEARCH_RESULT: {
    fnSrcResult: (product) =>
      `#gallery-layout-container img[alt~='${product}']`,
    resultEmpty:
      '.vtex-search-result-3-x-searchNotFoundOops',
  },
}
