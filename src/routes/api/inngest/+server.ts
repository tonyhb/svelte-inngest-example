import { serve } from "inngest/express";
import { inngest } from "../../../src/inngest/client";

const handler = serve(inngest, []);

export function load() {
  let arg;
  try {
    arg = JSON.stringify(arguments);
  } catch(e) {
  }

  return new Response(JSON.stringify({ arg }), {});
}


export function PUT() {
  return new Response(JSON.stringify({ body: "hi" }), {});
}

export function POST() {
  return new Response(JSON.stringify({ body: "hi" }), {});
}

