//Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
    
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description", 
        inputValue: ".add__value", 
        addBtn: ".add__btn"
    }
    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, //exp, inc
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstings: function(){
            return DOMstrings;
        }
    };     
})();

// санхүүтэй ажиллах контроллер
var financeController = (function(){
    //private data
     var Income = function(id, description, value){
         this.id = id;
         this.description = description;
         this.value = value;
     }
     //private data
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    //private data
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: [],
            exp: []
        }
    }
    return{
        addItem: function(type, desc, val){
            var item, id;

            if(data.item[type].length === 0) id = 1;
            else {
                id = data.items[type][data.items[type].length - 1].id + 1;
            }
            if(type=== "inc"){
                item = new Income(id, desc, val);

            }else{
                item = new Expense(id, desc, val);
            }
            
            data.items[type].push(item);
        },
        seeData: function(){
            return data;
        }
    }
 
})();
//Програмын холбогч контроллер
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
        //1. оруулах өгөгдлийг дэлгэцэс олж авна.
         var input = uiController.getInput();
        // 2. Олж авсан өгөдлийг санхүүгийн контроллерт дамжуулж тэнд хадгална.
        financeController.addItem();
        // 3. Олж авсан өгөдлийг веб дээрээ тохирох хэсэг нь гарана. 
        // 4. Төсвийг тоуоолно
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.  
    };
    var setupEventListeners = function(){
         var DOM = uiController.getDOMstings();

        document.querySelector(DOM.addBtn).addEventListener("click", function(){
            ctrlAddItem();
        });
        document.addEventListener("keypress", function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };
    return{
        init: function(){
            console.log("Application started...");
            setupEventListeners();
        }
    }

})(uiController, financeController);

appController.init();