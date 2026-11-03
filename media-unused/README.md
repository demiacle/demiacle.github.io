# Unused media

Files that the site no longer references, kept here rather than deleted.
This folder is outside `public/`, so nothing in it is deployed.

- `*.mp4` / `*_optimized.gif`: old project preview clips. Cards show only the
  poster image now.
- `twitter.jpg`, `linkedin.png`, `codepen.png`, `fcc_icon.png`, `github.svg`:
  earlier versions of the header icons. The `*2.png` versions in
  `public/media/` are the ones in use.
- `twitter2.png`, `codepen2.png`, `fcc_icon2.png`: header icons, removed along
  with their links.
- `bg_texture2.jpg`, `git_showcase.png`: never referenced by the recovered
  source.

To use one again, move it back into `public/media/` and reference it as
`/media/<file>`. The media test (`src/media.test.ts`) fails if a referenced
file is missing from `public/media/`.
