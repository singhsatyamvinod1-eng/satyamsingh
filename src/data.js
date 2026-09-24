// Edit this object to update the published portfolio. Browser edits are device-local drafts.
const PORTFOLIO = {
  profile: {
    name: 'Satyam Singh', title: 'Social Media Manager / Digital Marketer', location: 'Mumbai, India',
    bio: 'I plan content, manage social channels and campaigns, and use performance data to improve what comes next.',
    email: '', phone: '', website: '', linkedin: 'https://www.linkedin.com/in/satyam-singh77/',
    instagram: '', other: '', photo: ''
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
    {name:'[PROJECT 01]',brand:'[CLIENT / BRAND]',platform:'Instagram',type:'Brand campaign',objective:'[CAMPAIGN OBJECTIVE]',role:'[YOUR ROLE]',strategy:'[CONTENT STRATEGY]',approach:'[CONTENT APPROACH]',execution:'[CAMPAIGN EXECUTION]',results:'[VERIFIED RESULTS]',learning:'[KEY LEARNING]',image:'',before:'[BEFORE METRIC]',after:'[AFTER METRIC]'},
    {name:'[PROJECT 02]',brand:'[CLIENT / BRAND]',platform:'LinkedIn',type:'Content strategy',objective:'[CAMPAIGN OBJECTIVE]',role:'[YOUR ROLE]',strategy:'[CONTENT STRATEGY]',approach:'[CONTENT APPROACH]',execution:'[CAMPAIGN EXECUTION]',results:'[VERIFIED RESULTS]',learning:'[KEY LEARNING]',image:'',before:'[BEFORE METRIC]',after:'[AFTER METRIC]'},
    {name:'[PROJECT 03]',brand:'[CLIENT / BRAND]',platform:'YouTube',type:'Video campaign',objective:'[CAMPAIGN OBJECTIVE]',role:'[YOUR ROLE]',strategy:'[CONTENT STRATEGY]',approach:'[CONTENT APPROACH]',execution:'[CAMPAIGN EXECUTION]',results:'[VERIFIED RESULTS]',learning:'[KEY LEARNING]',image:'',before:'[BEFORE METRIC]',after:'[AFTER METRIC]'}
  ],
  content:['Instagram post','Reel','Story','LinkedIn post','Campaign creative','Brand campaign','Promotional graphic','Video thumbnail'].map((type,i)=>({title:'[CONTENT '+String(i+1).padStart(2,'0')+']',type,platform:['Instagram','Instagram','Instagram','LinkedIn','Instagram','Facebook','Pinterest','YouTube'][i],campaign:i%3,objective:'[OBJECTIVE]',reach:'[REACH]',engagement:'[ENGAGEMENT]',contribution:'[MY CONTRIBUTION]',image:'',link:''})),
  metrics:[{label:'Monthly reach',value:'XXXK'},{label:'Engagement growth',value:'+XX%'},{label:'Engagement rate',value:'XX%'},{label:'Follower growth',value:'+XX'},{label:'Impressions',value:'XXXK'},{label:'Content published',value:'XX'},{label:'Campaigns managed',value:'XX+'},{label:'Leads generated',value:'XX'}],
  journey:[
    {company:'IDSSPL Technologies Pvt. Ltd',role:'Social Media Manager',duration:'Current · exact dates to confirm',responsibilities:'Manage social channels, plan content, coordinate campaigns and prepare performance reports.',campaigns:'Content planning and campaign coordination; case studies to add.',platforms:'Instagram, Facebook, LinkedIn and X',achievements:'Verified outcomes to add.'},
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
  sources:[{label:'LinkedIn profile — headline, About, work, education and skills',url:'https://www.linkedin.com/in/satyam-singh77/'}]
};

export default PORTFOLIO;
