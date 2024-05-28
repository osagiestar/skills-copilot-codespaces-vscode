function skillsMembers() {
    var member = {
        name: 'Brendan Eich',
        age: 56,
        skills: ['JavaScript', 'Java', 'C++', 'HTML', 'CSS', 'Python', 'Perl']
    };
    var member2 = {
        name: 'John Resig',
        age: 33,
        skills: ['JavaScript', 'Ruby', 'Python', 'Perl']
    };
    var member3 = {
        name: 'Douglas Crockford',
        age: 62,
        skills: ['JavaScript', 'Java', 'C++', 'HTML', 'CSS']
    };
    var members = [member, member2, member3];
    var skills = [];
    for (var i = 0; i < members.length; i++) {
        skills = skills.concat(members[i].skills);
    }
    skills = skills.sort();
    console.log(skills);
}