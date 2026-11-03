import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import projects from './portfolioData';

const root = new URL('../', import.meta.url);
const mediaDir = new URL('public/media/', root);

/** Every file name referenced as /media/<file> in the source or index.html. */
function referencedMedia(): Set<string> {
  const files = readdirSync(new URL('src/', root), { recursive: true, encoding: 'utf8' })
    .filter((f) => /\.(tsx?|css)$/.test(f) && !/\.test\.tsx?$/.test(f))
    .map((f) => new URL(`src/${f}`, root));
  files.push(new URL('index.html', root));

  const refs = new Set<string>();
  for (const file of files) {
    for (const [, name] of readFileSync(file, 'utf8').matchAll(/\/media\/([\w.-]+)/g)) {
      refs.add(name);
    }
  }
  for (const project of projects) refs.add(project.img_poster);
  return refs;
}

const published = new Set(readdirSync(mediaDir).filter((name) => !name.startsWith('.')));
const referenced = referencedMedia();

describe('public/media', () => {
  it('contains every file the site references', () => {
    const missing = [...referenced].filter((name) => !published.has(name));
    expect(missing).toEqual([]);
  });

  it('contains only files the site references (move others to media-unused/)', () => {
    const unused = [...published].filter((name) => !referenced.has(name));
    expect(unused).toEqual([]);
  });
});
