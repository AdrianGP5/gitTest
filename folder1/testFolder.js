const Student = {
    name: "Student",
    age: 15,
    id: 39632478,
    lectures: ['Math', 'Science', 'Programming'],
    getName: function(){
        return this.name
    },
    getAge: function(){
        return this.age
    },
    setName: function(_name){
        this.name = _name
    }

}
console.log(Student)
console.log(`name: ${Student.getName()}`)
console.log("age: " + Student.getAge())
Student.setName(".::NewName::.")
console.log(`New name: ${Student.getName()}`)

