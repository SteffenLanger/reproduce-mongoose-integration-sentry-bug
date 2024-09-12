import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
    dsn: "https://e6e1170322fc4adf5e394017eb219daa@o4507106464825344.ingest.de.sentry.io/4507106471641168",

    // Add Tracing by setting tracesSampleRate
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
console.log("Sentry initialized");
