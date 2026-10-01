import {restorePostImage} from './media.js';

const unresolved = value => typeof value === 'string' && (
  value === 'Not shared'
  || /to confirm|\bto add\b|specific work examples to add|verified outcomes to add|work history supplied|exact platforms to confirm|campaign-specific results have been shared publicly/i.test(value)
);

function mergeRecord(saved = {}, published = {}) {
  const merged = {...published, ...saved};
  for (const [key, value] of Object.entries(saved)) {
    if (unresolved(value) && published[key] && !unresolved(published[key])) merged[key] = published[key];
  }
  return merged;
}

export function hydratePortfolio(saved, published) {
  if (!saved?.profile?.name || saved?.projects?.length !== published.projects.length) return published;
  return {
    ...published,
    ...saved,
    profile: mergeRecord(saved.profile, published.profile),
    intro: mergeRecord(saved.intro, published.intro),
    projects: saved.projects.map((project, index) => {
      const current = published.projects[index];
      if (index === 1 && (project.role === 'Social Media Manager, Ads Runs' || project.name === 'Performance Marketing Research')) {
        return {...current, image: project.image || current.image};
      }
      const merged = mergeRecord(project, current);
      if (project.link === published.profile.linkedin && current.link !== project.link) merged.link = current.link;
      if (index === 0 && project.execution === 'Manage social platforms, coordinate campaigns and prepare performance reports.') merged.execution = current.execution;
      if (index === 1 && project.execution === 'Assisted with social media management, competitor analysis, trend discovery and maintaining the content calendar.') merged.execution = current.execution;
      if (index === 1 && project.source === 'OWNER-CONFIRMED EXPERIENCE') merged.source = current.source;
      return merged;
    }),
    content: (saved.content || published.content).map((item, index) => restorePostImage(mergeRecord(item, published.content[index]))),
    journey: (saved.journey || published.journey).map((item, index) => {
      const merged = mergeRecord(item, published.journey[index]);
      if (index === 0 && item.responsibilities === 'Manage social channels, plan content, coordinate campaigns and prepare performance reports.') merged.responsibilities = published.journey[index].responsibilities;
      if (index === 2 && item.responsibilities === 'Supported social media management, competitor analysis, trend research and content calendar management.') merged.responsibilities = published.journey[index].responsibilities;
      return merged;
    }),
    metrics: (saved.metrics || published.metrics).map((metric, index) => ({
      ...published.metrics[index],
      ...metric,
      value: /^\+?X{2,}/i.test(metric.value) ? '' : metric.value
    }))
  };
}
