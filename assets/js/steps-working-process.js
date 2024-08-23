
const steps = [
    /* 1 */
    {
        steps: "01",
        title_step: "Consultation",
        paragraph: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    /* 2 */
    {
        steps: "02",
        title_step: "Research and Strategy Development"
    },
    /* 3 */
    {
        steps: "03",
        title_step: "Implementation"
    },
    /* 4 */
    {
        steps: "04",
        title_step: "Monitoring and Optimization"
    },
    /* 5 */
    {
        steps: "05",
        title_step: "Reporting and Communication"
    },
    /* 6 */
    {
        steps: "06",
        title_step: "Continual Improvement"
    },
]


const stepsContainer = document.querySelector('#step')


stepsContainer.innerHTML = steps.map((producto, i) => {
     if( i === 0){
        return `<div class="step1-working-process">
                    <div>
                        <div class="step-title">
                            <span> ${producto.steps} </span>
                            <h3> ${producto.title_step} </h3>
                        </div>
                        <button>
                            <img src="/assets/img/less-icon-working-process.svg" alt="">
                        </button>
                    </div>
                    <hr>
                    <p> ${producto.paragraph} </p>
                </div>`;
     }else{
       return `    <div class="step-working-process">
                    <div class="step-title">
                        <span> ${producto.steps} </span>
                        <h3> ${producto.title_step} </h3>
                    </div>
                    <button>
                        <img src="/assets/img/more-icon-working-process.svg" alt="">
                    </button>
                </div>`;
     }
}).join('');