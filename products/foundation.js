class Foundation{
    constructor(brand, shade, price, manufactureYear){
        this.brand = brand;
        this.shade = shade;
        this.price = price;
        this.manufactureYear = manufactureYear;
        this.currentYear = new Date().getFullYear();
    }

    foundationAge(){
        return this.manufactureYear - this.currentYear;
    }
    adjustedPrice(){
        if (this.foundationAge() > 3){
            discount = this.price * 0.3;
            return this.price - discount;
        }else{
            return this.price;
        }
    }
    printableString(){
        return ` Brand: ${this.brand}\n Shade: ${this.shade}\n Price: ${this.price}`
    }
}

module.exports = Foundation;