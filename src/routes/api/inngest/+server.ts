import { inngest } from "$lib/inngest/client";
// Cloudflare uses JS standard library Request + Response objects for
// managing the handler.  We import that here and invoke this.
import { serve } from "inngest/cloudflare";

// Create a new handler.
const handler = serve(inngest, []);

const env = {
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  ENVIRONMENT: "production", // change from production to anything in development.
};

export function GET({ request }) {
  // Wrap and call our handler.
  return handler({ request, env });
}


export function PUT({ request }) {
  return handler({ request, env });
}

export function POST({ request }) {
  return handler({ request, env });
}
