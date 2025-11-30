import { requireAuth } from "@/lib/auth-utils";
import { PricingCards } from "@/components/pricing-cards";
import { Footer } from "@/components/footer";

const Page = async () => {
  await requireAuth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Page;
