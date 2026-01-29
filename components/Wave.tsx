import Image from 'next/image';

export default function Wave({ className, color }: { className?: string; color: 'tan' | 'blue' | 'mosaic' }) {
  if (color === 'mosaic') {
    return (
      <>
        <div className={`relative w-full ${className || ''}`}>
          <Image alt="" src={`/images/wave-mosaic.png`} width={1200} height={100} className="h-[18vw] w-full object-cover object-top" />
        </div>
      </>
    );
  }
  const imgColor = color;
  return (
    <>
      <div className={`relative w-full ${className || ''}`}>
        <Image alt="" src={`/images/wave-${imgColor}-1.png`} width={1200} height={100} className="w-full" />
        <div className="absolute bottom-0 left-0 w-full">
          <Image alt="" src={`/images/wave-${imgColor}-2.png`} width={1200} height={100} className="h-[10vw] w-full object-cover object-top" />
        </div>
      </div>
    </>
  );
}
