import { serve } from "inngest/cloudflare";
import { inngest } from "$lib/inngest/client";

const handler = serve(inngest, []);

export function GET({ request }) {
  console.log(arguments, request);

  // Log some defaults that Inngest uses to make sure request is well formed.
  // console.log(request?.headers['host'], request?.originalUrl);
  
  const env = {};

  return handler({ request, env });
}


export function PUT({ request }) {
  const env = {};
  return handler({ request, env });
}

export function POST({ request }) {
  const env = {};
  return handler({ request, env });
}

