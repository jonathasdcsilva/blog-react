import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
  createdAt: string;
}

export function PostDate({ createdAt }: PostDateProps) {
  return (
    <time
      className='text-slate-600 text-sm/tight'
      dateTime={createdAt}
      title={formatRelativeDate(createdAt)}>
        {formatDatetime(createdAt)}
    </time>
  );
}