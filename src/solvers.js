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
     for(var i = 0; i < solutionSoFar.length; i++){
       if(solutionSoFar.indexOf(solutionSoFar[i]) !== i){
        return;
       }
     }

     if( nCount === 0 ){
       solutionCount++;
       return;
     }

     for( var i = 0; i < board.length; i++ ){
       var currentSolution = board[i];
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
   var solutionCount = 0;
   var board = [];
   console.log("N = " + n);
   var solutions = [];

   for (var i = 0; i < n; i++){
     board.push(i);
   }

   var recurse = function(nCount, solutionSoFar) {
     for(var i = 0; i < solutionSoFar.length; i++){
       if(solutionSoFar.indexOf(solutionSoFar[i]) !== i){
        return;
       }


       var checkVariable = Math.abs(solutionSoFar[solutionSoFar.length-1] - solutionSoFar[i]);
       if( checkVariable !== 0 ){
       // debugger;
         var checkIndex = solutionSoFar.length-1-i;
         if (checkVariable === checkIndex) {
          return;
        }
      }
     }

     if( nCount === 0 ){
       console.log(solutionSoFar);
       solutionCount++;
       return;
     }

     for( var i = 0; i < board.length; i++ ){
       var currentSolution = board[i];
       recurse( nCount-1, solutionSoFar.concat(currentSolution) );
     }
   };
   recurse( n, [] );

   return solutionCount;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
