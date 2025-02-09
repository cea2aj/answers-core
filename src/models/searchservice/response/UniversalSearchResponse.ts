import { VerticalResults } from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import { FeaturedSnippetDirectAnswer } from './FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from './FieldValueDirectAnswer';
import { SpellCheck } from './SpellCheck';
import { LocationBias } from './LocationBias';

/**
 * A representation of a response from a universal search.
 *
 * @public
 */
export interface UniversalSearchResponse {
  /** An array of {@link VerticalResults} which represent the results for each vertical. */
  verticalResults: VerticalResults[],
  /** The ID of the search query. */
  queryId?: string,
  /** {@inheritDoc DirectAnswer} */
  directAnswer?: FeaturedSnippetDirectAnswer | FieldValueDirectAnswer,
  /** An array of {@link SearchIntent}s which represents requests from the API. */
  searchIntents?: SearchIntent[],
  /** {@inheritDoc SpellCheck} */
  spellCheck?: SpellCheck,
  /** {@inheritDoc LocationBias} */
  locationBias?: LocationBias,
  /** A unique id which corresponds to the request. */
  uuid: string
}