
/*adjusts position of confetti randomly 
window.addEventListener("load", function randomize(){
    var r;
    var list = document.getElementsByClassName("confetti")
    for(var i=0;i<36;i++){
        const rect = list[i].getBoundingClientRect();
        r = Math.floor(Math.random()*200);
        list[i].style.margin = r + "px " + rect.bottom + "px";
        this.window.alert(list[i].style.margin);
    }
});

*/

/* from claude
document.querySelectorAll('.confetti').forEach(img => {
  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;
  img.style.left = Math.random() * maxX + 'px';
  img.style.top  = Math.random() * maxY + 'px';
});
*/

//project modals

const projects = {
  ti: {
    type: "brand campaign",
    title: "power module campaign",
    desc: "",
    sections: [
      {
        label: "the goal:",
        text: "To showcase power module ICs with new features and educate customers on how much modules have improved over the years in terms of size, cost and performance. This campaign included building both internal sales enablement and external thought leadership."
      },
      {
        label: " ",
        grid: [
                { src: "/public/mouser.png", caption: "brand partnership", url: "https://www.youtube.com/watch?v=0kiR3Qierq8" },
                { src: "/public/tech_article.png", caption: "technical article", url: "https://www.ti.com/lit/ta/ssztd45/ssztd45.pdf" },
                { src: "/public/blog.png", caption: "partner blog", url: "https://www.allaboutcircuits.com/industry-articles/six-misconceptions-about-power-modulessay-goodbye-to-trade-offs/" },
                { src: "/public/webinar.png", caption: "product webinar", url: "https://event.on24.com/wcc/r/4429693/CCB2680E454459DACC288C924893AE23" }
        ]
      }
    ]
  },
  mock: {
  type: "coming soon",
  title: "coming soon!",
  desc: "",
  sections: []
}
}

function openModal(id) {
  const p = projects[id];
//   document.getElementById("modal-type").textContent = p.type;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.desc;

  const sectionsEl = document.getElementById("modal-sections");
  sectionsEl.innerHTML = "";

  p.sections.forEach(section => {
    const block = document.createElement("div");
    block.classList.add("modal-section");

    if (section.label) {
      const label = document.createElement("p");
      label.classList.add("modal-section-label");
      label.textContent = section.label;
      block.appendChild(label);
    }

    if (section.text) {
      const text = document.createElement("p");
      text.classList.add("modal-section-text");
      text.textContent = section.text;
      block.appendChild(text);
    }

    if (section.images) {
  const imgRow = document.createElement("div");
  imgRow.classList.add("modal-img-row");
  section.images.forEach(img => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.caption || "";

    if (img.url) {
      const a = document.createElement("a");
      a.href = img.url;
      a.target = "_blank";
      a.appendChild(image);
      figure.appendChild(a);
    } else {
      figure.appendChild(image);
    }

    const caption = document.createElement("figcaption");
    caption.textContent = img.caption || "";
    figure.appendChild(caption);
    imgRow.appendChild(figure);
  });
  block.appendChild(imgRow);
}
if (section.grid) {
  const imgGrid = document.createElement("div");
  imgGrid.classList.add("modal-img-grid");
  section.grid.forEach(img => {
    const figure = document.createElement("figure");
    figure.classList.add("modal-grid-item");
    const a = document.createElement("a");
    a.href = img.url;
    a.target = "_blank";
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.caption || "";
    const caption = document.createElement("figcaption");
    caption.textContent = img.caption || "";
    a.appendChild(image);
    figure.appendChild(a);
    figure.appendChild(caption);
    imgGrid.appendChild(figure);
  });
  block.appendChild(imgGrid);
}

    if (section.links) {
        const linkRow = document.createElement("div");
        linkRow.classList.add("modal-link-row");
        section.links.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.text;
            a.target = "_blank";
            a.classList.add("modal-link");
            linkRow.appendChild(a);
  });

  block.appendChild(linkRow);
}

    sectionsEl.appendChild(block);
  });

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


// Generate random CAPTCHA for contact page
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  // Display CAPTCHA
  function displayCaptcha() {
    const captchaText = generateCaptcha();
    document.getElementById('captcha').textContent = captchaText;
    return captchaText;
  }

  // Store the generated CAPTCHA
  let currentCaptcha = displayCaptcha();

  // Refresh CAPTCHA
  document.getElementById('refreshCaptcha').addEventListener('click', function() {
    currentCaptcha = displayCaptcha();
  });

  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const userInput = document.getElementById('captchaInput').value;
  if (userInput === currentCaptcha) {
    fetch('https://formspree.io/f/mdawgjdg', {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('message').textContent = 'sent!';
      } else {
        document.getElementById('message').textContent = 'something went wrong, please try again.';
      }
    })
    .catch(() => {
      document.getElementById('message').textContent = 'something went wrong, please try again.';
    });
  } else {
    document.getElementById('message').textContent = 'incorrect CAPTCHA, please try again.';
  }
});