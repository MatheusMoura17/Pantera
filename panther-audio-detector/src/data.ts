import * as tf from '@tensorflow/tfjs';
import { IData } from '../services/types';
import { dataBasePath } from '../services/constants';
/**
 * Downloads Data
 *
 * @param data
 * @param targets
 * @param testSplit
 */
export const getData = async () => {
    const response = await fetch(`${dataBasePath}/data.json`);
    const data: IData = await response.json();
    return data;
};

/**
 * Converts a data object to tensors object
 * @param data
 */
export const dataToTensors = (data: IData) => ({
    xTest: tf.tensor3d(data.xTest),
    xTrain: tf.tensor3d(data.xTrain),
    yTest: tf.tensor1d(data.yTest),
    yTrain: tf.tensor1d(data.yTrain),
});
