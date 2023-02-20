export const selectionSort = arr => {

    for (let i = 0, length = arr.length, k = length - 1; i < k; i++) {

        let indexMin = i;

        for (let j = i + 1; j < length; j++) {

            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }

        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return arr;
};
