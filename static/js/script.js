
// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

// Open PDF function
function openPDF() {
  window.open("static/ARIFKHAN_A_Python_Developer_Resume.pdf", "_blank");
}

// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



// htmlcss progress circular bar 
document.addEventListener("DOMContentLoaded", () => {
  let htmlProgress = document.querySelector(".circular-progress.html-css"),
      htmlValue = document.querySelector(".html-progress");

  let htmlStartValue = 0,
      htmlEndValue = 80, // Set final percentage
      htmlSpeed = 30;

  let progressInterval = setInterval(() => {
      htmlStartValue++;

      htmlValue.textContent = `${htmlStartValue}%`;
      htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

      if (htmlStartValue >= htmlEndValue) {
          clearInterval(progressInterval);
      }
  }, htmlSpeed);
});


// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#6f34fe ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 80,
  pythonspeed = 30;

let progressphp = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#20c997 ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progressphp);
  }
}, pythonspeed);

// mysql progress circular bar 
let mysqlProgress = document.querySelector(".mysql"),
  mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
  mysqlEndValue = 70,
  mysqlspeed = 30;

let progressmysql = setInterval(() => {
  mysqlStartValue++;

  mysqlValue.textContent = `${mysqlStartValue}%`;
  mysqlProgress.style.background = `conic-gradient(#db43b5 ${
    mysqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mysqlStartValue == mysqlEndValue) {
    clearInterval(progressmysql);
  }
}, mysqlspeed);


// reactjs progress circular bar 
let reactProgress = document.querySelector(".react"),
  reactValue = document.querySelector(".react-progress");

let reactStartValue = 0,
  reactEndValue = 60,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// numpy progress circular bar 
let numpyProgress = document.querySelector(".numpy"),
  numpyValue = document.querySelector(".numpy-progress");

let numpyStartValue = 0,
  numpyEndValue = 50,
  numpyspeed = 30;

let progressnumpy = setInterval(() => {
  numpyStartValue++;

  numpyValue.textContent = `${numpyStartValue}%`;
  numpyProgress.style.background = `conic-gradient(#22bda8 ${
    numpyStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (numpyStartValue == numpyEndValue) {
    clearInterval(progressnumpy);
  }
}, numpyspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// import emailjs from "@emailjs/browser";

document.addEventListener("DOMContentLoaded", () => {
    // ✅ Initialize EmailJS with the correct Public Key
    emailjs.init("VX7Q6PyRx7SDYnz3N"); // Replace with your actual Public Key

    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();

        // ✅ Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const submitBtn = document.getElementById("submit-btn");
        const statusMessage = document.getElementById("status-message");

        // ✅ Validate input fields
        if (!name || !email || !message) {
            statusMessage.textContent = "Please fill in all fields.";
            statusMessage.style.color = "red";
            return;
        }

        // ✅ Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            statusMessage.textContent = "Please enter a valid email address.";
            statusMessage.style.color = "red";
            return;
        }

        // ✅ EmailJS Template Parameters
        const templateParams = {
            to_name: "Arifkhan A",
            from_name: name,
            email_id: email, // Ensure this matches your EmailJS template variable
            message: message,
        };

        console.log("Sending EmailJS request:", templateParams);

        // ✅ Disable submit button while sending email
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // ✅ Send Email using EmailJS
        emailjs.send("service_1wiz1uq", "template_j3tkk3m", templateParams)
            .then((response) => {
                console.log("Email sent successfully!", response);
                statusMessage.textContent = "Email Sent! Check your inbox or spam folder.";
                statusMessage.style.color = "green";

                // ✅ Reset the form
                document.getElementById("contact-form").reset();
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                statusMessage.textContent = "Failed to send email. Check your EmailJS template and API keys.";
                statusMessage.style.color = "red";
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Email";
            });
    });
});
