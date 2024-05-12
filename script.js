// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('calculatorSection').style.display = 'none';
// });


// document.getElementById('signInButton').addEventListener('click', function(event) {
//     event.preventDefault();
//     login();
// });

// document.getElementById('password').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         login();
//     }
// });

// function login() {
//     var username = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     var emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(username)) {
//         alert('Invalid email format. Please enter a valid email address.');
//         return;
//     }

//     if (password.length >= 8) {
//         document.getElementById('loginSection').style.display = 'none';
//         document.getElementById('calculatorSection').style.display = '';
//     } else {
//         alert('Password must be at least 8 characters long.');
//     }
// }
// function logout() {
//     window.location.reload();
// }

function toggleDarkLightMode() {
    var body = document.body;
    var container = document.getElementsByClassName('container')[0];

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-container');
}

function changeFontSize(increase) {
    var htmlElement = document.documentElement;
    var currentFontSize = parseInt(window.getComputedStyle(htmlElement).fontSize);
    if (increase) {
        htmlElement.style.fontSize = (currentFontSize + 1) + 'px';
    } else {
        htmlElement.style.fontSize = (currentFontSize - 1) + 'px';
    }
}

let calcOutput = '';

function inputCalc(value) {
    calcOutput += value;
    document.getElementById('calc-display').value = calcOutput;
}

function clearCalc() {
    calcOutput = '';
    document.getElementById('calc-display').value = calcOutput;
}

function calculate() {
    try {
        calcOutput = eval(calcOutput);
        document.getElementById('calc-display').value = calcOutput;
    } catch (e) {
        document.getElementById('calc-display').value = 'Error';
    }
}


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


function random_meme() {
    let api = 'https://celestial-dainsleif-v2.onrender.com/programeme'; /* base: https://celestial-dainsleif-v2.onrender.com/api-docs */
  
    fetch(api)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
          if (data.length > 0) {
              const memeUrl = data[0].imageUrl;
              const memeTitle = data[0].title;
              display_meme(memeUrl, memeTitle);
          } else {
              throw new Error('No meme data found');
          }
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

function display_meme(memeImg, memeTitle){
    document.getElementById('memeImg').src = memeImg;
    document.getElementById('memeTitle').textContent = memeTitle;
}

random_meme();