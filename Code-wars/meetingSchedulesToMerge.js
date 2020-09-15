function mergeRanges(meetings) {

  // Merge meetings ranges
  const sortMeetings = meetings.sort(function(a,b){return(a.startTime - b.startTime)});
  const mergedMeetings  = []
  mergedMeetings.push(sortMeetings[0]);
  for(let i=1; i<sortMeetings.length;i++){
    if(sortMeetings[i].startTime > mergedMeetings[mergedMeetings.length-1].endTime){
       mergedMeetings.push(sortMeetings[i]);
    } else {
      mergedMeetings[mergedMeetings.length-1].endTime = Math.max(sortMeetings[i].endTime, mergedMeetings[mergedMeetings.length-1].endTime)
    }
    
  };

  return mergedMeetings;
}


console.log(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]));



