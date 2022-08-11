// code your solution here

function superbowlWin(record) {
    const recordResult = record.find((recordObj) => recordObj.result == "W");
    if (recordResult === undefined) {
        //Record results returns undefined if the record has no win objects'
    } else {
        return recordResult.year;
    }
}