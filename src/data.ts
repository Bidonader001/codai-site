export const capabilities = [
  { number: '01', title: 'Artificial Intelligence', intro: 'Make your data work harder. We turn complex information into useful intelligence and automated action.', services: ['Computer vision', 'Facial recognition', 'Object detection & tracking', 'AI automation', 'Machine learning', 'Intelligent monitoring', 'Custom AI models'], stamp: 'PERCEPTION / LEARNING / ACTION' },
  { number: '02', title: 'Custom Software', intro: 'Purpose-built software designed around the way your business actually works.', services: ['Web applications', 'Desktop applications', 'Business management systems', 'ERP & CRM solutions', 'API development', 'System integration', 'Internal business tools'], stamp: 'DESIGNED AROUND YOUR BUSINESS' },
  { number: '03', title: 'SaaS Products', intro: 'From a first release to a platform built for scale, we engineer the product and its foundation.', services: ['SaaS architecture', 'Multi-tenant applications', 'Subscription systems', 'Cloud infrastructure', 'Admin dashboards', 'User management', 'Scalable backends'], stamp: 'PRODUCT / PLATFORM / SCALE' },
  { number: '04', title: 'Workforce Systems', intro: 'A connected view of your workforce, bringing attendance, people, and operations into one system.', services: ['Facial recognition attendance', 'Biometric integration', 'Employee tracking', 'Attendance reporting', 'Payroll & leave management', 'Hardware integration', 'Real-time dashboards'], stamp: 'PEOPLE / PRESENCE / INSIGHT' },
  { number: '05', title: 'Web Experiences', intro: 'Digital experiences with a clear point of view, crafted to serve both the brand and the business.', services: ['Corporate websites', 'Landing pages', 'E-commerce platforms', 'Custom web platforms', 'High-performance websites', 'UI/UX engineering'], stamp: 'IDENTITY / EXPERIENCE / GROWTH' },
  { number: '06', title: 'Hardware & IoT', intro: 'Software that reaches beyond the screen to connect devices, environments, and operations.', services: ['IoT systems', 'ESP32 & embedded systems', 'Smart devices', 'Hardware automation', 'Device integration', 'Custom technology prototypes'], stamp: 'SENSING / CONNECTING / CONTROL' },
];

export const projects = [
  { id: '01', name: 'NOFORM', category: 'FURNITURE · E-COMMERCE · DIGITAL EXPERIENCE', description: 'A digital experience for a furniture brand, designed to showcase products, strengthen brand identity, and deliver an engaging customer journey.', type: 'furniture', mark: 'nø', note: 'FORM / FUNCTION / FEELING', logo: '/brands/noform-monogram-transparent.png', website: 'https://noformm.vercel.app/en', gallery: ['/projects/noform/image-01.jpg', '/projects/noform/image-02.jpg', '/projects/noform/image-03.jpg', '/projects/noform/image-04.jpg', '/projects/noform/image-05.jpg', '/projects/noform/image-06.jpg', '/projects/noform/image-07.jpg'] },
  { id: '02', name: 'Espresso Lab', category: 'BRAND WEBSITE · HOSPITALITY', description: "A premium landing page experience for Espresso Lab's Egyptian market, bringing the brand's identity into a modern digital environment.", type: 'coffee', mark: 'EL', note: 'A LITTLE MORE THAN COFFEE', logo: '/brands/espresso-lab-transparent.png' },
  { id: '03', name: 'Pizza Station', category: 'RESTAURANT · DIGITAL EXPERIENCE', description: "A modern digital experience designed to showcase Pizza Station's identity, menu, branches, and customer experience.", type: 'pizza', mark: 'PS', note: 'FRESH FROM THE STATION', logo: '/brands/pizza-station-transparent.png', website: 'https://pizzastation02.vercel.app/', gallery: ['/projects/pizza-station/image-01.jpg', '/projects/pizza-station/image-02.jpg', '/projects/pizza-station/image-03.jpg', '/projects/pizza-station/image-04.jpg', '/projects/pizza-station/image-05.jpg'] },
  { id: '04', name: 'Absence Less', category: 'AI · SAAS · WORKFORCE MANAGEMENT', description: 'A complete intelligent attendance management ecosystem combining facial recognition, employee management, real-time monitoring, reporting, and administrative controls.', type: 'absence', mark: 'AL', note: 'WORKFORCE INTELLIGENCE, CONNECTED', website: 'https://absenceless.vercel.app/', logo: '/brands/absence-less.jpg', features: ['AI-powered facial recognition', 'Employee management', 'Real-time attendance', 'Automated reporting', 'Attendance analytics', 'Payroll & leave management', 'Dedicated business infrastructure'] },
  { id: '05', name: 'ZK Attendance Bypass', category: 'HARDWARE INTEGRATION · SOFTWARE ENGINEERING', description: 'A specialized integration solution designed to connect ZKTeco attendance hardware with external software systems, enabling more flexible data access and integration workflows.', type: 'hardware', mark: 'ZK', note: 'HARDWARE / SOFTWARE / INTEGRATION', gallery: ['/projects/zk-attendance/image-01.jpg', '/projects/zk-attendance/image-02.jpg', '/projects/zk-attendance/image-03.jpg', '/projects/zk-attendance/image-04.jpg', '/projects/zk-attendance/image-05.jpg'] },
];

export const principles = [
  ['01', 'Engineering First', 'We focus on building reliable, maintainable, and scalable technology.'],
  ['02', 'Built Around You', 'Every solution is designed around real business requirements.'],
  ['03', 'Intelligence by Design', 'We use AI and automation to create smarter workflows and better experiences.'],
  ['04', 'Built to Scale', 'We design systems with future growth, flexibility, and performance in mind.'],
];

export const faqItems = [
  ['What types of software does CODAI develop?', 'We build custom web and desktop applications, business systems, SaaS platforms, AI products, and connected hardware solutions.'],
  ['Can CODAI build fully customized AI solutions?', 'Yes. We develop tailored AI systems, including computer vision, facial recognition, object detection, machine learning, and automation.'],
  ['Does CODAI develop complete SaaS platforms?', 'Yes. We work across SaaS architecture, multi-tenant systems, subscriptions, cloud infrastructure, dashboards, and scalable backends.'],
  ['Can CODAI integrate with existing business systems?', 'Yes. We build APIs and integration workflows that connect new products, existing software, and hardware.'],
  ['Does CODAI provide hardware and software solutions?', 'Yes. Our work can span embedded systems, IoT, attendance devices, automation, and the software around them.'],
  ['Which countries does CODAI operate in?', 'CODAI operates across Cairo, Egypt; Barcelona, Spain; and Saudi Arabia.'],
  ['How can I start a project with CODAI?', 'Share a little about your idea using the project form below. We can use that context to start a conversation.'],
];

// Brand logos supplied for the recognition section. Names are omitted where the mark itself is unreadable.
export const trustedOrganizations = [
  { id: 'espresso-lab', name: 'Espresso Lab', logo: '/brands/espresso-lab-transparent.png' },
  { id: 'recognized-mark-02', name: 'Recognized brand', logo: '/brands/recognized-mark-02.png' },
  { id: 'noform', name: 'NOFORM', logo: '/brands/noform-monogram-transparent.png' },
  { id: 'recognized-mark-03', name: 'Recognized brand', logo: '/brands/noform-monogram-03-transparent.png' },
];
export const contactConfig = { email: '', phone: '', apiEndpoint: import.meta.env.VITE_CONTACT_API_ENDPOINT ?? '' };
