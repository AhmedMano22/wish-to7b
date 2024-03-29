

const button1Data = [
  { name: "Person 1", PersonImage: "images/01.jpg", image: "images/emo1.png" },
  { name: "Person 2", PersonImage: "images/02.jpg", image: "images/emo2.png" },
  { name: "Person 3", PersonImage: "images/03.jpg", image: "images/emo1.png" },
  { name: "Person 4", PersonImage: "images/04.jpg", image: "images/ic.png" },
  { name: "Person 5", PersonImage: "images/05.jpg", image: "images/emo1.png" },
  { name: "Person 6", PersonImage: "images/08.jpg", image: "images/emo2.png" }
];

const comentData = [
  { name: "Person 1", PersonImage: "images/01.jpg", image: "images/emo1.png", txt: "اهلا وسهلا بكم جميعا" },
  { name: "Person 2", PersonImage: "images/02.jpg", image: "images/emo2.png", txt: "لا تنسي فهد حضور الاجتماع " },
  { name: "Person 3", PersonImage: "images/03.jpg", image: "images/emo1.png", txt: "هذا النص للتجريب" },
  { name: "Person 4", PersonImage: "images/04.jpg", image: "images/ic.png", txt: "هناك حقيقة مثبتة منذ زمن طويل وهي ان المحتوي المقروء لصفحة ما سيلهي القارئ عن التركيز عن الشكل الخارجي للنص" },
  { name: "Person 5", PersonImage: "images/05.jpg", image: "images/emo1.png", txt: "لاتنسي تحجز لي هديه من الملفا يا فهد" },
  { name: "Person 6", PersonImage: "images/08.jpg", image: "images/emo2.png", txt: "لا تؤجل عمل اليوم الي الغد" }
];

function displayCommentsData(data) {

  const modal = document.getElementById("largeModal");
  const modalContent = document.getElementById("modalCommentContent");

  modalContent.innerHTML = ''; // Clear previous content

  data.forEach(comment => {
    const commentBox = document.createElement('div');
    commentBox.classList.add('d-flex', 'align-items-center', 'modelcomment-box');

    commentBox.innerHTML = `
            <div class="persons-react1">
            <img src="${comment.PersonImage}" class=" persons-react " alt="">
            </div>
            <div class="bg-white">
              <div class="comment-info">
                <div class="d-flex justify-content-between">
                  <p class="comment-person-name">${comment.name}</p>
                 
                </div>
                <div class="d-flex mt-2 comment-time">
                  <span>${comment.txt}</span>
                </div>
              </div>
            </div>
          `;

    modalContent.appendChild(commentBox);
  });
}
const Commentbuttons = document.querySelectorAll('.readmore');
function handlecommentButtonClick() {
  displayCommentsData(comentData);
}
Commentbuttons.forEach(Commentbutton => {
  Commentbutton.addEventListener('click', handlecommentButtonClick);
});




const buttons = document.querySelectorAll('.persons-react-count');
function handleButtonClick() {
  console.log("Button clicked");
  displayModalData(button1Data);
}
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
function displayModalData(data) {

  const modal = document.getElementById("staticBackdrop");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `<ul>`;

  data.forEach(project => {
    modalContent.innerHTML += `
        <li>
        <img class="model-per-img" src="${project.PersonImage}" alt="${project.name}" />
          <p>${project.name}</p>
          <img class="model-per-react" src="${project.image}" alt="${project.name}" />
        </li>
      `;
  });
}








