'use client';

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


const Page = () => {
    const trpc = useTRPC();
    const testAi = useMutation(trpc.testAi.mutationOptions({
        onSuccess: () => {
            toast.success("You have an active subscription!!");
        },
        onError: ({ message }) => {
            toast.error(message);
        },
    }));

    return ( 
        <div className="flex items-center justify-center h-screen">
        <Button onClick={() => testAi.mutate()} className="w-[300px] font-bold flex items-center justify-center h-10">
            Click to test subscription
        </Button>
        </div>
     );
}
 
export default Page;