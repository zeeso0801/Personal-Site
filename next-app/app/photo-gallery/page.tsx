import Image from 'next/image';

const photos = [
  'https://source.unsplash.com/random/800x600?nature,1',
  'https://source.unsplash.com/random/800x600?nature,2',
  'https://source.unsplash.com/random/800x600?nature,3',
  'https://source.unsplash.com/random/800x600?nature,4',
  'https://source.unsplash.com/random/800x600?nature,5',
  'https://source.unsplash.com/random/800x600?nature,6',
];

export default function Gallery() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Photo Gallery</h1>
      <p>I like to take photos whenever I travel. Here are a few favorites.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photos.map((src, i) => (
          <Image key={i} src={src} alt="Photo" width={800} height={600} className="rounded" />
        ))}
      </div>
    </div>
  );
}
