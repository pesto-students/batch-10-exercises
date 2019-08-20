/**
 * @jest-environment jsdom
 */

const fs = require('fs').promises;
const path = require('path');

describe('form', () => {
  test('form', async () => {
    const filepath = path.resolve(__dirname, 'index.html');
    const html = await fs.readFile(filepath, 'utf-8');
    document.documentElement.innerHTML = html;
    const inputs = document.getElementsByTagName('input');
    expect(inputs.length).toBe(1);
  });
});
