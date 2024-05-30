hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-b");
    navBar.classList.toggle("active");
};





// const form = document.getElementById("job-vacancies");
// const displayData = document.getElementById("jobVacancyOutput");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//     var jobType = form.elements['job-type'].value;
//     var jobLocation = form.elements['job-location'].value;
//     var salaryRate = form.elements['salary-rate'].value;
//     var fullPart = form.elements['full-time_part-time'].value;
//     var companyName = form.elements['company-name'].value;



//     // Update the div with the values
//   displayData.innerHTML = `
//      <div>
//      <p><span class="new-job"><i class="fa fa-star" aria-hidden="true"></i>New</span><small>Job reference: Brendon 01002</small></p>
//       <h1 class="jobName" id="job-type-output">${jobType}</h1>
// </div>
// <div>
//   <ul >
//       <li id="job-location-output"> <i class="fa fa-map-marker" aria-hidden="true"></i>  ${jobLocation}</li>
//         <li id="salary-rate-output"> <i class="fa fa-eur" aria-hidden="true"></i> ${salaryRate}</li>
//         <li id="full-time_part-time-output"> <i class="fa-regular fa-clock"></i>   ${fullPart}</li>
//       <li id="company-name-output"><i class="fa-regular fa-user"></i>  ${companyName}</li>
//   </ul>
// </div>
// <div>
//      <p>Emergency Care Resourcing are lokking for
//      Healthcare Assistants for Supported
//          Living and Care Homes within our care
//        homes in the Market town...</p>
// </div>
// <div class="button-icon-flex">
//      <button>Read more</button>
//     <div class="share-icon"><p><i class="fa fa-share-alt" aria-hidden="true"></i></p></div>
// </div>
// `;

// form.reset();
// });

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:joyflourish2022@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}



AOS.init();
