let user={
    name:"john",
    surname:"smith",

    set fullName(value){
        [this.name,this.surname]=value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin={
    __proto__:user,
    isAdmin:true
};

alert(admin.fullName); //John Smith
admin.fullName="Alice Cooper";
console.log(admin.fullName)