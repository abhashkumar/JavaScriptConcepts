//__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object with new

class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = backSupport;
        this.headSupport = headSupport;
        this.padding = padding;
        this.armRests = armRests;
        this.seatSize = seatSize;
        this.isHeightAdjustable = isHeightAdjustable;
        this.isMovable = isMovable;
    }
    
    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};    
}

const newChair = new Chair("Blue","25 inch","20 deg",true,false,"3 inch",true,"16 inch",false,false);

//console.dir("Chair Prototype", Chair);
console.log("Chair Object", newChair);
//console.log(Chair.prototype)
//console.log(newChair.__proto__)