const currentYear = new Date().getFullYear();
const data = {
    sitename: "Mana",
    sitetagline: "WHERE ENERGY FLOWS! ✨",
    siteurl: "https://www.instagram.com/mana.univers",
    sitelogo: "",
    title: "Next Event Coming Soon!",
    ticketlink: "https://eventfrog.ch/en/p/party/charts-open-format/episode-01-the-beginning-7261423307987072456.html",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Maintained By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://letslink.ch">Let's Link</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "instagram",
            link: "https://www.instagram.com/mana.univers",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
