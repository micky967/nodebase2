import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
    params: Promise<{ 
        subscriptionId: string
     }>
};

const Page = async ({ params }: PageProps) => {
    await requireAuth();
    const { subscriptionId } = await params;
    
    return <p>Subscription ID: {subscriptionId}</p>
};

export default Page;