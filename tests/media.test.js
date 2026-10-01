import test from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import portfolio from '../src/data.js';
import {postImageSources, restorePostImage, photoSource} from '../src/media.js';

test('old saved drafts show the correct artwork even with blank image fields', () => {
  const stale = portfolio.content.map(item => ({...item, image: ''})).reverse();
  assert.deepEqual(stale.map(postImageSources), [
    ['/marketing-clarity-ai.jpg'], ['/tropical-escape.jpg']
  ]);
  assert.deepEqual(stale.map(restorePostImage).map(item => item.image), [
    '/marketing-clarity-ai.jpg', '/tropical-escape.jpg'
  ]);
});

test('encoded and share links identify the same post without using array order', () => {
  for (const link of [
    'https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7467876433764192256/',
    'https://www.linkedin.com/posts/satyam-singh77_marketing-activity-7467876433764192256-abc?utm_source=share',
    'https://www.linkedin.com/embed/feed/update/urn:li:activity:7467876433764192256'
  ]) assert.deepEqual(postImageSources({link, image: ''}), ['/marketing-clarity-ai.jpg']);
});

test('a custom image has priority, with the imported original as its error fallback', () => {
  const item = {...portfolio.content[1], image: 'https://example.com/custom.jpg'};
  assert.deepEqual(postImageSources(item), ['https://example.com/custom.jpg', '/marketing-clarity-ai.jpg']);
  assert.equal(restorePostImage(item).image, item.image);
  assert.equal(restorePostImage({...item, title: 'My edited title'}).title, 'My edited title');
});

test('a LinkedIn page mistakenly saved as an image is repaired rather than loaded as an image', () => {
  const item = {...portfolio.content[0], image: portfolio.content[1].link};
  assert.equal(photoSource(item.image), '');
  assert.equal(restorePostImage(item).link, portfolio.content[1].link);
  assert.deepEqual(postImageSources(item), ['/marketing-clarity-ai.jpg']);
});

test('unknown posts and lookalike domains never receive artwork for another post', () => {
  for (const link of [
    'https://www.linkedin.com/feed/update/urn:li:activity:123/',
    'https://linkedin.com.example.org/feed/update/urn:li:activity:7467876433764192256/',
    'javascript:alert(1)', ''
  ]) assert.deepEqual(postImageSources({link, image: ''}), []);
  assert.equal(photoSource('javascript:alert(1)'), '');
  assert.equal(photoSource('//example.com/image.jpg'), '');
});

test('all imported originals are present in the public folder', async () => {
  for (const item of portfolio.content) {
    const [src] = postImageSources({...item, image: ''});
    await access(new URL(`../public${src}`, import.meta.url));
  }
});
