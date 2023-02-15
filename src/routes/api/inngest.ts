import { serve } from "inngest/express";
import { inngest } from "../../../src/inngest/client";

export default serve(inngest, []);
