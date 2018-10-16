Papa.parse(oscar, {
    complete: function(results) {
        console.log(results);
    }
});



// function getAsTest(fileToRead){
//     //create new instance for the file reader
//     let reader = new FileReader();
//     // convert the csv file to text using the file reader API
//     reader.readAsText(fileToRead);
// }




// function handleFiles(files) {
//      // Check for the various File API support.
//      if (window.FileReader) {
//         // FileReader are supported.
//         getAsTest(oscar.csv);
//     } else {
//         alert('FileReader are not supported in this browser.');
//     }
//   }