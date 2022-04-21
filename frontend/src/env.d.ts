interface ImportMetaEnv {
  readonly VITE_APP_STRAPI_API_URL: string
  readonly VITE_APP_GRAPHQL_URL: string

  // more env variables...
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
