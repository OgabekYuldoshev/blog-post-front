const ENV = process.env;

const config = {
  app: {
    title: "Hello",
    env: ENV.REACT_APP_ENV,
    version: ENV.REACT_APP_VERSION,
    technology: ENV.REACT_APP_TECHNOLOGY,
    isBeta: !!ENV.REACT_APP_IS_BETA,
    isDev: ENV.REACT_APP_ENV !== "production",
    public_url: ENV.PUBLIC_URL,
  },
  api: {
    base_url: ENV.REACT_APP_API_BASE_URL,
    access_token_key: "access-token",
    refresh_token_key: "refresh-token",
  },
  sentry: {
    dsn: ENV.REACT_APP_SENTRY_DSN,
  },
};

export default config;
