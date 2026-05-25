import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const SRC = resolve(root, 'public/uploads/cropped-logo.webp');
const PUBLIC = resolve(root, 'public');

await mkdir(PUBLIC, { recursive: true });

const padded = await sharp(SRC)
  .resize({ width: 512, height: 512, fit: 'contain', background: { r: 250, g: 247, b: 243, alpha: 1 } })
  .png()
  .toBuffer();

await sharp(padded).resize(180, 180).png().toFile(resolve(PUBLIC, 'apple-touch-icon.png'));
await sharp(padded).resize(192, 192).png().toFile(resolve(PUBLIC, 'icon-192.png'));
await sharp(padded).resize(512, 512).png().toFile(resolve(PUBLIC, 'icon-512.png'));

const ico32 = await sharp(padded).resize(32, 32).png().toBuffer();
const ico16 = await sharp(padded).resize(16, 16).png().toBuffer();

function makeIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const pngs = [];

  images.forEach((img, i) => {
    const size = img.size >= 256 ? 0 : img.size;
    dir.writeUInt8(size, i * 16);
    dir.writeUInt8(size, i * 16 + 1);
    dir.writeUInt8(0, i * 16 + 2);
    dir.writeUInt8(0, i * 16 + 3);
    dir.writeUInt16LE(1, i * 16 + 4);
    dir.writeUInt16LE(32, i * 16 + 6);
    dir.writeUInt32LE(img.data.length, i * 16 + 8);
    dir.writeUInt32LE(offset, i * 16 + 12);
    pngs.push(img.data);
    offset += img.data.length;
  });

  return Buffer.concat([header, dir, ...pngs]);
}

const ico = makeIco([
  { size: 16, data: ico16 },
  { size: 32, data: ico32 },
]);
await sharp({ create: { width: 1, height: 1, channels: 3, background: '#fff' } }); // warmup noop
const { writeFile } = await import('node:fs/promises');
await writeFile(resolve(PUBLIC, 'favicon.ico'), ico);

console.log('Icons generated.');
