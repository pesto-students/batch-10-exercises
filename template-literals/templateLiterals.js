
function templateLiterals(...args) {
  const teamName = 'football';
  const people = [{
    name: 'Rooney',
    role: 'CF',
  },
  {
    name: 'Ronaldo',
    role: 'LW',
  },
  {
    name: 'Messi',
    role: 'RW',
  },
  {
    name: 'Pogba',
    role: 'CM',
  }];

  const NameOfPlayer = people.map( (person)=> person.name);
  return `There are ${people.length} people on the ${teamName} team. Their names are ${NameOfPlayer.join(', ')}.`;  
}

export {
  templateLiterals,
};
