const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

   const item = {
      name: itemName,
      checked: false
   }

   items.push(item)

   document.querySelector("#item").value = ""

  showItemsList()
   }

   function showItemsList() {
    const sectionList = document.querySelector(".list")
    
    items.map((item, index) => {
        sectionList.innerHTML += `
                <div class="item">
          <div>
            <input type="checkbox" name="list" id="item-${index}">
            <div class="custom-checkbox">
              <img src="./assets/assets/checked.svg" alt="checked">
            </div>
            <label for="item-${index}">${item.name}</label>
          </div>
          <button onclick="removeItems('${item.name}')"><img src="./assets/assets/trash-icon.svg" alt="trash-icon"></button>
        </div>
        `
    })
   }

function removeItems(itemName) {
  const itemIndex = items.findIndex((item) => item.name === itemName)
  const divWarning = document.querySelector(".warning")

  divWarning.classList.remove("hide-warning")

  setTimeout(() => {
    divWarning.classList.add("hide-warning")
  }, 4000)

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1)
  }
  showItemsList()
}

function  addHideWarningClass () {
  document.querySelector(".warning").classList.add
}

   