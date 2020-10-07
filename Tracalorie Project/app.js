// Storage Controller
const StorageCtrl = (function(){
    // Public methods
    return {
        storeItem(item) {
            let items;
            // Check if any item in LS
            if(localStorage.getItem('items') === null) {
                items = [];
                // Push new item
                items.push(item);

                // Set LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get what is already in LS
                items = JSON.parse(localStorage.getItem('items'));

                // Push new item
                items.push(item);

                // Reset item
                localStorage.setItem('items' ,JSON.stringify(items));
            }
        },
        getItemsFromStorage: function() {
            let items;
            if(localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateStoredItem: function(updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index) => {
                if(updatedItem.id === item.id){
                    items.splice(index ,1 ,updatedItem);
                }
            });
            localStorage.setItem('items' ,JSON.stringify(items));
            window.location.reload();
        },
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach((item, index) => {
                if(id === item.id){
                    items.splice(index ,1);
                }
            });
            localStorage.setItem('items' ,JSON.stringify(items));
        },
        clearItemsFromStorage: function() {
            localStorage.removeItem('items');
        }
    }
})();

// Item Controller
const ItemCtrl = (function() {
    

    // Item Constructor
    const Item = function(id ,name ,calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure / state
    const data = {
        // items: [
        //     // {id: 0, name: 'Dinner', calories: 1000},
        //     // {id: 1, name: 'Lunch', calories: 1500},
        //     // {id: 2, name: 'Breakfast', calories: 500}
        // ],
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    };


    // Public methods
    return{
        getItems: function() {
            return data.items;
        },
        addItem: function(name ,calories) {
            let ID;
            // Create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            const newItem = new Item(ID ,name ,calories); 

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id) {
            let found = null;
            data.items.forEach(item => {
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        itemUpdate: function(name ,calories) {
            // Calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(item => {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            
            return found;
        },
        removeItem: function(id) {
            // Get ids
            const ids = data.items.map(item => {
                 return item.id;
            });

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index ,1);
        },
        clearAllItems: function() {
            data.items = [];
        },
        setCurrentItem: function(item) {
            data.currentItem = item;
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        getTotalCalories: function() {
            let total = 0;

            // Loop though items and add cals
            data.items.forEach(item => {
                total += item.calories;
            });
            
            // Set total cal in data structure
            data.totalCalories = total;

            return data.totalCalories;
        },
        logData: function() {
            return data;
        }

    }
})();





// UI controller
const UICtrl = (function() {
    const UISelector = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'

    };


    // Public methods
    return{
        populateItemList: function(items) {
            let html = '';
                
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                   <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                   <a href="#" class="secondary-content fontmargin"><i class="remove-item fa fa-times"></i></a>
                   <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
               </li>
                `;     
            });

            // Insert list items
            document.querySelector(UISelector.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelector.itemNameInput).value,
                calories: document.querySelector(UISelector.itemCaloriesInput).value
            }
        },
        addListItem: function(item) {
            // Create li element
            const li = document.createElement('li');
            li.innerHTML = `
            <li class="collection-item" id="item-${item.id}">
               <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
               <a href="#" class="secondary-content fontmargin"><i class="remove-item fa fa-times"></i></a>
               <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>
            `;   
            
            // Insert item
            document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend' , li);
        },
        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelector.listItems);

            // Turn it into Array
            listItems = Array.from(listItems);

            listItems.forEach(listItem => {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content fontmargin"><i class="remove-item fa fa-times"></i></a>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    </li>
                    `;
                }
            });
        },
        removeListItem: function(id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();

            if(ItemCtrl.getItems().length === 0){
                UICtrl.hideList();
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelector.totalCalories).textContent = totalCalories;
        },
        clearInput: function() {
            document.querySelector(UISelector.itemNameInput).value = '';
            document.querySelector(UISelector.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelector.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelector.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function() {
            let listItems = document.querySelectorAll(UISelector.listItems);

            // Turn nodelist into array
            listItems = Array.from(listItems);

            listItems.forEach(item => {
                item.remove();
            });
        },
        hideList: function() {
            document.querySelector(UISelector.itemList).style.display = 'none';
        },
        unHideList: function() {
            document.querySelector(UISelector.itemList).style.display = 'block';
        },
        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelector.addBtn).style.display = 'inline';
            document.querySelector(UISelector.updateBtn).style.display = 'none';
            document.querySelector(UISelector.backBtn).style.display = 'none';
        },
        showEditState: function() {
            document.querySelector(UISelector.addBtn).style.display = 'none';
            document.querySelector(UISelector.updateBtn).style.display = 'inline';
            document.querySelector(UISelector.backBtn).style.display = 'inline';
        },
        getSelectors: function() {
            return UISelector;
        }
    }
})();





