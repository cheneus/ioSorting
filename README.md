# ioSorting
Sorting txt.file using Javascript

## Getting Started

```
git clone https://github.com/cheneus/ioSorting/
```

### Prerequisites

Move into the folder that you have cloned and run : 

```
npm install
```

## Running the tests
the test is current setup to test the node file system function for read & write

Run the testing using the command below
```
npm test
```

### Break down into the code

Sort.js is where all the sorting is being executed:
Sorting is done using three criteria, gender, DoB and lastName. 

Clean.js is where are the cleaning/changes to the data within the txt file to a more uniform structure. This would in return ease sorting.
The process of cleaning goes as follows. 
First, the file is read and then it is being parse into 'string'. 
Second, the file is being change using regex & string.replace method
Third, it is then put into an array.


## Built With

* NodeJS
