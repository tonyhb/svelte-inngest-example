import { serve } from "inngest/express";
import { inngest } from "../../../src/inngest/client";

const handler = serve(inngest, []);

export function load() {
  let arg;
  try {
    arg = JSON.stringify(arguments);
  } catch(e) {
  }
  return {
    body: arg,
  };
}


export function PUT() {
  return {
    location: '/items/123'
  };
}

export function POST() {
  return {
    location: '/items/123'
  };
}
