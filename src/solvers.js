/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.getSolutions = function(n, isQueen, callback) {

    var solutionCount = 0;
    var board = [];

    for(var i = 0; i < n; i++){
      board.push(i);
    }

    var recurse = function(board, nCount, solutionSoFar){
      for(var i = 0; i < solutionSoFar.length; i++){
        if(solutionSoFar.indexOf(solutionSoFar[i]) !== i){
          return;
        }
        if (isQueen) {
          var checkVariable = Math.abs(solutionSoFar[solutionSoFar.length-1] - solutionSoFar[i]);
          if(checkVariable !== 0){
            var checkIndex = solutionSoFar.length-1-i;
            if (checkVariable === checkIndex) {
              return;
            }
          }
        }
      }

      if(nCount === 0){
        solutionCount++;
        return;
      }

      for(var i = 0; i < board.length; i++){
        var currentSolution = board[i];
        recurse(board, nCount-1, solutionSoFar.concat(currentSolution));
      }
    }

    recurse(board, n, []);
    return solutionCount;
};

window.findNRooksSolution = function(n) {

  return getSolutions(n, false, function(){
    //get first answer and make a 2d array out of it.
  })
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

    return getSolutions(n, false);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
// };


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

   return getSolutions(n, true);
};
