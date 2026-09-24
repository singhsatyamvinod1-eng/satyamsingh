// Edit this object to update the published portfolio. Browser edits are device-local drafts.
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
    {name:'Social Channel Management',brand:'IDSSPL Technologies Pvt. Ltd',platform:'Instagram / Facebook / LinkedIn / X',type:'Experience highlight',source:'LINKEDIN EXPERIENCE',objective:'Plan content and coordinate social activity across the channels named in my LinkedIn profile.',role:'Social Media Manager',strategy:'Content planning, trend monitoring and competitor research.',approach:'Develop content ideas for different channels and review what the audience responds to.',execution:'Manage social platforms, coordinate campaigns and prepare performance reports.',results:'No campaign-specific results have been shared publicly.',learning:'Use performance analysis to guide the next content decision.',image:'',before:'',after:'',link:'https://www.linkedin.com/in/satyam-singh77/'},
    {name:'Performance Marketing Research',brand:'3rd Planet Global',platform:'Social / paid media',type:'Experience highlight',source:'LINKEDIN EXPERIENCE',objective:'Support social and performance marketing with research and reporting.',role:'Social Media Manager, Ads Runs',strategy:'Competitor and social-trend research.',approach:'Pair research with performance reporting to inform marketing choices.',execution:'Worked on social media and performance marketing research and reporting.',results:'No campaign-specific results have been shared publicly.',learning:'Specific campaign outcomes can be added when verified.',image:'',before:'',after:'',link:'https://www.linkedin.com/in/satyam-singh77/'},
    {name:'Tropical Escape',brand:'Independent creative concept',platform:'LinkedIn',type:'Creative concept',source:'LINKEDIN POST',objective:'Explore a travel-promotion message around festival offers and water adventures.',role:'Concept and copy',strategy:'Combine an escape theme with clear activity-led offers.',approach:'Use a short headline and adventure-focused tagline.',execution:'Published concept copy describing water rides, scuba diving and windsurfing on LinkedIn.',results:'A creative concept, not a client campaign; performance results were not claimed.',learning:'Concept work can be developed into a full campaign with imagery and measurable goals.',image:'',before:'',after:'',link:'https://www.linkedin.com/feed/update/urn:li:activity:7284799164608090112/'}
  ],
  content:[
    {title:'Tropical Escape — promotion concept',type:'Concept copy',platform:'LinkedIn',campaign:2,objective:'Draft a travel-promotion idea around a festival escape.',reach:'Not shared',engagement:'Not shared',contribution:'Headline, tagline and promotional copy',image:'',link:'https://www.linkedin.com/feed/update/urn:li:activity:7284799164608090112/'},
    {title:'Marketing clarity, strategy and AI',type:'Thought leadership',platform:'LinkedIn',campaign:0,objective:'Share a point of view on using strategy and AI to improve marketing outcomes.',reach:'Not shared',engagement:'Not shared',contribution:'Strategy-led LinkedIn post and copy',image:'',link:'https://www.linkedin.com/feed/update/urn:li:activity:7467876433764192256/'}
  ],
  metrics:[{label:'Monthly reach',value:''},{label:'Engagement growth',value:''},{label:'Engagement rate',value:''},{label:'Follower growth',value:''},{label:'Impressions',value:''},{label:'Content published',value:''},{label:'Campaigns managed',value:''},{label:'Leads generated',value:''}],
  journey:[
    {company:'IDSSPL Technologies Pvt. Ltd',role:'Social Media Manager',duration:'Current · exact dates to confirm',responsibilities:'Manage social channels, plan content, coordinate campaigns and prepare performance reports.',campaigns:'Content planning and campaign coordination; case studies to add.',platforms:'Instagram, Facebook, LinkedIn and X',achievements:'Verified outcomes to add.'},
    {company:'Teqfox Fintech Solutions Private Limited',role:'Role to confirm',duration:'Previous · dates to confirm',responsibilities:'Work history supplied by Satyam; responsibilities to confirm.',campaigns:'Specific work examples to add.',platforms:'Platforms and tools to confirm.',achievements:'Verified outcomes to add.'},
    {company:'3rd Planet Global',role:'Social Media Manager, Ads Runs',duration:'Previous · exact dates to confirm',responsibilities:'Worked across social media and performance marketing, including competitor research, trend tracking and reporting.',campaigns:'Campaign examples to add.',platforms:'Specific platforms to confirm.',achievements:'Verified outcomes to add.'}
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
  sources:[{label:'LinkedIn profile and authored posts — headline, work, education, skills and creative concepts',url:'https://www.linkedin.com/in/satyam-singh77/'},{label:'Teqfox work history supplied by portfolio owner',url:''}]
};

export default PORTFOLIO;
