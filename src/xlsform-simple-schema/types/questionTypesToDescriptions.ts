export const fieldTypesToDescriptions = {
  text: 'Free text response.',
  note: 'Display a note on the screen, takes no input. Shorthand for type=text with readonly=true.',
  hidden: 'A field with no associated UI element which can be used to store a constant',
  integer: 'Integer (i.e., whole number) input.',
  decimal: 'Decimal input.',
  range: 'Range input (including rating)',
  rank: 'Rank question; order a list.',
  acknowledge: 'Acknowledge prompt that sets value to "OK" if selected.',
  barcode: 'Scan a barcode, requires the barcode scanner app to be installed.',
  calculate: 'Perform a calculation',

  select_one: 'Multiple choice question; only one answer can be selected.',
  select_multiple: 'Multiple choice question; multiple answers can be selected.',
  select_one_from_file: 'Multiple choice from file; only one answer can be selected.',
  select_multiple_from_file: 'Multiple choice from file; multiple answers can be selected.',

  // Geometry
  geopoint: 'Collect a single GPS coordinate.',
  geotrace: 'Record a line of two or more GPS coordinates.',
  geoshape:
    'Record a polygon of multiple GPS coordinates; the last point is the same as the first point.',

  // Date and time
  date: 'Date input.',
  time: 'Time input.',
  dateTime: 'Accepts a date and a time input.',

  // External media
  image: 'Take a picture or upload an image file.',
  audio: 'Take an audio recording or upload an audio file.',
  video: 'Take a video recording or upload a video file.',
  file: 'Generic file input (txt, pdf, xls, xlsx, doc, docx, rtf, zip)',
};

export const metadataTypesToDescriptions = {
  start: 'Start date and time of the survey.',
  end: 'End date and time of the survey.',
  today: 'Day of the survey.',
  deviceid: 'Unique client identifier. Can be user-reset.',
  phonenumber: 'Phone number (if available).',
  subscriberid: 'Subscriber ID (if available).',
  simserial: 'SIM serial (if available).',
  username: 'Username configured (if available).',
  email: 'Email address configured (if available).',
  audit: 'Log enumerator behavior during data entry',
};

export const magicTypesToDescriptions = {
  'xml-external': 'Adds a reference to an external XML data file',
};

const questionTypesToDescriptions = {
  ...fieldTypesToDescriptions,
  ...metadataTypesToDescriptions,
  ...magicTypesToDescriptions,
};

export default questionTypesToDescriptions;
export type QuestionTypeString = keyof typeof questionTypesToDescriptions;
