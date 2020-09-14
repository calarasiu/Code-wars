arrayToSort [ 2, 8, 3, 1, 9, 5 ]
midIndex :  3
left :  [ 2, 8, 3 ]
right :  [ 1, 9, 5 ]
arrayToSort [ 2, 8, 3 ]
midIndex :  1
left :  [ 2 ]
right :  [ 8, 3 ]
oneElementArray [ 2 ]
arrayToSort [ 8, 3 ]
midIndex :  1
left :  [ 8 ]
right :  [ 3 ]
oneElementArray [ 8 ]
oneElementArray [ 3 ]
currentLeftIndex 0
currentRightIndex 0
insidewhile
left [ 8 ]
right [ 3 ]
inside else
sortedArray [ 3 ]
insidewhile
left [ 8 ]
right [ 3 ]
inside if
sortedArray [ 3, 8 ]
currentLeftIndex 0
currentRightIndex 0
insidewhile
left [ 2 ]
right [ 8, 3 ]
inside if
sortedArray [ 2 ]
insidewhile
left [ 2 ]
right [ 8, 3 ]
inside else
sortedArray [ 2, 3 ]
insidewhile
left [ 2 ]
right [ 8, 3 ]
inside else
sortedArray [ 2, 3, 8 ]
arrayToSort [ 1, 9, 5 ]
midIndex :  1
left :  [ 1 ]
right :  [ 9, 5 ]
oneElementArray [ 1 ]
arrayToSort [ 9, 5 ]
midIndex :  1
left :  [ 9 ]
right :  [ 5 ]
oneElementArray [ 9 ]
oneElementArray [ 5 ]
currentLeftIndex 0
currentRightIndex 0
insidewhile
left [ 9 ]
right [ 5 ]
inside else
sortedArray [ 5 ]
insidewhile
left [ 9 ]
right [ 5 ]
inside if
sortedArray [ 5, 9 ]
currentLeftIndex 0
currentRightIndex 0
insidewhile
left [ 1 ]
right [ 9, 5 ]
inside if
sortedArray [ 1 ]
insidewhile
left [ 1 ]
right [ 9, 5 ]
inside else
sortedArray [ 1, 5 ]
insidewhile
left [ 1 ]
right [ 9, 5 ]
inside else
sortedArray [ 1, 5, 9 ]
currentLeftIndex 0
currentRightIndex 0
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
// to go on from here
inside else
sortedArray [ 1 ]
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
inside if
sortedArray [ 1, 2 ]
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
inside if
sortedArray [ 1, 2, 3 ]
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
inside else
sortedArray [ 1, 2, 3, 5 ]
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
inside if
sortedArray [ 1, 2, 3, 5, 8 ]
insidewhile
left [ 2, 8, 3 ]
right [ 1, 9, 5 ]
inside else
sortedArray [ 1, 2, 3, 5, 8, 9 ]
final result [ 1, 2, 3, 5, 8, 9 ]