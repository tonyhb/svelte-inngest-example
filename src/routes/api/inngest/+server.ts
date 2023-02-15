import { serve } from "inngest/cloudflare";
import { inngest } from "$lib/inngest/client";

const handler = serve(inngest, []);

export function GET({ request }) {
  console.log(arguments, request);

  // Log some defaults that Inngest uses to make sure request is well formed.
  // console.log(request?.headers['host'], request?.originalUrl);

  return handler(request);
}


export function PUT({ request }) {
  return handler({ request });
}

export function POST() {
  return handler({ request });
}

