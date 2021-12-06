let diasDaSemana = {
  : 'domingo',
  : 'segunda',
  : 'terça',
  : 'quarta',
  : 'quinta',
  : 'sexta',
  : 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo