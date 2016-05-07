function Component() {
    this.elem = null;
    
    // функция, которая инициализирует свойство this.elem
    this.init = function(sSelector) {
        this.elem = $(sSelector);
        
        if(this.elem.length) {
            console.info(this.elem);
        } else {
            throw new Error('No selector ' + sSelector);   
        }
            
    }
    
    //функция, которая находит элементы на странице по селектору
    this.find = function(sSelector) {
        var result = this.elem.find(sSelector);
        
        if(result.length) {
            return result;
            console.log(result);
        } else {
            throw new Error('No selector ' + sSelector);
        }
    }
    
}