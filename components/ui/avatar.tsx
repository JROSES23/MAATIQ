interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps): JSX.Element {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
      {initials}
    </div>
  );
}
