const team = [
    /* 1 */
    {
        img_person:"/assets/img/team/person1.svg",
        name: "John Smith",
        paragraph_person: "Ceo and Founder",
        paragraph_description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    /* 2 */
    {
        img_person:"/assets/img/team/person2.svg",
        name: "Jane Doe",
        paragraph_person: "irector of Operations",
        paragraph_description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    /* 3 */
    {
        img_person:"/assets/img/team/person3.svg",
        name: "Michael Brown",
        paragraph_person: "Senior SEO Specialists",
        paragraph_description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                        
    },
    /* 4 */
    {
        img_person:"/assets/img/team/person4.svg",
        name: "Emily Johnson",
        paragraph_person: "PPC Manager",
        paragraph_description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    /* 5 */
    {
        img_person:"/assets/img/team/person5.svg",
        name: "Brian Williams",
        paragraph_person: "Social Media Specialist",
        paragraph_description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    /* 6 */
    {
        img_person:"/assets/img/team/person6.svg",
        name: "Sarah Kim",
        paragraph_person: "Content Creator",
        paragraph_description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
]

const teamContainer = document.querySelector('#team')

teamContainer.innerHTML = team.map(producto => {
    return `<article class="card-team">
                    <div class="title-card-team">
                        <img class="person-img-team" src=${producto.img_person} alt="">
                        <div class="name-team">
                            <h4>${producto.name}</h4>
                            <p>${producto.paragraph_person}</p>
                        </div>
                        <img class="icon-team" src="/assets/img/team/linkedin-black-icon.svg" alt="">
                    </div>
                    <hr>
                    <p>${producto.paragraph_description}</p>
                </article>`
}).join('')