const tabs = document.getElementsByClassName('tab');
const activeTab = 0;
function toggleTabs(e) {
  console.log(e);
}

Array.prototype.forEach.call(tabs, (tab, index) => {
  if (activeTab === index) {
    tab.classList.add('active');
  }
  tab.addEventListener('click', toggleTabs);
});
