const introInfo = {
    name: 'Emre COŞKUNÇAY',
    title: 'Full Stack Developer',
    location: 'Ankara, Turkey',
    description: '<strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie orci. <strong>Suspendisse ut laoreet mi</strong>. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim <strong>condimentum id</strong>. Etiam eget iaculis tellus. Varius sit amet.',
    image: 'ec.jpg',
}

//dynamic icon
const socialMediaInfo = [{
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/coskuncayemre/',
        username: 'coskuncayemre',
        displayName: 'linkedin/coskuncayemre'
    },

    {
        name: 'github',
        link: 'https://github.com/coskuncayemre',
        username: 'coskuncayemre',
        displayName: 'github/coskuncayemre'
    },
    // {
    //     name: 'globe',
    //     link: 'http://localhost:8080',
    //     username: 'coskuncayemre',
    //     displayName: 'emrecoskuncay.com'
    // },
    // {
    //     name: 'stack-overflow',
    //     link: 'http://localhost:8080',
    //     username: 'coskuncayemre',
    //     displayName:'stackoverflow.com'
    // },
]


const contactInfo = [
    {
        name: 'envelope',
        context: 'emrecoskuncay@gmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:emrecoskuncay@gmail.com'
    },
    {
        name: 'phone-square',
        context: '+905542694056',
        size: '23px',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:+905542694056'
    },
]

const summaryInfo = 
    'Hello, It\'s Emre from Ankara,Turkey.I have +2 years of experience with Vue.JS, .NET Core, Docker, Kubernetes with a focus on RestAPIs, MVC and micro-services.My priority is to improve reusability and write generic code. In my social life, I\'m a backpacker.I have visited 22 countries and I am excitedly waiting for this number to increase. In addition, I enjoy talking about new startup ideas.'


//desc v-html 
const experinceInfo = [
    {
        workAt: 'Aselsan',
        position: 'Software Engineer',
        duration: 'Dec 2019 – Present',
        description: 'Work as a full stack software engineer.',
        techs: ["Vue.JS", ".NET Core", "Docker", "Kubernetes", "PostgreSQL"]
    },
    {
        workAt: 'Aselsan (Intern)',
        position: 'Software Engineer',
        duration: 'Jul 2019 - Sep 2019',
        description: 'Developed desktop application, wrote relevant documents and prepared unit tests.Wrote requirements documents, project definition documents and test procedures.',
        techs: ["Java","JUnit","SQL"]
    },
    {
        workAt: 'Innova (Intern)',
        position: 'Full Stack Developer',
        duration: 'Jun 2018 – Aug 2018',
        description: 'Took part in the development team of Public Wi-Fi project.Designed simple welcome page.',
        techs: ["NodeJS"]
    },
    {
        workAt: 'DüğünSitemiz',
        position: 'Founder',
        duration: 'Jun 2016 – Dec 2019',
        description: 'DüğünSitemiz is a special website project for couples to marry. This project aims to remove couples RSVP difficulties. It is our honor to make better their happiest day of life.',
        techs: ["Python", "Django", "MongoDB"]
    },
    {
        workAt: 'Estiva Werbeagentur,Austria',
        position: 'Freelance Web Developer',
        duration: 'Jan 2018 – Aug 2018',
        description: '',
        techs: ["Wordpress", "HTML/CSS"]
    },
    {
        workAt: 'Akman TZOB Hotel,Turkey',
        position: 'Social Media Manager',
        duration: 'Dec 2017 – Sep 2018',
        description: '',
        techs: ['Adobe Illustrator']
    }
]

const educationInfo = [
    {
        school: 'Hacettepe University',
        location: 'Ankara,Turkey',
        title: 'MSc in Data Engineering',
        duration: '2021 – Current',
        description: '',
    },
    {
        school: 'Hacettepe University',
        location: 'Ankara,Turkey',
        title: 'BSc in Computer Science',
        duration: '2015 – 2020',
        description: '<b>GPA:</b> 3.38/4.00',
    },
    {
        school: 'The English Studio Language School',
        location: 'London,UK',
        title: 'Student',
        duration: 'Aug 2018 – Oct 2018',
        description: '',
    },
]

const volunteerInfo = [
    // {
    //     organisation: 'The English Studio Language School',
    //     title: 'Student',
    //     duration: 'July 2018 - Sep 2018',
    //     description: 'London,UK',
    // },
    {
        organisation: 'Hacettepe University,Social Life Organization',
        title: 'Organization Manager',
        duration: '2015 – 2021',
        description: '',
    }, {
        organisation: 'Hacettepe University,Community of Contest',
        title: 'Organization Manager',
        duration: '2016 – 2018',
        description: '',
    },
    {
        organisation: 'Hacettepe University ACM',
        title: 'Member',
        duration: '2015 – 2020',
        description: '',
    }
]


const certificateInfo = [
    {
        organisation: 'Red Hat',
        title: 'Red Hat Certified System Administrator RH124',
        duration: 'Feb,2021',
        description: '',
    },
    {
        organisation: 'KOSGEB',
        title: 'Entrepreneurship Certificate',
        duration: 'Jun,2019',
        description: '',
    },
]

const projectInfo = [{
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    },
    {
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    }
]


const skillInfo = [
    {
        name: 'Javascript',
        rate: 90,
    },
    {
        name: '.NET Core',
        rate: 65,
    },{
        name: 'Flutter',
        rate: 78,
    }, 
    {
        name: 'VueJS',
        rate: 90,
    },
    {
        name: 'Docker',
        rate: 85,
    },
    {
        name: 'HTML/CSS',
        rate: 85,
    },
    
]

const otherSkillInfo = ['Kubernetes','Nginx','Git','WebGL','MVC','Bootstrap','Jira','TFS']

const proSkillInfo = ['Leadership','Effective communication','Team player','Strong problem solver',]

// 0,1,2,3,4,5
const languageInfo = [{
        name: 'Turkish',
        rate: 5,
        level: 'Native',
    },
    {
        name: 'English',
        rate: 4,
        level: 'Int',
    },
    {
        name: 'German',
        rate: 1,
        level: 'Ele',
    }
]



const interestInfo = [{
        name: 'Traveler',
        description: "22 Countries,for now",
    },
    {
        name: 'Swimming',
        description: "",
    },
    {
        name: 'Entrepreneurship Ideas',
        description: "",
    },
    {
        name: 'Smart Home Ideas',
        description: "",
    },
]

export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,
    projectInfo: projectInfo,
    skillInfo: skillInfo,
    certificateInfo: certificateInfo,
    volunteerInfo: volunteerInfo,
    languageInfo: languageInfo,
    contactInfo: contactInfo,
    interestInfo: interestInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo
}