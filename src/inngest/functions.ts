import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Fetching video
    await step.sleep("fetching", "3s");
    // Transcribing video
    await step.sleep("transcribing", "3s");
    // Sending transcription to Open AI for example
    await step.sleep("sending-to-AI ", "3s");
  
    await step.run("create-workflow", async () => {
      return prisma.workflow.create({
      data: {
        name: "workflow-from-inngest"
      },
    });
    });
  },
);