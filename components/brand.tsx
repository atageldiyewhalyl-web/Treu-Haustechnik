/* The logo's symbol on its own (cut from the client's logo file), for places that show the brand
   without the lettering. */
import Image from 'next/image';

export function Mark({ className }: { className?: string }) {
  return <Image className={className} src="/assets/brand/symbol.png" alt="" width={436} height={200} />;
}
