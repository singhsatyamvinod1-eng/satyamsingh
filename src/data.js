// Edit this object to update the published portfolio. Browser edits are device-local drafts.
// Counted from the owner-shared "S.M Content Calender" sheet, gid 681063913.
// A dated row is a planned content slot, not proof that a post was published.
export const contentCalendarEvidence = {
  name: 'IDSSPL social media content calendar',
  url: 'https://docs.google.com/spreadsheets/d/1TiNOjy5__hiZA0XcLPL4VLrOEbPHRe8TnjeJ9btWXMY/edit?gid=681063913#gid=681063913',
  period: '24 Sep – 31 Oct',
  slots: 34,
  formats: [{name: 'Static', count: 18}, {name: 'Carousel', count: 12}, {name: 'Reel', count: 4}],
  approved: 1
};
const PORTFOLIO = {
  profile: {
    name: 'Satyam Singh', title: 'Social Media Manager / Digital Marketer', location: 'Mumbai, India',
    bio: 'I plan content, manage social channels and campaigns, and use performance data to improve what comes next.',
    email: '', phone: '', website: '', linkedin: 'https://www.linkedin.com/in/satyam-singh77/',
    instagram: '', other: '', photo: '/satyam-portrait.png'
  },
  intro: {
    heading: 'Clarity before content.',
    question: 'What is driving growth, and what should we do next?',
    body: 'My work connects content strategy, social media management, performance marketing and data-led decisions.'
  },
  skills: [
    ['Social Media Management', 'Management', 'Managing social channels at IDSSPL Technologies'],
    ['Content Strategy', 'Strategy', 'Planning content and campaigns at IDSSPL Technologies'],
    ['Performance Marketing', 'Strategy', 'Listed in LinkedIn headline and About section'],
    ['Social Media Marketing', 'Strategy', 'Work at IDSSPL Technologies and 3rd Planet Global'],
    ['Content Creation', 'Creative', 'Developing content ideas for social platforms'],
    ['Google Ads', 'Management', 'Listed among top LinkedIn skills'],
    ['Campaign Coordination', 'Management', 'Coordinating campaigns at IDSSPL Technologies'],
    ['Social Media Analytics', 'Strategy', 'Analysing post and campaign performance'],
    ['Competitor Research', 'Strategy', 'Research at IDSSPL Technologies and 3rd Planet Global'],
    ['Trend Research', 'Strategy', 'Tracking social media trends'],
    ['Performance Reporting', 'Management', 'Preparing marketing performance reports'],
    ['Influencer Outreach', 'Management', 'Finding creators and tracking outreach and deliverables']
  ].map(([name, category, evidence]) => ({ name, category, level: '', evidence })),
  platforms: [
    { name: 'Instagram', experience: 'Managed at IDSSPL', notes: 'Listed in LinkedIn About section' },
    { name: 'Facebook', experience: 'Managed at IDSSPL', notes: 'Listed in LinkedIn About section' },
    { name: 'LinkedIn', experience: 'Managed at IDSSPL', notes: 'Listed in LinkedIn About section' },
    { name: 'X', experience: 'Managed at IDSSPL', notes: 'Listed in LinkedIn About section' },
    { name: 'Google Ads', experience: 'Listed skill', notes: 'Depth of hands-on work to confirm' }
  ],
  projects:[
    {name:'Social Channel Management',brand:'IDSSPL Technologies Pvt. Ltd',platform:'Instagram / Facebook / LinkedIn / X',type:'Experience highlight',source:'LINKEDIN EXPERIENCE',objective:'Plan content and coordinate social activity across the channels named in my LinkedIn profile.',role:'Social Media Manager',strategy:'Content planning, trend monitoring and competitor research.',approach:'Develop content ideas for different channels and review what the audience responds to.',execution:'Manage social platforms, coordinate creator campaigns, maintain tracking sheets and prepare performance reports.',results:'A public LinkedIn post about this role showed 84 impressions when reviewed on 1 Oct 2026. This is post-level evidence, not a campaign-wide result.',learning:'Use performance analysis to guide the next content decision.',image:'',before:'',after:'',link:'https://www.linkedin.com/feed/update/urn:li:activity:7509122528544636928/'},
    {name:'Social Media Research & Content Calendar',brand:'3rd Planet Global',platform:'Social media',type:'Internship highlight',source:'LINKEDIN EXPERIENCE',objective:'Support social media management with competitor analysis, trend research and content calendar management.',role:'Social Media Intern',strategy:'Study competitor activity and emerging social trends to guide content planning.',approach:'Organize ideas and planned posts in a content calendar.',execution:'Supported social media marketing, competitor research, trend discovery, content planning and performance reporting during an OJT internship.',results:'The role and responsibilities are documented on LinkedIn; campaign-wide performance results have not been supplied.',learning:'Use competitor and trend findings to improve future content planning.',image:'',before:'',after:'',link:'https://www.linkedin.com/in/satyam-singh77/details/experience/'},
    {name:'Tropical Escape',brand:'Independent creative concept',platform:'LinkedIn',type:'Creative concept',source:'LINKEDIN POST',objective:'Explore a travel-promotion message around festival offers and water adventures.',role:'Concept and copy',strategy:'Combine an escape theme with clear activity-led offers.',approach:'Use a short headline and adventure-focused tagline.',execution:'Published concept copy describing water rides, scuba diving and windsurfing on LinkedIn.',results:'A creative concept, not a client campaign; performance results were not claimed.',learning:'Concept work can be developed into a full campaign with imagery and measurable goals.',image:'/tropical-escape.jpg',before:'',after:'',link:'https://www.linkedin.com/feed/update/urn:li:activity:7284799164608090112/'}
  ],
  content:[
    {title:'Tropical Escape — promotion concept',type:'Concept copy',platform:'LinkedIn',campaign:2,objective:'Draft a travel-promotion idea around a festival escape.',reach:'Not shared',engagement:'Not shared',contribution:'Headline, tagline and promotional copy',image:'/tropical-escape.jpg',link:'https://www.linkedin.com/feed/update/urn:li:activity:7284799164608090112/'},
    {title:'Marketing clarity, strategy and AI',type:'Thought leadership',platform:'LinkedIn',campaign:0,objective:'Share a point of view on using strategy and AI to improve marketing outcomes.',reach:'223 impressions',engagement:'4 reactions',contribution:'Strategy-led LinkedIn post and copy',image:'/marketing-clarity-ai.jpg',link:'https://www.linkedin.com/feed/update/urn:li:activity:7467876433764192256/'}
  ],
  metrics:[{label:'Monthly reach',value:''},{label:'Engagement growth',value:''},{label:'Engagement rate',value:''},{label:'Follower growth',value:''},{label:'Impressions',value:''},{label:'Content published',value:''},{label:'Campaigns managed',value:''},{label:'Leads generated',value:''}],
  journey:[
    {company:'IDSSPL Technologies Pvt. Ltd',role:'Social Media Manager',duration:'Jul 2026 – Present',responsibilities:'Manage social channels, plan the monthly content calendar, develop post ideas and captions, track performance, research trends and competitors, and coordinate creators.',campaigns:'Creator shortlisting and outreach; campaign requirements, approvals, posting dates, deliverables and tracking sheets.',platforms:'Instagram, Facebook, LinkedIn and X',achievements:'Owns content planning and reporting workflows; verified campaign-wide results can be added from analytics exports.'},
    {company:'Teqfox Fintech Solutions Private Limited',role:'Intern',duration:'Mar 2025 – Aug 2025',responsibilities:'Built practical knowledge in SEO, Pinterest SEO, marketing principles, blog content, Google Ads and social media optimization.',campaigns:'Pinterest content discoverability, blog content, Google Ads learning and social media optimization.',platforms:'Pinterest, Google Ads and social media',achievements:'Completed six months of hands-on learning across SEO, content and digital advertising.'},
    {company:'3rd Planet Global',role:'Social Media Intern',duration:'Aug 2025 – Sep 2025',responsibilities:'Supported social media marketing, competitor analysis, trend research, content ideas, social planning and performance reporting.',campaigns:'Content calendar management, competitor research and social media planning.',platforms:'Social media channels and performance marketing workflows',achievements:'Completed a two-month Social Media & Performance Marketing OJT internship.'}
  ],
  education:[
    {school:'Thakur College of Science & Commerce',qualification:'B.Com, Digital Business',period:'Jun 2023 – Mar 2026'},
    {school:'Thakur College of Science & Commerce',qualification:'Commerce',period:'Jun 2021 – Mar 2023'}
  ],
  certifications:[
    {name:'Social Media Certification',issuer:'HubSpot',link:'https://www.linkedin.com/feed/update/urn:li:activity:7301627396242173953/'},
    {name:'Digital Advertising Certification',issuer:'HubSpot',link:'https://www.linkedin.com/feed/update/urn:li:activity:7301626596774338561/'},
    {name:'Digital Marketing Certification',issuer:'HubSpot',link:'https://www.linkedin.com/feed/update/urn:li:activity:7301625037852205057/'},
    {name:'Email Marketing Certification',issuer:'HubSpot',link:'https://www.linkedin.com/feed/update/urn:li:activity:7295433741194174465/'}
  ],
  philosophy:[{title:'Strategy',text:'Every piece of content has a purpose.'},{title:'Creativity',text:'Ideas should stop the scroll.'},{title:'Data',text:'Performance should guide decisions.'},{title:'Trends',text:'Stay relevant without blindly following trends.'},{title:'Consistency',text:'Strong brands are built continuously.'},{title:'Community',text:'Social media is about people, not just posts.'}],
  sources:[{label:'LinkedIn profile and authored posts — headline, work, education, skills, experience dates and creative concepts',url:'https://www.linkedin.com/in/satyam-singh77/'},{label:'3rd Planet Global internship duties and dates documented on LinkedIn',url:'https://www.linkedin.com/in/satyam-singh77/details/experience/'},{label:'Teqfox company name supplied by portfolio owner; responsibilities and dates documented in LinkedIn experience',url:'https://www.linkedin.com/in/satyam-singh77/details/experience/'}]
};

export default PORTFOLIO;
