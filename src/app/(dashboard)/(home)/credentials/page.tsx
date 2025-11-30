import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {Array.from({ length: 16 }, (_, index) => (
        <div
          key={index}
          className="w-[calc(25%-0.375rem)] bg-card border rounded-lg p-4 shadow-sm"
        >
          <h3 className="font-semibold">Card {index + 1}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Credentials Page
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;