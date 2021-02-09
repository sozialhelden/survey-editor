import { hospitalSurveyRawData } from '../../../test-data/hospitalSurvey';
import { ODKNode } from '../../../types/ODKNode';
import nestSurvey from '../../nestSurvey';
import ODKFormulaEvaluationContext from './ODKFormulaEvaluationContext';
import {
  findNodeByNameInsideScope,
  findNodeByNameInCurrentAndAncestorScopes,
  findNodeByPathRelativeToScope,
  getNodeAbsolutePath,
} from './XPath';

function createTestSurvey() {
  const survey = nestSurvey({ rows: hospitalSurveyRawData(), defaultLanguage: 'en-US' });
  const context: ODKFormulaEvaluationContext = {
    survey,
    stackDepth: 0,
    knownLiteralsWithoutDollarSign: {},
  };
  return { survey, context };
}

describe('XPath', () => {
  describe('findNodeByNameInsideScope()', () => {
    it('finds a node in a nested survey', () => {
      const { context } = createTestSurvey();
      const questionGroup = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;
      expect(questionGroup).not.toBeUndefined();
      expect(questionGroup).not.toBeInstanceOf(Array);
      expect(questionGroup?.row?.name).toBe('have_hiv_medication');
    });

    it('returns `undefined` if the name does not exist', () => {
      const survey = nestSurvey({ rows: hospitalSurveyRawData(), defaultLanguage: 'en-US' });
      const context: ODKFormulaEvaluationContext = {
        survey,
        stackDepth: 0,
        knownLiteralsWithoutDollarSign: {},
      };
      expect(findNodeByNameInsideScope('nonExistingField', context, survey)).toBeUndefined();
    });

    test.todo('returns an array if multiple nodes match');
  });

  describe('findNodeByNameInCurrentAndAncestorScopes()', () => {
    it('finds a node in an example survey, starting from a grandchild', () => {
      const { context } = createTestSurvey();
      const startScope = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;
      const questionGroup = findNodeByNameInCurrentAndAncestorScopes(
        'What is your name?',
        context,
        startScope
      ) as ODKNode;
      expect(questionGroup).not.toBeUndefined();
      expect(questionGroup).not.toBeInstanceOf(Array);
      expect(questionGroup?.row?.name).toBe('What is your name?');
    });

    it('returns `undefined` if a node with given name does not exist', () => {
      const { context } = createTestSurvey();
      const startScope = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;
      const questionGroup = findNodeByNameInCurrentAndAncestorScopes(
        'What is love?',
        context,
        startScope
      ) as ODKNode;
      expect(questionGroup).toBeUndefined();
    });
  });

  describe('findNodeByPathRelativeToScope()', () => {
    it('it traverses the hierarchy', () => {
      const { context, survey } = createTestSurvey();
      const startScope = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;

      const selfNode = findNodeByPathRelativeToScope(['.'], context, startScope) as ODKNode;
      expect(selfNode.row?.name).toBe('have_hiv_medication');

      const parentNode = findNodeByPathRelativeToScope(['..'], context, startScope) as ODKNode;
      expect(parentNode.row?.name).toBe('hiv_medication');

      const grandparentNode = findNodeByPathRelativeToScope(
        ['..', '..'],
        context,
        startScope
      ) as ODKNode;
      expect(grandparentNode.row?.name).toBe('hospital');

      const greatgrandparentNode = findNodeByPathRelativeToScope(
        ['..', '..', '..'],
        context,
        startScope
      ) as ODKNode;
      expect(greatgrandparentNode.row?.name).toBe('data');

      const hospitalNode = findNodeByPathRelativeToScope(
        ['..', '..', '..', 'hospital'],
        context,
        startScope
      ) as ODKNode;
      expect(hospitalNode.row?.name).toBe('hospital');

      const haveHIVMedicationNodeRelative = findNodeByPathRelativeToScope(
        ['.', 'data', 'hospital', 'hiv_medication', 'have_hiv_medication'],
        context,
        survey
      ) as ODKNode;
      expect(haveHIVMedicationNodeRelative.row?.name).toBe('have_hiv_medication');

      const haveHIVMedicationNodeAbsolute = findNodeByPathRelativeToScope(
        ['/', 'data', 'hospital', 'hiv_medication', 'have_hiv_medication'],
        context,
        startScope
      ) as ODKNode;

      expect(haveHIVMedicationNodeAbsolute.row?.name).toBe('have_hiv_medication');
    });

    it('throws if trying to go beyond root', () => {
      const { context } = createTestSurvey();
      const startScope = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;
      expect(() =>
        findNodeByPathRelativeToScope(['..', '..', '..', '..'], context, startScope)
      ).toThrowError(/further up/);
    });

    test.todo('fails if path is invalid');
    test.todo('returns an array if multiple nodes match');
  });

  describe('getNodeAbsolutePath()', () => {
    it('returns "/data" for root', () => {
      const { survey } = createTestSurvey();
      expect(getNodeAbsolutePath(survey)).toEqual(['/', 'data']);
    });

    it('returns a path for a nested node', () => {
      const { context } = createTestSurvey();
      const node = findNodeByNameInsideScope('have_hiv_medication', context) as ODKNode;

      expect(getNodeAbsolutePath(node)).toEqual([
        '/',
        'data',
        'hospital',
        'hiv_medication',
        'have_hiv_medication',
      ]);
    });
  });
});
