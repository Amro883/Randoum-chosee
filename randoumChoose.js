tagsEl = document.querySelector(".tags");
textarea = document.querySelector("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect();
  }
});

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
};
const randomSelect = () => {
  interval = setInterval(() => {
    randoumTag = pickRandomTag();
    // console.log(randoumTag);

    if (randoumTag !== undefined) {
      dark(randoumTag);
      setTimeout(() => {
        hight(randoumTag);
      }, 50);
    } else {
    }
  }, 200);
  setTimeout(() => {
    randoumTag = pickRandomTag();
    clearInterval(interval);
    dark(randoumTag);
  }, document.querySelectorAll(".tag").length * 1000);
};

const pickRandomTag = () => {
  tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};
const hight = (tag) => {
  tag.classList.add("dark");
  tag.classList.remove("ligth");
};
const dark = (tag) => {
  tag.classList.remove("dark");
  tag.classList.add("ligth");
};
