import CommentsSection from "@/components/CommentsSection";
import getAllComments from "@/utils/getAllComments";

export default async function CommentsPage() {
  const { items } = await getAllComments();

  return (
    <main className="mx-[20%] my-12  p-8 rounded-2xl shadow-2xl bg-white">
      <CommentsSection comments={items} />
    </main>
  );
}
