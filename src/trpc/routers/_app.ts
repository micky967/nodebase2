
import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { TRPCError } from '@trpc/server';




export const  appRouter = createTRPCRouter({

  testAi: protectedProcedure.mutation(async () => {

    await inngest.send({
      name: "execute/ai",
    });
     return { success: true, messaged: "AI job queued successfully"};
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return  prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
    name: "test/hello.world",
    data: {
      email: "lidermanjit@blablabla.com",
    },
  });
    
   return { success: true, messaged: "Job queued successfully"};
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;


