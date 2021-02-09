import { BeginOrEndMarkerRow } from '../types/BeginOrEndMarkerRow';
import { ODKNodeWithoutRuntimeInfo } from '../types/ODKNode';
import { QuestionRow } from '../types/RowTypes';

export function hospitalSurveyRawData(): (QuestionRow | BeginOrEndMarkerRow)[] {
  return [
    { type: 'text', name: 'What is your name?', label: { 'en-US': '' } },
    { type: 'begin group', name: 'hospital', label: { 'en-US': 'Hospital' } },
    { type: 'text', name: 'What is the name of this hospital?', label: { 'en-US': '' } },
    { type: 'begin_group', name: 'hiv_medication', label: { 'en-US': 'HIV Medication' } },
    {
      type: 'select_one yes_no',
      name: 'have_hiv_medication',
      label: { 'en-US': 'Does this hospital have HIV medication?' },
    },
    { type: 'end group', name: '', label: { 'en-US': '' } },
    { type: 'end_group', name: '', label: { 'en-US': '' } },
  ];
}

export function hospitalSurveyNestedData(): Readonly<ODKNodeWithoutRuntimeInfo> {
  return {
    children: [
      {
        row: { type: 'text', name: 'What is your name?', label: { 'en-US': '' } },
        indentationLevel: 0,
        rowIndex: 0,
        children: [],
      } as ODKNodeWithoutRuntimeInfo,
      {
        row: { type: 'begin group', name: 'hospital', label: { 'en-US': 'Hospital' } },
        children: [
          {
            row: {
              type: 'text',
              name: 'What is the name of this hospital?',
              label: { 'en-US': '' },
            },
            indentationLevel: 1,
            rowIndex: 2,
            children: [],
          } as ODKNodeWithoutRuntimeInfo,
          {
            row: {
              type: 'begin_group',
              name: 'hiv_medication',
              label: { 'en-US': 'HIV Medication' },
            },
            children: [
              {
                row: {
                  type: 'select_one yes_no',
                  name: 'have_hiv_medication',
                  label: { 'en-US': 'Does this hospital have HIV medication?' },
                },
                indentationLevel: 2,
                rowIndex: 4,
                children: [],
              } as ODKNodeWithoutRuntimeInfo,
            ],
            indentationLevel: 1,
            rowIndex: 3,
          },
        ],
        indentationLevel: 0,
        rowIndex: 1,
      },
    ],
    indentationLevel: 0,
    rowIndex: 0,
  };
}
