/**
 * A portfolio entry. `title`, `img_poster` and `sort_order` drive the layout;
 * every other string field is rendered as a `key: "value"` line on the card.
 */
export interface Project {
  title: string;
  img_poster: string;
  sort_order: number;
  url_link?: string;
  /** Legacy preview file. No longer rendered; cards show `img_poster`. */
  image?: string;
  [field: string]: string | number | undefined;
}
