
// function superbowlWin(record) {
//     const winningYear = record.find(year => year.result === "W");
//     return winningYear ? winningYear.year : undefined;
//   }
  

  // using find to isolate specific results 
  // array of js objects ...
  const record = [
    {year:'2015',result:'W'},
    {year:'2013',result:'L'},
    {year:'2014',result:'N/A'}
    // . . .
  ]
  function superbowlWin(record){
    const win= record.find(year => year.result === 'W');
    return win ? win.year : undefined;
  }
