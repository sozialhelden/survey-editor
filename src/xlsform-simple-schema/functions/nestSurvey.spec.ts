// tslint:disable-next-line: import-name
import nestSurvey from './nestSurvey';
import { hospitalSurveyNestedData, hospitalSurveyRawData } from '../test-data/hospitalSurvey';

describe('nestSurvey()', () => {
  test.todo('throws when supplying an group end marker without a matching group start marker');

  test.todo('throws when supplying an repeat end marker without a matching repeat start marker');

  it('works with a multi-level group nesting', () => {
    const nestedSurvey = nestSurvey({ rows: hospitalSurveyRawData(), defaultLanguage: 'en-US' });
    expect(nestedSurvey).toMatchObject(hospitalSurveyNestedData());
  });

  // it('creates a correct stack hierarchy', () => {
  //   const nestedSurvey = nestSurvey(hospitalSurveyRawData());
  //   expect(nestedSurvey.children).toMatchObject(hospitalSurveyNestedData());
  // });

  test.todo('works with a multi-level repeat nesting');
});
