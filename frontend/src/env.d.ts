interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_STRAPI_API_URL?: string
  readonly VITE_APP_GRAPHQL_URL?: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
