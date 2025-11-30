"use client";


import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { SparklesIcon } from "lucide-react";
import { toast } from "sonner";
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
    <div className="flex p-4 justify-center items-center h-screen max-h-[calc(100vh-64px)]">
      <button
        onClick={() => testAi.mutate()}
        disabled={testAi.isPending}
        type="button"
        className="w-[300px] bg-linear-to-r from-primary to-red-500 rounded-2xl font-semibold flex items-center justify-center h-10 text-white hover:scale-105 transition-all duration-300"
      >
        <SparklesIcon className="size-4 mr-4 text-white" />
        Click to test subscription
      </button>
    </div>
  );
};

export default Page;
