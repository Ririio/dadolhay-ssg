import path from 'path';
import { fileURLToPath } from 'url';
import textProcessor from '../../src/utils/processor/mdProcessor';

/* eslint-disable no-underscore-dangle */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testFileName = path.join(__dirname, '../../inputs/testMarkdown.md');

describe('MD processor', () => {
  test('process MD file to internal structure', () => {
    expect(textProcessor(testFileName)).toMatchSnapshot();
  });
});