// App Controller
const App = (function(ItemCtrl ,StorageCtrl, UICtrl) {
    // Load event listeners
    const loadEventListener = function() {
        // Get UI selectors
        const UISelector = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelector.addBtn).addEventListener('click' ,itemAddSubmit);

        // Disable Submit on enter
        document.addEventListener('keypress' , e => {
            if(e.keyCode === 13 || e.which === 13){
               e.preventDefault();
               return false; 
            } 
        });

        // Edit icon click event
        document.querySelector(UISelector.itemList).addEventListener('click' ,itemEditClick);

        // Back btn Event
        document.querySelector(UISelector.backBtn).addEventListener('click' ,UICtrl.clearEditState);

        // Remove item from list
        document.querySelector('.collection').addEventListener('click' ,itemRemoveSubmit);

        // Update item Event
        document.querySelector(UISelector.updateBtn).addEventListener('click' ,itemUpdateSubmit);

        // Clear all item Event
        document.querySelector(UISelector.clearBtn).addEventListener('click' ,clearAllItemsClick);

    }

    // Add item submit
    const itemAddSubmit = function(e) {
        // Get form input from UI controller
        const input = UICtrl.getItemInput();
        
        // Check for name and calories input
        if(input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name ,input.calories);

            // Add item to UI list
            UICtrl.addListItem(newItem);

            //unhide
            UICtrl.unHideList();

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            StorageCtrl.storeItem(newItem);

            // Clear fields
            UICtrl.clearInput(); 
        }
        e.preventDefault();
    }

    // Click edit items
    const itemEditClick = function(e) {
        if(e.target.classList.contains('edit-item')){
            // Get list item id
            const listId = e.target.parentElement.parentElement.id;

            // Break into an array
            let listIdArr = listId.split('-');

            // Get the actual id
            const id = parseInt(listIdArr[1]);

            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function(e) {
        // Get item input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.itemUpdate(input.name ,input.calories);
        
        // Update UI
        UICtrl.updateListItem(updatedItem);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Update LS
        StorageCtrl.updateStoredItem(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // Remove btn event
    const itemRemoveSubmit = function(e) {
        
        if(e.target.classList.contains('remove-item')) {
            if(confirm('Are you sure?')){

                // Get current item id
                const currentItemID = e.target.parentElement.parentElement.getAttribute('id');

                let currentID = currentItemID.split('-');

                currentID = parseInt(currentID[1]);

                // Delete from data structure
                ItemCtrl.removeItem(currentID);

                // Delete from UI
                UICtrl.removeListItem(currentID);

                StorageCtrl.deleteItemFromStorage(currentID);
            }
        }
        e.preventDefault();
    }

    // Clear all item event 
    const clearAllItemsClick = function() {
        if(confirm('Are You Sure?'))    {
            // Delete All items from data structure
            ItemCtrl.clearAllItems();

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Remove from UI
            UICtrl.removeItems();

            // Clear from LS
            StorageCtrl.clearItemsFromStorage();

            // Hide ul
            UICtrl.hideList();
        }
    }

    // Public methods
    return{
        init: function() {
            // Clear edit state / set initial state
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Check if any items
            if(items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            //  Load event listener
            loadEventListener();
        }
    }
})(ItemCtrl ,StorageCtrl ,UICtrl);

// Initializing App
App.init();