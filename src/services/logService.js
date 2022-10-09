import * as Sentry from '@sentry/react'

function init() {
  Sentry.init({
    dsn: 'https://b44b82ef99b44a459e49c0e8514d4e06@o4503952557670400.ingest.sentry.io/4503952562061312',
    //integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}
function log(error) {
  Sentry.captureEvent(error)
}
export default {
  init,
  log,
}
