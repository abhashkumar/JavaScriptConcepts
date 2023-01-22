class Chair {

    //Defaults that will be common for all the instances, can be called be class only:
    static backSupport = true;
    static armRests = true;

    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        //Defaults which can be changed by the subclass class.
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";
        console.log(Chair.printDefaultProps()); //Usage of static method inside constructor
    }
    
    static logObjectProps(){
        console.dir(this);
    }

    //Static within static usage
	static printDefaultProps(){
        console.log(`Chair Back Support = ${this.backSupport}`);
        console.log(`Arm rests support = ${this.armRests}`);
    }


    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};    
}

class OfficeChair extends Chair{
    //Newly Added Properties, private properties
	#basePrice;
	#maxDiscount;
	#sellerAddress;
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle){
        //Super is not just related to the classes – you can also use it to call functions on the object's parent.
        //Make sure you call the super function at the start of the constructor
        super();
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.isMovable = true;
        this.#basePrice = 1000;
		this.#maxDiscount = 5; //In percentage
		this.#sellerAddress = "XYZ, street";
    }
    
    adjustableHeight(height){
        if(height > this.seatHeight){
            console.log(`Chair height changed to ${height}`);        
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }
    
    adjustAngle(angle){
        if(angle >= this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`);        
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }
    
    moveChair(x,y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
    //Newly Added function
	#getChairAmount(taxCharge) {
		return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
	}

    //Newly Added function
	generateBill() {
		console.log("**** BILLING INFORMATION ****");
		console.log(`Chair Price = ${this.#getChairAmount(20)}`);
		console.log(`Seller Address = ${this.#sellerAddress}`);
	}
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

newOfficeChair.adjustableHeight(31);
newOfficeChair.adjustAngle(40);
newOfficeChair.moveChair(10,20);