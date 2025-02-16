const answer = document.getElementById ('answer');
const answer2 = document.getElementById ('answer2');
const answer3 = document.getElementById ('answer3');
const answer4 = document.getElementById ('answer4');
const answer5 = document.getElementById ('answer5');
const question = document.getElementById ('question');
const question2 = document.getElementById ('question2');
const question3 = document.getElementById ('question3');
const question4 = document.getElementById ('question4');
const question5 = document.getElementById ('question5');

// Announcement Button

const announcementButton = document.getElementById('announcementButton');

announcementButton.addEventListener('click', function(){
    alert("Dear Valued Clients, We are excited to announce that BauTech is now ready to serve you even better! To celebrate, we're offering a special 50% discount for the first 5 clients who book an appointment with us this coming month. Don’t miss out on this limited-time offer!");
});

// End Announcement Button



// Questions 

question.addEventListener('click', function(){
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    } 
});

question2.addEventListener('click', function(){
    if (answer2.style.display === 'none') {
        answer2.style.display = 'block';
    } else {
        answer2.style.display = 'none';
    } 
});

question3.addEventListener('click', function(){
    if (answer3.style.display === 'none') {
        answer3.style.display = 'block';
    } else {
        answer3.style.display = 'none';
    } 
});

question4.addEventListener('click', function(){
    if (answer4.style.display === 'none') {
        answer4.style.display = 'block';
    } else {
        answer4.style.display = 'none';
    } 
});

question5.addEventListener('click', function(){
    if (answer5.style.display === 'none') {
        answer5.style.display = 'block';
    } else {
        answer5.style.display = 'none';
    } 
});

// End questions


// Contact Form 

const contactForm = document.getElementById('contactForm');

const messageSent =  document.getElementById('thankYouMessage');

const backButton = document.getElementById('backButton');

messageSent.textContent = "Thanks! We've received your message and will contact you soon."



sendMessage.addEventListener('click', function(){
    if (contactForm.style.display === "none") {
        contactForm.style.display = 'block'; 
    } else {
        contactForm.style.display = 'none';
    }
})


sendMessage.addEventListener('click', function(){
    if (messageSent.style.display === "none") {
        messageSent.style.display = 'block'; 
    } else {
        messsageSent.style.display = 'none';
    }
})

backButton.addEventListener('click', function(){
    location.reload();
});






// FAQs Toogle Menu 
// 02-10-2025, 10:23PM


