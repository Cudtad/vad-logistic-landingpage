import ServicePage from "@/components/service-page";

export default function index({
  params,
}: {
  params: {
    slug: "delivery" | "fulfillment" | "warehouse" | "order";
  };
}) {
  return <ServicePage slug={params.slug} />;
}
