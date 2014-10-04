Meteor.startup(function() {
    if (Universities.find().count() == 0) {

        var universityId = Universities.insert({
            name: "Arab Academy for Science & Technology (AAST)",
            createdAt: new Date().getTime(),
        });

        var facultyId = Faculties.insert({
            name: "Faculty of Engineering",
            createdAt: new Date().getTime(),
            universityId: universityId
        });

        var departmentId = Departments.insert({
            name: "Computer Engineering",
            createdAt: new Date().getTime(),
            facultyId: facultyId,
            universityId: universityId
        });


        var computerEngineeringCourses = [{
            name: "Mathematics 4",
            code: "BA 224",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }, {
            name: "Electronics 1",
            code: "EC 238",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }, {
            name: "Electrical Circuits 2",
            code: "EE 232",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }, {
            name: "Measurements & Ins...",
            code: "EC 218",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }, {
            name: "Digital Logic Design",
            code: "CC 216",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }, {
            name: "Data Structure",
            code: "CC 215",
            createdAt: new Date().getTime(),
            departmentIds: [departmentId]
        }]



        _.each(computerEngineeringCourses, function(course) {
            Courses.insert(course);
        });

    }
    
});

/*
db.camNotes.insert({
    imgURL: "note1.png",
    description: "data structure sheet 3 part 1",
    createdAt: new Date().getTime(),
    courseId: "DabcEmcbzPRxJDHT4"
})

db.camNotes.insert({
    imgURL: "note1.png",
    description: "data structure sheet 3 part 1",
    createdAt: new Date().getTime(),
    courseId: "DabcEmcbzPRxJDHT4"
})

db.camNotes.insert({
    imgURL: "note1.png",
    description: "data structure sheet 3 part 1",
    createdAt: new Date().getTime(),
    courseId: "DabcEmcbzPRxJDHT4"
})

db.camNotes.insert({
    imgURL: "note1.png",
    description: "data structure sheet 3 part 1",
    createdAt: new Date().getTime(),
    courseId: "DabcEmcbzPRxJDHT4"
})

db.camNotes.insert({
    imgURL: "note1.png",
    description: "data structure sheet 3 part 1",
    createdAt: new Date().getTime(),
    courseId: "DabcEmcbzPRxJDHT4"
})
*/