import { serve } from "inngest/express";
import { inngest } from "$lib/inngest/client";

const handler = serve(inngest, []);

export function GET() {
  let arg;
  console.log(arguments);
  try {
    arg = JSON.stringify(arguments);
  } catch(e) {
  }

  return new Response(JSON.stringify({ arg }), {});
}


export function PUT() {
  console.log(arguments);
  return new Response(JSON.stringify({ body: "hi" }), {});
}

export function POST() {
  console.log(arguments);
  return new Response(JSON.stringify({ body: "hi" }), {});
}

