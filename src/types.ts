/**
 * A portfolio entry. `title`, `img_poster` and `sort_order` drive the layout;
 * every other string field is rendered as a `key: "value"` line on the card.
 */
export interface Project {
  title: string;
  img_poster: string;
  sort_order: number;
  url_link?: string;
  /** Shown as a full-width case study instead of in the "more work" list. */
  featured?: boolean;
  [field: string]: string | number | boolean | undefined;
}
