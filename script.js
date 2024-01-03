const quizData = [
    {
        id: 0,
        src: "https://i.postimg.cc/h4wV9cZP/1.jpg",
        correct: "no"
    },
    {
        id: 1,
        src: "https://i.postimg.cc/sxBStNxr/2.jpg",
        correct: "yes"
    },
    {
        id: 2,
        src: "https://i.postimg.cc/52WvRpMh/3.jpg",
        correct: "yes"
    },
    {
        id: 3,
        src: "https://i.postimg.cc/nhK7b7FC/4.jpg",
        correct: "yes"
    },
    {
        id: 4,
        src: "https://i.postimg.cc/NMjRxMwL/5.jpg",
        correct: "no"
    },
    {
        id: 5,
        src: "https://i.postimg.cc/6qDRwf4G/6.jpg",
        correct: "yes"
    },
    {
        id: 6,
        src: "https://i.postimg.cc/wB6N6vMF/7.jpg",
        correct: "no"
    },
    {
        id: 7,
        src: "https://i.postimg.cc/TwNgN6R0/8.jpg",
        correct: "yes"
    },
    {
        id: 8,
        src: "https://i.postimg.cc/FKDL14Jv/9.jpg",
        correct: "no"
    },
    {
        id: 9,
        src: "https://i.postimg.cc/0QjJwBpw/10.jpg",
        correct: "yes"
    },
    {
        id: 10,
        src: "https://i.postimg.cc/JnFHc5qd/11.jpg",
        correct: "no"
    },
    {
        id: 11,
        src: "https://i.postimg.cc/6qG2H4b6/12.jpg",
        correct: "no"
    },
    {
        id: 12,
        src: "https://i.postimg.cc/LhKqG4Gt/13.jpg",
        correct: "no"
    },
    {
        id: 13,
        src: "https://i.postimg.cc/BZdMJT0g/14.jpg",
        correct: "no"
    },
    {
        id: 14,
        src: "https://i.postimg.cc/ncBTrXVt/15.jpg",
        correct: "no"
    },
    {
        id: 15,
        src: "https://i.postimg.cc/T3x0DTh5/16.jpg",
        correct: "no"
    },
    {
        id: 16,
        src: "https://i.postimg.cc/mZcmxd0k/17.jpg",
        correct: "no"
    },
    {
        id: 17,
        src: "https://i.postimg.cc/SxGrLHzT/18.jpg",
        correct: "yes"
    },
    {
        id: 18,
        src: "https://i.postimg.cc/jjdhMvHs/19.jpg",
        correct: "no"
    },
    {
        id: 19,
        src: "https://i.postimg.cc/BvYBkDp2/20.jpg",
        correct: "yes"
    }
];
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

shuffleArray(quizData);
console.log(quizData[0]);
const nextQbtn = document.getElementById("btn");
const imgElem = document.getElementById("img");
const quizForm = document.getElementById("quiz-form");
const result = document.getElementById("result");

let currentImage = 0;
let img = new Image();
img.src = quizData[currentImage].src;
img.classList.add("img");
imgElem.appendChild(img);
let score = 0;


function nextImage() {
    let answer = document.querySelector('input[name="answer"]:checked').value;
    if (quizData[currentImage].correct === answer) {
        score++;
    }
    if (currentImage < quizData.length-1) {
        currentImage++;
        img.src = quizData[currentImage].src;
        imgElem.replaceChildren(img);
        if (currentImage === quizData.length - 1) {
            nextQbtn.innerText = "Færdig!";
        }
    } else {
        quizForm.classList.add("hide");
        result.innerText = `Du svarede rigtigt på ${Math.round(100*score/quizData.length)}% af spørgsmålene (${score}/${quizData.length}).`;
        result.classList.remove("hide");
    }
    
    document.querySelector('input[name="answer"]:checked').checked = false;
}


nextQbtn.addEventListener("click", nextImage);