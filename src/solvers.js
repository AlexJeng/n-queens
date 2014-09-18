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

window.findNRooksSolution = function(n) {

  var solution = undefined; //fixme

  var board = new Board({n:n});
  var helper = new Board({n:n});

  var counter = 0;

  var recurse = function(row, col){
    //console.log("is recursing");
    board.rows()[row][col] = 1;
    counter++;
    if(counter === n){
    //  console.log("should be returning. N = " + n);
      solution = board.rows();
      return solution;
    }

    helper.negateCol(col);
    helper.negateRow(row);

    if(helper.findNextSpot() !== false){
      return recurse(helper.findNextSpot()[0], helper.findNextSpot()[1]);
    }
  }

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return recurse(0, 0);
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

   var solutionCount = 0;
   var board = new Board({n:n});

  for(var i = 0; i < board.rows().length; i++){

   var recurse = function(){  // maybe not?
   var counter = 0;
      for(var j = 0; j < n; j++){
      //check for conflict
      //no conflict?
      //  place piece, counter ++
      //if no conflicts
      // increase solution count
      //recurse
    }
   }

   recurse();
   return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
