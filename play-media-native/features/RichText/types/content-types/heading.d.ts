import { RichTextContentTypeLabels } from '../content';
import { RichTextElement } from '../elements';

export interface RichTextHeadingAttributes {
  level: number;
}

export interface RichTextHeading {
  type: RichTextContentTypeLabels.heading;
  content: RichTextElement[];
  attrs: RichTextHeadingAttributes;
}
