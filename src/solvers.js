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

  // if (n===6) {debugger;}
   var solutionCount = 0;
   var board = [];

   var solutions = [];

   for (var i = 0; i < n; i++){
     board.push(i);
   }

   console.log("board = " + board);
   var recurse = function(nCount, solutionSoFar) {
   //check to see there are any duplicates
    //if so, that means you need to go back
     console.log("nCount = " + nCount);
     for(var i = 0; i < solutionSoFar.length; i++){
      console.log("solutionsofar = " + solutionSoFar);
       if(solutionSoFar.indexOf(solutionSoFar[i]) !== i){
        console.log(solutionSoFar.indexOf(solutionSoFar[i]));
        console.log("i = " + i);
        console.log("this check is being a nazi");
        return;
       }
     }

     if( nCount === 0 ){
       console.log("solution count++");
       solutionCount++;
       return;
     }

     for( var i = 0; i < board.length; i++ ){
       var currentSolution = board[i];
       console.log(currentSolution);
       recurse( nCount-1, solutionSoFar.concat(currentSolution) );
     }
   };
   recurse( n, [] );

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
