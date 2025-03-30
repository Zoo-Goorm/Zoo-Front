interface IUserLabel {
  label: string;
  value: string;
}

export default function UserLabel({ label, value }: IUserLabel) {
  return (
    <div className="flex items-center">
      <div className="flex w-[9.375rem] items-center px-0 py-12">
        <label className="body-m-16 text-text-main">{label}</label>
      </div>
      <span className="body-m-16 px-12 text-text-main">{value}</span>
    </div>
  );
}
