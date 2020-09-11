const hiCall = [
  { startTime: 4,  endTime: 8 },
  { startTime: 0,  endTime: 1 },
  { startTime: 10, endTime: 12 },
  { startTime: 3,  endTime: 5 },
  { startTime: 9,  endTime: 10 }
];
hiCall.sort(function(a,b){return (a.startTime - b.startTime)})
freeTeams = [];
for(i=0;i<hiCall.length-1;i++){
  let currentMeeting = hiCall[i];
  let nextMeeting = hiCall[i+1];    
  if(nextMeeting.endTime =< currentMeeting.startTime && nextMeeting.endTime > currentMeeting.endTime){
    freeTeams.push({startTime:hiCall[i].startTime, endTime:hiCall[i+1].endTime})
  }else if(hiCall[i].endTime >=hiCall[i+1].startTime && hiCall[i+1].endTime < hiCall[i].endTime){
    freeTeams.push({startTime:hiCall[i].startTime, endTime:hiCall[i].endTime})
  }else{
    freeTeams.push({startTime:hiCall[i].startTime, endTime:hiCall[i].endTime})
  }
}

console.log(freeTeams);



