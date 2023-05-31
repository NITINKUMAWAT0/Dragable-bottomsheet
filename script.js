const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetoverlay = document.querySelector(".sheet-overlay");

const showBottomSheet = () => {
    bottomSheet.classList.add("show");
}
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
}

showModalBtn.addEventListener("click", showBottomSheet);
sheetoverlay.addEventListener("click", hideBottomSheet);