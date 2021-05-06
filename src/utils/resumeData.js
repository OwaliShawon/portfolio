import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const resumeData = {
    name: "Owali Ullah Shawon",
    title: "Full Stack Web Developer",

    birthday: "20 Dec 1997",
    email: "owali.shawon@gmail.com",
    address: "95 Rosulpur Donia, Jatrabari, Dhaka",

    socials: {
        facebook: {
            link: "https://www.facebook.com/OwaliShawon/",
            text: "Facebook",
            icon: <FacebookIcon></FacebookIcon>,
        },
        facebook: {
            link: "https://twitter.com/OwaliShawon",
            text: "",
            icon: <TwitterIcon></TwitterIcon>,
        },
        // facebook: {
        //     link: "book.com/OwaliShawon/",
        //     text: "",
        //     icon: <FacebookIcon></FacebookIcon>,
        // },
    },

    workExperience: [
        {
            title: "Work 1",
            date: " 2018-2019",
            description: "lorem"
        },
        {
            title: "Work 2",
            date: " 2019-2020",
            description: "lorem"
        },
        {
            title: "Work 3",
            date: " 2020-2021",
            description: "lorem"
        }
    ],

    education: [
        {
            title: "Daffodil International University",
            date: " May 2017 – May 2021",
            description: "lorem"
        },
        {
            title: "Dhaka College",
            date: "June 2014 – May 2015",
            description: "lorem"
        },
        {
            title: "A.K High School",
            date: "2013",
            description: "lorem"
        }
    ],



    aboutme: `I am a very passionate web developer with some home experience. I did some projects with HTML5, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, MongoDB and Material UI, Firebase.
         I love to play with code and football. During my leisure time i love to  watch tv series and hanging out with friends. 
         But i spent most of the time with my family and my computer. I love to discover new things on internet. Learning something new and apply it on the new way is super exciting to me. `,


}

export default resumeData;