const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

   const item = {
    name: itemName,
    checked: false
   }

   items.push(item)

   document.querySelector("#item").value = ""

   console.log(items)
   }

   function showItemsList() {
    const section = document.querySelector(".list")
    
    items.map(item, index) => {
        sectionList.inner.html += `
                <div class="item">
          <div>
            <input type="checkbox" name="list" id="item-${index}">
            <div class="custom-checkbox">
              <img src="./assets/assets/checked.svg" alt="checked">
            </div>
            <label for="item-${index}">${item.name}">Maçã</label>
          </div>
          <button><img src="./assets/assets/trash-icon.svg" alt="trash-icon"></button>
        </div>
        `
    }
   }



   