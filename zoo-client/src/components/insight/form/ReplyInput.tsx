export default function ReplyFooter({
  text,
  id,
}: {
  text: string;
  id: number;
}) {
  return (
    <>
      <input hidden name="id" defaultValue={id} />
      <textarea
        name="content"
        className="h-64 w-full resize-none text-text-thirary focus:outline-none"
        placeholder={text}
      />
      <button
        type="submit"
        className="body-m-16 cursor-pointer text-end text-text-primary"
      >
        등록
      </button>
    </>
  );
}
