// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      });
    });
  
    const btnCancel = document.querySelector("#btn02");
  
    if (btnCancel) { 
      btnCancel.addEventListener("click", (e) => {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      });
    }
  });
  