interface IContentAgree {
  isRequired: '필수' | '선택';
  title: string;
  terms: string;
}

export default function ContentAgree({
  isRequired,
  title,
  terms,
}: IContentAgree) {
  return (
    <article className="flex flex-col items-start justify-center gap-20 p-0">
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex items-center gap-4">
          <span className="body-sb-16 text-text-primary">[{isRequired}]</span>
          <span className="body-sb-16 text-text-main">{title}</span>
        </div>
        <div className="flex h-[10.375rem] flex-col items-start gap-[0.625rem] overflow-auto rounded-[0.25rem] border border-solid border-stroke-thirary bg-bg-primary px-[1.125rem] py-[1.4375rem] scrollbar-hidden">
          <p className="body-sb-14 text-text-sub">{terms}</p>
        </div>
      </div>
      {isRequired === '선택' && (
        <div className="flex items-start gap-32">
          <div className="flex items-center gap-12">
            <label className="body-r-16 text-text-main">동의</label>
            <input
              name="agreement"
              type="radio"
              className="checked:border-5 h-[1.5rem] w-[1.5rem]"
            />
          </div>
          <div className="flex items-center gap-12">
            <label className="body-r-16 text-text-main">비동의</label>
            <input
              checked
              name="agreement"
              type="radio"
              className="checked:border-5 h-[1.5rem] w-[1.5rem]"
            />
          </div>
        </div>
      )}
    </article>
  );
}
