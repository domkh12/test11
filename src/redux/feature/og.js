// pages/api/og.js
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Showcase';
  const description = searchParams.get('description') || 'Build and customize your portfolio with ease.';
  const imageUrl = searchParams.get('image') || 'https://i.pinimg.com/originals/f1/15/24/f11524ef3d2a23175a58213744311542.png';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: 'white',
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <img src={imageUrl} alt="Image" width={600} height={315} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
