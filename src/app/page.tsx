'use client';

import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "motion/react";


const Page = () => {
  
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success('Job queued successfully');
    }
  }));

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      <h1 className="text-2xl font-semibold">Protected Server Component</h1>
      {JSON.stringify(data, null, 2)}
      <motion.div
        initial={{ opacity: 0, y: -40, }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <Button
          className="w-[300px] font-bold"
          disabled={create.isPending}
          onClick={() => create.mutate()}
        >
          Create Workflow
        </Button>
      </motion.div>
      <LogoutButton />
    </div>
  );
};

export default Page;
