import test from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import portfolio from '../src/data.js';
import {postImageSources, restorePostImage, photoSource} from '../src/media.js';
import {hydratePortfolio} from '../src/migration.js';

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

test('an older browser draft receives newly verified facts without losing owner edits', () => {
  const saved = structuredClone(portfolio);
  saved.profile.bio = 'My custom biography';
  saved.projects[0].objective = 'My custom project objective';
  saved.projects[0].results = 'No campaign-specific results have been shared publicly.';
  saved.content[1].reach = 'Not shared';
  saved.content[1].engagement = 'Not shared';
  saved.journey[0].duration = 'Current · exact dates to confirm';
  saved.journey[0].campaigns = 'Content planning and campaign coordination; case studies to add.';
  saved.journey[1] = {
    ...saved.journey[1],
    role: 'Role to confirm',
    duration: 'Previous · dates to confirm',
    responsibilities: 'Work history supplied by Satyam; responsibilities to confirm.'
  };

  const hydrated = hydratePortfolio(saved, portfolio);
  assert.equal(hydrated.profile.bio, 'My custom biography');
  assert.equal(hydrated.projects[0].objective, 'My custom project objective');
  assert.match(hydrated.projects[0].results, /84 impressions/);
  assert.match(hydrated.projects[0].link, /7509122528544636928/);
  assert.equal(hydrated.content[1].reach, '223 impressions');
  assert.equal(hydrated.content[1].engagement, '4 reactions');
  assert.equal(hydrated.journey[0].duration, 'Jul 2026 – Present');
  assert.match(hydrated.journey[0].campaigns, /Creator shortlisting/);
  assert.equal(hydrated.journey[1].role, 'Intern');
  assert.equal(hydrated.journey[1].duration, 'Mar 2025 – Aug 2025');
});
