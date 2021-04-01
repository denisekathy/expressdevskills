const skills = [
  { skill: "Bootstrap" },
  { skill: "Javascript" },
  { skill: "HTML/CSS" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteOne(idx) {
  skills.splice(idx, 1);
}
