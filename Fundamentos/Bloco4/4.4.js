let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }

 for (chaves in info,info2) {
     if (info[chaves] != info2[chaves])  {
     console.log (info[chaves] + " e " + info2[chaves]);
    } else {
     console.log ("Ambos recorrentes");
    }
 };