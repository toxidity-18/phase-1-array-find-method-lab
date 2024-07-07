
function superbowlWin(record) {
    const winningYear = record.find(year => year.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  