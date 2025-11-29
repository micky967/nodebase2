"use client";


import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { SparklesIcon } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";


const Page = () => {
  const trpc = useTRPC();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: session } = await authClient.getSession();
      if (!session) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);


  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI job queued successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );
  return (
    <div className="flex p-4 justify-center items-center h-screen">
      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        onClick={() => testAi.mutate()}
        disabled={testAi.isPending}
        className="w-[300px] bg-linear-to-r from-primary/80 to red-500 rounded-2xl to-red-500 font-semibold flex items-center justify-center h-10 text-white origin-center"
      >
        <SparklesIcon className="size-4 mr-4 text-white" />
        Click to test subscription
      </motion.button>
    </div>
  );
};

export default Page;
