const person = (name: string, date: string):string => {
  const dateArray = date.split(" ");
  return `Olá me chamo ${name}, nasci no dia ${dateArray[0]} do mês de ${dateArray[1]} do ano de ${dateArray[2]} `;
}

console.log(person("Maria Luiza", "4 março 2014"));
