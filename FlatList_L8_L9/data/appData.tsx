type dataType = {
    id: string; // refer to the unique identifier
    title: string; // text we'll show in the list
  }

  // using all caps cause data will never change during use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
    
  ];

  // when exporting more than one item, do not use
  //the word default, and put all items in {}
  
  export {dataType, DATA};