const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hide');
  content.classList.toggle('full');
});

document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.querySelector(".like-button");
  const likeIcon = likeBtn.querySelector(".bx-heart");
  const likeCount = document.getElementById("like-count");
  let liked = false;

  likeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent.replace(/,/g, ""));
    if (!liked) {
      count += 1;
      likeIcon.classList.add("bxs-heart");
      likeIcon.classList.remove("bx-heart");
      likeIcon.style.color = "#ff6699";
    } else {
      count -= 1;
      likeIcon.classList.add("bx-heart");
      likeIcon.classList.remove("bxs-heart");
      likeIcon.style.color = "#b693ff";
    }
    likeCount.textContent = count.toLocaleString();
    liked = !liked;
  });
});
