// MFCC is an array of 13 numbers
export type MFCC = number[];

// X (Input) is an array of xSize MFCCs
export type X = MFCC[];

// Y (output) is either 0 or 1 (binary classification)
export type Y = 0 | 1;

// Row is X and Y
export type Row = [X, Y];

// Data is a bunch of examples
export interface IData {
    xTrain: X[];
    xTest: X[];
    yTrain: Y[];
    yTest: Y[];
}
