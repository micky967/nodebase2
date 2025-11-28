import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
    params: Promise<{ 
        executionsId: string
     }>
};

const Page = async ({ params }: PageProps) => {
    await requireAuth();
    const { executionsId } = await params;
    
    return <p>Executions ID: {executionsId}</p>
};

export default Page;